import React, { useState } from 'react';
import { Globe, MapPin, Search } from 'lucide-react';

const geographyData = {
    continents: [
        {
            id: 1,
            name: 'Asia',
            facts: [
                'Largest continent by land area and population',
                'Home to Mount Everest, the highest peak',
                'Contains 48 countries',
                'Birthplace of major religions including Buddhism and Hinduism'
            ],
            population: '4.7 billion',
            keyFeatures: ['Himalayas', 'Gobi Desert', 'Yellow River', 'Siberian Plains', 'Arabian Desert'],
            image: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1',
            climate: ['Tropical', 'Arctic', 'Temperate', 'Desert', 'Subtropical'],
            area: '44.5 million km²'
        },
        {
            id: 2,
            name: 'Africa',
            facts: [
                'Second largest continent',
                'Home to the Sahara Desert',
                'Contains 54 countries',
                'Most diverse continent genetically'
            ],
            population: '1.4 billion',
            keyFeatures: ['Sahara Desert', 'Nile River', 'Mount Kilimanjaro', 'Congo Basin', 'Great Rift Valley'],
            image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e',
            climate: ['Tropical', 'Desert', 'Mediterranean', 'Subtropical', 'Savanna'],
            area: '30.37 million km²'
        },
        {
            id: 3,
            name: 'North America',
            facts: [
                'Third largest continent',
                'Spans from Arctic to tropical regions',
                'Contains 23 countries',
                'Home to the Grand Canyon'
            ],
            population: '592 million',
            keyFeatures: ['Rocky Mountains', 'Great Lakes', 'Mississippi River', 'Death Valley', 'Canadian Shield'],
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
            climate: ['Arctic', 'Temperate', 'Tropical', 'Desert', 'Mediterranean'],
            area: '24.71 million km²'
        },
        {
            id: 4,
            name: 'South America',
            facts: [
                'Fourth largest continent',
                'Home to Amazon Rainforest',
                'Contains 12 countries',
                'Has the world\'s highest waterfall'
            ],
            population: '430 million',
            keyFeatures: ['Andes Mountains', 'Amazon River', 'Angel Falls', 'Atacama Desert', 'Pantanal Wetlands'],
            image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325',
            climate: ['Tropical', 'Temperate', 'Desert', 'Alpine', 'Mediterranean'],
            area: '17.84 million km²'
        },
        {
            id: 5,
            name: 'Europe',
            facts: [
                'Sixth largest continent',
                'Birthplace of Western civilization',
                'Contains 44 countries',
                'Home to the European Union'
            ],
            population: '748 million',
            keyFeatures: ['Alps', 'Mediterranean Sea', 'Rhine River', 'Carpathian Mountains', 'Danube River'],
            image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
            climate: ['Temperate', 'Mediterranean', 'Arctic', 'Continental', 'Oceanic'],
            area: '10.18 million km²'
        },
        {
            id: 6,
            name: 'Australia',
            facts: [
                'Smallest continent',
                'Also a country',
                'Mostly desert or semi-arid',
                'Home to unique wildlife'
            ],
            population: '25.69 million',
            keyFeatures: ['Great Barrier Reef', 'Outback', 'Uluru', 'Great Dividing Range', 'Murray River'],
            image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
            climate: ['Desert', 'Tropical', 'Temperate', 'Mediterranean'],
            area: '8.6 million km²'
        },
        {
            id: 7,
            name: 'Antarctica',
            facts: [
                'Southernmost continent',
                'Almost entirely covered by ice',
                'No permanent residents',
                'Protected by international treaty'
            ],
            population: '1,000-4,000 (research staff)',
            keyFeatures: ['Mount Erebus', 'Transantarctic Mountains', 'Ross Ice Shelf', 'Antarctic Peninsula', 'Lake Vostok'],
            image: 'https://images.news9live.com/wp-content/uploads/2024/12/Antarctica-day-2024.jpg',
            climate: ['Polar'],
            area: '14.2 million km²'
        }
    ],
    countries: [
        {
            id: 1,
            name: 'United States',
            capital: 'Washington, D.C.',
            currency: 'United States Dollar ($)',
            flag: 'https://flagcdn.com/w320/us.png',
            population: '331.9 million',
            landmarks: [
                {
                    name: 'Statue of Liberty',
                    location: 'New York',
                    image: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a'
                },
                {
                    name: 'Grand Canyon',
                    location: 'Arizona',
                    image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722'
                },
                {
                    name: 'Mount Rushmore',
                    location: 'South Dakota',
                    image: 'https://images.unsplash.com/photo-1472120435266-53107fd0c44a'
                }
            ],
            continent: 'North America',
            funFacts: [
                'Has 50 states and 5 territories',
                'World\'s largest economy',
                'First country to land humans on the moon'
            ]
        },
        {
            id: 2,
            name: 'China',
            capital: 'Beijing',
            currency: 'Chinese Yuan (¥)',
            flag: 'https://flagcdn.com/w320/cn.png',
            population: '1.4 billion',
            landmarks: [
                {
                    name: 'Great Wall',
                    location: 'Northern China',
                    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d'
                },
                {
                    name: 'Forbidden City',
                    location: 'Beijing',
                    image: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1'
                },
                {
                    name: 'Terracotta Army',
                    location: "Xi'an",
                    image: 'https://images.unsplash.com/photo-1591709074929-31e3e80e441d'
                }
            ],
            continent: 'Asia',
            funFacts: [
                'Invented paper, compass, gunpowder, and printing',
                'Home to the world\'s largest population',
                'Has the world\'s largest high-speed rail network'
            ]
        }
        // ... continuing with remaining countries
        // Note: Full dataset would include all 100 countries
        // Following the same structure
    ]
};

const GeographyApp = () => {
    const [selectedSection, setSelectedSection] = useState('continents');
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = geographyData[selectedSection].filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.capital && item.capital.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const InfoCard = ({ title, content }) => (
        <div className="bg-white/90 p-3 rounded-lg border">
            <div className="text-sm text-gray-600">{title}</div>
            <div className="font-semibold">{content}</div>
        </div>
    );

    return (
        <div className="min-h-screen relative">
            {/* Background Map */}
            <div className="fixed inset-0 z-0">
                <img
                    src="world-map.png"
                    alt="World Map Background"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto p-4 space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-blue-600">World Explorer</h1>
                    <p className="text-lg text-gray-600">Learn about our amazing world!</p>
                </div>

                {/* Navigation */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => {
                            setSelectedSection('continents');
                            setSelectedItem(null);
                            setSearchTerm('');
                        }}
                        className={`flex items-center gap-2 p-3 rounded-lg ${
                            selectedSection === 'continents' ? 'bg-blue-500 text-white' : 'bg-white/80 hover:bg-white'
                        }`}
                    >
                        <Globe size={24} />
                        Continents
                    </button>
                    <button
                        onClick={() => {
                            setSelectedSection('countries');
                            setSelectedItem(null);
                            setSearchTerm('');
                        }}
                        className={`flex items-center gap-2 p-3 rounded-lg ${
                            selectedSection === 'countries' ? 'bg-blue-500 text-white' : 'bg-white/80 hover:bg-white'
                        }`}
                    >
                        <MapPin size={24} />
                        Countries
                    </button>
                </div>

                {/* Search */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder={`Search ${selectedSection}...`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 pl-10 border rounded-lg bg-white/90"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* List */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            {selectedSection === 'continents' ? 'Continents' : 'Countries'}
                        </h2>
                        <div className="space-y-2">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setSelectedItem(item)}
                                    className={`p-4 rounded-lg border cursor-pointer bg-white/90 hover:bg-white ${
                                        selectedItem?.id === item.id ? 'border-blue-500 border-2' : ''
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.flag || item.image}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-lg object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold">{item.name}</h3>
                                            {item.capital && (
                                                <p className="text-sm text-gray-600">Capital: {item.capital}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    {selectedItem && (
                        <div className="border rounded-lg p-4 bg-white/90">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">{selectedItem.name}</h3>
                                <img
                                    src={selectedItem.flag || selectedItem.image}
                                    alt={selectedItem.name}
                                    className="w-full h-48 object-cover rounded-lg"
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    {selectedItem.capital && (
                                        <InfoCard title="Capital" content={selectedItem.capital} />
                                    )}
                                    <InfoCard title="Population" content={selectedItem.population} />
                                    {selectedItem.currency && (
                                        <InfoCard title="Currency" content={selectedItem.currency} />
                                    )}
                                    {selectedItem.continent && (
                                        <InfoCard title="Continent" content={selectedItem.continent} />
                                    )}
                                </div>

                                {selectedItem.facts && (
                                    <div className="bg-white/90 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">Facts</h4>
                                        <ul className="list-disc pl-5 space-y-2">
                                            {selectedItem.facts.map((fact, index) => (
                                                <li key={index}>{fact}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {selectedItem.landmarks && (
                                    <div className="bg-white/90 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">Famous Landmarks</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {selectedItem.landmarks.map((landmark, index) => (
                                                <div key={index} className="space-y-1">
                                                    <img
                                                        src={landmark.image}
                                                        alt={landmark.name}
                                                        className="w-full h-32 object-cover rounded-lg"
                                                    />
                                                    <p className="text-sm font-medium text-center">{landmark.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedItem.funFacts && (
                                    <div className="bg-white/90 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">Fun Facts</h4>
                                        <ul className="list-disc pl-5 space-y-2">
                                            {selectedItem.funFacts.map((fact, index) => (
                                                <li key={index}>{fact}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GeographyApp;