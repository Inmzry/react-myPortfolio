import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';

const SocialLinks = () => {
  const [showList, setShowList] = useState(false);
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://github.com/Inmzry',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/inmzry',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:kevinlibato@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Facebook <FaFacebook size={30} />
        </>
      ),
      href: 'https://www.facebook.com/kevin.libato.3/',
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/LIBATO, kevin-resume.pdf",
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[8%] left-0 fixed">
      <button
        className="group bg-transparent text-white h-14 px-2 py-2 flex items-center hover:text-pink-600 hover:scale-105 duration-200"
        onClick={() => setShowList(!showList)}
      >
        <span className="">Socials</span>
        <span className="group-hover:-rotate-90 duration-300">
          <MdOutlineKeyboardDoubleArrowDown size={20} className="ml-1" />
        </span>
      </button>

      {showList && (
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-transparent ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noopener noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SocialLinks;
