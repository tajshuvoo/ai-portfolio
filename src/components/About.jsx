import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-20 lg:py-32 px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-6 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I am an AI/ML engineer focused on building intelligent systems powered by large language models. My work includes LLM fine-tuning, model distillation, and multi-agent orchestration.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I have developed reliability-aware RAG pipelines, multi-agent systems using LangGraph, and production-ready AI applications with FastAPI and modern ML tools. I enjoy designing systems that combine machine learning with real-world applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Currently, I am completing my undergraduate degree in Computer Science & Engineering at RUET and actively working on projects in generative AI, LLM systems, and scalable AI pipelines.
        </p>

      </motion.div>
    </div>
  );
}