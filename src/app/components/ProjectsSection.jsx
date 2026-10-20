"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description:
      "Responsive portfolio built with Next.js and Tailwind CSS, deployed through AWS Amplify.",
    image: `${basePath}/images/projects/1a.png`,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lalamiffy/my-portfolio",
    previewUrl: "https://master.d20f242htfsdvb.amplifyapp.com/",
  },
  {
    id: 2,
    title: "Restaurant Reservation Website",
    description:
      "Full-stack .NET and SQL Server application for reservations, sitting schedules, table assignments and reporting.",
    image: `${basePath}/images/projects/2a.png`,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lalamiffy/RestaurantReservation",
    previewUrl: "https://irongirl.azurewebsites.net/",
  },
  {
    id: 3,
    title: "Weekly Payment Calculator",
    description:
      "C# application that imports employee data from CSV files, calculates payments and generates payslip data.",
    image: `${basePath}/images/projects/3.png`,
    tag: ["All", "Software"],
    gitUrl: "https://github.com/lalamiffy/Weekly-Payment-Calculator",
    previewUrl: "https://github.com/lalamiffy/Weekly-Payment-Calculator",
  },
  {
    id: 4,
    title: "Mobile Ordering Application",
    description:
      "React Native and MongoDB ordering system with authentication, role-based access and REST API integration.",
    image: `${basePath}/images/projects/4a.png`,
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/lalamiffy/OrderingApp",
    previewUrl: "https://github.com/lalamiffy/OrderingApp",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software"
          isSelected={tag === "Software"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
