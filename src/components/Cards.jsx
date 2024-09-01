import React from 'react'
import logo from '../assets/logo2.svg'
const Cards = () => {
  return (
    <div   className='w-full h-screen pt-20 px-12 bg-zinc-100 flex gap-5'>
        <div className="w-[45vw] relative flex items-center justify-center h-[70vh] rounded-xl bg-[#082311]">
                <img src={logo} className='invert' width={160} alt="" />
                <button className='max-w-fit pl-4 pr-4 pb-2 pt-2 border rounded-full bg-transparent absolute bottom-[2%] left-[3%] '>2019-2022</button>
        </div>
        <div className="w-[25vw] relative flex items-center justify-center h-[70vh] rounded-xl bg-zinc-900">
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' width={160} alt="" />
                <button className='max-w-fit pl-4 pr-4 pb-2 pt-2 border rounded-full bg-transparent absolute bottom-[2%] left-[3%] '>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="w-[25vw] relative h-[70vh] flex items-center justify-center rounded-xl bg-zinc-900">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" width={160} alt="" />
            <button className='max-w-fit pl-4 pr-4 pb-2 pt-2 border rounded-full bg-transparent absolute bottom-[2%] left-[3%] '>BUSINESS BOOTCAMP ILLUMNI</button>
        </div>
    </div>
  )
}

export default Cards
