import React, { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const projects = [
  // 🔥 AGENT
  {
    title: "Constitutional Reliability-Aware RAG",
    tech: "Python • FastAPI • LangGraph • FAISS • HuggingFace • Pydantic",
    points: [
      "Engineered a reliability-aware agentic RAG pipeline over the Constitution of Bangladesh using FAISS semantic retrieval, citation validation, faithfulness scoring, and automatic self-correction",
      "Orchestrated multi-stage reasoning via LangGraph state graphs with structured Pydantic schemas and enforced source-grounded constitutional article citations",
      "Built and benchmarked a production-ready legal QA system with FastAPI backend, streaming inference, and reliability metrics for grounded answer verification",
    ],
    image: "/assets/Gemini_Generated_Image_35a5br35a5br35a5.png",
    github: "https://github.com/tajshuvoo/constitutional-reliability-rag",
    live: "https://constitutional-reliability-rag.streamlit.app/",
    category: "agent",
  },

  {
    title: "Brand Guardian AI (Agentic Video Ad Compliance Engine)",
    tech: "Python • FastAPI • LangGraph • Azure Video Indexer • Azure AI Search • HuggingFace Embeddings • RAG",
    points: [
      "Architected an end-to-end agentic LLM pipeline for automated video advertisement compliance auditing from raw media input",
      "Orchestrated multi-stage reasoning using LangGraph over transcript + OCR extraction with semantic vector retrieval",
      "Implemented retrieval-augmented policy evaluation generating evidence-grounded risk classification and structured compliance reports",
    ],
    image: "/assets/Gemini_Generated_Image_jrqgknjrqgknjrqg.png",
    github: "https://github.com/tajshuvoo/brand-guardian-ai",
    live: "https://brand-guardian-ai-for-ad.streamlit.app/",
    category: "agent",
  },

  {
    title: "Blog Writing Multi-Agent System",
    tech: "Python • LangGraph • LangChain • Hugging Face • PostgreSQL (NeonDB) • Streamlit",
    points: [
      "Built a production-grade multi-agent LLM system with dynamic routing (closed/hybrid/open-book modes) and parallel section synthesis",
      "Enforced deterministic structured outputs via Pydantic schemas and retry-safe parsing to eliminate malformed LLM responses",
      "Integrated tool-based web research, citation control, and PostgreSQL JSONB persistence, deploying an end-to-end Streamlit interface",
    ],
    image: "/assets/Gemini_Generated_Image_v0omljv0omljv0om.png",
    github: "https://github.com/tajshuvoo/Blog-writting-agent",
    live: "https://blog-writing-agent-pro.streamlit.app/",
    category: "agent",
  },

  // 🔥 LLM
  {
    title: "Bangla LLM Distillation",
    tech: "Python • PyTorch • HuggingFace • LoRA/QLoRA • Transformers",
    points: [
      "Fine-tuned 7B Mistral-Instruct on 6K Bangla instructions (QLoRA, T4 GPU)",
      "Designed full LLM distillation pipeline compressing 7B → 1.1B (~6X smaller, ~25M trainable params)",
      "Achieved ~4.8× ROUGE-L gain over base 1.1B and retained ~50% teacher performance",
    ],
    image: "/assets/Gemini_Generated_Image_7mkeor7mkeor7mke.png",
    github: "https://github.com/tajshuvoo/bangla_llm_distillation",
    live: null,
    category: "llm",
  },

  // 🔥 DL
  {
    title: "Image Captioning System",
    tech: "Python • TensorFlow • CNNs • LSTM • MLflow • DVC • Streamlit",
    points: [
      "Trained a CNN–LSTM image captioning model using VGG16 transfer learning on the Flickr8k dataset",
      "Built a reproducible training pipeline with custom data generators and MLflow tracking, achieving BLEU-1: 0.525, BLEU-2: 0.274",
      "Versioned data/models with DVC and deployed a Streamlit inference app for real-time caption generation",
    ],
    image: "/assets/Gemini_Generated_Image_dhmazidhmazidhma.png",
    github: "https://github.com/tajshuvoo/image-captioning-system",
    live: "https://image-captioning-system-pro.streamlit.app/",
    category: "dl",
  },

  {
    title: "Chest Cancer Classification System",
    tech: "Python • TensorFlow • CNNs • MLflow • DVC • Streamlit",
    points: [
      "Built a CNN-based chest CT image classifier for cancer vs normal detection with preprocessing and data augmentation",
      "Developed a modular ML pipeline covering data ingestion, training, evaluation, and inference",
      "Used MLflow for experiment tracking and DVC for data/model versioning to ensure reproducibility",
    ],
    image: "/assets/Gemini_Generated_Image_4br8u64br8u64br8.png",
    github: "https://github.com/tajshuvoo/chest-cancer-classification",
    live: "https://chest-cancer-classification.streamlit.app/",
    category: "dl",
  },

  // 🔥 ML
  {
    title: "SMS Spam Classifier",
    tech: "Python • scikit-learn • NLP • Streamlit",
    points: [
      "Built a supervised text classification model for spam detection using TF-IDF features and classical ML algorithms",
      "Implemented text preprocessing and model evaluation",
      "Deployed an interactive web app for real-time inference",
    ],
    image: "/assets/Gemini_Generated_Image_rjarg2rjarg2rjar.png",
    github: "https://github.com/tajshuvoo/sms_spam_classifier",
    live: "https://smsspamclassifier-ultra.streamlit.app/",
    category: "ml",
  },

  {
    title: "Movie Recommendation System",
    tech: "Python • scikit-learn • Streamlit",
    points: [
      "Developed a content-based recommendation engine using cosine similarity on movie metadata",
      "Performed feature engineering",
      "Deployed a user-facing application for personalized movie recommendations",
    ],
    image: "/assets/Gemini_Generated_Image_6imkxp6imkxp6imk.png",
    github: "https://github.com/tajshuvoo/movie_recommender_system",
    live: "https://movie-recommendation-system-pro.streamlit.app/",
    category: "ml",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "AI Agents", value: "agent" },
  { label: "LLM", value: "llm" },
  { label: "Deep Learning", value: "dl" },
  { label: "Machine Learning", value: "ml" },
];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="bg-black px-5 lg:px-28 py-16" id="projects">

      {/* TITLE */}
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      {/* 🔥 FILTER BUTTONS */}
      <div className="flex justify-center gap-3 mt-8 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`px-4 py-2 border rounded transition ${
              active === f.value
                ? "bg-white text-black"
                : "text-white border-white hover:bg-white hover:text-black"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* PROJECT LIST */}
      <div className="mt-12 space-y-16">
        {filtered.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >

            {/* IMAGE */}
            <div className="lg:w-[500px] w-full overflow-hidden rounded-2xl">
              <img
                src={project.image}
                className="w-full h-full object-cover hover:scale-105 transition"
                alt=""
              />
            </div>

            {/* TEXT */}
            <div className="lg:w-1/2">

              {/* TITLE */}
              <h2 className="text-white text-2xl lg:text-3xl font-bold">
                {project.title}
              </h2>

              {/* TECH STACK */}
              <p className="text-sm text-gray-400 mt-2">
                {project.tech}
              </p>

              {/* BULLET POINTS */}
              <ul className="list-disc ml-5 mt-4 text-[#71717A] text-sm lg:text-base space-y-2">
                {project.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              {/* LINKS */}
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-white flex items-center gap-2 border px-3 py-1 rounded hover:bg-white hover:text-black transition"
                >
                  <BsGithub /> GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-white flex items-center gap-2 border px-3 py-1 rounded hover:bg-white hover:text-black transition"
                  >
                    <TbExternalLink /> Live
                  </a>
                )}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}