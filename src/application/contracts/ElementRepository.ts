import { type Element } from "../../domain/entities/Element";

export interface ElementRepository 
{
    GetAllElements(): Promise<Element[]>;
    GetElementByAtomicNumber(atomicNumber: number): Promise<Element | null>;
    
    GetGroupElements(group: number): Promise<Element[]>;
    GetPeriodElements(period: number): Promise<Element[]>;
}
