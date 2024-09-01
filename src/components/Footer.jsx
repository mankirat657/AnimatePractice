import React from 'react'
import { useState, useEffect } from 'react'
const Footer = () => {
    const [rotate, setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mousex = e.clientX;
            let mousey = e.clientY;
            let deltaX = mousex - window.innerWidth / 2;
            let deltay = mousey - window.innerHeight / 2;

            var angle = Math.atan2(deltay, deltaX) * (180 / Math.PI);
            setRotate(angle - 180)
        })
    })
    return (
        <div  className='w-full flex items-center justify-center h-screen bg-[#CDEA68]'>
            <div className=" relative">
                <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <div className="w-[15vw]  flex items-center justify-center h-[15vw] bg-zinc-100 rounded-full">
                        <div className="w-2/3 relative bg-black h-2/3 rounded-full">
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10 rotate-12 ">
                                <div className="w-10 bg-white h-10 rounded-full">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[15vw] flex items-center justify-center h-[15vw] bg-zinc-100 rounded-full">
                        <div className="w-2/3 relative bg-black h-2/3 rounded-full">
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10 rotate-12 ">
                                <div className="w-10 bg-white h-10 rounded-full">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-[150px] font-extrabold text-center normal tracking-tight uppercase text-black'>Ready<br />
                    to start<br />
                    the project?</h1>
                <div className="button flex flex-col items-center text-center">
                    <div className="">
                        <button className="px-8 py-4 uppercase gap-6 flex items-center justify-between bg-zinc-900 mt-4 rounded-full text-white"><h1>start the project</h1>
                            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                        </button>
                        <h1 className='text-black font-semibold text-2xl mt-2'>Or</h1>
                        <button className="px-8 py-4 uppercase gap-6 flex items-center justify-between bg-zinc-900 mt-4 rounded-full text-white"><h1>sdfa@gmail.com</h1>
                            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer
