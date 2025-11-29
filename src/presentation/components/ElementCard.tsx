import React from 'react';
import type { Element } from '../../domain/entities/Element';
import { getCategoryColor } from '../utils/categoryColors';

interface Props {
    element: Element;
}

export const ElementCard: React.FC<Props> = ({ element }) => {
    const neonColor = getCategoryColor(element.category);

    return (
        <div
            style={{
                gridColumn: element.xpos, 
                gridRow: element.ypos,
                
                backgroundColor: 'rgba(16, 16, 16, 0.8)', 
                border: `2px solid ${neonColor}`, 
                boxShadow: `0 0 8px ${neonColor}, inset 0 0 4px ${neonColor}33`,
                color: neonColor, 
                borderRadius: '4px',
                
                padding: '4px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                position: 'relative',
                minWidth: '58px',
                minHeight: '62px',
                transition: 'all 0.2s ease-in-out'
            }}

            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.5)';
                e.currentTarget.style.boxShadow = `0 0 15px ${neonColor}, inset 0 0 8px ${neonColor}55`;
                e.currentTarget.style.zIndex = '10';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = `0 0 8px ${neonColor}, inset 0 0 4px ${neonColor}33`;
                e.currentTarget.style.zIndex = '1';
            }}
            title={element.summary}
        >
            <span style={{ fontSize: '9px', alignSelf: 'flex-start', opacity: 0.8 }}>
                {element.atomicNumber}
            </span>
            
            <strong style={{ 
                fontSize: '20px', 
                alignSelf: 'center', 
                textShadow: `0 0 5px ${neonColor}`
            }}>
                {element.symbol}
            </strong>
            
            <span style={{ fontSize: '9px', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', opacity: 0.9 }}>
                {element.name}
            </span>
        </div>
    );
};