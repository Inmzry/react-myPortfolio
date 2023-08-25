import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import php from '../assets/php.png';

const Experience = () => {
    const tech = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            href: 'https://html.spec.whatwg.org/multipage/',
            style: 'shadow-orange-500'
        },{
            id: 2,
            src: css,
            title: 'CSS',
            href: 'https://www.w3.org/Style/CSS/',
            style: 'shadow-blue-500'
        },{
            id: 3,
            src: javascript,
            title: 'JavaScript',
            href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            style: 'shadow-yellow-500'
        },{
            id: 4,
            src: reactImage,
            title: 'React',
            href: 'https://react.dev/',
            style: 'shadow-blue-600'
        },{
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            href: 'https://tailwindcss.com/',
            style: 'shadow-sky-400'
        },{
            id: 6,
            src: github,
            title: 'GitHub',
            href: 'https://github.com/',
            style: 'shadow-gray-400'
        },{
            id: 7,
            src: php,
            title: 'php',
            href: 'https://www.php.net/',
            style: 'shadow-violet-300'
        }
    ]
  return (
    <section className='section' id='experience'>
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>My Tech Skills</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    tech.map(({id,src,title,style, href}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <a href={href}><img src={src}  alt='' className='w-20 mx-auto' /></a>
                            
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
    </section>
  )
}

export default Experience