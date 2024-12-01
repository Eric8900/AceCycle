"use client";
import { useState, useRef, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { FlipWords } from './ui/flip-words';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const cities = [
    { name: "Katy, TX", coordinates: [-95.824126, 29.784405] },
    { name: "Sugar Land, TX", coordinates: [-95.6349, 29.6197] },
    { name: "Austin, TX", coordinates: [-97.7431, 30.2672] },
    { name: "Dallas, TX", coordinates: [-96.7970, 32.7767] },
    { name: "Plano, TX", coordinates: [-96.744048, 33.080718] },
    { name: "Kingwood, TX", coordinates: [-95.202771, 30.049681] },
    { name: "Cypress, TX", coordinates: [-95.692826, 29.968533] },
    { name: "Atlanta, GA", coordinates: [-84.1402, 34.2073] },
    { name: "Orlando, FL", coordinates: [-81.3792, 28.5383] },
    { name: "Charlotte, NC", coordinates: [-80.8431, 35.2271] },
    { name: "Ashburn, VA", coordinates: [-77.0369, 38.9072] },
    { name: "New York, NY", coordinates: [-74.0060, 40.7128] },
    { name: "Newark, NJ", coordinates: [-74.1724, 40.7357] },
    { name: "Hartford, CT", coordinates: [-72.6823, 41.7658] },
    { name: "Chicago, IL", coordinates: [-87.6298, 41.8781] },
    { name: "Dublin, CA", coordinates: [-121.9358, 37.7022] },
    { name: "Pleasanton, CA", coordinates: [-121.8746, 37.6624] },
    { name: "San Ramon, CA", coordinates: [-121.9780, 37.7799] },
    { name: "Fremont, CA", coordinates: [-121.9886, 37.5485] },
    { name: "Mountain House, CA", coordinates: [-121.5432, 37.7814] },
    { name: "Indian Land, SC", coordinates: [-80.858197, 34.997231] },
    { name: "Louisville, KY", coordinates: [-85.758493, 38.239403] },
    { name: "St. Louis, MO", coordinates: [-90.200206, 38.616867] },
    { name: "College Park, MD", coordinates: [-76.937764, 38.992729] },
    { name: "Carmel, IN", coordinates: [-86.122084, 39.974733] },
    { name: "Philadelphia, PA", coordinates: [-75.162660, 39.961722] },
    { name: "Midland, MI", coordinates: [-84.247035, 43.614758] },
    { name: "Wilmington, DE", coordinates: [-75.548748, 39.739821] },
    { name: "Kenosha, WI", coordinates: [-87.827642, 42.579057] }
];

const internationalLocations = [
    { name: "Vancouver, Canada" },
    { name: "London, UK" },
    { name: "India" },
    { name: "Pakistan" }
];

const states = [
    "Texas", "Georgia", "Florida", "North Carolina", "New Jersey", "New York", "Connecticut", "Illinois", "Virginia", "California", "South Carolina", "Kentucky", "Missouri", "Maryland", "Indiana", "Pennsylvania", "Michigan", "Delaware", "Wisconsin"
];

const AboutMap = () => {
    const words = ["state", "national", "global"];
    const [hoveredCity, setHoveredCity] = useState("");
    const mapRef = useRef(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            const scrollWidth = scrollContainer.scrollWidth;

            const animateScroll = () => {
                if (scrollContainer.scrollLeft >= scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 0.5;
                }
                animationRef.current = requestAnimationFrame(animateScroll);
            };

            animationRef.current = requestAnimationFrame(animateScroll);

            return () => {
                if (animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                }
            };
        }
    }, []);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (!document.hidden && scrollRef.current) {
                const scrollWidth = scrollRef.current.scrollWidth;
                if (scrollRef.current.scrollLeft >= scrollWidth / 2) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center w-full max-w-5xl overflow-visible mx-auto my-36 relative" ref={mapRef}>
            <div className='flex flex-col justify-center items-center my-32 gap-5'>
                <h1 className="text-gray-800 text-7xl font-extrabold text-center">Our <b className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">Chapters</b></h1>
                <p className="opacity-80 text-gray-700 text-4xl font-light text-center">Recycling balls on the<FlipWords words={words} className='font-extrabold text-[#84cc16]'/>level</p>
            </div>
            {/* International Locations Section */}
            <div className="w-full text-center mb-10">
                <h2 className="text-3xl font-bold mb-4"><b className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">International</b> Locations</h2>
                <div className="flex justify-center space-x-8">
                    {internationalLocations.map((location) => (
                        <p key={location.name} className="text-xl font-semibold text-gray-700">{location.name}</p>
                    ))}
                </div>
            </div>
            {/* US Locations Section */}
            <div className="w-full text-center mb-10">
                <h2 className="text-3xl font-bold mb-4"><b className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">U.S.</b> Locations</h2>
                <div className="relative overflow-x-scroll sm:overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-5 sm:w-36 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-5 sm:w-36 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
                    <div
                        ref={scrollRef}
                        className="flex scrollbar-hide overflow-x-scroll whitespace-nowrap py-2"
                        style={{ width: '100%' }}
                    >
                        {cities.concat(cities).map((location, index) => (
                            <span key={`${location.name}-${index}`} className="inline-block px-4 text-xl font-semibold text-gray-700">
                                {location.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <ComposableMap projection="geoAlbersUsa">
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const cur = states.find(c => c === geo.properties.name);
                            return (
                                <a
                                    href={`mailto:nishantg2706@gmail.com?subject=AceCycle%3A%20Creating%20a%20New%20Chapter%20in%20%5BName%20Your%20City%5D%2C%20${geo.properties.name}&body=Hello%2C%0A%0AI%20would%20like%20to%20learn%20more%20about%20creating%20a%20new%20chapter%20for%20AceCycle.%20Could%20you%20please%20provide%20more%20information%20regarding%20how%20to%20get%20started%3F%20%0A%0AThank%20you!`}
                                    target="_blank" rel="noopener noreferrer">
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={cur ? "#84cc16" : "#D6D6DA"}
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
                                r={hoveredCity === name ? "8" : "5"}
                                fill={hoveredCity === name ? "rgba(20,20,20, 1)" : "rgba(20,20,20, 0.8)"}
                                style={{
                                    transition: "all 200ms ease-in-out"
                                }}
                            />
                        </g>
                    </Marker>
                ))}
            </ComposableMap>
            <div className="h-8 bg-white bg-opacity-75 p-2 text-center w-full">
                {hoveredCity && (
                    <p className="text-3xl font-semibold text-gray-800">{hoveredCity}</p>
                )}
            </div>
            <h1 className='text-3xl font-bold mt-16'>Want to start a chapter?</h1>
            <h1 className='font-light'>
                Click on your state or email&nbsp;
                <span>
                    <a
                        target="_blank" rel="noopener noreferrer"
                        href='mailto:nishantg2706@gmail.com?subject=AceCycle%3A%20Creating%20a%20New%20Chapter%20in%20%5BName%20Your%20City%5D%2C%20%5BName%20Your%20State%5D&body=Hello%2C%0A%0AI%20would%20like%20to%20learn%20more%20about%20creating%20a%20new%20chapter%20for%20AceCycle.%20Could%20you%20please%20provide%20more%20information%20regarding%20how%20to%20get%20started%3F%20%0A%0AThank%20you!'
                        className='text-lime-500 hover:text-lime-600'>
                        nishantg2706@gmail.com
                    </a>
                </span>
            </h1>
        </div>
    );
};

export default AboutMap;