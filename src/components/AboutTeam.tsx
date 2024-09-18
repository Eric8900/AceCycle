import { DirectionAwareHover } from "./ui/direction-aware-hover";
import team from "../data/team.json";

function AboutTeam() {

    return (
      <>
        <div className="flex flex-col justify-center items-center h-full w-full my-10">
            <h1 className="text-gray-800 md:text-7xl text-6xl font-extrabold text-center">Our Team</h1>
            <div className="flex flex-row flex-wrap gap-10 items-center justify-center m-10">
                {team.map((item, index) => (
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
  
export default AboutTeam
  