import { useState, useRef } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const cities = [
    { name: "Katy, TX", coordinates: [-95.824126, 29.784405] },
    { name: "Sugar Land, TX", coordinates: [-95.6349, 29.6197] },
    { name: "Austin, TX", coordinates: [-97.7431, 30.2672] },
    { name: "Dallas, TX", coordinates: [-96.7970, 32.7767] },
    { name: "Kingwood, TX", coordinates: [-95.202771, 30.049681] },
    { name: "Cypress, TX", coordinates: [-95.692826, 29.968533] },
    { name: "Atlanta, GA", coordinates: [-84.1402, 34.2073] },
    { name: "Orlando, FL", coordinates: [-81.3792, 28.5383] },
    { name: "Charlotte, NC", coordinates: [-80.8431, 35.2271] },
    { name: "Ashburn, VA", coordinates: [-77.0369, 38.9072] },
    { name: "New York, NY", coordinates: [-74.0060, 40.7128] },
    { name: "Newark, NJ", coordinates: [-74.1724, 40.7357] },
    { name: "Hartford, CT", coordinates: [-72.6823, 41.7658] },
    { name: "Chicago, IL", coordinates: [-87.6298, 41.8781] }
];

const states = [
    "Texas", "Georgia", "Florida", "North Carolina", "New Jersey", "New York", "Connecticut", "Illinois", "Virginia"
];

const AboutMap = () => {
    const [hoveredCity, setHoveredCity] = useState("");
    const mapRef = useRef(null);

    return (
        <div className="flex flex-col justify-center items-center w-full max-w-5xl mx-auto my-36 relative" ref={mapRef}>
            <h1 className="text-gray-800 md:text-7xl text-5xl font-extrabold text-center my-10">Our Locations</h1>
            <TooltipProvider>
                <ComposableMap projection="geoAlbersUsa">
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const cur = states.find(c => c === geo.properties.name);
                                return (
                                    <Tooltip key={geo.rsmKey}>
                                        <TooltipTrigger asChild>
                                            <a href={`mailto:nishantg2706@gmail.com?subject=Create%20a%20Chapter%20in%20${geo.properties.name}&body=Hello%2C%0A%0AI'm%20interested%20in%20creating%20a%20chapter%20in%20${geo.properties.name}.%20Can%20you%20please%20provide%20more%20information%20on%20how%20to%20get%20started%3F%0A%0AThank%20you!`} target="_top">
                                                <Geography
                                                    geography={geo}
                                                    fill={cur ? "#b5c49d" : "#D6D6DA"}
                                                    stroke="#FFFFFF"
                                                    className="hover:fill-[#b5c49d] transition-colors duration-300 cursor-pointer"
                                                    style={{
                                                        default: {
                                                            outline: "none",
                                                            userSelect: "none",
                                                        },
                                                        hover: {
                                                            outline: "none",
                                                        },
                                                        pressed: {
                                                            outline: "none",
                                                        },
                                                    }}
                                                />
                                            </a>
                                        </TooltipTrigger>
                                        <TooltipContent className='z-[100]' side='top'>
                                            <p>Create a Chapter in {geo.properties.name}</p>
                                            <p className="text-sm text-gray-600">Click to send an email</p>
                                        </TooltipContent>
                                    </Tooltip>
                                );
                            })
                        }
                    </Geographies>
                    {cities.map(({ name, coordinates }) => (
                        <Marker
                            key={name}
                            coordinates={[coordinates[0], coordinates[1]]}
                            onMouseEnter={() => setHoveredCity(name)}
                            onMouseLeave={() => setHoveredCity("")}
                        >
                            <g>
                                <circle
                                    r={hoveredCity === name ? "30" : "25"}
                                    fill={hoveredCity === name ? "rgba(0, 162, 255, 0.4)" : "rgba(0, 162, 255, 0.2)"}
                                    strokeWidth="2"
                                    style={{
                                        transition: "all 200ms ease-in-out"
                                    }}
                                />
                                <circle
                                    r="3"
                                    fill={hoveredCity === name ? "rgba(0, 0, 255, 1)" : "rgba(0, 0, 255, 0.8)"}
                                    style={{
                                        transition: "all 200ms ease-in-out"
                                    }}
                                />
                            </g>
                        </Marker>
                    ))}
                    {cities.map(({ name, coordinates }) => (
                        hoveredCity === name && (
                            <Marker key={`hover-${name}`} coordinates={[coordinates[0], coordinates[1]]}>
                                <g className='hidden sm:block'>
                                    <rect
                                        x="-40"
                                        y="-50"
                                        width={name.length * 7 + 10}
                                        height="20"
                                        fill="white"
                                        opacity="0.9"
                                        rx="5"
                                    />
                                    <text
                                        textAnchor="start"
                                        x="-30"
                                        y="-36"
                                        style={{
                                            fill: "#333",
                                            fontSize: "12px",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {name}
                                    </text>
                                </g>
                                <g className='block sm:hidden'>
                                    <text
                                        textAnchor="start"
                                        x="-250"
                                        y="-36"
                                        style={{
                                            fill: "#333",
                                            fontSize: "50px",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {name}
                                    </text>
                                </g>
                            </Marker>
                        )
                    ))}
                </ComposableMap>
            </TooltipProvider>
            <h1 className='text-3xl font-bold'>Want to create a chapter?</h1>
            <h1 className='font-light'>Click on your state or email <span><a href='mailto:nishantg2706@gmail.com' className='text-lime-500 hover:text-lime-600'>nishantg2706@gmail.com</a></span></h1>
        </div>
    );
};

export default AboutMap;