import React from 'react'
import "./styles.css"
import {motion} from 'framer-motion'
interface CardsProps {
    title: string;
    text: string;
    icon : string ; 
    index : any
}

const Cards: React.FC<CardsProps> = ({ title, text , icon , index }) => {
    return (
        < motion.div initial={{opacity:0}}  whileInView={{opacity:1, transition:{duration:index/10}}}  className="card-container " id='services'>
            <div className="dark:bg-gray-800 bg-white  p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <div className='rounded-sm my-2' >
                    <img src={icon} alt="Icon" />
                </div>
                <h3 className="dark:text-white text-black text-lg font-semibold mb-2">{title}</h3>
                <p className="dark:text-gray-400 text-gray-700 text-justify">{text}</p>
            </div>
        </motion.div>
    );
}


export default Cards