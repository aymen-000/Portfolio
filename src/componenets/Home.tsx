
import { TypeAnimation } from 'react-type-animation';
import './styles.css';
import me from '../assets/me.jpg'
import rec from '../assets/Rectangle.png'
import { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import {motion} from 'framer-motion'

function Home() {
    const {theme} = useContext(UserContext)
    const [rotate , setRotate] = useState(false)
    return (
        <div className='flex justify-center items-start h-fit '>
            <div
                id='home'
                className='flex justify-center  bg-cover bg-center w-[800px] h-fit rounded-[500px] my-1 mx-10 text-white'
                style= { theme == 'dark' ? { backgroundImage: `url(${rec})` } : {} } 
            >
                <div className="flex flex-col mt-10 items-center space-y-2 h-fit text-center">
                    <motion.div initial={{scale:0 , y:-50}} whileInView={{y:0 , transition:{duration:5}}} animate={{y:0 ,scale:1 , rotate:rotate ? 360 :0}} onClick={()=>setRotate(!rotate)}  className="text-center">
                        <img
                            src={me}
                            className="rounded-full h-[200px] w-[202px]"
                            alt="Profile"
                        />
                    </motion.div>
                    <div className="font-poppins font-bold text-3xl">
                        BOUKHARI AIMEN
                    </div>
                    <TypeAnimation
                        sequence={[
                            "AI / Machine Learning",
                            1000,
                            'Web Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        className='font-poppins font-semibold text-[26px] gradient-text'
                        repeat={Infinity}
                    />
                    <div>
                        <a href="/#contact">
                            <button className=" text-xl  bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-[55px] glow-on-hover">
                                Contact me
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;







