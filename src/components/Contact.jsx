import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io5';
import { SiKaggle } from 'react-icons/si';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        
        {/* FORM */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%]'
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              setSuccess(false);

              const formData = new FormData(e.target);

              const res = await fetch("https://formspree.io/f/mojkgvdg", {
                method: "POST",
                body: formData,
                headers: {
                  Accept: "application/json",
                },
              });

              if (res.ok) {
                setSuccess(true);
                e.target.reset();
              }

              setLoading(false);
            }}
            className='w-full space-y-3 lg:space-y-5'
          >
            <input 
              name="name"
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' 
              type="text" 
              placeholder='Your name' 
              required 
            />

            <input 
              name="email"
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' 
              type="email" 
              placeholder='Email' 
              required 
            />

            <input 
              name="website"
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' 
              type="text" 
              placeholder='Your website (If exists)' 
            />

            <textarea 
              name="message"
              className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A] rounded text-sm w-full' 
              placeholder='How can I help?*'
              required
            ></textarea>

            <input type="hidden" name="_subject" value="New Portfolio Message!" />

            <motion.div
              className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: loading ? 1 : 1.05 }}
                type='submit'
                disabled={loading}
                className='bg-black justify-center w-fit lg:w-auto lg:flex-1 text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium'
              >
                {loading ? "Sending..." : "Get In Touch"}
              </motion.button>

              {/* SOCIAL LINKS */}
              <div className='flex items-center gap-x-2 lg:gap-x-5'>
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
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* SUCCESS MESSAGE */}
            {success && (
              <p className="text-green-600 text-sm mt-2">
                ✅ Thanks! I’ll get back to you shortly.
              </p>
            )}
          </form>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
            <h2>Something special</h2>
          </div>

          <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>
            I build intelligent AI systems using LLMs, RAG pipelines, and multi-agent architectures. 
            Feel free to reach out for collaboration or opportunities.
          </p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            
            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="mailto:tajshuvo75@gmail.com"
            >
              <span className='border-2 border-transparent group-hover:border-black rounded-full p-1'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              tajshuvo75@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="tel:+8801316334800"
            >
              <span className='border-2 border-transparent group-hover:border-black rounded-full p-[5px]'>
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              +8801316334800
            </motion.a>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}