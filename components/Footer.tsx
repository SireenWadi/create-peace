export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 px-5 py-16 text-white md:px-10 md:py-20 border-t border-white/10">
      {/* خلفية اختيارية (صورة أو تدرج لوني فخم للفوتر) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/media/footer-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* منطقة الشعارين بالأسماء الجديدة */}
        <div className="mb-8 flex items-center justify-center gap-8">
          <img 
            src="/media/partner-logo-1.png" 
            alt="First Partner Logo" 
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" 
          />
          
          <span className="h-6 w-[1px] bg-white/20" />

          <img 
            src="/media/partner-logo-2.png" 
            alt="Second Partner Logo" 
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" 
          />
        </div>

        <p className="font-body text-xs uppercase tracking-[0.25em] text-white/60">
          Made with curiosity, creativity &amp; a little chaos.
        </p>
      </div>
    </footer>
  );
}