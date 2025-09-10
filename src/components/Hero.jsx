import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10" />

      <div
        className={`${styles.paddingX} relative z-20 h-full flex flex-col justify-center items-center text-center`}
      >
        {/* Intro text */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`${styles.heroHeadText} text-white`}
        >
          Hi, I'm <span className="text-[#915eff]">Tani</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`${styles.heroSubText} mt-4 text-white-100 max-w-2xl`}
        >
          A community leader and volunteer, <br className="sm:block hidden" />
          empowering youth, students, and women through mentorship, advocacy,
          and innovation.
        </motion.p>

        {/* Call to action button */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 px-6 py-3 bg-[#915eff] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#7b49e8] transition-colors"
        >
          Explore My Work
        </motion.a>
      </div>

      {/* Earth Canvas in the background */}
      <div className="absolute inset-0">
        <EarthCanvas />
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[25px] h-[45px] md:w-[35px] md:h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
