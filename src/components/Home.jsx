import React, { useEffect, useRef, useState } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import Marquee from './Marquee';
import About from './About';
import Eyes from './Eyes';
import logo from '../assets/logo2.svg'
import Featured from './Featured';
import Cards from './Cards';
import Footer from './Footer';
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from 'framer-motion';
import Lower from './Lower';
const Home = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div  className="w-full min-h-screen bg-zinc-950 text-white pt-1">
      <div data-scroll data-scroll-speed = "-.6" className="">

      
      <div className="textStructure mt-40 px-14">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return <div className="masker" key={index}>
            <div className='w-fit flex items-end'>
              {index === 1 && (<motion.div initial={{width : 0}} animate={{width : '9vw'}} transition={{ease : [0.76, 0, 0.24, 1], duration: 1}} className='w-[7rem] mr-[1vw] rounded-lg flex items-center justify-center h-[5.3vw] relative -top-2 bg-green-600   '>
                <img src={logo} className='invert' alt="" />
              </motion.div>)}
              <h1 className='uppercase text-8xl font-bold tracking-tighter  leading-[6.5vw]'>{item}</h1>
            </div>
          </div>
        })}
      </div>
      <div className="border-t-2 border-zinc-700 mt-28 flex justify-between items-center py-5 px-14">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
          return <p className='text-md text-white tracking-tight leading-none'>{item}</p>
        })}
        <div className='start flex items-center gap-3'>
          <div className='px-5 py-2 border-[1px] border-zinc-700 font-light text-sm uppercase rounded-full'>Start the project</div>
          <div className='w-10 flex items-center justify-center h-10 rounded-full border-[1px] border-zinc-700'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
      </div>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
      <Lower/>
    </div>
  );
};

export default Home;
