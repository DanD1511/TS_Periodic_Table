import {type Element} from "../../../domain/entities/Element";
import type { ElementRepository } from "../../contracts/ElementRepository";
import { injectable, inject } from "inversify";
import { TYPES } from "../../../ioc/types";
@injectable()
export class GetElementsByAtomicNumberUseCase {
    private readonly elementRepository: ElementRepository;

    constructor(@inject(TYPES.ElementRepository)elementRepository: ElementRepository) 
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
