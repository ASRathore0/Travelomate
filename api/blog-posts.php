<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET,POST,DELETE,OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$storageDir = __DIR__ . '/../../blog-posts-data';

if (!is_writable(dirname($storageDir))) {
    $storageDir = __DIR__ . '/../blog-posts-data';
}
if (!is_writable(dirname($storageDir))) {
    $storageDir = __DIR__ . '/blog-posts-data';
}

$storageFile = $storageDir . '/blog-posts.json';

function ensureStorage(string $storageFile): void {
    $directory = dirname($storageFile);
    if (!is_dir($directory)) {
        mkdir($directory, 0777, true);
    }

    if (!file_exists($storageFile)) {
        file_put_contents($storageFile, json_encode(['posts' => []], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
    }
}

function readCustomPosts(string $storageFile): array {
    ensureStorage($storageFile);

    $rawValue = file_get_contents($storageFile);
    if ($rawValue === false || trim($rawValue) === '') {
        return [];
    }

    $parsedValue = json_decode($rawValue, true);
    if (!is_array($parsedValue) || !isset($parsedValue['posts']) || !is_array($parsedValue['posts'])) {
        return [];
    }

    return $parsedValue['posts'];
}

function writeCustomPosts(string $storageFile, array $posts): void {
    ensureStorage($storageFile);
    file_put_contents($storageFile, json_encode(['posts' => $posts], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
}

function respond(array $payload, int $status = 200): void {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];
$slug = isset($_GET['slug']) ? trim((string) $_GET['slug']) : '';
$scope = isset($_GET['scope']) ? trim((string) $_GET['scope']) : '';

if ($method === 'GET' && $scope === 'custom') {
    respond(['posts' => readCustomPosts($storageFile)]);
}

if ($method === 'GET' && $slug !== '') {
    $post = null;
    foreach (readCustomPosts($storageFile) as $item) {
        if (isset($item['slug']) && $item['slug'] === $slug) {
            $post = $item;
            break;
        }
    }

    if ($post === null) {
        respond(['post' => null], 404);
    }

    respond(['post' => $post]);
}

if ($method === 'GET') {
    respond(['posts' => readCustomPosts($storageFile)]);
}

if ($method === 'POST') {
    $rawBody = file_get_contents('php://input');
    $post = json_decode($rawBody ?: '', true);

    if (!is_array($post) || empty($post['slug']) || empty($post['title']) || empty($post['excerpt']) || empty($post['content'])) {
        respond(['message' => 'Invalid blog post payload.'], 400);
    }

    $customPosts = readCustomPosts($storageFile);
    $nextPosts = [];

    foreach ($customPosts as $item) {
        if (!isset($item['slug']) || $item['slug'] !== $post['slug']) {
            $nextPosts[] = $item;
        }
    }

    array_unshift($nextPosts, $post);
    writeCustomPosts($storageFile, $nextPosts);

    respond(['posts' => $nextPosts]);
}

if ($method === 'DELETE' && $slug !== '') {
    $nextPosts = [];
    foreach (readCustomPosts($storageFile) as $item) {
        if (!isset($item['slug']) || $item['slug'] !== $slug) {
            $nextPosts[] = $item;
        }
    }

    writeCustomPosts($storageFile, $nextPosts);
    respond(['posts' => $nextPosts]);
}

if ($method === 'DELETE') {
    writeCustomPosts($storageFile, []);
    respond(['posts' => []]);
}

respond(['message' => 'Method not allowed.'], 405);
