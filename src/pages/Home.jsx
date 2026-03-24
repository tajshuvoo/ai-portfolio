import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiKaggle } from "react-icons/si";
import { TbDownload } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      
      {/* MAIN HERO */}
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        {/* LEFT SIDE */}
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <TypeAnimation
                sequence={["I am Md. Tajbir Hasan Shuvo", 1000]}
                speed={10}
                style={{ fontWeight: 700 }}
                repeat={Infinity}
              />
            </motion.h2>

            <motion.h2>
              <span className="font-extrabold">AI/ML</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Engineer
              </span>
            </motion.h2>

            <motion.h2>
              Based In <span className="font-extrabold">Bangladesh.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I am an AI/ML engineer focused on building intelligent systems powered by large language models. My work includes LLM fine-tuning, model distillation, and multi-agent orchestration.
          </motion.p>

          {/* SOCIALS */}
          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: BiLogoGmail, link: "mailto:tajshuvo75@gmail.com" },
              { icon: IoLogoLinkedin, link: "https://www.linkedin.com/in/tajshuvo" },
              { icon: BsGithub, link: "https://github.com/tajshuvoo" },
              { icon: SiKaggle, link: "https://www.kaggle.com/tajshuvo" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="h-full w-full"
            src="/assets/hero-vector.png"
            alt="Hero"
          />
        </motion.div>
      </div>

      {/* ✅ CENTERED RESUME BUTTON (FULL WIDTH) */}
      <div className="flex justify-center mt-10">
        <motion.a
          href="/Md_Tajbir_Hasan_Shuvo_Resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border-2 border-black bg-black text-white rounded-lg font-semibold hover:bg-white hover:text-black transition flex items-center gap-2"
        >
          Download Resume <TbDownload size={18} />
        </motion.a>
      </div>

    </div>
  );
}