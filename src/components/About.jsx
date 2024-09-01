import React from 'react'

const About = () => {
  return (
    <div  className='w-full -mt-[6rem] z-[188] p-14 font-[500] bg-[#CDEA68]  rounded-tr-3xl rounded-tl-3xl text-black '>
      <div className="border-b-[1px] border-b-black w-full pb-9" >
      <h1 className='text-5xl tracking-tighter leading-[4vw] '>Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds</u>, <u>sell prod­ucts</u>, <u>ex­plain com­plex ideas</u>, and<u> hire great peo­ple.</u></h1>
      </div>
      <div className="flex  justify-between pt-5 border-b border-b-black pb-24">
        <div className="text-black"><h1>What you can expect:</h1></div>
        <div className="flex flex-col gap-12">
          <div className="w-[34vw]"><h1>
          We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</h1>
          <h1 className='pt-12'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <h1>S:</h1>
          <div className="flex flex-col">
          {["Instagram","Behance","Facebook","Linkdin"].map((item,index)=>{
            return <u key={index}>{item}</u>
          })}
          </div>
        </div>
      </div>
      <div className="w-full pt-5 flex gap-5">
        <div className="w-1/2 ">
        <h1 className='text-black text-6xl'>Our approach:</h1>
        <button className="px-8 py-4 uppercase gap-6 flex items-center justify-between bg-zinc-900 mt-4 rounded-full text-white"><h1>Read More</h1>
        <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
        </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-red-50 rounded-lg "></div>
      </div>
    </div>
  )
}

export default About
