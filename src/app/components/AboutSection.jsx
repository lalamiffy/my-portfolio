"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Windows Server, Linux and system troubleshooting</li>
        <li>TCP/IP networking, DNS, DHCP, firewalls and routing</li>
        <li>Cloud infrastructure, virtual machines and monitoring</li>
        <li>Python, C#/.NET, SQL and Power BI</li>
        <li>JavaScript, Node.js, React and React Native</li>
        <li>REST APIs, MongoDB, Git, HTML and CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Diploma of Cloud Computing, Swinburne University of Technology</li>
        <li>Diploma of Information Technology, TAFE NSW</li>
        <li>Certificate IV in Information Technology, TAFE NSW</li>
        <li>Bachelor&apos;s Degree, Beijing Institute of Technology, Zhuhai</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>AWS Certified CloudOps Engineer - Associate</li>
        <li>AWS Certified Solutions Architect - Associate</li>
        <li>AWS Certified Developer - Associate</li>
        <li>AWS Certified AI Practitioner</li>
        <li>Cisco Networking Essentials</li>
        <li>Cisco Linux Unhatched</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white scroll-mt-24" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={`${basePath}/images/about-image.png`}
          alt="Technology workspace illustration"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Cloud Support Associate specialising in Windows at AWS, where
            I support enterprise customers with operating system, networking,
            performance and patching issues across cloud environments. I use
            logs, monitoring data and structured fault isolation to identify
            root causes, document findings and provide clear next steps. Alongside
            technical support, I build software with Python, C#/.NET, SQL,
            JavaScript and React, and I am completing a Diploma of Cloud
            Computing at Swinburne University of Technology.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
