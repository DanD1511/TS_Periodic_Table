export const getElectronConfiguration = (atomicNumber: number): number[] => {
    const shellCapacities = [2, 8, 18, 32, 32, 18, 8];
    
    let remainingElectrons = atomicNumber;
    const shells: number[] = [];

    for (const capacity of shellCapacities) {
        if (remainingElectrons <= 0) break;
        
        const electronsInShell = Math.min(remainingElectrons, capacity);
        shells.push(electronsInShell);
        remainingElectrons -= electronsInShell;
    }

    return shells;
};
