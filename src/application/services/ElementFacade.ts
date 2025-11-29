import { type Element } from "../../domain/entities/Element";
import  { GetAllElementsUseCase  } from "../useCases/elementsUseCase/GetAllElementsUseCase";
import  { GetElementsByAtomicNumberUseCase } from "../useCases/elementsUseCase/GetElementsByAtomicNumberUseCase";
import  { GetGroupElementsUseCase } from "../useCases/groupsUseCase/GetGroupElementsUseCase";
import  { GetPeriodElementsUseCase } from "../useCases/groupsUseCase/GetPeriodElementsUseCase";

export class ElementFacade {
    private readonly getAllElementsUseCase: GetAllElementsUseCase;
    private readonly getElementsByAtomicNumberUseCase: GetElementsByAtomicNumberUseCase;
    private readonly getGroupElementsUseCase: GetGroupElementsUseCase;
    private readonly getPeriodElementsUseCase: GetPeriodElementsUseCase;

    constructor(
        getAllElementsUseCase: GetAllElementsUseCase,
        getElementsByAtomicNumberUseCase: GetElementsByAtomicNumberUseCase,
        getGroupElementsUseCase: GetGroupElementsUseCase,
        getPeriodElementsUseCase: GetPeriodElementsUseCase
    ) {
        this.getAllElementsUseCase = getAllElementsUseCase;
        this.getElementsByAtomicNumberUseCase = getElementsByAtomicNumberUseCase;
        this.getGroupElementsUseCase = getGroupElementsUseCase;
        this.getPeriodElementsUseCase = getPeriodElementsUseCase;
    }

    async getAllElements(): Promise<Element[]> {
        return this.getAllElementsUseCase.execute();
    }

    async getElementByAtomicNumber(atomicNumber: number): Promise<Element | null> {
        return this.getElementsByAtomicNumberUseCase.execute(atomicNumber);
    }

    async getGroupElements(group: number): Promise<Element[]> {
        return this.getGroupElementsUseCase.execute(group);
    }

    async getPeriodElements(period: number): Promise<Element[]> {
        return this.getPeriodElementsUseCase.execute(period);
    }
}
