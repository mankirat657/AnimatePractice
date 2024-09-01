import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const[rotate,setRotate] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mousex = e.clientX;
            let mousey = e.clientY;
            let deltaX = mousex - window.innerWidth/2;
            let deltay = mousey - window.innerHeight/2;

            var angle = Math.atan2(deltay,deltaX) * (180/Math.PI);
            setRotate(angle-180)
        })
    })
  return (
    <div className='w-full h-screen overflow-hidden'>
    <div data-scroll data-scroll-speed = "-.75" className="w-full h-full relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
    <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="w-[15vw]  flex items-center justify-center h-[15vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 relative bg-black h-2/3 rounded-full">
            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10 rotate-12 ">
            <div className="w-10 bg-white h-10 rounded-full">
            </div>
            </div>
            </div>
        </div>
        <div className="w-[15vw] flex items-center justify-center h-[15vw] bg-zinc-100 rounded-full">
        <div className="w-2/3 relative bg-black h-2/3 rounded-full">
        <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10 rotate-12 ">
            <div className="w-10 bg-white h-10 rounded-full">
            </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Eyes
