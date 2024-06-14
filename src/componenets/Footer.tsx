
import './styles.css'
import { Button } from 'flowbite-react'
function Footer() {
    return (
        <div>
            <div className='flex max-sm:flex-col justify-between mx-6 my-1 max-sm:items-center max-lg:space-y-3 '>
                <div>
                    <div className='text flex-col text-justify text-3xl -tracking-tighter'><div>Let's</div> <div>Work Together</div> </div>
                </div>
                <div>
                    <a href="mailto:aymne011@gmail.com">
                        <Button className='text-white hover:bg-slate-700 px-3 py-1 rounded-xl bg-transparent bo border-[rgb(79,195,247)] items-center'><div><img src='\src\assets\imgs\gmail.png' width="20px" height="20px" className='items-center mx-2 ' /></div> aymne011@gmail.com</Button>
                    </a>

                </div>
            </div>
            <hr className="w-[90%] h-1 max-sm:my-6 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div>
                <div className="text-sm pb-2 mx-2 text-gray-500 sm:text-center dark:text-gray-400">© 2024.All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer