import React from 'react';
import {motion} from 'framer-motion'
interface CardsProps {
  field: string;
  description: string;
  title: string;
  image: string;
  url: string;
  index : any 
}

const ProjectsCards: React.FC<CardsProps> = ({ description, title, image, url , index }) => {
  return (
      <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition:{duration:index}}} className="bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 h-full  cursor-pointer shadow-lg transform transition duration-500 hover:scale-95 hover:shadow-2xl   ">
        <div className='h-[100px]'>
          <a href={url}>
            <img className="rounded-t-lg h-full w-full " src={image} alt={title} />
          </a>
        </div>
        <div className="p-5">
          <a href={url}>
            <h5 className="mb-1 text-xl font-bold text-wrap tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <a href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </motion.div>
  );
}

export default ProjectsCards;
/* Card 01 */

