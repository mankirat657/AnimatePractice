  import { motion } from 'framer-motion'
  import React from 'react'

  const Marquee = () => {
      
    return (
      <div data-scroll data-scroll-section data-scroll-speed =".2" className='w-full py-16 rounded-tr-3xl rounded-tl-3xl bg-green-600 mt-16'>
        <div className="text flex whitespace-nowrap border-t-[1px] overflow-hidden border-b-[1px] border-zinc-300">
          <motion.h1 initial={{x: "0"}} animate= {{x: '-100%'}} transition={{ repeat: Infinity, ease: 'linear',duration: 10 }} className='text-[16vw] text- leading-none font-bold uppercase tracking-tighter '>We are Ochi</motion.h1>
          <motion.h1 initial={{x: "0"}} animate= {{x: '-100%'}} transition={{repeat: Infinity ,ease: 'linear',duration: 10}} className='text-[16vw] pl-7 text- leading-none font-bold uppercase tracking-tighter'>We are Ochi</motion.h1>
        </div>
      </div>
    )
  }

  export default Marquee
