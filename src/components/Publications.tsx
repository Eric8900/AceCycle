import React from 'react';
import BlurIn from './ui/blur-in';

interface Publication {
    id: string;
    title: string;
    imageUrl: string;
    pdfUrl: string;
}

const publications: Publication[] = [
    {
        id: '1',
        title: 'An Open-Access Machine Learning Framework for Sustainable Tennis Ball Management: Optimizing Use and Reducing Environmental Impact for Tennis Stores and Clubs',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Closeup_of_a_tennis_ball_%282%29.jpg/640px-Closeup_of_a_tennis_ball_%282%29.jpg',
        pdfUrl: 'https://www.preprints.org/manuscript/202410.0609/v2',
    },
];

const FeaturedPublications: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <BlurIn 
                delay={0.4}
                className="text-center md:text-8xl text-7xl text-gray-800 py-36">
                <b className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">Our</b> Research
            </BlurIn>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {publications.map((pub) => (
                    <a target="_blank" rel="noopener noreferrer" href={pub.pdfUrl} key={pub.id} className="block">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 max-w-lg">
                            <img
                                src={pub.imageUrl}
                                alt={pub.title}
                                width={300}
                                height={300}
                                className="w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FeaturedPublications;
