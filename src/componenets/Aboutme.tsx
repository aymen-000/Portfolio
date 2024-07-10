import { useContext } from 'react';
import './styles.css';
import light_file from '../uploads/blue_cv.pdf';
import dark_file from '../uploads/dark_cv.pdf'
import { UserContext } from './UserContext';

function Aboutme() {


    const { theme } = useContext(UserContext)


    return (
        <div className="container mx-auto px-4 py-8 rounded-full" id='about'>
            <div className="text-center my-4 ">
                <h1 className="font-inter text-5xl font-bold text-white animate-bounce">About Me</h1>
                <h2 className="font-poppins font-semibold text-[15px] gradient-text ">Get to know me</h2>
            </div>

            <ul className="font-inter font-medium text-[15px] leading-[25px] text-[#E1E1E1] max-w-3xl mx-auto text-ellipsis w-fit outline-dotted p-1 outline-[#00aeffbf] text-center  mx-sm:justify-start max-sm:p-0 max-sm:mr-6">
           
                    <li className=''>
                        Student at higher school of computer science ESI
                    </li>
                    <li className=' ' >
                        Skilled in building modern, responsive web interfaces using :
                    </li>
                    <li className=''>
                        React , Tailwind CSS, and MUI.
                    </li>
                    <li className=''>
                        Experienced in data analysis  with Python libraries
                    </li>
                    <li className=' '>
                        Pandas, NumPy, Matplotlib
                    </li>
                    <li className=''>
                        building machine learning models for many tasks with
                    </li>
                    <li className=''>
                        TensorFlow, Scikit-learn , pytorch
                    </li>

                
            </ul>
            <div className='text-center flex justify-center my-4 '>
                <a href={theme == 'light' ? light_file : dark_file} download='BOUKHARI_AIMEN.pdf' rel="noreferrer">
                    <button className="button text-white hover:bg-blue-500  hover:border-transparent hover:text-white  font-semibold text-xl glow-on-hover">
                        Download Resume
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Aboutme;