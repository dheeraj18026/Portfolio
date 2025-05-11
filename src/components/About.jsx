import React from "react";
import { motion } from "framer-motion";
import useAnimationInView from "../customHooks/useAnimationInView";

const About = () => {
  const { ref, mainControls, slideControls } = useAnimationInView();

  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-4 pt-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 }}
          >
            About
          </motion.p>
        </div>

        <motion.p
          className=" relative text-xl mt-12 leading-8 text-justify"
          ref={ref}
          variants={{ hidden: { x: -50 }, visible: { x: 0 } }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
        >
          My journey into tech began with a Bachelor's degree in{" "}
          <strong> Computer Science Engineering</strong>, fueled by a deep
          curiosity for how things work under the hood. I’m currently working as
          a <strong>Python Developer</strong> at <strong>EduGorilla.</strong>,
          where I build dynamic web applications using{" "}
          <strong>Python, Django, jQuery</strong>, and{" "}
          <strong>PostgreSQL</strong>
          <motion.div
            className="bg-gradient-to-br from bg-gray-600 to-gray-900 absolute top-1 bottom-1 left-0 right-0 z-2 rounded-sm"
            variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeIn" }}
          ></motion.div>
        </motion.p>

        <br />

        <motion.p
          className="relative text-xl leading-8 text-justify"
          variants={{ hidden: { x: -50 }, visible: { x: 0 } }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
        >
          Before this, I kickstarted my professional experience with an
          internship at <strong>Techtitude Tribe</strong>, gaining practical
          exposure to software development and strengthening my foundation in
          backend technologies. Today, I focus on developing efficient, scalable
          web solutions and continuously strive to improve user experience
          through clean code and thoughtful design.
          <motion.div
            className="bg-gradient-to-br from bg-gray-600 to-gray-900 absolute top-1 bottom-1 left-0 right-0 z-2 rounded-sm"
            variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.25, delay: 0.5, ease: "easeIn" }}
          ></motion.div>
        </motion.p>
      </div>
    </div>
  );
};

export default About;
