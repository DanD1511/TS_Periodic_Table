import type { Element } from "../../../domain/entities/Element";
import type { ElementRepository } from "../../contracts/ElementRepository";

export class GetAllElementsUseCase {
    private readonly elementRepository: ElementRepository;
    
    constructor(elementRepository: ElementRepository) {
        this.elementRepository = elementRepository;
    }

    async execute(): Promise<Element[]> {
        const elements = await this.elementRepository.GetAllElements();

        if (!elements || elements.length === 0) {
            throw new Error("No elements found.");
        }

        return elements;
    }
}
