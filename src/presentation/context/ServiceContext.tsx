import React, { createContext, useContext, ReactNode} from "react";
import { Container } from "inversify";
import { TYPES } from "../../ioc/types";

const InversifyContext = createContext<Container | null>(null);

interface ServiceProviderProps {
    container: Container;
    children: ReactNode;
}


export const ServiceProvider: React.FC<ServiceProviderProps> = ({ container, children }) => {
    return (
        <InversifyContext.Provider value={container}>
            {children}
        </InversifyContext.Provider>
    );
}

export function useInjection<T>(symbol: symbol): T 
{
    const container = useContext(InversifyContext);
    if (!container) {
        throw new Error("Inversify container is not provided.");
    }
    return container.get<T>(symbol);
}
