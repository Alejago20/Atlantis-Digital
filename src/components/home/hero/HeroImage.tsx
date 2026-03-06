import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const HeroImage = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <Tilt
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          scale={1.02}
          transitionSpeed={2000}
          glareEnable
          glareMaxOpacity={0.15}
        >
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Dashboard de crecimiento empresarial"
              className="w-full h-full object-cover"
            />
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default HeroImage;