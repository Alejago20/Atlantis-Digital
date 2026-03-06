import ServicieCard from "./ServicieCard";

const ServiceSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#101E2A] ">
      <div className="absolute inset-0 bg-gradient-to-r from-[#020b10] via-[#041b24] to-[#020b10] " />

      <div className="relative max-w-7xl flex flex-col mx-auto px-6 ">
        <div>
          <span className="inline-block  px-4 py-1 text-sm font-semibold tracking-widest text-sky-400 ">
            Nuestra Experiencia
          </span>
          <div className="flex justify-between items-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight w-2/3 ml-4">
              Servicios Digitales Premium
            </h2>
            <h5 className="text-gray-400 w-1/3 mb-6">
              Estrategias personalizadas y excelencia técnica para ayudar a su
              empresa a superar a la competencia.
            </h5>
          </div>
        </div>
        {/* {"section de ca"} */}
        <ServicieCard />
      </div>
    </section>
  );
};

export default ServiceSection;
