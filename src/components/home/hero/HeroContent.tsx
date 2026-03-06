const HeroContent = () => {
  return (
    <div>
      <span className="inline-block mb-6 px-4 py-1 bg-[#102A37] text-xs tracking-widest text-sky-400 border border-sky-500/30 rounded-full">
        Socio de Crecimiento para PYMES
      </span>

      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
        Soluciones digitales para{" "}
        <span className="text-sky-400">empresas en crecimiento</span>
      </h1>

      <p className="mt-6 text-gray-400 max-w-xl">
        Empoderamos a pequeñas y medianas empresas con diseño web profesional,
        marketing digital estratégico y desarrollo web de alto rendimiento
      </p>

      <div className="mt-10 flex gap-4">
        <button className="px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold">
          Start Your Project
        </button>

        <button className="px-6 py-3 rounded-xl border border-white/10 text-white">
          View Portfolio
        </button>
      </div>
    </div>
  );
};

export default HeroContent;