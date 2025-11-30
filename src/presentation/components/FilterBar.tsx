import React from 'react';

interface Props {
    onGroupSelect: (group: number) => void;
    onPeriodSelect: (period: number) => void;
    onReset: () => void;
}

export const FilterBar: React.FC<Props> = ({ onGroupSelect, onPeriodSelect, onReset }) => {
    return (
        <div style={{ 
            marginBottom: '20px', 
            padding: '15px', 
            background: '#222', 
            borderRadius: '8px',
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            border: '1px solid #444'
        }}>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Grupos:</span>
                {Array.from({ length: 18 }, (_, i) => i + 1).map(g => (
                    <button 
                        key={g} 
                        onClick={() => onGroupSelect(g)}
                        style={btnStyle}
                    >
                        {g}
                    </button>
                ))}
            </div>

            <div style={{ width: '1px', background: '#444' }}></div>

            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>Periodos:</span>
                {Array.from({ length: 7 }, (_, i) => i + 1).map(p => (
                    <button 
                        key={p} 
                        onClick={() => onPeriodSelect(p)}
                        style={btnStyle}
                    >
                        {p}
                    </button>
                ))}
            </div>

            <button 
                onClick={onReset}
                style={{ ...btnStyle, background: '#ff4444', color: 'white', fontWeight: 'bold' }}
            >
                RESET
            </button>
        </div>
    );
};

const btnStyle: React.CSSProperties = {
    background: '#333',
    color: 'white',
    border: '1px solid #555',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '5px 8px',
    fontSize: '10px',
    transition: '0.2s'
};
