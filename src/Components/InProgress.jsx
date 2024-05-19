import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { WorkInProgress } from "../constants/Constants";
import { fadeIn, textVariant } from "../Utils/motion";
import ProjectCard from "./ProjectCard";

const InProgress = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}></p> */}
        <h2 className={`${styles.sectionHeadText}`}>Works In Progress.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {WorkInProgress.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(InProgress, "inProgress");
