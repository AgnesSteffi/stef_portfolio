// src/Portfolio.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaHome,
  FaUser,
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa";

import profilePic from "./assets/profile.jpg";

// Project & Cert Images
import P1 from "./assets/Transport.jpg";
import P2 from "./assets/Driver.jpg";
import P3 from "./assets/Traffic.jpg";
import P4 from "./assets/Time.jpg";
import C1 from "./assets/DSA.jpg";
import C2 from "./assets/Postman.jpg";
import C3 from "./assets/AI.jpg";
import logo from "./assets/logo.jpg";

// Add your common background image
import background from "./assets/background.jpg";

const sections = [
  { id: "home", icon: <FaHome />, label: "Home" },
  { id: "about", icon: <FaUser />, label: "About" },
  { id: "skills", icon: <FaCode />, label: "Skills" },
  { id: "education", icon: <FaGraduationCap />, label: "Education" },
  { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
  { id: "certifications", icon: <FaCertificate />, label: "Certifications" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

const skillsData = [
  { title: "Programming Languages", items: ["C++", "Java", "Python"] },
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript"] },
  { title: "Frameworks", items: ["Flutter", "Dart", "React"] },
  { title: "Database & Data Handling", items: ["SQL", "MySQL", "MongoDB"] },
  { title: "Tools & Dev Environment", items: ["Git", "Power BI", "Docker", "Postman", "VS Code", "PyCharm"] },
  { title: "Concepts", items: ["OOP", "Data Structures", "Machine Learning"] },
];

const educationData = [
  {
    study: "B.E. – Computer Science and Engineering",
    college: "Saranathan College of Engineering, Tiruchirappalli, TN, India",
    year: "2021 - 2025",
    grade: "CGPA: 8.76",
  },
  {
    study: "HSC – 12th Grade",
    college: "St. James Matriculation Higher Secondary School, Tiruchirappalli, TN, India",
    year: "2021",
    grade: "Percentage: 93.4",
  },
  {
    study: "SSLC – 10th Grade",
    college: "Seventh Day Adventist Matriculation High School, Tiruchirappalli, TN, India",
    year: "2019",
    grade: "Percentage: 92.4",
  },
];

const projects = [
  {
    title: "Transport Management Web App",
    tech: "React.js, Node.js, MongoDB, TailwindCSS",
    description: "Full-stack web app for transport bookings, with authentication, dashboards, and real-time updates.",
    link: "https://github.com/AgnesSteffi/LoadLog_Web_App",
    image: P1,
  },
  {
    title: "Driver Fatigue Detection System",
    tech: "YOLOv11, OpenCV, Python",
    description: "Real-time driver monitoring detecting fatigue using facial/eye recognition. Integrated alerts.",
    link: "https://github.com/AgnesSteffi/Driver_Fatigue_Detection",
    image: P2,
  },
  {
    title: "Traffic Sign Classifier",
    tech: "Python, CNN, scikit-learn, OpenCV",
    description: "CNN classifying traffic signs with preprocessing, augmentation, and feature extraction.",
    link: "https://github.com/AgnesSteffi/Traffic_sign_Classifier_using_GTSRB",
    image: P3,
  },
  {
    title: "World Time App",
    tech: "Flutter, Dart",
    description: "Mobile app showing world time zones with real-time updates and adaptive wallpapers.",
    link: "https://github.com/AgnesSteffi/World_Time_App",
    image: P4,
  },
];

const certifications = [
  { title: "Data Structures & Algorithms", issuer: "Inlustro Learning Pvt. Ltd.", year: "NOV-2022", image: C1 },
  { title: "API Test Automation with Postman", issuer: "TESTAUTOMATIONU.COM", year: "AUG-2025", image: C2 },
  { title: "Building Real-life AI-based Projects", issuer: "Inlustro Learning Pvt. Ltd.", year: "DEC-2023", image: C3 },
];

export default function Portfolio() {
  const [active, setActive] = useState("home");

  const sectionHeader = (title) => (
    <div className="w-full text-center mb-8">
      <h2 className="inline-block px-6 py-3 bg-red-500 text-xl font-bold rounded-full shadow-lg">
        {title}
      </h2>
    </div>
  );

  const renderContent = () => {
    switch (active) {
      case "home":
        return (
          <div className="flex flex-col md:flex-row items-center justify-center w-full h-full gap-10 p-10">
            <div className="text-center md:text-left max-w-xl space-y-4">
              {/* Head logo */}
              <img src={logo} alt="Head Logo" className="w-16 h-16 mx-auto md:mx-0 rounded-full shadow-md border-2 border-red-500" />
              <h1 className="text-6xl font-extrabold text-red-500">Hola,</h1>
              <h1 className="text-6xl font-extrabold text-red-500">I’m AGNES STEFFI</h1>
              <h2 className="text-2xl text-white font-light">Software Developer</h2>
              <p className="text-gray-300">
                Curious and motivated developer with expertise in full-stack development, mobile application development, and machine learning.
              </p>
            </div>
            <div
              className="w-80 h-80 rounded-full shadow-xl bg-cover bg-center border-4 border-red-500"
              style={{ backgroundImage: `url(${profilePic})` }}
            ></div>
          </div>
        );

      case "about":
        return (
          <div className="flex items-center justify-center h-full w-full p-10">
            <div className="bg-gray-900/70 p-10 rounded-3xl shadow-2xl max-w-4xl text-white text-lg">
              <h2 className="text-4xl font-bold text-red-500 mb-6">About Me</h2>
              <p>
                Hi, I’m Stef👋, a curious and motivated software developer with a strong foundation in C++, Java, full-stack web and mobile development, and databases. I love creating scalable, high-performance applications that not only solve real-world problems but also make an impact on people’s lives.
              </p>
              <p>
                I enjoy tackling complex challenges, designing efficient solutions, and continuously sharpening my skills to write clean, maintainable, and future-ready code. Whether it’s building a web platform, crafting a mobile app, or optimizing backend systems, I thrive on turning ideas into working solutions.
              </p>
              <p> 
                Collaboration and creativity drive me. I believe great software comes from teamwork, attention to detail, and the willingness to keep learning. Outside of coding, I enjoy exploring new tech trends, solving logical problems, and challenging myself with new projects.
              </p>
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="w-full p-10">
            {sectionHeader("Skills")}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsData.map((s, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900/80 p-8 rounded-3xl shadow-2xl text-white hover:bg-red-500 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {s.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "education":
        return (
          <div className="w-full p-10">
            {sectionHeader("Education")}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-900/80 p-6 rounded-3xl shadow-2xl text-white flex flex-col items-center text-center w-full md:w-1/2 hover:bg-red-500 transition-all"
                >
                  <h3 className="text-xl font-bold mb-2">{edu.study}</h3>
                  <p className="italic text-gray-300">{edu.college}</p>
                  <p className="mt-2 text-gray-400">{edu.year}</p>
                  <p classname="text-xl font-bold mb-2">{edu.grade}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="w-full p-10">
            {sectionHeader("Projects")}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((p, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open(p.link, "_blank")}
                  className="bg-gray-900 rounded-3xl shadow-2xl text-white cursor-pointer hover:ring-4 hover:ring-red-500 flex flex-col"
                >
                  <div className="flex-[0.75]">
                    <img src={p.image} alt={p.title} className="w-full h-64 object-cover" />
                  </div>
                  <div className="flex-[0.25] p-6">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="text-gray-300 italic">{p.tech}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "certifications":
        return (
          <div className="w-full p-10">
            {sectionHeader("Certifications")}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
              {certifications.map((c, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900 rounded-3xl shadow-2xl text-white cursor-pointer hover:ring-4 hover:ring-red-500 flex flex-col items-center"
                >
                  <div className="flex-[0.75] w-full bg-white">
                    <img src={c.image} alt={c.title} className="w-full h-64 object-contain" />
                  </div>
                  <div className="flex-[0.25] p-6 text-center">
                    <h3 className="text-lg font-bold">{c.title}</h3>
                    <p className="text-gray-300">{c.issuer}</p>
                    <p className="text-gray-400">{c.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="w-full p-10">
            {sectionHeader("Contact")}
            <motion.div className="bg-gray-900 rounded-3xl shadow-2xl p-10 max-w-xl mx-auto">
              <div className="space-y-4">
                {[
                  { label: "Email", value: "agnessteffi525@gmail.com", link: "mailto:agnessteffi525@gmail.com" },
                  { label: "Contact", value: "+91 9159321363"},
                  { label: "LinkedIn", value: "linkedin.com/in/agnes-steffi", link: "https://www.linkedin.com/in/agnes-steffi-a-2819ab293" },
                  { label: "GitHub", value: "github.com/AgnesSteffi", link: "https://github.com/AgnesSteffi" },
                ].map((c, idx) => (
                  <motion.a
                    key={idx}
                    href={c.link}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block bg-gray-800 rounded-lg p-4 hover:bg-red-500 transition-colors"
                  >
                    <strong>{c.label}: </strong>{c.value}
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="/cv/Stef-CV.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 block text-center px-6 py-3 bg-red-500 rounded-lg shadow-lg hover:bg-red-600 transition-colors"
              >
                <FaFileDownload className="inline mr-2" /> Download Resume
              </motion.a>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white relative">
      {/* Left Navbar */}
      <aside className="w-24 bg-black border-r border-red-500 flex flex-col items-center py-6 fixed h-full justify-between z-20">
        <div className="flex flex-col items-center justify-center space-y-6 mt-4">
          {sections.map((s) => (
            <motion.button
              key={s.id}
              onClick={() => setActive(s.id)}
              whileHover={{ scale: 1.2 }}
              className={`text-2xl p-3 rounded-lg transition-all ${
                active === s.id ? "text-red-500" : "text-gray-400 hover:text-red-400"
              }`}
              title={s.label}
            >
              {s.icon}
            </motion.button>
          ))}
        </div>
        <footer className="text-xs text-gray-400 mb-2">&copy; 2025 Agnes Steffi</footer>
      </aside>

      {/* Tiny top-right logo */}
      <div className="absolute top-4 right-4 z-30">
        <img src={logo} alt="Logo" className="w-20 h-20 rounded-full border-2 border-red-500 shadow-md cursor-pointer" />
      </div>

      {/* Main Content with Background */}
      <main
        className="flex-1 ml-24 flex items-center justify-center bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-full h-full bg-black/70 flex items-center justify-center">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
