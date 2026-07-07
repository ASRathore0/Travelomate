import { ChangeEvent, FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { Download, Image as ImageIcon, Printer, Sparkles, Upload } from 'lucide-react';

const bullsLogo = new URL('../assets/images/artifacts/Bulls.png', import.meta.url).href;

type PlacardState = {
  personName: string;
  secondPersonName: string;
  logoUrl: string;
  textSize: number;
  logoSize: number;
  isBold: boolean;
  logoX: number;
  logoY: number;
  nameX: number;
  nameY: number;
};

const createInitialState = (): PlacardState => ({
  personName: 'Mr. Anurag Chandna',
  secondPersonName: '',
  logoUrl: bullsLogo,
  textSize: 40,
  logoSize: 120,
  isBold: true,
  logoX: 0,
  logoY: -8,
  nameX: 0,
  nameY: 0
});

export default function PlacardPrint() {
  const [placard, setPlacard] = useState<PlacardState>(() => createInitialState());

  const applyMovement = (
    target: 'logo' | 'name',
    deltaX: number,
    deltaY: number
  ) => {
    setPlacard((current) => {
      if (target === 'logo') {
        return {
          ...current,
          logoX: current.logoX + deltaX,
          logoY: current.logoY + deltaY
        };
      }

      return {
        ...current,
        nameX: current.nameX + deltaX,
        nameY: current.nameY + deltaY
      };
    });
  };

  const handleKeyboardMove = (
    event: React.KeyboardEvent<HTMLDivElement>,
    target: 'logo' | 'name'
  ) => {
    const step = event.shiftKey ? 20 : 8;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        applyMovement(target, -step, 0);
        break;
      case 'ArrowRight':
        event.preventDefault();
        applyMovement(target, step, 0);
        break;
      case 'ArrowUp':
        event.preventDefault();
        applyMovement(target, 0, -step);
        break;
      case 'ArrowDown':
        event.preventDefault();
        applyMovement(target, 0, step);
        break;
    }
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      event.target.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const uploadedImage = typeof reader.result === 'string' ? reader.result : '';

      if (uploadedImage) {
        setPlacard((current) => ({ ...current, logoUrl: uploadedImage }));
      }
    };

    reader.readAsDataURL(file);
    event.target.value = '';
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.print();
  };

  return (
    <div className="bg-background text-foreground min-h-screen pb-16 print:bg-white print:text-black">
      <style>{`
        @media print {
          @page {
            size: 16in 9in;
            margin: 0;
          }

          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          nav, footer, .no-print {
            display: none !important;
          }

          body * {
            visibility: hidden !important;
          }

          .print-page,
          .print-page * {
            visibility: visible !important;
          }

          .print-page {
            position: relative;
            left: 0;
            top: 0;
          }

          .print-page {
            width: 100vw;
            height: 100vh;
            max-width: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .print-shell {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
          }

          .print-shell > .no-print {
            display: none !important;
          }

          .print-content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            transform: scale(1.75);
            transform-origin: center;
          }

          .print-area {
            position: fixed !important;
            left: 0 !important;
            top: 0 !important;
            box-shadow: none !important;
            border: none !important;
            width: 100vw !important;
            height: 100vh !important;
            max-width: none !important;
            max-height: none !important;
            border-radius: 0 !important;
            padding: 0 !important;
          }
        }
      `}</style>

      <section className="print-page max-w-7xl mx-auto px-6 py-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl space-y-5 no-print"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-black text-brand uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3" /> Placard Print
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight leading-[0.92]">
            Create a <span className="text-brand">print-ready placard</span> in seconds.
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl leading-relaxed">
            Edit the text and logo preview below, then print it as a placard for events, team signage, or name boards.
          </p>
        </motion.div>

        <div className="print-layout grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            onSubmit={handleSubmit}
            className="space-y-6 p-6 sm:p-8 rounded-[32px] border border-border-subtle bg-foreground/[0.02] backdrop-blur-sm no-print"
          >
            <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-brand">
              <Download className="w-4 h-4" /> Placard Settings
            </div>

            <label className="space-y-2 block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Person Name 1</span>
              <input
                type="text"
                value={placard.personName}
                onChange={(event) => setPlacard((current) => ({ ...current, personName: event.target.value }))}
                className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 outline-none focus:border-brand/40 transition-colors"
                placeholder="Ms. Monika Sharma"
              />
            </label>

            <label className="space-y-2 block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Person Name 2</span>
              <input
                type="text"
                value={placard.secondPersonName}
                onChange={(event) => setPlacard((current) => ({ ...current, secondPersonName: event.target.value }))}
                className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 outline-none focus:border-brand/40 transition-colors"
                placeholder="Mr. Amit Singh"
              />
            </label>

            <label className="space-y-2 block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Logo Image URL</span>
              <div className="relative">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                <input
                  type="url"
                  value={placard.logoUrl}
                  onChange={(event) => setPlacard((current) => ({ ...current, logoUrl: event.target.value }))}
                  className="w-full bg-background border border-foreground/10 rounded-2xl pl-11 pr-4 py-3 outline-none focus:border-brand/40 transition-colors"
                  placeholder="https://..."
                />
              </div>
            </label>

            <label className="space-y-2 block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Upload Logo</span>
              <label className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/15 bg-foreground/5 hover:bg-foreground/10 transition-colors font-bold text-xs uppercase tracking-[0.2em] cursor-pointer w-fit">
                <Upload className="w-4 h-4" /> Choose Image
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            </label>

            <div className="grid sm:grid-cols-2 gap-4">
              <label className="space-y-2 block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Text Size</span>
                <input
                  type="range"
                  min="40"
                  max="80"
                  value={placard.textSize}
                  onChange={(event) => setPlacard((current) => ({ ...current, textSize: Number(event.target.value) }))}
                  className="w-full"
                />
                <div className="text-xs text-foreground/45 font-medium">{placard.textSize}px</div>
              </label>

              <label className="space-y-2 block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-black">Logo Size</span>
                <input
                  type="range"
                  min="80"
                  max="320"
                  value={placard.logoSize}
                  onChange={(event) => setPlacard((current) => ({ ...current, logoSize: Number(event.target.value) }))}
                  className="w-full"
                />
                <div className="text-xs text-foreground/45 font-medium">{placard.logoSize}px</div>
              </label>
            </div>

            <label className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-background px-4 py-3">
              <input
                type="checkbox"
                checked={placard.isBold}
                onChange={(event) => setPlacard((current) => ({ ...current, isBold: event.target.checked }))}
                className="h-4 w-4 rounded border-foreground/20 text-brand focus:ring-brand/30"
              />
              <span className="text-sm font-semibold text-foreground">Bold text</span>
            </label>

            <div className="rounded-2xl border border-dashed border-foreground/10 bg-background px-4 py-3 text-sm text-foreground/55">
              Drag the logo or the guest name in the preview, or select them and use the arrow keys. Hold Shift for faster movement.
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-black hover:opacity-90 transition-opacity"
            >
              <Printer className="w-4 h-4" /> Print Placard
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="space-y-5 print-shell"
          >
            <div className="print-area relative overflow-hidden rounded-[28px] border border-foreground/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] aspect-[16/9] w-full flex items-center justify-center px-8 py-12 bg-white">
              <div className="print-content relative z-10 w-full max-w-none h-full flex flex-col items-center justify-center gap-10 md:gap-12">
                <motion.div
                  drag
                  dragMomentum={false}
                  dragElastic={0.08}
                  onDragEnd={(_, info) => applyMovement('logo', info.offset.x, info.offset.y)}
                  animate={{ x: placard.logoX, y: placard.logoY }}
                  initial={false}
                  tabIndex={0}
                  role="button"
                  aria-label="Drag the logo"
                  onKeyDown={(event) => handleKeyboardMove(event, 'logo')}
                  className="cursor-grab active:cursor-grabbing outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-3xl"
                >
                  <div
                    className="shrink-0"
                    style={{ width: placard.logoSize * 1.12, height: placard.logoSize * 1.12 }}
                  >
                    {placard.logoUrl ? (
                      <img
                        src={placard.logoUrl}
                        alt="Placard logo"
                        className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] select-none"
                        draggable={false}
                      />
                    ) : null}
                  </div>
                </motion.div>

                <motion.div
                  drag
                  dragMomentum={false}
                  dragElastic={0.08}
                  onDragEnd={(_, info) => applyMovement('name', info.offset.x, info.offset.y)}
                  animate={{ x: placard.nameX, y: placard.nameY }}
                  initial={false}
                  tabIndex={0}
                  role="button"
                  aria-label="Drag the guest name"
                  onKeyDown={(event) => handleKeyboardMove(event, 'name')}
                  className="w-full px-6 cursor-grab active:cursor-grabbing outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-3xl"
                >
                  <div className="flex flex-col items-center justify-center gap-2 text-center mx-auto max-w-[92%]">
                    <h2
                      className={`inline-block origin-center transform scale-x-[1.02] font-placard ${placard.isBold ? 'font-black' : 'font-normal'} leading-[0.92] tracking-[-0.01em] text-black break-words`}
                      style={{ fontSize: placard.textSize, lineHeight: 0.92 }}
                    >
                      {placard.personName}
                    </h2>
                    {placard.secondPersonName.trim() ? (
                      <h2
                        className={`inline-block origin-center transform scale-x-[1.02] font-placard ${placard.isBold ? 'font-black' : 'font-normal'} leading-[0.92] tracking-[-0.01em] text-black opacity-95 break-words`}
                        style={{ fontSize: placard.textSize, lineHeight: 0.92 }}
                      >
                        {placard.secondPersonName}
                      </h2>
                    ) : null}
                  </div>
                </motion.div>
              </div>
            </div>
            <p className="text-sm text-foreground/50 no-print">
              The preview is optimized for a clean placard print. Drag the logo or name, or use the arrow keys after focusing one of them.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}