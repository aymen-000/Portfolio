import { useContext } from 'react';
import './styles.css';
import cv from '../uploads/cv.pdf'
import { UserContext } from './UserContext';
import "./style2.scss"

function Aboutme() {


    const { theme } = useContext(UserContext)


    return (
        <div className="container mx-auto px-4 py-8 rounded-full" id='about'>
            <div className="text-center my-4 ">
                <h1 className="font-inter text-5xl font-bold text-white animate-bounce">About Me</h1>
                <h2 className="font-poppins font-semibold text-[15px] gradient-text ">Get to know me</h2>
            </div>
            <div className='flex justify-center'>
                <ul className="box list-disc ">

                    <li className='text-left '>
                        Student at higher school of computer science ESI
                    </li>
                    <li className='text-left'>
                        React , Tailwind CSS, and MUI.
                    </li>
                    <li className='text-left'>
                        nodejs , expressjs , flask 
                    </li>
                    <li className='text-left'>
                        Pandas, NumPy, Matplotlib
                    </li>
                    <li className='text-left'>
                        TensorFlow, Scikit-learn , pytorch
                    </li>


                </ul>
            </div>
            <div className='text-center flex justify-center my-4 '>
                <a href={cv} download='BOUKHARI_AIMEN.pdf' rel="noreferrer">
                    <button className="button text-white hover:bg-blue-500  hover:border-transparent hover:text-white  font-semibold text-xl glow-on-hover">
                        Download Resume
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Aboutme;