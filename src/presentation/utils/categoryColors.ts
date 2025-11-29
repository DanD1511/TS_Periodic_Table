import type { ElementCategory } from "../../domain/enums/ElementCategory";

export const categoryColors: Record<ElementCategory, string> = {
    "alkali metal": "#FF3333",       // Rojo neón
    "alkaline earth metal": "#FF9933", // Naranja neón
    "transition metal": "#FF6666",   // Rojo claro
    "post-transition metal": "#99CCFF", // Azul claro
    "metalloid": "#33FFCC",          // Cian
    "polyatomic nonmetal": "#33FF33", // Verde neón
    "diatomic nonmetal": "#33FF33",   // Verde neón
    "noble gas": "#3399FF",          // Azul neón
    "lanthanide": "#FF66FF",         // Rosa neón
    "actinide": "#CC33FF",           // Púrpura neón
    "unknown": "#CCCCCC"             // Gris
};

export const getCategoryColor = (category: ElementCategory): string => {
    return categoryColors[category] || "#fff";
};