import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "../Components/canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Derex</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="block sm:hidden" />{" "}
            interfaces, and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 w-full bottom-36 flex justify-center items-center">
        <a href="#about" className="border-white border-4 w-[35px] h-[64px] flex justify-center items-start rounded-3xl p-2">
          {" "}
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeatType: "loop",
              repeat: Infinity
            }}
            className="w-3 h-3 rounded-full bg-white mb-1"
          ></motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
