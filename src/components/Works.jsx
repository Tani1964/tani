import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.4, 0.75)}
      className="flex-1 min-w-[300px]"
    >
      <Tilt
        options={{ max: 20, scale: 1.05, speed: 400 }}
        className="bg-gradient-to-b from-[#1d1836] to-[#232631] p-[1px] rounded-2xl shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300"
      >
        <div className="bg-tertiary rounded-2xl p-6 flex flex-col h-full">
          {/* Title */}
          <h3 className="text-white font-bold text-[22px] mb-2">{name}</h3>

          {/* Description */}
          <p className="text-secondary text-[15px] leading-relaxed flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`px-3 py-1 rounded-full text-[13px] font-medium bg-[#2a273f] text-white ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Section Intro */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Community Impact</p>
        <h2 className={styles.sectionHeadText}>
          Leadership & Volunteering Projects
        </h2>
      </motion.div>

      {/* Description */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[16px] max-w-3xl leading-[28px]"
        >
          These initiatives highlight my leadership journey and dedication to
          empowering others. From mentoring students to leading youth-focused
          organizations and advocating for social causes, each project reflects
          my commitment to building stronger communities, fostering innovation,
          and creating opportunities for growth and impact.
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
