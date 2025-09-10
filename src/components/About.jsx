import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Leadership & Impact.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-17 max-w-3xl leading-[30px]"
      >
        I am a community leader and volunteer passionate about empowering
        students, women, and youth through mentorship, advocacy, and strategic
        initiatives. Over the years, I’ve served as a{" "}
        <span className="text-white font-semibold">
          Microsoft Learn Student Ambassador Team Lead
        </span>
        ,{" "}
        <span className="text-white font-semibold">
          Assistant Software Director at NACOS University of Lagos.
        </span>
        , and{" "}
        <span className="text-white font-semibold">
          President of the Strategic Women and Youth Institute
        </span>
        . My work centers on building inclusive communities, fostering innovation,
        and creating opportunities for people to grow, learn, and thrive. Let’s
        collaborate to create impact that goes beyond technology.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
