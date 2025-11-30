import { useState, useEffect } from "react";
import { useInjection } from "../context/ServiceContext";
import { TYPES } from "../../ioc/types"; 
import type { ElementFacade } from "../../application/services/ElementFacade";
import type { Element, ElementCategory } from "../../domain/entities/Element"; // Importamos el tipo Category

export const usePeriodicTable = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ElementCategory | null>(null); // <--- NUEVO
  const [searchAtomicNumber, setSearchAtomicNumber] = useState<string>("");

  const facade = useInjection<ElementFacade>(TYPES.ElementFacade);

  useEffect(() => {
    facade.getAllElements().then(setElements).catch(console.error).finally(() => setLoading(false));
  }, []);

  const isElementDimmed = (element: Element): boolean => {
    if (searchAtomicNumber !== "") return element.atomicNumber.toString() !== searchAtomicNumber;
    if (!selectedGroup && !selectedPeriod && !selectedCategory) return false;

    if (selectedGroup && element.xpos === selectedGroup) return false;
    if (selectedPeriod && element.ypos === selectedPeriod) return false;
    if (selectedCategory && element.category === selectedCategory) return false;

    return true;
  };

  const resetFilters = () => {
      setSelectedGroup(null);
      setSelectedPeriod(null);
      setSelectedCategory(null);
      setSearchAtomicNumber("");
  };

  const toggleGroup = (group: number) => {
      resetFilters();
      setSelectedGroup(group);
  };

  const togglePeriod = (period: number) => {
      resetFilters();
      setSelectedPeriod(period);
  };

  const toggleCategory = (category: ElementCategory) => {
      resetFilters();
      setSelectedCategory(category); 
  };

  const searchByNumber = (val: string) => {
      resetFilters();
      setSearchAtomicNumber(val);
  }

  return { 
      elements, loading, 
      selectedGroup, selectedPeriod, selectedCategory, searchAtomicNumber,
      isElementDimmed, 
      toggleGroup, togglePeriod, toggleCategory, searchByNumber, resetFilters
  };
};