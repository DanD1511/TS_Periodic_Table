import type { Element } from "../../domain/entities/Element";
import type { ElementDTO } from "../dtos/ElementDTO";
import type { ElementRepository } from "../../application/contracts/ElementRepository";
import type { ElementMapper } from "../abstractions/ElementMapper";
import { injectable, inject } from "inversify";
import { TYPES } from "../../ioc/types";

@injectable()
export class ElementRepositoryImp implements ElementRepository 
{
    private elementMapper: ElementMapper;
    private readonly API_URL = "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json";

    constructor(@inject(TYPES.ElementMapper) elementMapper: ElementMapper) 
    {
        this.elementMapper = elementMapper;
    }

    async GetAllElements(): Promise<Element[]> {
        try {
            const response = await fetch(this.API_URL);
            
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }

            const data = await response.json();
            
            return data.elements.map((dto: ElementDTO) => this.elementMapper.toEntity(dto));

        } catch (error) {
            console.error("Repository Error:", error);
            return [];
        }
    }

    async GetGroupElements(group: number): Promise<Element[]> {
        const allElements = await this.GetAllElements();
        
        return allElements.filter(e => e.xpos === group);
    }

    async GetPeriodElements(period: number): Promise<Element[]> {
        const allElements = await this.GetAllElements();
        
        return allElements.filter(e => e.ypos === period);
    }

    async GetElementByAtomicNumber(atomicNumber: number): Promise<Element | null> {
        const allElements = await this.GetAllElements();
        return allElements.find(e => e.atomicNumber === atomicNumber) || null;
    }
}
