import React from 'react';
import Image from "next/image";
import './style.css';
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const GroupSeven = () => {
  useEffect(() => { 
    AOS.init({duration: 2000})
  }, []) 
  return (
    <div className='overflow-hidden '>
      <div className='relative'>
        <Image src='/images/YACHTS.png' alt='picture' width={2200} height={400} id='image-container' />

        <div  className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white text-[30px] bg-transparent' >
          <p data-aos="fade-left">YACHTS</p>
        
        </div>
      </div>
    </div>
  );
};

export default GroupSeven;
