import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
   <section className="relative overflow-hidden bg-[#111D23]">

  <div className="absolute inset-0 bg-gradient-to-r from-[#020b10] via-[#041b24] to-[#020b10] " />


      <div className="relative max-w-7xl mx-auto px-6 py-28
                      grid grid-cols-1 sm:grid-cols-2
                      gap-16 items-center">

        <HeroContent />
        <HeroImage />

      </div>
    </section>
  );
};

export default Hero;