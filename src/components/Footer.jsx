import React from 'react';

export default function Footer() {
  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
      
      <img className='invert h-5 lg:h-9' src="/assets/logo.svg" alt="logo" />

      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-2'>
        <p>© 2026 Personal Portfolio</p>

        <p>
          Designed by{" "}
          <a 
            href="https://www.figma.com/@jhanvishah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            Jhanvi Shah
          </a>
        </p>

        <p>
          Developed by{" "}
          <a 
            href="https://github.com/tajshuvoo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            Md. Tajbir Hasan Shuvo
          </a>
        </p>

        <p>
          Template by{" "}
          <a 
            href="https://github.com/sathishk-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            sathishk-dev
          </a>
        </p>
      </div>
    </div>
  );
}