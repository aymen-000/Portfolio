import "./styles.css"
import data from '../data/data'

import {  useEffect, useState} from 'react'
import ShowProjetcs from './ShowProjects'

function Projects() {
    const [selected , setSeleceted] = useState("Image Classification")
    useEffect(()=>{
        console.log(selected)
    } , [])
    return (
        <div id='projects' className="my-6">
            <div className="text-center my-4 ani animate-bounce">
                <h1 className="font-inter text-4xl font-bold text-white">Projects </h1>
                <h2 className="font-poppins font-semibold text-[15px] gradient-text">Some of my works</h2>
            </div>
            <div className='text-center flex flex-wrap space-x-5 justify-center '>
                {
                    data.fields.map((item  )=>{
                        return (
                            <div className='my-2'>
                                
                                <button   onClick={()=>{setSeleceted(item)}} className='text-white  px-3 py-3 rounded-xl  border-2 border-[#56c1f2] text-xl font-bold glow-on-hover  ' > {item}</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className='my-2'>
                < ShowProjetcs field={selected}/>
            </div>
        </div>

    )
}

export default Projects