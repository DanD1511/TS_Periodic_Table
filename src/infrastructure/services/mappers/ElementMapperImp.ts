import type { Element } from "../../../domain/entities/Element";
import type { ElementDTO } from "../../dtos/ElementDTO";
import type { ElementCategory } from "../../../domain/enums/ElementCategory"; // Importa tus tipos
import type { MatterPhase } from "../../../domain/enums/MatterPhase";

import type { ElementMapper } from "../../abstractions/ElementMapper";

export class ElementMapperImp implements ElementMapper{
    
    toEntity(dto: ElementDTO): Element {
        
        return {
            atomicNumber: dto.number,
            symbol: dto.symbol,
            name: dto.name,
            atomicMass: dto.atomic_mass,
            category: dto.category as ElementCategory, 
            phase: dto.phase as MatterPhase,
            meltingPoint: dto.melt,
            boilingPoint: dto.boil,
            xpos: dto.xpos,
            ypos: dto.ypos,
            summary: dto.summary,
            discoveredBy: dto.discovered_by
        };
    }
}
