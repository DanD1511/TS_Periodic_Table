import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";

import type { ElementRepository } from "../application/contracts/ElementRepository";
import type { ElementMapper } from "../infrastructure/abstractions/ElementMapper";

import { ElementRepositoryImp } from "../infrastructure/repositories/ElementRepositoryImp";
import { ElementMapperImp } from "../infrastructure/services/mappers/ElementMapperImp";

import { GetAllElementsUseCase } from "../application/useCases/elementsUseCase/GetAllElementsUseCase";
import { GetElementsByAtomicNumberUseCase } from "../application/useCases/elementsUseCase/GetElementsByAtomicNumberUseCase";
import { GetGroupElementsUseCase } from "../application/useCases/groupsUseCase/GetGroupElementsUseCase";
import { GetPeriodElementsUseCase } from "../application/useCases/groupsUseCase/GetPeriodElementsUseCase";

import { ElementFacade } from "../application/services/ElementFacade";

const container = new Container();

container.bind<ElementMapper>(TYPES.ElementMapper).to(ElementMapperImp).inSingletonScope();
container.bind<ElementRepository>(TYPES.ElementRepository).to(ElementRepositoryImp).inSingletonScope();

container.bind<GetAllElementsUseCase>(TYPES.GetAllElementsUseCase).to(GetAllElementsUseCase);
container.bind<GetElementsByAtomicNumberUseCase>(TYPES.GetElementsByAtomicNumberUseCase).to(GetElementsByAtomicNumberUseCase);
container.bind<GetGroupElementsUseCase>(TYPES.GetGroupElementsUseCase).to(GetGroupElementsUseCase);
container.bind<GetPeriodElementsUseCase>(TYPES.GetPeriodElementsUseCase).to(GetPeriodElementsUseCase);

container.bind<ElementFacade>(TYPES.ElementFacade).to(ElementFacade).inSingletonScope();

export { container };
