import React from 'react';
import type { ElementCategory } from '../../domain/entities/Element';
import { categoryColors } from '../utils/categoryColors';

interface Props {
    selectedCategory: ElementCategory | null;
    onSelectCategory: (cat: ElementCategory) => void;
}

const categories = Object.keys(categoryColors) as ElementCategory[];

export const CategorySidebar: React.FC<Props> = ({ selectedCategory, onSelectCategory }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '200px' }}>
            <h3 style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', marginBottom: '10px' }}>
                Filters
            </h3>
            {categories.map(cat => {
                const color = categoryColors[cat];
                const isActive = selectedCategory === cat;

                return (
                    <button
                        key={cat}
                        onClick={() => onSelectCategory(cat)}
                        style={{
                            background: isActive ? `rgba(${parseInt(color.slice(1,3),16)},0,0,0.3)` : 'transparent',
                            border: 'none',
                            borderLeft: `3px solid ${isActive ? color : '#333'}`,
                            color: isActive ? 'white' : '#888',
                            padding: '8px 12px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            fontSize: '11px',
                            textTransform: 'uppercase',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        {cat}
                        {isActive && <span style={{width: 6, height: 6, background: color, borderRadius: '50%', boxShadow: `0 0 5px ${color}`}}/>}
                    </button>
                );
            })}
        </div>
    );
};
