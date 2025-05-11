import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import useAnimationInView from "../customHooks/useAnimationInView";
import { ReactComponent as SchoolIcon } from "../assets/school.svg";

function Education() {
  const { ref, mainControls } = useAnimationInView();

  const educationData = [
    {
      id: 1,
      title: "Rajkiya Engineering College Bijnor",
      degree: "Bachelor of Technology",
      branch: "Computer Science Engineering",
      duration: "2021",
      description: "CGPA : 7",
    },
    {
      id: 2,
      title: "R. D. National College",
      degree: "Senior Secondary School",
      duration: "2017",
      description: "Percentage : 69.23%",
    },
    {
      id: 3,
      title: "S. S. Sahney High School",
      degree: "Higher Secondary School",
      duration: "2015",
      description: "Percentage : 80.40%",
    },
  ];

  return (
    <div
      name="education"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full pt-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="heading">
          <motion.p
            className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 }}
          >
            Education
          </motion.p>
          <p className="py-6"> </p>
        </div>
        <div className="min-h-screen py-10" ref={ref}>
          <VerticalTimeline>
            {educationData.map((education) => (
              <VerticalTimelineElement
                className="education-element"
                contentStyle={{ background: "transparent", color: "white" }}
                contentArrowStyle={{ borderRight: "7px solid  white" }}
                date={education.duration}
                iconStyle={{ background: "#138781" }}
                icon={<SchoolIcon />}
              >
                <h1 className="education-title font-semibold text-xl">{education.title}</h1>
                <h4 className="education-degree text-gray-400">{education.degree}</h4>
                <h4 className="education-branch text-gray-400">{education.branch}</h4>
                <h4 className="education-description text-gray-400">{education.description}</h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Education;
