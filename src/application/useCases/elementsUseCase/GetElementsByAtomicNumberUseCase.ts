import {type Element} from "../../../domain/entities/Element";
import type { ElementRepository } from "../../contracts/ElementRepository";


export class GetElementsByAtomicNumberUseCase {
    private readonly elementRepository: ElementRepository;

    constructor(elementRepository: ElementRepository) 
    {
        this.elementRepository = elementRepository;
    }

    async execute(atomicNumber: number): Promise<Element>
    {
        const element = await this.elementRepository.GetElementByAtomicNumber(atomicNumber);

        if (!element) {
            throw new Error(`Element with atomic number ${atomicNumber} not found.`);
        }

        return element;
    }
}
