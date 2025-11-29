import {type Element} from "../../../domain/entities/Element";
import type { ElementRepository } from "../../contracts/ElementRepository";

export class GetGroupElementsUseCase 
{
    private readonly elementRepository: ElementRepository;

    constructor(elementRepository: ElementRepository) 
    {
        this.elementRepository = elementRepository;
    }

    async execute(group: number): Promise<Element[]>
    {
        const elements = await this.elementRepository.GetGroupElements(group);
        if (!elements || elements.length === 0) {
            throw new Error(`No elements found for group ${group}.`);
        }

        return elements;
    }
}