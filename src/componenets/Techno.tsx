import data from "../data/data"
import './styles.css'
function Techno() {
    return (
        <div id="#technology" className="my-10">
            <div className="text-center my-4 animate-bounce">
                <h1 className="font-inter text-4xl font-bold text-white">Projects </h1>
                <h2 className="font-poppins font-semibold text-[15px] gradient-text">Some of my works</h2>
            </div>
            <div className="flex demo space-x-8 sm:w-[80%] text-center mx-auto justify-center scro ove overflow-y-hidden ">
                {
                    data.techno.map((item)=>{
                        return <div className="">
                            <img src={item.icon} width={"800px"} height={"800px"}/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Techno