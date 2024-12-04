import React, { useState, useMemo, useEffect } from 'react';
import { Globe, MapPin, Search, ImageIcon, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';
import { geographyData } from "./db";

const useImageCache = () => {
    const [imageCache, setImageCache] = useState(new Set());

    const preloadImage = (src) => {
        if (!src || imageCache.has(src)) {
            console.log('Image already cached:', src);
            return;
        }

        console.log('Caching new image:', src);

        const img = new Image();
        img.onload = () => {
            setImageCache(prev => new Set(prev).add(src));
            console.log('Image cached successfully:', src);
        };
        img.src = src;
    };

    const isImageCached = (src) => {
        const cached = imageCache.has(src);
        console.log('Checking if image is cached:', src, cached);
        return cached;
    };

    return { preloadImage, isImageCached };
};

const ItemsPerPageSelector = ({ itemsPerPage, setItemsPerPage }) => {
    return (
        <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Items per page:</label>
            <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="p-1 border rounded-lg bg-white text-sm"
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
        </div>
    );
};

const parsePopulation = (population) => {
    // Handle special cases like research staff in Antarctica
    if (typeof population !== 'string' || population.includes('research staff')) {
        return 0;
    }

    // Remove commas and convert to lowercase
    const normalized = population.toLowerCase().replace(/,/g, '');

    // Extract the numeric value and unit
    const [, value, unit] = normalized.match(/^([\d.]+)\s*(billion|million|thousand)?/) || [null, 0, ''];

    // Convert to a common unit (millions)
    const numericValue = parseFloat(value);
    switch (unit) {
        case 'billion':
            return numericValue * 1000; // Convert to millions
        case 'thousand':
            return numericValue / 1000; // Convert to millions
        default: // 'million' or no unit
            return numericValue;
    }
};


const GeographyApp = () => {
    const [selectedSection, setSelectedSection] = useState('continents');
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ field: 'name', direction: 'asc' });
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const { preloadImage, isImageCached } = useImageCache();

    const ImageWithLoading = ({ src, alt, className, imageId }) => {
        const [isLoading, setIsLoading] = useState(!isImageCached(src));

        return (
            <div className="relative">
                {isLoading && (
                    <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 ${className}`}>
                        <ImageIcon className="w-8 h-8 text-gray-400 animate-pulse" />
                    </div>
                )}
                <img
                    src={src}
                    alt={alt}
                    className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
                    onLoad={() => setIsLoading(false)}
                    onError={() => setIsLoading(false)}
                    loading="lazy"
                />
            </div>
        );
    };

    const handleSort = (field) => {
        setSortConfig(prevSort => ({
            field,
            direction: prevSort.field === field && prevSort.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    // Update the sorting logic in the component
    const sortedAndFilteredItems = useMemo(() => {
        let items = geographyData[selectedSection] || [];

        // Filter items
        items = items.filter(item => {
            const searchLower = searchTerm.toLowerCase();
            const matchName = item.name.toLowerCase().includes(searchLower);
            const matchCapital = item.capital?.toLowerCase().includes(searchLower);
            const matchContinent = selectedSection === 'countries' &&
                item.continent.toLowerCase().includes(searchLower);

            return matchName || matchCapital || matchContinent;
        });

        // Sort items
        items = [...items].sort((a, b) => {
            let aValue = a[sortConfig.field];
            let bValue = b[sortConfig.field];

            if (sortConfig.field === 'population') {
                aValue = parsePopulation(aValue);
                bValue = parsePopulation(bValue);
            } else {
                // For other string fields
                aValue = String(aValue).toLowerCase();
                bValue = String(bValue).toLowerCase();
            }

            // Sort direction
            const multiplier = sortConfig.direction === 'asc' ? 1 : -1;

            if (sortConfig.field === 'population') {
                return (aValue - bValue) * multiplier;
            } else {
                return aValue > bValue ? multiplier : -multiplier;
            }
        });

        return items;
    }, [selectedSection, searchTerm, sortConfig]);

    const totalPages = Math.ceil(sortedAndFilteredItems.length / itemsPerPage);
    const paginatedItems = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return sortedAndFilteredItems.slice(startIndex, startIndex + itemsPerPage);
    }, [sortedAndFilteredItems, currentPage, itemsPerPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedSection, searchTerm, itemsPerPage]);

    useEffect(() => {
        paginatedItems.forEach(item => {
            preloadImage(item.flag || item.image);
            if (item.landmarks) {
                item.landmarks.forEach(landmark => preloadImage(landmark.image));
            }
        });
    }, [paginatedItems]);

    const InfoCard = ({ title, content }) => (
        <div className="bg-white/90 p-3 rounded-lg border">
            <div className="text-sm text-gray-600">{title}</div>
            <div className="font-semibold">{content}</div>
        </div>
    );

    const SortButton = ({ field, children }) => (
        <button
            onClick={() => handleSort(field)}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600"
        >
            {children}
            <ArrowUpDown size={16} className={sortConfig.field === field ? 'text-blue-600' : 'text-gray-400'} />
        </button>
    );

    const ItemList = useMemo(() => (
        <div className="space-y-4">
            <div className="flex gap-4 mb-2 p-2 bg-white rounded-lg border">
                <SortButton field="name">Name</SortButton>
                {selectedSection === 'countries' && (
                    <>
                        <SortButton field="capital">Capital</SortButton>
                        <SortButton field="continent">Continent</SortButton>
                    </>
                )}
                <SortButton field="population">Population</SortButton>
            </div>

            <div className="space-y-2">
                {paginatedItems.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className={`p-4 rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition-colors duration-200 ${
                            selectedItem?.id === item.id ? 'border-blue-500 border-2' : 'border'
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <ImageWithLoading
                                src={item.flag || item.image}
                                alt={item.name}
                                className="w-16 h-16 rounded-lg object-cover"
                                imageId={`list-${item.id}`}
                            />
                            <div className="flex-1">
                                <h3 className="font-semibold">{item.name}</h3>
                                {item.capital && (
                                    <p className="text-sm text-gray-600">Capital: {item.capital}</p>
                                )}
                                {item.continent && (
                                    <p className="text-sm text-gray-600">Continent: {item.continent}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-4">
                <ItemsPerPageSelector
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                />

                {totalPages > 1 && (
                    <div className="flex gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border bg-white disabled:opacity-50"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <span className="flex items-center px-4 py-2 bg-white border rounded-lg">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border bg-white disabled:opacity-50"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    ), [paginatedItems, selectedItem, currentPage, totalPages, sortConfig, itemsPerPage]);

    const DetailsView = useMemo(() => {
        if (!selectedItem) return null;

        return (
            <div className="border rounded-lg p-4 bg-white">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{selectedItem.name}</h3>

                    <ImageWithLoading
                        src={selectedItem.flag || selectedItem.image}
                        alt={selectedItem.name}
                        className="w-full h-48 rounded-lg object-cover"
                        imageId={`detail-${selectedItem.id}`}
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
                        <div className="bg-white/90 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-2">Facts</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                {selectedItem.facts.map((fact, index) => (
                                    <li key={index}>{fact}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {selectedItem.landmarks && (
                        <div className="bg-white/90 p-4 rounded-lg border">
                            <h4 className="font-semibold mb-2">Famous Landmarks</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {selectedItem.landmarks.map((landmark, index) => (
                                    <div key={index} className="space-y-1">
                                        <ImageWithLoading
                                            src={landmark.image}
                                            alt={landmark.name}
                                            className="w-full h-32 object-cover rounded-lg"
                                            imageId={`landmark-${selectedItem.id}-${index}`}
                                        />
                                        <p className="text-sm font-medium text-center">{landmark.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedItem.funFacts && (
                        <div className="bg-white/90 p-4 rounded-lg border">
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
        );
    }, [selectedItem]);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto p-4 space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-blue-600">World Explorer</h1>
                    <p className="text-lg text-gray-600">Learn about our amazing world!</p>
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => {
                            setSelectedSection('continents');
                            setSelectedItem(null);
                            setSearchTerm('');
                        }}
                        className={`flex items-center gap-2 p-3 rounded-lg transition-colors duration-200 ${
                            selectedSection === 'continents' ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-50'
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
                        className={`flex items-center gap-2 p-3 rounded-lg transition-colors duration-200 ${
                            selectedSection === 'countries' ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-50'
                        }`}
                    >
                        <MapPin size={24} />
                        Countries
                    </button>
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder={`Search ${selectedSection} by ${selectedSection === 'countries' ? 'name, capital, or continent' : 'name'}`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 pl-10 border rounded-lg"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            {selectedSection === 'continents' ? 'Continents' : 'Countries'}
                            <span className="text-sm text-gray-500 ml-2">
                                ({sortedAndFilteredItems.length} items)
                            </span>
                        </h2>
                        {ItemList}
                    </div>
                    {DetailsView}
                </div>
            </div>
        </div>
    );
};

export default GeographyApp;