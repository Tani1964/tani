import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "linear-gradient(135deg, #1d1836, #2a2250)",
      color: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
      transition: "all 0.3s ease",
    }}
    contentArrowStyle={{ borderRight: "7px solid #2a2250" }}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg || "#915eff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 15px rgba(145,94,255,0.5)",
      fontSize: "20px",
      color: "#fff",
    }}
    icon={<span className="font-bold">•</span>} // just a dot instead of logo
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h3 className="text-white text-[22px] md:text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className="text-secondary text-[15px] md:text-[16px] font-semibold mt-1">
        {experience.company_name}
      </p>

      <ul className="mt-4 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[13px] md:text-[14px] leading-relaxed tracking-wide hover:text-[#915eff] transition-colors"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      {/* Section heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I’ve made an impact</p>
        <h2 className={styles.sectionHeadText}>
          Leadership & Volunteering Experience
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="mt-16 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "leadership");
