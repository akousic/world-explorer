export const geographyData = {
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
    countries:  [
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
                'Home to the world\'s largest population',
                'Has the world\'s longest land border',
                'Invented paper, gunpowder, and compass'
            ]
        },
        {
            id: 3,
            name: 'Japan',
            capital: 'Tokyo',
            currency: 'Japanese Yen (¥)',
            flag: 'https://flagcdn.com/w320/jp.png',
            population: '125.7 million',
            landmarks: [
                {
                    name: 'Mount Fuji',
                    location: 'Honshu',
                    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65'
                },
                {
                    name: 'Tokyo Tower',
                    location: 'Tokyo',
                    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc'
                },
                {
                    name: 'Fushimi Inari Shrine',
                    location: 'Kyoto',
                    image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36'
                }
            ],
            continent: 'Asia',
            funFacts: [
                'Has the world\'s oldest company, founded in 578 AD',
                'Consists of 6,852 islands',
                'Home to the bullet train network'
            ]
        },
        {
            id: 4,
            name: 'Germany',
            capital: 'Berlin',
            currency: 'Euro (€)',
            flag: 'https://flagcdn.com/w320/de.png',
            population: '83.2 million',
            landmarks: [
                {
                    name: 'Brandenburg Gate',
                    location: 'Berlin',
                    image: 'https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b'
                },
                {
                    name: 'Neuschwanstein Castle',
                    location: 'Bavaria',
                    image: 'https://images.unsplash.com/photo-1534313314376-a72289b6181e'
                },
                {
                    name: 'Cologne Cathedral',
                    location: 'Cologne',
                    image: 'https://images.unsplash.com/photo-1561134643-668f9e146dbd'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'First country to adopt Daylight Saving Time',
                'Has over 20,000 castles',
                'Birthplace of the printing press'
            ]
        },
        {
            id: 5,
            name: 'United Kingdom',
            capital: 'London',
            currency: 'Pound Sterling (£)',
            flag: 'https://flagcdn.com/w320/gb.png',
            population: '67.2 million',
            landmarks: [
                {
                    name: 'Big Ben',
                    location: 'London',
                    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383'
                },
                {
                    name: 'Tower Bridge',
                    location: 'London',
                    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad'
                },
                {
                    name: 'Stonehenge',
                    location: 'Wiltshire',
                    image: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Invented the English language',
                'Home to the world\'s oldest subway system',
                'No point is more than 70 miles from the sea'
            ]
        },
        {
            id: 6,
            name: 'France',
            capital: 'Paris',
            currency: 'Euro (€)',
            flag: 'https://flagcdn.com/w320/fr.png',
            population: '67.4 million',
            landmarks: [
                {
                    name: 'Eiffel Tower',
                    location: 'Paris',
                    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f'
                },
                {
                    name: 'Palace of Versailles',
                    location: 'Versailles',
                    image: 'https://images.unsplash.com/photo-1524396309943-e03f5249f002'
                },
                {
                    name: 'Mont Saint-Michel',
                    location: 'Normandy',
                    image: 'https://images.unsplash.com/photo-1596395819057-e37f55a8516b'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Most visited country in the world',
                'Has over 1,500 different types of cheese',
                'Invented the hot air balloon'
            ]
        },
        {
            id: 7,
            name: 'Italy',
            capital: 'Rome',
            currency: 'Euro (€)',
            flag: 'https://flagcdn.com/w320/it.png',
            population: '60.3 million',
            landmarks: [
                {
                    name: 'Colosseum',
                    location: 'Rome',
                    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5'
                },
                {
                    name: 'Leaning Tower of Pisa',
                    location: 'Pisa',
                    image: 'https://images.unsplash.com/photo-1522918448933-6c4a4c7c6b4a'
                },
                {
                    name: 'Venice Canals',
                    location: 'Venice',
                    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Home to the smallest country (Vatican City)',
                'Has the most UNESCO World Heritage sites in the world',
                'Invented the piano and thermometer'
            ]
        },
        {
            id: 8,
            name: 'Spain',
            capital: 'Madrid',
            currency: 'Euro (€)',
            flag: 'https://flagcdn.com/w320/es.png',
            population: '47.4 million',
            landmarks: [
                {
                    name: 'Sagrada Familia',
                    location: 'Barcelona',
                    image: 'https://images.unsplash.com/photo-1583779457094-ab6f77f7e30e'
                },
                {
                    name: 'Alhambra',
                    location: 'Granada',
                    image: 'https://images.unsplash.com/photo-1591292082066-0e10b3a4c251'
                },
                {
                    name: 'Plaza Mayor',
                    location: 'Madrid',
                    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Second most visited country in Europe',
                'Has the second-highest number of bars per capita',
                'Invented the mop and stapler'
            ]
        },
        {
            id: 9,
            name: 'Russia',
            capital: 'Moscow',
            currency: 'Russian Ruble (₽)',
            flag: 'https://flagcdn.com/w320/ru.png',
            population: '144.1 million',
            landmarks: [
                {
                    name: 'Saint Basil\'s Cathedral',
                    location: 'Moscow',
                    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d'
                },
                {
                    name: 'Winter Palace',
                    location: 'Saint Petersburg',
                    image: 'https://images.unsplash.com/photo-1548834925-e48f8a27ae6f'
                },
                {
                    name: 'Lake Baikal',
                    location: 'Siberia',
                    image: 'https://images.unsplash.com/photo-1551845041-63e8e76836ea'
                }
            ],
            continent: 'Asia/Europe',
            funFacts: [
                'Largest country by land area',
                'Contains one-fourth of the world\'s fresh water',
                'Home to the world\'s deepest lake'
            ]
        },
        {
            id: 10,
            name: 'Brazil',
            capital: 'Brasília',
            currency: 'Brazilian Real (R$)',
            flag: 'https://flagcdn.com/w320/br.png',
            population: '214 million',
            landmarks: [
                {
                    name: 'Christ the Redeemer',
                    location: 'Rio de Janeiro',
                    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325'
                },
                {
                    name: 'Amazon Rainforest',
                    location: 'North Brazil',
                    image: 'https://images.unsplash.com/photo-1516908205727-40afad9449a8'
                },
                {
                    name: 'Iguazu Falls',
                    location: 'Paraná',
                    image: 'https://images.unsplash.com/photo-1461609027498-7c0524aba788'
                }
            ],
            continent: 'South America',
            funFacts: [
                'Largest country in South America',
                'Home to the largest rainforest',
                'Only Portuguese-speaking country in Americas'
            ]
        },
        {
            id: 11,
            name: 'Canada',
            capital: 'Ottawa',
            currency: 'Canadian Dollar (C$)',
            flag: 'https://flagcdn.com/w320/ca.png',
            population: '38.2 million',
            landmarks: [
                {
                    name: 'CN Tower',
                    location: 'Toronto',
                    image: 'https://images.unsplash.com/photo-1503505129851-abaf7f6c544b'
                },
                {
                    name: 'Banff National Park',
                    location: 'Alberta',
                    image: 'https://images.unsplash.com/photo-1609867332114-c22069d2c2d4'
                },
                {
                    name: 'Niagara Falls',
                    location: 'Ontario',
                    image: 'https://images.unsplash.com/photo-1489447068241-b3490214e879'
                }
            ],
            continent: 'North America',
            funFacts: [
                'Second largest country by total area',
                'Has the longest coastline in the world',
                'Home to 10% of world\'s forests'
            ]
        },
        {
            id: 12,
            name: 'Australia',
            capital: 'Canberra',
            currency: 'Australian Dollar (A$)',
            flag: 'https://flagcdn.com/w320/au.png',
            population: '25.69 million',
            landmarks: [
                {
                    name: 'Sydney Opera House',
                    location: 'Sydney',
                    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be'
                },
                {
                    name: 'Great Barrier Reef',
                    location: 'Queensland',
                    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0'
                },
                {
                    name: 'Uluru',
                    location: 'Northern Territory',
                    image: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8'
                }
            ],
            continent: 'Australia',
            funFacts: [
                'Only country that\'s also a continent',
                'Home to 21 of the world\'s 25 most venomous snakes',
                'Has the largest coral reef system'
            ]
        },
        {
            id: 13,
            name: 'India',
            capital: 'New Delhi',
            currency: 'Indian Rupee (₹)',
            flag: 'https://flagcdn.com/w320/in.png',
            population: '1.4 billion',
            landmarks: [
                {
                    name: 'Taj Mahal',
                    location: 'Agra',
                    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523'
                },
                {
                    name: 'Red Fort',
                    location: 'Delhi',
                    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5'
                },
                {
                    name: 'Gateway of India',
                    location: 'Mumbai',
                    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f'
                }
            ],
            continent: 'Asia',
            funFacts: [
                'World\'s largest democracy',
                'Birthplace of chess, yoga, and Ayurveda',
                'Has over 1,600 languages spoken'
            ]
        },
        {
            id: 14,
            name: 'Mexico',
            capital: 'Mexico City',
            currency: 'Mexican Peso (MXN)',
            flag: 'https://flagcdn.com/w320/mx.png',
            population: '128.9 million',
            landmarks: [
                {
                    name: 'Chichen Itza',
                    location: 'Yucatan',
                    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de'
                },
                {
                    name: 'Teotihuacan',
                    location: 'Mexico State',
                    image: 'https://images.unsplash.com/photo-1585108743361-63d36a896842'
                },
                {
                    name: 'Frida Kahlo Museum',
                    location: 'Mexico City',
                    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a'
                }
            ],
            continent: 'North America',
            funFacts: [
                'Introduced chocolate, corn, and chili peppers to the world',
                'Home to the world\'s smallest volcano',
                'Has 68 indigenous languages'
            ]
        },
        {
            id: 15,
            name: 'South Korea',
            capital: 'Seoul',
            currency: 'South Korean Won (₩)',
            flag: 'https://flagcdn.com/w320/kr.png',
            population: '51.74 million',
            landmarks: [
                {
                    name: 'Gyeongbokgung Palace',
                    location: 'Seoul',
                    image: 'https://images.unsplash.com/photo-1538669715315-155098f0fb1d'
                },
                {
                    name: 'Namsan Tower',
                    location: 'Seoul',
                    image: 'https://images.unsplash.com/photo-1546874177-9e664107314e'
                },
                {
                    name: 'Jeju Island',
                    location: 'Jeju',
                    image: 'https://images.unsplash.com/photo-1588151146398-0ec5d8d1b729'
                }
            ],
            continent: 'Asia',
            funFacts: [
                'Has the fastest average internet speed',
                'Invented metal movable type printing',
                'World leader in mobile phone usage'
            ]
        },
        {
            id: 16,
            name: 'Egypt',
            capital: 'Cairo',
            currency: 'Egyptian Pound (E£)',
            flag: 'https://flagcdn.com/w320/eg.png',
            population: '104.3 million',
            landmarks: [
                {
                    name: 'Great Pyramids',
                    location: 'Giza',
                    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368'
                },
                {
                    name: 'Abu Simbel',
                    location: 'Aswan',
                    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750'
                },
                {
                    name: 'Valley of the Kings',
                    location: 'Luxor',
                    image: 'https://images.unsplash.com/photo-1544015759-62504364cbe3'
                }
            ],
            continent: 'Africa',
            funFacts: [
                'Home to the only remaining ancient wonder',
                'World\'s longest river runs through it',
                'Has over 7,000 years of recorded history'
            ]
        },
        {
            id: 17,
            name: 'Argentina',
            capital: 'Buenos Aires',
            currency: 'Argentine Peso (ARS)',
            flag: 'https://flagcdn.com/w320/ar.png',
            population: '45.8 million',
            landmarks: [
                {
                    name: 'Perito Moreno Glacier',
                    location: 'Santa Cruz',
                    image: 'https://images.unsplash.com/photo-1551356277-d6c46211d334'
                },
                {
                    name: 'Iguazu Falls',
                    location: 'Misiones',
                    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223'
                },
                {
                    name: 'Teatro Colón',
                    location: 'Buenos Aires',
                    image: 'https://images.unsplash.com/photo-1581526175426-97f0a8842323'
                }
            ],
            continent: 'South America',
            funFacts: [
                'Home to both highest and lowest points of South America',
                'First country to use fingerprints for identification',
                'Has the world\'s southernmost city'
            ]
        },
        {
            id: 18,
            name: 'Sweden',
            capital: 'Stockholm',
            currency: 'Swedish Krona (SEK)',
            flag: 'https://flagcdn.com/w320/se.png',
            population: '10.4 million',
            landmarks: [
                {
                    name: 'Vasa Museum',
                    location: 'Stockholm',
                    image: 'https://images.unsplash.com/photo-1589825743632-104d0805e12c'
                },
                {
                    name: 'Ice Hotel',
                    location: 'Jukkasjärvi',
                    image: 'https://images.unsplash.com/photo-1581571006390-5254816b2e95'
                },
                {
                    name: 'Stockholm Palace',
                    location: 'Stockholm',
                    image: 'https://images.unsplash.com/photo-1580995530287-5f6f6a7d0d2e'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Invented the three-point seatbelt and released it freely',
                'Has the world\'s first ice hotel',
                'Home to the Nobel Prizes'
            ]
        },
        {
            id: 19,
            name: 'Thailand',
            capital: 'Bangkok',
            currency: 'Thai Baht (฿)',
            flag: 'https://flagcdn.com/w320/th.png',
            population: '69.8 million',
            landmarks: [
                {
                    name: 'Grand Palace',
                    location: 'Bangkok',
                    image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed'
                },
                {
                    name: 'Wat Arun',
                    location: 'Bangkok',
                    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526'
                },
                {
                    name: 'Phi Phi Islands',
                    location: 'Krabi',
                    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a'
                }
            ],
            continent: 'Asia',
            funFacts: [
                'Only Southeast Asian country never colonized',
                'Home to the smallest mammal in the world',
                'Has hosted filming of over 250 Hollywood movies'
            ]
        },
        {
            id: 20,
            name: 'Greece',
            capital: 'Athens',
            currency: 'Euro (€)',
            flag: 'https://flagcdn.com/w320/gr.png',
            population: '10.7 million',
            landmarks: [
                {
                    name: 'Acropolis',
                    location: 'Athens',
                    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235'
                },
                {
                    name: 'Santorini',
                    location: 'Cyclades',
                    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077'
                },
                {
                    name: 'Parthenon',
                    location: 'Athens',
                    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Birthplace of democracy and the Olympic Games',
                'Has more archaeological museums than any other country',
                'No point in Greece is more than 85 miles from water'
            ]
        },
        {
            id: 21,
            name: 'Netherlands',
            capital: 'Amsterdam',
            currency: 'Euro (€)',
            flag: 'https://flagcdn.com/w320/nl.png',
            population: '17.4 million',
            landmarks: [
                {
                    name: 'Anne Frank House',
                    location: 'Amsterdam',
                    image: 'https://images.unsplash.com/photo-1558551649-e44c8f992010'
                },
                {
                    name: 'Keukenhof Gardens',
                    location: 'Lisse',
                    image: 'https://images.unsplash.com/photo-1520635360276-79f3dbd809f6'
                },
                {
                    name: 'Rijksmuseum',
                    location: 'Amsterdam',
                    image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'More bicycles than people',
                '26% of the country is below sea level',
                'Invented WiFi and Bluetooth'
            ]
        },
        {
            id: 22,
            name: 'Turkey',
            capital: 'Ankara',
            currency: 'Turkish Lira (₺)',
            flag: 'https://flagcdn.com/w320/tr.png',
            population: '84.3 million',
            landmarks: [
                {
                    name: 'Hagia Sophia',
                    location: 'Istanbul',
                    image: 'https://images.unsplash.com/photo-1545459720-adb8c75877e7'
                },
                {
                    name: 'Cappadocia',
                    location: 'Central Anatolia',
                    image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed'
                },
                {
                    name: 'Pamukkale',
                    location: 'Denizli',
                    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200'
                }
            ],
            continent: 'Asia/Europe',
            funFacts: [
                'Only city in the world located on two continents',
                'Birthplace of Santa Claus',
                'Introduced coffee to Europe'
            ]
        },
        {
            id: 23,
            name: 'Singapore',
            capital: 'Singapore',
            currency: 'Singapore Dollar (S$)',
            flag: 'https://flagcdn.com/w320/sg.png',
            population: '5.7 million',
            landmarks: [
                {
                    name: 'Marina Bay Sands',
                    location: 'Marina Bay',
                    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd'
                },
                {
                    name: 'Gardens by the Bay',
                    location: 'Marina Bay',
                    image: 'https://images.unsplash.com/photo-1506351421178-63b52a2d2562'
                },
                {
                    name: 'Merlion',
                    location: 'Marina Bay',
                    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170'
                }
            ],
            continent: 'Asia',
            funFacts: [
                'First country with night-time Formula One race',
                'Has the world\'s first vertical farm',
                'One of three city-states in the world'
            ]
        },
        {
            id: 24,
            name: 'Switzerland',
            capital: 'Bern',
            currency: 'Swiss Franc (CHF)',
            flag: 'https://flagcdn.com/w320/ch.png',
            population: '8.7 million',
            landmarks: [
                {
                    name: 'Matterhorn',
                    location: 'Zermatt',
                    image: 'https://images.unsplash.com/photo-1581007871115-f14bc016e0a7'
                },
                {
                    name: 'Chapel Bridge',
                    location: 'Lucerne',
                    image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95'
                },
                {
                    name: 'Chillon Castle',
                    location: 'Montreux',
                    image: 'https://images.unsplash.com/photo-1580913428735-bd3c269d6a82'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Has enough nuclear bunkers to shelter entire population',
                'Home to the world\'s longest tunnel',
                'Invented milk chocolate and fondue'
            ]
        },
        {
            id: 25,
            name: 'New Zealand',
            capital: 'Wellington',
            currency: 'New Zealand Dollar (NZ$)',
            flag: 'https://flagcdn.com/w320/nz.png',
            population: '5.1 million',
            landmarks: [
                {
                    name: 'Hobbiton',
                    location: 'Matamata',
                    image: 'https://images.unsplash.com/photo-1578148727851-971910591580'
                },
                {
                    name: 'Milford Sound',
                    location: 'South Island',
                    image: 'https://images.unsplash.com/photo-1577007510185-fd5727c89f84'
                },
                {
                    name: 'Sky Tower',
                    location: 'Auckland',
                    image: 'https://images.unsplash.com/photo-1578361178166-2cc3af0f7df3'
                }
            ],
            continent: 'Oceania',
            funFacts: [
                'Has more sheep than people',
                'First country to give women the right to vote',
                'Home to world\'s only flightless parrot'
            ]
        },
        {
            id: 26,
            name: 'Saudi Arabia',
            capital: 'Riyadh',
            currency: 'Saudi Riyal (SR)',
            flag: 'https://flagcdn.com/w320/sa.png',
            population: '35.3 million',
            landmarks: [
                {
                    name: 'Masjid al-Haram',
                    location: 'Mecca',
                    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb'
                },
                {
                    name: 'Kingdom Centre',
                    location: 'Riyadh',
                    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6'
                },
                {
                    name: 'Madain Saleh',
                    location: 'Al-Ula',
                    image: 'https://images.unsplash.com/photo-1548785421-1724dde3746d'
                }
            ],
            continent: 'Asia',
            funFacts: [
                'No rivers in the entire country',
                'Home to world\'s largest continuous sand desert',
                'Has the world\'s largest oil reserves'
            ]
        },
        {
            id: 27,
            name: 'Portugal',
            capital: 'Lisbon',
            currency: 'Euro (€)',
            flag: 'https://flagcdn.com/w320/pt.png',
            population: '10.3 million',
            landmarks: [
                {
                    name: 'Belém Tower',
                    location: 'Lisbon',
                    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b'
                },
                {
                    name: 'Pena Palace',
                    location: 'Sintra',
                    image: 'https://images.unsplash.com/photo-1562595410-5e0c9836f4d9'
                },
                {
                    name: 'Porto Old Town',
                    location: 'Porto',
                    image: 'https://images.unsplash.com/photo-1555881400-48ba13180e65'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Oldest country in Europe with the same borders',
                'World\'s largest cork producer',
                'Has the longest bridge in Europe'
            ]
        },
        {
            id: 28,
            name: 'Ireland',
            capital: 'Dublin',
            currency: 'Euro (€)',
            flag: 'https://flagcdn.com/w320/ie.png',
            population: '5 million',
            landmarks: [
                {
                    name: 'Cliffs of Moher',
                    location: 'County Clare',
                    image: 'https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e'
                },
                {
                    name: 'Trinity College',
                    location: 'Dublin',
                    image: 'https://images.unsplash.com/photo-1564959130747-897fb406b9af'
                },
                {
                    name: 'Blarney Castle',
                    location: 'Cork',
                    image: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'No snakes in the country',
                'Halloween originated in Ireland',
                'Home to the oldest pub in the world'
            ]
        },
        {
            id: 29,
            name: 'Poland',
            capital: 'Warsaw',
            currency: 'Polish Złoty (PLN)',
            flag: 'https://flagcdn.com/w320/pl.png',
            population: '37.8 million',
            landmarks: [
                {
                    name: 'Wawel Castle',
                    location: 'Krakow',
                    image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128'
                },
                {
                    name: 'Wieliczka Salt Mine',
                    location: 'Wieliczka',
                    image: 'https://images.unsplash.com/photo-157432413510-8a8f4b6b6b0d'
                },
                {
                    name: 'Old Town Market Place',
                    location: 'Warsaw',
                    image: 'https://images.unsplash.com/photo-1544985361-b420d7a77043'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Has the world\'s largest castle by land area',
                'Marie Curie was born here',
                'Home to world\'s largest outdoor Jesus statue'
            ]
        },
        {
            id: 30,
            name: 'Vietnam',
            capital: 'Hanoi',
            currency: 'Vietnamese Dong (₫)',
            flag: 'https://flagcdn.com/w320/vn.png',
            population: '97.3 million',
            landmarks: [
                {
                    name: 'Ha Long Bay',
                    location: 'Quang Ninh Province',
                    image: 'https://images.unsplash.com/photo-1528127269322-539801943592'
                },
                {
                    name: 'Hoi An Ancient Town',
                    location: 'Quang Nam Province',
                    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b'
                },
                {
                    name: 'Notre-Dame Cathedral',
                    location: 'Ho Chi Minh City',
                    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482'
                }
            ],
            continent: 'Asia',
            funFacts: [
                'World\'s largest cave is located here',
                'Second largest coffee exporter in the world',
                'Has the world\'s longest cable car'
            ]
        },
        {
            id: 31,
            name: 'Denmark',
            capital: 'Copenhagen',
            currency: 'Danish Krone (DKK)',
            flag: 'https://flagcdn.com/w320/dk.png',
            population: '5.8 million',
            landmarks: [
                {
                    name: 'Little Mermaid',
                    location: 'Copenhagen',
                    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc'
                },
                {
                    name: 'Nyhavn',
                    location: 'Copenhagen',
                    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc'
                },
                {
                    name: 'Tivoli Gardens',
                    location: 'Copenhagen',
                    image: 'https://images.unsplash.com/photo-1580674684081-07df76c38877'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Birthplace of LEGO',
                'Has been named happiest country multiple times',
                'No mountain higher than 172 meters'
            ]
        },
        {
            id: 32,
            name: 'Norway',
            capital: 'Oslo',
            currency: 'Norwegian Krone (NOK)',
            flag: 'https://flagcdn.com/w320/no.png',
            population: '5.4 million',
            landmarks: [
                {
                    name: 'Geirangerfjord',
                    location: 'Møre og Romsdal',
                    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38'
                },
                {
                    name: 'Trolltunga',
                    location: 'Hardangerfjord',
                    image: 'https://images.unsplash.com/photo-1516575154593-529134eb0d61'
                },
                {
                    name: 'Northern Lights',
                    location: 'Tromsø',
                    image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Invented the cheese slicer',
                'Has the world\'s longest road tunnel',
                'Home to the Nobel Peace Prize'
            ]
        },
        {
            id: 33,
            name: 'Israel',
            capital: 'Jerusalem',
            currency: 'Israeli New Shekel (₪)',
            flag: 'https://flagcdn.com/w320/il.png',
            population: '9.3 million',
            landmarks: [
                {
                    name: 'Western Wall',
                    location: 'Jerusalem',
                    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66'
                },
                {
                    name: 'Dead Sea',
                    location: 'Southern District',
                    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66'
                },
                {
                    name: 'Masada',
                    location: 'Southern District',
                    image: 'https://images.unsplash.com/photo-1587133599421-40a3cd84831e'
                }
            ],
            continent: 'Asia',
            funFacts: [
                'Has the lowest point on Earth',
                'More museums per capita than any other country',
                'Invented cherry tomatoes and drip irrigation'
            ]
        },
        {
            id: 34,
            name: 'Austria',
            capital: 'Vienna',
            currency: 'Euro (€)',
            flag: 'https://flagcdn.com/w320/at.png',
            population: '9 million',
            landmarks: [
                {
                    name: 'Schönbrunn Palace',
                    location: 'Vienna',
                    image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af'
                },
                {
                    name: 'Belvedere',
                    location: 'Vienna',
                    image: 'https://images.unsplash.com/photo-1573599852326-2aa2a3e8bb89'
                },
                {
                    name: 'Hallstatt',
                    location: 'Salzkammergut',
                    image: 'https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Birthplace of classical music',
                'First country to use postcards',
                'Home to the oldest zoo in the world'
            ]
        },
        {
            id: 35,
            name: 'Malaysia',
            capital: 'Kuala Lumpur',
            currency: 'Malaysian Ringgit (RM)',
            flag: 'https://flagcdn.com/w320/my.png',
            population: '32.7 million',
            landmarks: [
                {
                    name: 'Petronas Towers',
                    location: 'Kuala Lumpur',
                    image: 'https://images.unsplash.com/photo-1508263436159-c86c0548a146'
                },
                {
                    name: 'Batu Caves',
                    location: 'Selangor',
                    image: 'https://images.unsplash.com/photo-1518002054494-3a6f95d1d202'
                },
                {
                    name: 'Mount Kinabalu',
                    location: 'Sabah',
                    image: 'https://images.unsplash.com/photo-1564061240902-9ac224e4c106'
                }
            ],
            continent: 'Asia',
            funFacts: [
                'Home to the world\'s oldest rainforest',
                'Has the world\'s largest flower',
                'First country to issue e-passports'
            ]
        },
        {
            id: 36,
            name: 'Morocco',
            capital: 'Rabat',
            currency: 'Moroccan Dirham (MAD)',
            flag: 'https://flagcdn.com/w320/ma.png',
            population: '37 million',
            landmarks: [
                {
                    name: 'Hassan II Mosque',
                    location: 'Casablanca',
                    image: 'https://images.unsplash.com/photo-1553603227-2358aabe821e'
                },
                {
                    name: 'Medina of Fez',
                    location: 'Fez',
                    image: 'https://images.unsplash.com/photo-1548784003-c66900ca8365'
                },
                {
                    name: 'Jemaa el-Fnaa',
                    location: 'Marrakech',
                    image: 'https://images.unsplash.com/photo-1553603227-2358aabe821e'
                }
            ],
            continent: 'Africa',
            funFacts: [
                'World\'s oldest university is in Fez',
                'Has the largest desert movie studio',
                'Produces all of the world\'s argan oil'
            ]
        },
        {
            id: 37,
            name: 'Peru',
            capital: 'Lima',
            currency: 'Peruvian Sol (S/.)',
            flag: 'https://flagcdn.com/w320/pe.png',
            population: '33 million',
            landmarks: [
                {
                    name: 'Machu Picchu',
                    location: 'Cusco Region',
                    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377'
                },
                {
                    name: 'Nazca Lines',
                    location: 'Nazca Desert',
                    image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4'
                },
                {
                    name: 'Cusco Cathedral',
                    location: 'Cusco',
                    image: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129'
                }
            ],
            continent: 'South America',
            funFacts: [
                'Home to part of Amazon rainforest',
                'Has 28 of world\'s 32 climates',
                'Birthplace of potato cultivation'
            ]
        },
        {
            id: 38,
            name: 'Ukraine',
            capital: 'Kyiv',
            currency: 'Ukrainian Hryvnia (₴)',
            flag: 'https://flagcdn.com/w320/ua.png',
            population: '44 million',
            landmarks: [
                {
                    name: 'Saint Sophia Cathedral',
                    location: 'Kyiv',
                    image: 'https://images.unsplash.com/photo-1555990538-1e6c20f85b00'
                },
                {
                    name: 'Chernobyl',
                    location: 'Pripyat',
                    image: 'https://images.unsplash.com/photo-1555990538-1e6c20f85b00'
                },
                {
                    name: 'Tunnel of Love',
                    location: 'Klevan',
                    image: 'https://images.unsplash.com/photo-158758236481-3e40c9cc0e7c'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Home to Chernobyl Exclusion Zone',
                'Has world\'s deepest metro station',
                'Birthplace of first helicopter'
            ]
        },
        {
            id: 39,
            name: 'Chile',
            capital: 'Santiago',
            currency: 'Chilean Peso (CLP)',
            flag: 'https://flagcdn.com/w320/cl.png',
            population: '19.5 million',
            landmarks: [
                {
                    name: 'Torres del Paine',
                    location: 'Patagonia',
                    image: 'https://images.unsplash.com/photo-1518560043949-d2925f7b5e24'
                },
                {
                    name: 'Easter Island',
                    location: 'Pacific Ocean',
                    image: 'https://images.unsplash.com/photo-1510711789248-087061cda288'
                },
                {
                    name: 'Atacama Desert',
                    location: 'Northern Chile',
                    image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c'
                }
            ],
            continent: 'South America',
            funFacts: [
                'Has world\'s driest non-polar desert',
                'World\'s largest swimming pool',
                'Longest country in the world'
            ]
        },
        {
            id: 40,
            name: 'Finland',
            capital: 'Helsinki',
            currency: 'Euro (€)',
            flag: 'https://flagcdn.com/w320/fi.png',
            population: '5.5 million',
            landmarks: [
                {
                    name: 'Helsinki Cathedral',
                    location: 'Helsinki',
                    image: 'https://images.unsplash.com/photo-1559131583-f60df9269403'
                },
                {
                    name: 'Santa Claus Village',
                    location: 'Rovaniemi',
                    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e'
                },
                {
                    name: 'Northern Lights',
                    location: 'Lapland',
                    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Most coffee consumed per capita',
                'Home to thousands of islands',
                'Invented the sauna'
            ]
        },
        {
            id: 41,
            name: 'Hungary',
            capital: 'Budapest',
            currency: 'Hungarian Forint (HUF)',
            flag: 'https://flagcdn.com/w320/hu.png',
            population: '9.7 million',
            landmarks: [
                {
                    name: 'Parliament Building',
                    location: 'Budapest',
                    image: 'https://images.unsplash.com/photo-1565426873118-a17ed65d74b9'
                },
                {
                    name: 'Fisherman\'s Bastion',
                    location: 'Budapest',
                    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc'
                },
                {
                    name: 'Lake Balaton',
                    location: 'Transdanubia',
                    image: 'https://images.unsplash.com/photo-1610229663355-eaf1c0c82cca'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Invented the Rubik\'s Cube',
                'Has the largest thermal water cave system in Europe',
                'Home to the oldest subway in continental Europe'
            ]
        },
        {
            id: 42,
            name: 'Indonesia',
            capital: 'Jakarta',
            currency: 'Indonesian Rupiah (Rp)',
            flag: 'https://flagcdn.com/w320/id.png',
            population: '273.5 million',
            landmarks: [
                {
                    name: 'Borobudur Temple',
                    location: 'Java',
                    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272'
                },
                {
                    name: 'Komodo National Park',
                    location: 'East Nusa Tenggara',
                    image: 'https://images.unsplash.com/photo-1518456901772-8d7d34a3cc3b'
                },
                {
                    name: 'Bali Rice Terraces',
                    location: 'Bali',
                    image: 'https://images.unsplash.com/photo-1513625384750-063becaef3d5'
                }
            ],
            continent: 'Asia',
            funFacts: [
                'Largest archipelagic country with 17,500+ islands',
                'Home to Komodo dragons',
                'Has 139 active volcanoes'
            ]
        },
        {
            id: 43,
            name: 'Philippines',
            capital: 'Manila',
            currency: 'Philippine Peso (₱)',
            flag: 'https://flagcdn.com/w320/ph.png',
            population: '109.6 million',
            landmarks: [
                {
                    name: 'Chocolate Hills',
                    location: 'Bohol',
                    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2'
                },
                {
                    name: 'Rice Terraces',
                    location: 'Banaue',
                    image: 'https://images.unsplash.com/photo-1552647936-f983664742bb'
                },
                {
                    name: 'El Nido',
                    location: 'Palawan',
                    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392'
                }
            ],
            continent: 'Asia',
            funFacts: [
                'Composed of over 7,600 islands',
                'Has the world\'s smallest primate',
                'Sent first SMS message in the world'
            ]
        },
        {
            id: 44,
            name: 'Czech Republic',
            capital: 'Prague',
            currency: 'Czech Koruna (Kč)',
            flag: 'https://flagcdn.com/w320/cz.png',
            population: '10.7 million',
            landmarks: [
                {
                    name: 'Charles Bridge',
                    location: 'Prague',
                    image: 'https://images.unsplash.com/photo-1541849546-216549ae216d'
                },
                {
                    name: 'Prague Castle',
                    location: 'Prague',
                    image: 'https://images.unsplash.com/photo-1563429375-0833b9ca0856'
                },
                {
                    name: 'Český Krumlov',
                    location: 'South Bohemia',
                    image: 'https://images.unsplash.com/photo-1600623050499-84929aad17c9'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Highest beer consumption per capita',
                'Invented soft contact lenses',
                'Has the largest ancient castle complex'
            ]
        },
        {
            id: 45,
            name: 'Romania',
            capital: 'Bucharest',
            currency: 'Romanian Leu (RON)',
            flag: 'https://flagcdn.com/w320/ro.png',
            population: '19.2 million',
            landmarks: [
                {
                    name: 'Bran Castle',
                    location: 'Bran',
                    image: 'https://images.unsplash.com/photo-1588260692737-7f0eb78e0e42'
                },
                {
                    name: 'Palace of Parliament',
                    location: 'Bucharest',
                    image: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1'
                },
                {
                    name: 'Peleș Castle',
                    location: 'Sinaia',
                    image: 'https://images.unsplash.com/photo-1568707695395-05eefb2b8ad4'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Home to the heaviest building in the world',
                'First city to have electric street lighting in Europe',
                'Has the world\'s happiest cemetery'
            ]
        },
        {
            id: 46,
            name: 'Pakistan',
            capital: 'Islamabad',
            currency: 'Pakistani Rupee (₨)',
            flag: 'https://flagcdn.com/w320/pk.png',
            population: '220.9 million',
            landmarks: [
                {
                    name: 'Badshahi Mosque',
                    location: 'Lahore',
                    image: 'https://images.unsplash.com/photo-1588660431309-cf7e48f1cd7c'
                },
                {
                    name: 'K2',
                    location: 'Gilgit-Baltistan',
                    image: 'https://images.unsplash.com/photo-1598901796257-46e0f5421bb8'
                },
                {
                    name: 'Faisal Mosque',
                    location: 'Islamabad',
                    image: 'https://images.unsplash.com/photo-1588660431309-cf7e48f1cd7c'
                }
            ],
            continent: 'Asia',
            funFacts: [
                'Home to five of the world\'s 14 highest peaks',
                'Produces 80% of world\'s football supplies',
                'Has the world\'s highest ATM'
            ]
        },
        {
            id: 47,
            name: 'Colombia',
            capital: 'Bogotá',
            currency: 'Colombian Peso (COP)',
            flag: 'https://flagcdn.com/w320/co.png',
            population: '50.9 million',
            landmarks: [
                {
                    name: 'Salt Cathedral',
                    location: 'Zipaquirá',
                    image: 'https://images.unsplash.com/photo-1582728688206-9c4af9001dd1'
                },
                {
                    name: 'Cartagena Old Town',
                    location: 'Cartagena',
                    image: 'https://images.unsplash.com/photo-1583997052103-b4a1cb977b5e'
                },
                {
                    name: 'Valle del Cocora',
                    location: 'Quindío',
                    image: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6'
                }
            ],
            continent: 'South America',
            funFacts: [
                'Second most biodiverse country',
                'Only South American country with two coastlines',
                'World\'s largest producer of emeralds'
            ]
        },
        {
            id: 48,
            name: 'Belgium',
            capital: 'Brussels',
            currency: 'Euro (€)',
            flag: 'https://flagcdn.com/w320/be.png',
            population: '11.5 million',
            landmarks: [
                {
                    name: 'Grand Place',
                    location: 'Brussels',
                    image: 'https://images.unsplash.com/photo-1559682468-c32d066ca5a0'
                },
                {
                    name: 'Atomium',
                    location: 'Brussels',
                    image: 'https://images.unsplash.com/photo-1559113202-c916b8e44373'
                },
                {
                    name: 'Manneken Pis',
                    location: 'Brussels',
                    image: 'https://images.unsplash.com/photo-1600677396360-9c4e8e571d85'
                }
            ],
            continent: 'Europe',
            funFacts: [
                'Invented french fries',
                'Has the world\'s first stock exchange',
                'Produces over 220,000 tons of chocolate annually'
            ]
        },
        {
            id: 49,
            name: 'South Africa',
            capital: 'Pretoria',
            currency: 'South African Rand (R)',
            flag: 'https://flagcdn.com/w320/za.png',
            population: '60.1 million',
            landmarks: [
                {
                    name: 'Table Mountain',
                    location: 'Cape Town',
                    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99'
                },
                {
                    name: 'Kruger National Park',
                    location: 'Northeastern South Africa',
                    image: 'https://images.unsplash.com/photo-1551522435-a13d5e3592e0'
                },
                {
                    name: 'Robben Island',
                    location: 'Cape Town',
                    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99'
                }
            ],
            continent: 'Africa',
            funFacts: [
                'Only country with three capital cities',
                'Home to the world\'s largest diamond',
                'Has 11 official languages'
            ]
        },
        {
            id: 50,
            name: 'Nigeria',
            capital: 'Abuja',
            currency: 'Nigerian Naira (₦)',
            flag: 'https://flagcdn.com/w320/ng.png',
            population: '206 million',
            landmarks: [
                {
                    name: 'Zuma Rock',
                    location: 'Niger State',
                    image: 'https://images.unsplash.com/photo-1572816225927-d08fb138f2b2'
                },
                {
                    name: 'Olumo Rock',
                    location: 'Abeokuta',
                    image: 'https://images.unsplash.com/photo-1572816225927-d08fb138f2b2'
                },
                {
                    name: 'Nike Art Gallery',
                    location: 'Lagos',
                    image: 'https://images.unsplash.com/photo-1572816225927-d08fb138f2b2'
                }
            ],
            continent: 'Africa',
            funFacts: [
                'Most populous country in Africa',
                'Has the largest diversity of butterflies in Africa',
                'Third-largest film industry in the world'
            ]
        }
    ]
}