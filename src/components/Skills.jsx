import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiHuggingface,
  SiPostgresql,
  SiDocker,
  SiFastapi,
  SiLangchain,
  SiGit,
  SiDvc,
  SiMlflow,
  SiLinux,
  SiCplusplus,
  SiSqlite,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Python", icon: <SiPython size={40} /> },
    { id: 2, name: "SQL", icon: <SiSqlite size={40} /> },
    { id: 3, name: "C++", icon: <SiCplusplus size={40} /> },

    { id: 4, name: "NumPy", icon: <SiNumpy size={40} /> },
    { id: 5, name: "Pandas", icon: <SiPandas size={40} /> },
    { id: 6, name: "Matplotlib", icon: <SiPython size={40} /> },
    { id: 7, name: "Seaborn", icon: <SiPython size={40} /> },

    { id: 8, name: "PyTorch", icon: <SiPytorch size={40} /> },
    { id: 9, name: "TensorFlow", icon: <SiTensorflow size={40} /> },
    { id: 10, name: "scikit-learn", icon: <SiScikitlearn size={40} /> },
    { id: 11, name: "Hugging Face", icon: <SiHuggingface size={40} /> },

    {
      id: 12,
      name: "LangChain",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-black">
          <path d="M7.53 15.975a7.53 7.53 0 0 0 2.206-5.325A7.54 7.54 0 0 0 7.53 5.325L2.205 0A7.54 7.54 0 0 0 0 5.325a7.54 7.54 0 0 0 2.205 5.325zm11.144.493a7.54 7.54 0 0 0-5.325-2.206 7.54 7.54 0 0 0-5.325 2.206l5.325 5.325a7.54 7.54 0 0 0 5.325 2.205A7.54 7.54 0 0 0 24 21.793zM2.219 21.78a7.54 7.54 0 0 0 5.325 2.205v-7.53H.014a7.54 7.54 0 0 0 2.205 5.325M20.73 8.595a7.53 7.53 0 0 0-5.327-2.206 7.53 7.53 0 0 0-5.325 2.207l5.325 5.325z"/>
        </svg>
      ),
    },
    { id: 13, name: "LangGraph", icon: <SiLangchain size={40} /> },

    { id: 14, name: "FastAPI", icon: <SiFastapi size={40} /> },
    { id: 15, name: "PostgreSQL", icon: <SiPostgresql size={40} /> },

    { id: 16, name: "Docker", icon: <SiDocker size={40} /> },
    { id: 17, name: "MLflow", icon: <SiMlflow size={40} /> },
    { id: 18, name: "DVC", icon: <SiDvc size={40} /> },
    { id: 19, name: "Git", icon: <SiGit size={40} /> },
    { id: 20, name: "Linux", icon: <SiLinux size={40} /> },
  ]);

  const categories = [
    { title: "Programming", names: ["Python", "SQL", "C++"] },
    { title: "Data Science", names: ["NumPy", "Pandas", "Matplotlib", "Seaborn"] },
    { title: "ML / DL", names: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face"] },
    { title: "LLM / Agents", names: ["LangChain", "LangGraph"] },
    { title: "Backend", names: ["FastAPI", "PostgreSQL"] },
    { title: "DevOps & Tools", names: ["Docker", "MLflow", "DVC", "Git", "Linux"] },
  ];

  return (
    <div className="py-20 lg:py-32" id="skills">
      <div className="px-5 lg:px-28">

        {/* Tech Stack */}
        <motion.h2
          className="text-3xl lg:text-4xl text-center"
        >
          My <span className="font-extrabold">Tech Stack</span>
        </motion.h2>

        <div className="mt-12 space-y-12">
          {categories.map((cat, idx) => {
            const filtered = skills.filter(s => cat.names.includes(s.name));
            return (
              <div key={idx}>
                <h3 className="text-xl lg:text-2xl font-semibold text-center mb-6">
                  {cat.title}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
                  {filtered.map(skill => (
                    <motion.div
                      key={skill.id}
                      className="group bg-white border-2 border-black rounded-xl p-4 w-28 h-28 flex flex-col items-center justify-center gap-3 hover:bg-black hover:text-white transition"
                      whileHover={{ scale: 1.08 }}
                    >
                      {skill.icon}
                      <p className="text-xs font-semibold text-center">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="mt-24">
          <h2 className="text-3xl lg:text-4xl text-center">
            My <span className="font-extrabold">Experience</span>
          </h2>

          <div className="mt-10">
            <div className="border border-gray-300 rounded-xl p-6 hover:bg-gray-100 transition">
              <h3 className="text-lg font-semibold">
                Industrial Trainee — Streams Tech
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Mar 2025 · Dhaka, Bangladesh
              </p>

              <p className="mt-4 text-sm leading-6 text-gray-700">
                Completed an industrial attachment focused on backend development. 
                Built RESTful APIs using Node.js and MongoDB with JWT-based authentication. 
                Gained experience in system design, API development, and Agile team workflows 
                using Git/GitHub.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}