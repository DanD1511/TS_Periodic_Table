import type { ElementCategory } from "../../domain/enums/ElementCategory";

export const categoryColors: Record<ElementCategory, string> = {
    "alkali metal": "#FF3333",
    "alkaline earth metal": "#FF9933",
    "transition metal": "#FF6666",
    "post-transition metal": "#99CCFF", 
    "metalloid": "#33FFCC", 
    "polyatomic nonmetal": "#33FF33", 
    "diatomic nonmetal": "#33FF33",  
    "noble gas": "#3399FF",          
    "lanthanide": "#FF66FF",         
    "actinide": "#CC33FF",           
    "unknown": "#CCCCCC"             
};

export const getCategoryColor = (category: ElementCategory): string => {
    return categoryColors[category] || "#fff";
};