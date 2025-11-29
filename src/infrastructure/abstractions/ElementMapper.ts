import type { Element } from "../../domain/entities/Element";
import type { ElementDTO } from "../dtos/ElementDTO";


export interface ElementMapper 
{
    toEntity(dto: ElementDTO): Element;
}
