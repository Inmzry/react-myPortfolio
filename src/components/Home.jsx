import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id=''>
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm an aspiring Web Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I am currently a 4th-year Bachelor of Science in Information Technology student at the University of Cebu. I love to work on web applications using technologies like React.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                    bg-gradient-to-l from-amber-400 via-orange-500 to-red-400 shadow-lg shadow-orange-500/50
                    hover:scale-105 duration-200
                     cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardDoubleArrowRight size={20} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto w-full md:w-full' />
            </div>
        </div>
    </div>
    </section>
  );
};

export default Home