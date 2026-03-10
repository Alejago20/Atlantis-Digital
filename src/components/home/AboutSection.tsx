const AboutSection = () => {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-[#111D23]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#020b10] via-[#041b24] to-[#020b10]" />

      <div className="relative max-w-6xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="w-11/12"></div>
          {/* TEXTO ARRIBA DE TODO */}
          <div className=" mb-16">
            <span className="text-sm font-semibold tracking-widest text-sky-400">
              SOBRE LA AGENCIA
            </span>
          </div>
        </div>
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
          {/* IMAGEN */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2x">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHEDUn7wDAylHFHen0sojE6KgZarwd9gT_FM_PScM1AebXnws5Gcpp9pQ4CK3CeAdTN4T8lLG7JGxCXH6vfibGjUaMZxE1x0ocN1pXz8hpsihEIAegegqvTftRrnNf7EbvhyGQifarpSvqLFdF3uxoC3mwcFJRg72QYfuEfsiHEf9qNKrHhRJaJU7rGVoVQzD0NXt4MTUDDptyuOhYipLdL-wFL2N69EVnXjcUdnu0iBRoAHKaDISKE9TdPvOUGzyWYd89gVqZp7Q"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXTO */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white leading-tight top-0">
              Uniendo Visión y <span className="text-sky-400">Realidad</span>
            </h2>

            <p className="text-gray-400 text-left">
             Atlantis Digital es una agencia digital enfocada en ayudar a las PYMES a crecer en el mundo digital. Combinamos diseño, desarrollo web y estrategia para crear experiencias digitales que conectan marcas con sus clientes.
            </p>

            {/* ESTADISTICAS */}
            <div className="grid grid-cols-2 gap-8 pt-6">

              <div className="flex gap-4">
                <div className="w-[2px] h-12 bg-sky-400"></div>
                <div>
                  <h3 className="text-xl font-bold text-white">PYMES</h3>
                  <p className="text-xs font-semibold text-gray-400">
                    NUESTRO ENFOQUE
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2px] h-12 bg-sky-400"></div>
                <div>
                  <h3 className="text-2xl font-bold text-white">24/7</h3>
                  <p className="text-xs font-semibold text-gray-400">ACOMPAÑAMIENTO</p>
                </div>
              </div>

              <span className="px-7 text-sm py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-colors">
                Conoce a Nuestro Liderazgo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
