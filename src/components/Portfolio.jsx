import React from 'react';
import portfolioReact from '../assets/portfolio/portfolio.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';
import giffCapstone from '../assets/portfolio/gifCapstone.gif';

const Portfolio = () => {
  const portfolios = [
    {
        id: 1,
        src: portfolioReact,
        href: 'https://kevinlibato.netlify.app/',
        demo: 'https://github.com/Inmzry/react-myPortfolio',
    },{
        id: 2,
        src: giffCapstone,
        href: 'https://drive.google.com/file/d/17-wFQFzYY3fsVcorCdM5rXPPo0V0QufP/view?usp=drive_link',
        demo: 'https://github.com/Inmzry/PAHEALOTZ'
    },{
        id: 3,
        src: navbar
    },{
        id: 4,
        src: reactParallax
    },{
        id: 5,
        src: reactSmooth
    },
    {
        id: 6,
        src: reactWeather
    }
  ]
  return (
    <section className='section' id='portfolio'>
    <div name='portfolio' className='bg-gradient-to-r from-pink-400  via-purple-500 to-indigo-500 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my projects here (some-are-dummy-display-In-progress)</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id, src, href, demo}) =>(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex item-center justify-center'>
                                <a href={href} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center'>Demo</a>
                                <a href={demo} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center'>Code</a>
                            </div>
                        </div>
                    ))
                }  
            </div>
        </div>
    </div>
    </section>
  )
}

export default Portfolio