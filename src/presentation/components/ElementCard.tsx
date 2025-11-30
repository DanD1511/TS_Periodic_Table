import React, { useState } from 'react';
import type { Element } from '../../domain/entities/Element';
import { getCategoryColor } from '../utils/categoryColors';
import { AtomModel } from './AtomModel'; 

interface Props {
    element: Element;
    isDimmed: boolean;
}

export const ElementCard: React.FC<Props> = ({ element, isDimmed }) => {
    const [isHovered, setIsHovered] = useState(false);
    const neonColor = getCategoryColor(element.category);
    
    const gridCol = element.xpos + 1;
    const gridRow = element.ypos + 1;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                gridColumn: gridCol, 
                gridRow: gridRow,
                width: '100%', height: '100%',
                minWidth: '40px', minHeight: '44px',

                transform: isHovered && !isDimmed ? 'scale(3.5)' : (isDimmed ? 'scale(0.95)' : 'scale(1)'),
                zIndex: isHovered ? 1000 : (isDimmed ? 0 : 1),
                
                backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.95)' : 'rgba(20, 20, 20, 0.8)',
                border: `1px solid ${isHovered ? neonColor : (isDimmed ? '#333' : neonColor)}`,
                boxShadow: isHovered 
                    ? `0 0 30px ${neonColor}66, inset 0 0 20px ${neonColor}22` 
                    : (isDimmed ? 'none' : `0 0 5px ${neonColor}44`),
                borderRadius: isHovered ? '8px' : '4px',
                
                display: 'flex', flexDirection: 'column',
                justifyContent: isHovered ? 'flex-start' : 'center',
                alignItems: 'center',
                
                cursor: 'pointer',
                opacity: isDimmed ? 0.2 : 1,
                filter: isDimmed ? 'grayscale(100%) blur(0.5px)' : 'none',
                transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                
                overflow: 'hidden', 
                position: 'relative'
            }}
        >
            {isHovered && !isDimmed && (
                <div style={{ position: 'absolute', inset: 0, opacity: 0.3, zIndex: 0 }}>
                    <AtomModel atomicNumber={element.atomicNumber} color={neonColor} />
                </div>
            )}

            <div style={{ 
                zIndex: 1, width: '100%', height: '100%', 
                display: 'flex', flexDirection: 'column', 
                padding: isHovered ? '4px' : '2px',
                justifyContent: 'space-between'
            }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 2px' }}>
                    <span style={{ 
                        fontSize: isHovered ? '4px' : '8px', 
                        color: isHovered ? '#aaa' : neonColor,
                        fontWeight: 'bold'
                    }}>
                        {element.atomicNumber}
                    </span>
                    {isHovered && (
                        <span style={{ fontSize: '4px', color: '#888' }}>
                            {element.atomicMass.toFixed(2)} u
                        </span>
                    )}
                </div>

                <strong style={{ 
                    fontSize: isHovered ? '12px' : '16px',
                    alignSelf: 'center', 
                    color: neonColor,
                    textShadow: `0 0 ${isHovered ? '10px' : '5px'} ${neonColor}`,
                    marginTop: isHovered ? '2px' : '0'
                }}>
                    {element.symbol}
                </strong>

                {isHovered ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}>
                        
                        <span style={{ 
                            fontSize: '5px', fontWeight: 'bold', color: 'white', 
                            textTransform: 'uppercase', letterSpacing: '0.5px',
                            background: 'rgba(0,0,0,0.6)', padding: '1px 3px', borderRadius: '2px'
                        }}>
                            {element.name}
                        </span>

                        <span style={{ fontSize: '3px', color: neonColor, opacity: 0.8 }}>
                            {element.category}
                        </span>

                        <div style={{ display: 'flex', gap: '4px', marginTop: '2px', fontSize: '3px', color: '#ccc' }}>
                            <span>🌡️ {element.meltingPoint ? `${Math.round(element.meltingPoint)}K` : '?'}</span>
                            <span>💧 {element.phase}</span>
                        </div>
                    </div>
                ) : (
                     <span style={{ fontSize: '0px' }}></span> 
                )}
            </div>
        </div>
    );
};
