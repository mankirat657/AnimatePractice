import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Featured = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;

    // Animation for the first card on hover
    const card1Enter = () => {
      gsap.to(card1.querySelectorAll('h1 span'), {
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    const card1Leave = () => {
      gsap.to(card1.querySelectorAll('h1 span'), {
        y: '100%',
        stagger: -0.1,
        duration: 0.5,
        ease: 'power3.in',
      });
    };

    // Animation for the second card on hover
    const card2Enter = () => {
      gsap.to(card1.querySelectorAll('h1 span'), {
        y: '100%',
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.in',
      });
      gsap.to(card2.querySelectorAll('h1 span'), {
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    const card2Leave = () => {
      gsap.to(card2.querySelectorAll('h1 span'), {
        y: '100%',
        stagger: -0.1,
        duration: 0.5,
        ease: 'power3.in',
      });
    };

    // Attach event listeners
    card1.addEventListener('mouseenter', card1Enter);
    card1.addEventListener('mouseleave', card1Leave);
    card2.addEventListener('mouseenter', card2Enter);
    card2.addEventListener('mouseleave', card2Leave);

    // Cleanup event listeners on unmount
    return () => {
      card1.removeEventListener('mouseenter', card1Enter);
      card1.removeEventListener('mouseleave', card1Leave);
      card2.removeEventListener('mouseenter', card2Enter);
      card2.removeEventListener('mouseleave', card2Leave);
    };
  }, []);

  return (
    <div  className='w-full py-10'>
      <div className="w-full px-12 border-b border-b-zinc-500 pb-10">
        <h1 className='text-6xl font-[500] tracking-tighter'>Featured projects</h1>
      </div>
      <div className="px-16">
        <div className="cards w-full flex gap-10 mt-10">
          <div ref={card1Ref} className="cardcontainer relative w-1/2 h-[75vh] rounded-xl bg-red-500">
            <h1 className='absolute left-full w-[100vw] -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-9xl font-bold uppercase tracking-tighter text-center leading-none overflow-hidden text-[#CDEA68]'>
              {"FYDE".split('').map((item, index) => {
                return <span key={index} className='inline-block translate-y-full'>{item}</span>
              })}
            </h1>
            <div className='card w-full h-full rounded-xl border border-zinc-600 overflow-hidden'>
              <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" className='w-full h-full bg-cover' />
            </div>
          </div>
          <div ref={card2Ref} className="cardcontainer relative w-1/2 h-[75vh] rounded-xl bg-red-500">
            <h1 className='absolute overflow-hidden right-full w-[80vw] translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-9xl font-bold font-[500] uppercase tracking-tighter text-center leading-none text-[#CDEA68]'>
              {"VISE".split('').map((item, index) => {
                return <span key={index} className='inline-block translate-y-full'>{item}</span>
              })}
            </h1>
            <div className='card w-full h-full rounded-xl border-zinc-600 overflow-hidden'>
              <img src='https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png' className='w-full h-full bg-cover' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured;
