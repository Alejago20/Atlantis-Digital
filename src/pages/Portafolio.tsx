import { projects } from "../data/portafolio";
import PortfolioCard from "./PortafolioCard";

const Portafolio = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#020b10] via-[#041b24] to-[#020b10] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-slate-400 text-sm mb-2">Nuestro trabajo</p>

          <h1 className="text-4xl font-semibold text-white mb-4 ">
            Portafolio
            <span className="text-sky-400 font-semibold "> Digital</span>
          </h1>

          <p className="text-slate-400 max-w-xl mx-auto text-left leading-relaxed">
            Este portafolio presenta algunos proyectos desarrollados por el
            equipo de Atlantis Digital durante su proceso de formación y
            práctica profesional, enfocados en el desarrollo web moderno, diseño
            de interfaces y experiencias digitales utilizando tecnologías
            actuales.
          </p>
        </div>

        {/* Aquí irán los proyectos** */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
