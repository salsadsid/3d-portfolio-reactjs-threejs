import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a proficient MERN (MongoDB, Express.js, React, Node.js) stack
        developer with expertise in building full-stack web applications. My
        skill set includes creating interactive and responsive user interfaces
        using React, designing efficient server-side APIs with Express.js and
        Node.js, and managing data with MongoDB. I am well-versed in modern web
        development tools, version control systems like Git, and deployment
        strategies. Your experience extends to collaborating in agile teams,
        ensuring code quality, and implementing best practices to deliver robust
        and scalable web solutions. My adaptability and passion for staying
        updated with the latest technologies make me a valuable asset in the
        field.
      </motion.p>
    </>
  );
};

export default About;
