import { DirectionAwareHover } from "./ui/direction-aware-hover";
import alumni from "../data/alumni.json";

function AboutAlumni() {

    return (
      <>
        <div className="flex flex-col justify-center items-center h-full w-full my-10">
            <h1 className="text-gray-800 md:text-7xl text-6xl font-extrabold text-center">Our <b className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">Alumni</b></h1>
            <div className="flex flex-row flex-wrap gap-10 items-center justify-center m-10">
                {alumni.map((item, index) => (
                  <a href={item.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer">
                    <DirectionAwareHover imageUrl={item.image} className={`card-${index}`}>
                        <p className="font-bold text-xl pr-2">{item.name}</p>
                        <p className="font-normal text-sm pr-2">{item.position}</p>
                    </DirectionAwareHover>
                  </a>
                ))}
            </div>
        </div>
      </>
    )
}
  
export default AboutAlumni