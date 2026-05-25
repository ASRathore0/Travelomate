export type SeoEntry = {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
};

export const SITE_NAME = 'Travelomate';
export const SITE_URL = 'https://travelomate.co.in';

export const DEFAULT_TITLE = 'Travelomate | AI-Powered Travel Management';
export const DEFAULT_DESCRIPTION =
  'Travelomate is the all-in-one travel management platform for sports leagues, corporate teams, and high-performance travel programs.';

export const SEO_ENTRIES: SeoEntry[] = [
  {
    path: '/',
    title: 'Travelomate | AI-Powered Travel Management for Sports and Enterprise',
    description:
      'Travelomate is the all-in-one travel platform for sports leagues, corporate teams, and high-performance travel programs.'
  },
  {
    path: '/sports-leagues',
    title: 'Sports Team Travel Management | Travelomate',
    description:
      'Global sports logistics, squad travel, and 24/7 team support for professional leagues.'
  },
  {
    path: '/corporate-teams',
    title: 'Corporate Travel Management for Enterprise | Travelomate',
    description:
      'Policy-compliant travel, analytics, and duty of care for modern enterprise teams.'
  },
  {
    path: '/self-booking',
    title: 'Self-Booking Tool for Corporate Travel | Travelomate',
    description:
      'Book in seconds with policy enforcement, AI-guided options, and VIP inventory.'
  },
  {
    path: '/about',
    title: 'About Travelomate | Travel Intelligence Since 2010',
    description:
      'Human-first travel management with 16 years of precision and global operations.'
  },
  {
    path: '/blog',
    title: 'Travelomate Blog | Travel Intelligence and Insights',
    description:
      'Insights on sports logistics, travel tech, and sustainability from the Travelomate team.'
  },
  {
    path: '/contact',
    title: 'Contact Travelomate | Book a Demo or Get Support',
    description:
      'Talk with our travel intelligence team and schedule a demo.'
  },
  {
    path: '/journey',
    title: 'Our Journey | 15 Years of Travel Infrastructure',
    description:
      'The story of Travelomate and our evolution into a travel intelligence leader.'
  },
  {
    path: '/careers',
    title: 'Careers at Travelomate | Build the Future of Travel',
    description:
      'Explore open roles in operations, sales, finance, and client services.'
  },
  {
    path: '/auth',
    title: 'Travelomate Login',
    description: 'Log in to manage your organization travel and policy workspace.'
  },
  {
    path: '/solutions/finance-teams',
    title: 'Travel Spend Control for Finance Teams | Travelomate',
    description:
      'Real-time spend visibility, automated reconciliation, and policy controls for finance leaders.'
  },
  {
    path: '/solutions/travel-managers',
    title: 'Corporate Travel Command Center | Travelomate',
    description:
      'Program analytics, policy automation, and global inventory in one dashboard.'
  },
  {
    path: '/solutions/executive-assistants',
    title: 'Executive Travel Booking for Assistants | Travelomate',
    description:
      'Delegate booking, VIP concierge, and itinerary sync built for executive teams.'
  },
  {
    path: '/solutions/human-resources',
    title: 'HR Travel and Duty of Care | Travelomate',
    description:
      'Onboarding travel, duty of care, and team offsites managed with ease.'
  },
  {
    path: '/solutions/operations-teams',
    title: 'Operations Travel Logistics | Travelomate',
    description:
      'Crew rotations, job-code billing, and contractor travel automation for ops teams.'
  },
  {
    path: '/solutions/healthcare',
    title: 'Healthcare Staffing Travel Management | Travelomate',
    description:
      'Coordinate travel for nurses, locum tenens, and clinical teams.'
  },
  {
    path: '/solutions/construction',
    title: 'Construction Crew Travel and Lodging | Travelomate',
    description:
      'Extended stays, project billing, and crew logistics built for construction teams.'
  },
  {
    path: '/solutions/software-tech',
    title: 'Tech Company Travel Management | Travelomate',
    description:
      'Modern UX, Slack integrations, and remote-team travel workflows for tech firms.'
  },
  {
    path: '/solutions/manufacturing',
    title: 'Manufacturing Travel Logistics | Travelomate',
    description:
      'Rapid dispatch, global plant visits, and risk management for manufacturing teams.'
  },
  {
    path: '/solutions/transportation-logistics',
    title: 'Fleet and Crew Travel Management | Travelomate',
    description:
      'Crew rotations, disruption handling, and specialized fares for logistics networks.'
  }
];

const BREADCRUMB_LABELS: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/blog': 'Blog',
  '/careers': 'Careers',
  '/contact': 'Contact',
  '/auth': 'Login',
  '/journey': 'Our Journey',
  '/sports-leagues': 'Sports Leagues',
  '/corporate-teams': 'Corporate Teams',
  '/self-booking': 'Self-Booking Tool',
  '/solutions/finance-teams': 'Finance Teams',
  '/solutions/travel-managers': 'Travel Managers',
  '/solutions/executive-assistants': 'Executive Assistants',
  '/solutions/human-resources': 'Human Resources',
  '/solutions/operations-teams': 'Operations Teams',
  '/solutions/healthcare': 'Healthcare',
  '/solutions/construction': 'Construction',
  '/solutions/software-tech': 'Software and Tech',
  '/solutions/manufacturing': 'Manufacturing',
  '/solutions/transportation-logistics': 'Transportation and Logistics'
};

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function getBreadcrumbs(pathname: string, baseUrl: string): BreadcrumbItem[] {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const crumbs: BreadcrumbItem[] = [
    {
      name: BREADCRUMB_LABELS['/'],
      url: baseUrl
    }
  ];

  if (normalized !== '/' && BREADCRUMB_LABELS[normalized]) {
    crumbs.push({
      name: BREADCRUMB_LABELS[normalized],
      url: `${baseUrl}${normalized}`
    });
  }

  return crumbs;
}

export function getSeoForPath(pathname: string): SeoEntry {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  return (
    SEO_ENTRIES.find((entry) => entry.path === normalized) ?? {
      path: normalized,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION
    }
  );
}
