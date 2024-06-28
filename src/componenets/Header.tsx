import  { useContext } from 'react'
import {Navbar } from 'flowbite-react';
import { DarkThemeToggle } from 'flowbite-react';
import { UserContext } from './UserContext';
function Header() {
    const {setTheme} = useContext(UserContext)
    return (
        <Navbar fluid rounded className='w-full p-5 bg-gray-800  dark:bg-[#1A1A1A] ' >
            <Navbar.Brand href='./' className='flex justify-evenly ml-6' >
                <div className='font-canilari text-3xl font-bold   text-white items-cente r my-2'>Boukhari Aimen</div >
            </Navbar.Brand>
            <div className='items-center md:hidden' onClick={()=>{setTheme(localStorage.getItem('flowbite-theme-mode') || 'dark')}}>  
                <DarkThemeToggle className='items-cetnter text-3xl text-white cursor-pointer ' />

            </div>
            <Navbar.Toggle className='flex'  />
            <Navbar.Collapse>
                <Navbar.Link className=" cursor-pointer " as={"div"}><a href='#home' className='text-[#C1C1C1] no-underline text-2xl'>Home</a></Navbar.Link>
                <Navbar.Link className=" cursor-pointer" as={"div"}><a href='#about' className='text-[#C1C1C1] no-underline text-2xl'>About</a></Navbar.Link>
                <Navbar.Link className=" cursor-pointer " as={"div"}><a href='#projects' className='text-[#C1C1C1] no-underline text-2xl'> Projects</a></Navbar.Link>
                <Navbar.Link className=" cursor-pointer " as={"div"}><a href="#services" className='text-[#C1C1C1] no-underline text-2xl'>Services</a></Navbar.Link>
                <Navbar.Link className=" cursor-pointer " as={"div"}><a href='#resume' className='text-[#C1C1C1] no-underline text-2xl' >Resume</a></Navbar.Link>

            </Navbar.Collapse>

            <div className='flex justify-evenly max-md:hidden '>
                <div className='items-center flex justify-between space-x-8 max-md:hidden'  >
                    <a href="/#contact">
                    <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-3  border border-blue-500 hover:border-transparent rounded-lg text-2xl glow-on-hover ">
                        Contact me
                    </button>
                    </a>
                    <div className='items-center' onClick={()=>{setTheme(localStorage.getItem('flowbite-theme-mode') || 'dark' )}}> 
                        <DarkThemeToggle className='items-cetnter text-3xl text-white cursor-pointer border-none z-10 ' />
                    </div>
                </div>
            </div>


        </Navbar>
    )
}

export default Header