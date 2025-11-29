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

    async GetElementByAtomicNumber(atomicNumber: number): Promise<Element | null> 
    {
        console.log("GetElementByAtomicNumber called with atomicNumber:", atomicNumber);
        throw new Error("Method not implemented.");
    }

    async GetGroupElements(group: number): Promise<Element[]> 
    {
        console.log("GetGroupElements called with group:", group);
        throw new Error("Method not implemented.");
    }

    async GetPeriodElements(period: number): Promise<Element[]> 
    {
        console.log("GetPeriodElements called with period:", period);
        throw new Error("Method not implemented.");
    }
}