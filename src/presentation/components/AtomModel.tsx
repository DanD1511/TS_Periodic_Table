// src/presentation/components/AtomModel.tsx
import React, { useMemo } from 'react';
import { getElectronConfiguration } from '../utils/atomicUtils';

interface Props {
    atomicNumber: number;
    color: string;
}

export const AtomModel: React.FC<Props> = ({ atomicNumber, color }) => {
    const shells = useMemo(() => getElectronConfiguration(atomicNumber), [atomicNumber]);

    return (
        <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%', height: '100%',
            pointerEvents: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <div style={{
                width: '12px', height: '12px',
                background: color,
                borderRadius: '50%',
                boxShadow: `0 0 25px ${color}, 0 0 50px ${color}, 0 0 75px rgba(255,255,255,0.8)`, 
                zIndex: 10
            }} />

            {shells.map((electrons, shellIndex) => {
                const size = 35 + (shellIndex * 22); 
                const duration = 8 + (shellIndex * 4);
                
                return (
                    <div key={shellIndex} style={{
                        position: 'absolute',
                        width: `${size}%`, height: `${size}%`,
                        border: `1px solid rgba(255,255,255,0.15)`,
                        borderRadius: '50%',
                        animation: `spin ${duration}s linear infinite`,
                    }}>
                        {/* ELECTRONES */}
                        {Array.from({ length: electrons }).map((_, elecIndex) => {
                            const angle = (360 / electrons) * elecIndex;
                            return (
                                <div key={elecIndex} style={{
                                    position: 'absolute',
                                    top: '50%', left: '50%',
                                    width: '5px', height: '5px',
                                    background: '#fff',
                                    borderRadius: '50%',
                                    boxShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
                                    transform: `rotate(${angle}deg) translate(${size * 1.6}px) rotate(-${angle}deg)`
                                }} />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
