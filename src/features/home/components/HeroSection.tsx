import { logoImage, imagenesSitio } from "@/assets/contenido";

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] w-full bg-[#0a0a0a] flex flex-col justify-between items-center py-6 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
      {/* Cinematic Backdrop Image - Bookstore/Zine texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={imagenesSitio.stageNight}
          alt=""
          className="h-full w-full object-cover grayscale opacity-30 animate-slow-pan"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/50" />
      </div>

      {/* Top Spacer to balance the vertical flex layout */}
      <div className="h-6 sm:h-10" />

      {/* Hero Center Content Group - Perfectly grouped and vertically centered */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl my-auto py-4 px-2 sm:px-4 w-full">
        {/* Logo - Centered directly above the title */}
        <div className="relative mb-6 sm:mb-8 p-0.5 bg-cream rounded-full border-2 border-cream shadow-[0_8px_30px_rgba(0,0,0,0.5)] animate-fade-in-up">
          <div className="absolute inset-0 rounded-full bg-carmine/10 blur-lg opacity-40 scale-105 pointer-events-none" />
          <img
            src={logoImage}
            alt="Logo FIPQ"
            width={160}
            height={160}
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-full"
          />
        </div>

        {/* Title */}
        {/* Ajuste responsive: en móviles pequeños (320px) text-[8vw] evita que se rompa, luego escala a tamaños más fijos en md/lg */}
        <h1 className="font-display font-normal uppercase text-cream tracking-tighter leading-[0.9] select-none text-center text-[8vw] sm:text-[7vw] md:text-7xl lg:text-8xl xl:text-[7.5rem] w-full">
          FESTIVAL INTERNACIONAL
          <br />
          DE POESÍA DE
          <br />
          <span className="text-carmine">QUETZALTENANGO</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 max-w-2xl text-cream/70 font-body text-xs sm:text-sm md:text-base leading-relaxed text-center px-4">
          Comunidad, territorio y memoria desde Xelajuj No'j
        </p>
      </div>

      {/* Bottom scroll indicator — maintained spacing and distance */}
      <a
        href="#direcciones"
        className="relative z-10 flex flex-col items-center justify-end h-20 sm:h-24 w-12 group cursor-pointer hover:opacity-100 opacity-80 transition-opacity pb-2 sm:pb-4"
      >
        <div className="w-px h-10 sm:h-12 bg-cream/30 animate-pulse group-hover:bg-carmine group-hover:h-14 sm:group-hover:h-16 transition-all duration-500" />
      </a>
    </section>
  );
}
