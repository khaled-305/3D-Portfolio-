import React from "react";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>My Skills</h2>
        <p className={`${styles.sectionSubText} `}>I'm always up for learning new skills and providing value in any team and organization I find myself.</p>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          HTML5, CSS3, UI/UX, JavaScript, TypeScript, React.js, Next.js, Vue.js, Redux, Recoil, React Native, Wordpress, Node.js, Express.js, SQL, MySQL, Python, and Django, RESTful API, Solidity, PostgreSQL, MongoDB, Firebase, GIS, php, GraphQL, web3.js, Redis, Jest, Agile methodologies, Docker,
          AWS Cloud, Git.
        </motion.p>
      </div>

      <div className='flex flex-row flex-wrap mt-10 justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
