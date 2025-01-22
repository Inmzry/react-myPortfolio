import React from 'react'
import { FaGuitar, FaMusic } from 'react-icons/fa';
import { MdVideogameAsset } from 'react-icons/md';

const About = () => {
  return (
    <section className='section' id='about'>
    <div name='about' className='w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
            </div>
            <p className='text-xl mt-20'>
            It falls to me to inform you that this one is in the bag! -Invoker 
            </p>
            <br />
            <p className='text-xl'>
            Hello, I'm Kevin, an aspiring web developer with a passion for creating digital experiences. Beyond coding, my world revolves around the strings of a  <span style={{ display: 'inline-block' }}><FaGuitar size={15} /></span>guitar, the virtual realms of  <span style={{ display: 'inline-block' }}><MdVideogameAsset size={15} /></span>video games, and the enchanting melodies of  <span style={{ display: 'inline-block' }}><FaMusic size={15} /></span>music. I'm on a mission to combine my technological expertise with my creative hobbies in order to offer amazing ideas to the digital world.
            
            </p>
            <br />
        </div>
    </div>
    </section>
  )
}

export default About