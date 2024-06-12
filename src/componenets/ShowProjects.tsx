import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import ProjectsCards from './ProjetcsCards';

interface FieldProps {
  field: string;
}

const ShowProjetcs: React.FC<FieldProps> = ({ field }) => {
  const [index , setIndex] = useState(0)
  const [items , seItems] = useState([])
  return (
    <div className='flex justify-center container'>
      <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 w-[80%] gap-1 '>
        {data.projects
          .filter((item) => item.field === field)
          .map((item, index) => (
            <div key={index} className='my-2  max-sm:w-full w-[80%]   '>
              <ProjectsCards title={item.title} image={item.image} field={item.field} description={item.description} url={item.url} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShowProjetcs;