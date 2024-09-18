import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

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
    { name: "Washington, DC", coordinates: [-77.0369, 38.9072] },
    { name: "New York, NY", coordinates: [-74.0060, 40.7128] },
    { name: "Newark, NJ", coordinates: [-74.1724, 40.7357] },
    { name: "Hartford, CT", coordinates: [-72.6823, 41.7658] },
    { name: "Chicago, IL", coordinates: [-87.6298, 41.8781] }
];

const states = [
    "Texas", "Georgia", "Florida", "North Carolina", "New Jersey", "New York", "Connecticut", "Illinois", "District of Columbia"
];

const AboutMap = () => {
    const [hoveredCity, setHoveredCity] = useState(null);

    return (
        <div className="w-full max-w-5xl mx-auto my-36">
            <h1 className="text-gray-800 md:text-7xl text-5xl font-extrabold text-center my-10">Our Locations</h1>
            <ComposableMap projection="geoAlbersUsa">
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo: { properties: { name: string; }; rsmKey: unknown; }) => {
                            const cur = states.find(c => c === geo.properties.name);
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={cur ? "#b5c49d" : "#D6D6DA"}
                                    stroke="#FFFFFF"
                                    className="hover:fill-[#b5c49d] transition-colors duration-300"
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
                            );
                        })
                    }
                </Geographies>
                {cities.map(({ name, coordinates }) => (
                    <Marker
                        key={name}
                        coordinates={coordinates}
                        onMouseEnter={() => setHoveredCity(name)}
                        onMouseLeave={() => setHoveredCity(null)}
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
                        <Marker key={`hover-${name}`} coordinates={coordinates}>
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
        </div>
    );
};

export default AboutMap;