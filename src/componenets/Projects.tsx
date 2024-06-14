import "./styles.css"
import data from '../data/data'
import { Button } from 'flowbite-react'
import {  useState} from 'react'
import ShowProjetcs from './ShowProjects'
function Projects() {
    const [selected , setSeleceted] = useState("machine Learning")
    return (
        <div id='projects'>
            <div className="text-center my-4">
                <h1 className="font-inter text-4xl font-bold text-white">Projects </h1>
                <h2 className="font-poppins font-semibold text-[15px] gradient-text">Some of my works</h2>
            </div>
            <div className='text-center flex flex-wrap space-x-5 justify-center '>
                {
                    data.fields.map((item )=>{
                        return (
                            <div className='my-2'>
                                
                                <Button onClick={()=>{setSeleceted(item)}} className='text-white hover:bg-slate-700 px-3 py-1 rounded-xl bg-transparent bo border-[rgb(79,195,247)] text-2xl font-bold' > {item}</Button>
                            </div>
                        )
                    })
                }
            </div>
            <div className='my-2'>
                {
                    
                    selected && < ShowProjetcs field={selected}/>
                }
            </div>
        </div>

    )
}

export default Projects