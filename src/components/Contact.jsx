import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <span className="flex flex-row my-5">
          <p className="pr-3">Linkedin: </p>
          <a href="https://www.linkedin.com/in/chikeziem-nwadinobi-43b871151/" target="_blank" className="text-blue-500 hover:text-blue-700">
            https://www.linkedin.com/in/chikeziem-nwadinobi-43b871151/
          </a>
        </span>
        <span className="flex flex-row my-5">
          <p className="pr-3">Email: </p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            khaled305.on@gmail.com
          </a>
        </span>
        <span className="flex flex-row my-5">
          <p className="pr-3">GitHub: </p>
          <a href="https://github.com/khaled-305?tab=repositories" target="_blank" className="text-blue-500 hover:text-blue-700">
            https://github.com/khaled-305?tab=repositories
          </a>
        </span>
        <span className="flex flex-row my-5">
          <p className="pr-3">Phone: </p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            +2348164993630
          </a>
        </span>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
