import type { ElementCategory } from "../enums/ElementCategory";
import type { MatterPhase } from "../enums/MatterPhase";

export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: ElementCategory;
  phase: MatterPhase;       
  meltingPoint: number | null;
  boilingPoint: number | null;
  xpos: number;
  ypos: number;
  summary: string;
  discoveredBy: string;
}