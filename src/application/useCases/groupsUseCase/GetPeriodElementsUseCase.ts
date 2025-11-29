import { type Element } from "../../../domain/entities/Element";
import type { ElementRepository } from "../../contracts/ElementRepository";

export class GetPeriodElementsUseCase
{
    private readonly elementRepository: ElementRepository;

    constructor(elementRepository: ElementRepository){
        this.elementRepository = elementRepository;
    }

    async execute(period: number): Promise<Element[]>{
        const elements = await this.elementRepository.GetPeriodElements(period);    
        if(!elements || elements.length === 0){
            throw new Error(`No elements found for period ${period}.`);

        }
        return elements;
    }
}
