
import './styles.css'
import { Button } from 'flowbite-react'
import gmail from '/src/assets/gmail.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
function Footer() {
    return (
        <div>
            <div className='flex max-sm:flex-col justify-between mx-6  max-sm:items-center max-lg:space-y-3 my-6 '>
                <div>
                    <div className='text flex-col text-justify text-3xl -tracking-tighter'><div>Let's</div> <div>Work Together</div> </div>
                </div>
                <div>
                    <a href="mailto:aymne011@gmail.com">
                        <Button className='text-white  hover:bg-slate-700 px-3 py-2 rounded-xl bg-transparent bo border-[rgb(79,195,247)] items-center '><div className='flex space-x-2 text-2xl items-center'><img src={gmail}width="30px" height="20px" className='items-center mx-2 ' /> aymne011@gmail.com</div> </Button>
                    </a>

                </div>
            </div>
            <hr className="w-[90%] h-1 max-sm:my-6 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div>
                <div className='flex  justify-center my-2 items-center space-x-4'>
                    <FaGithub className='text-white text-3xl  hover:bg-transparent  cursor-pointer animate-bounce'/>
                    <FaMedium className='text-white text-3xl  hover:bg-transparent  cursor-pointer animate-bounce' />
                    <FaLinkedin className='text-white text-3xl  hover:bg-transparent  cursor-pointer animate-bounce '/>
                </div>
                <div className="text-sm pb-2 mx-2 text-gray-500 sm:text-center dark:text-gray-400">© 2024.All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer