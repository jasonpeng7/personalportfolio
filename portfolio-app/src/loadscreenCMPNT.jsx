import React from 'react';
import { useState, useEffect } from 'react';

const StackedLoadingOverlay = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);


    const ANIMATION_DURATION = 4000;
    const SEQUENCE_INTERVAL = 250;
    
    const VERTICAL_OFFSET = 20;
    const HORIZONTAL_OFFSET = 40;
    const EXTRA_VERTICAL_OFFSET = 10;  // Additional downward offset for just the fourth block


    const createLayerPaths = (xOffset = 0, yOffset = 0) => [
        {
            id: `top-${xOffset}-${yOffset}`,
            path: `M ${50.003 + xOffset} ${44.392 + yOffset} L ${65.233 + xOffset} ${53.181 + yOffset} L ${50.003 + xOffset} ${61.969 + yOffset} L ${34.769 + xOffset} ${53.181 + yOffset} L ${50.003 + xOffset} ${44.392 + yOffset}`,
            baseRotation: 0,
        },
        {
            id: `right-${xOffset}-${yOffset}`,
            path: `M ${65.72 + xOffset} ${71.586 + yOffset} L ${50.503 + xOffset} ${80.429 + yOffset} L ${50.503 + xOffset} ${62.834 + yOffset} L ${65.733 + xOffset} ${54.046 + yOffset} L ${65.72 + xOffset} ${71.586 + yOffset}`,
            baseRotation: 0,
        },
        {
            id: `bottom-${xOffset}-${yOffset}`,
            path: `M ${49.503 + xOffset} ${80.429 + yOffset} L ${34.269 + xOffset} ${71.623 + yOffset} L ${34.269 + xOffset} ${54.046 + yOffset} L ${49.503 + xOffset} ${62.834 + yOffset} L ${49.503 + xOffset} ${80.429 + yOffset}`,
            baseRotation: 0,
        },
    ];

    // Create four layers with different offsets to form a J shape
    const layers = [
        createLayerPaths(0, VERTICAL_OFFSET * 2),     // Bottom center
        createLayerPaths(-HORIZONTAL_OFFSET + 23, (VERTICAL_OFFSET * 2) + EXTRA_VERTICAL_OFFSET), // Bottom left
        createLayerPaths(0, VERTICAL_OFFSET),         // Middle
        createLayerPaths(0, 0),                       // Top
    ];

    useEffect(() => {
        setIsLoading(true);
        
        const overlayTimer = setTimeout(() => {
            setFadeOut(true);
        }, ANIMATION_DURATION);

        const fadeOutTimer = setTimeout(() => {
            setIsLoading(false);
        }, ANIMATION_DURATION + 450); // Add extra time for fade-out

        const sequenceTimer = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % 8);
        }, SEQUENCE_INTERVAL);

        return () => {
            clearTimeout(overlayTimer);
            clearInterval(sequenceTimer);
            clearTimeout(fadeOutTimer);
        };
    }, []);

    return (
        isLoading && (
            <div className={`z-50 fixed top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center z-50 ${fadeOut ? 'fade-out' : ''}`}>
                
                <div className='relative w-56 h-56'>
                    <svg viewBox="0 41.62 100 81.256" className='w-full h-full'>
                        <defs>
                            <filter id="drop-shadow-filter-1" colorInterpolationFilters="sRGB" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceAlpha" stdDeviation="1.5"/>
                                <feOffset dx="-2" dy="-1.5"/>
                                <feComponentTransfer result="offsetblur">
                                    <feFuncA type="linear" slope="0.22"/>
                                </feComponentTransfer>
                                <feFlood floodColor="#a549b858"/>
                                <feComposite in2="offsetblur" operator="in"/>
                                <feMerge>
                                    <feMergeNode/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            <filter id="filter-2" colorInterpolationFilters="sRGB" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceAlpha" stdDeviation="0.8"/>
                                <feOffset dx="-1" dy="-0.5"/>
                                <feComponentTransfer result="offsetblur">
                                    <feFuncA type="linear" slope="0.54"/>
                                </feComponentTransfer>
                                <feFlood floodColor="#001543"/>
                                <feComposite in2="offsetblur" operator="in"/>
                                <feMerge>
                                    <feMergeNode/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        {layers.map((layer, layerIndex) => (
                            <g key={`layer-${layerIndex}`} 
                               className={`transition-opacity duration-200 ${layerIndex === 3 ? 'opacity-100' : 'opacity-80'}`}>
                                {layer.map((part, partIndex) => (
                                    <g 
                                        key={part.id}
                                        className={`transition-opacity duration-200
                                            ${activeIndex >= partIndex && activeIndex < partIndex + 4 ? 'opacity-100' : 'opacity-0'}
                                        `}
                                        transform={`rotate(${part.baseRotation} 50 50)`}
                                    >
                                        <path
                                            d={part.path}
                                            style={{
                                                fill: `rgb(${layerIndex * 20}, ${21 + layerIndex * 20}, ${67 + layerIndex * 20})`,
                                                filter: "url(#filter-2)"
                                            }}
                                            className="transition-transform duration-200"
                                        />
                                    </g>
                                ))}
                            </g>
                        ))}
                    </svg>
                </div>
            </div>
        )
    );
};

export default StackedLoadingOverlay;