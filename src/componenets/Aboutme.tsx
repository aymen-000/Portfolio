import { useContext } from 'react';
import './styles.css';
import light_file from '../uploads/blue_cv.pdf';
import dark_file from '../uploads/dark_cv.pdf'
import { UserContext } from './UserContext';

function Aboutme() {
   
    
    const {theme} = useContext(UserContext)

    
    return (
        <div className="container mx-auto px-4 py-8 rounded-full" id='about'>
            <div className="text-center my-4">
                <h1 className="font-inter text-5xl font-bold text-white">About Me</h1>
                <h2 className="font-poppins font-semibold text-[15px] gradient-text">Get to know me</h2>
            </div>

            <div className="font-inter font-medium text-[15px] leading-[25px] text-[#E1E1E1] max-w-3xl mx-auto text-center text-ellipsis">
                <p className="mt-4">
                    Skilled in building modern, responsive web interfaces using React, Tailwind CSS, and MUI. Experienced in data analysis and visualization with Python libraries (Pandas, NumPy, Matplotlib) and building machine learning models (TensorFlow, Scikit-learn) for image classification tasks.
                </p>
            </div>
            <div className='text-center flex justify-center my-4 '>
                <a  href={theme == 'light' ? light_file : dark_file} download='BOUKHARI_AIMEN.pdf' rel="noreferrer">
                    <button className="button text-white hover:bg-blue-500  hover:border-transparent hover:text-white  font-semibold text-xl">
                        Download Resume
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Aboutme;