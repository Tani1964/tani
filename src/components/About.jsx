import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Service Card
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("up", "spring", 0.3 * index, 0.8)}
        whileHover={{ scale: 1.05 }}
        className="w-full bg-gradient-to-r from-[#915eff] via-purple-600 to-pink-500 p-[1px] rounded-2xl shadow-lg"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#1d1836] rounded-2xl py-8 px-6 min-h-[280px] flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain mb-4"
          />
          <h3 className="text-white text-[20px] md:text-[22px] font-bold tracking-wide">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About Section
const About = () => {
  return (
    <>
      {/* Section Heading */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Leadership <span className="text-[#915eff]">& Impact</span>
        </h2>
      </motion.div>

      {/* Intro Text */}
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-6 text-secondary text-[17px] max-w-4xl leading-[30px] mx-auto text-center"
      >
        I am a{" "}
        <span className="text-white font-semibold">community leader</span> and{" "}
        <span className="text-white font-semibold">volunteer</span> passionate
        about empowering students, women, and youth through{" "}
        <span className="text-white font-semibold">mentorship, advocacy</span>,
        and <span className="text-white font-semibold">strategic initiatives</span>. <br />
        Over the years, I’ve served as a{" "}
        <span className="text-white font-semibold">
          Microsoft Learn Student Ambassador Team Lead
        </span>
        ,{" "}
        <span className="text-white font-semibold">
          Assistant Software Director at NACOS (Unilag)
        </span>
        , and{" "}
        <span className="text-white font-semibold">
          President of the Strategic Women and Youth Institute (SWYI)
        </span>
        . <br />
        My work centers on{" "}
        <span className="text-white font-semibold">
          building inclusive communities
        </span>
        , fostering innovation, and creating opportunities for people to grow,
        learn, and thrive.
      </motion.p>

      {/* Services */}
      <div className="mt-16 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
