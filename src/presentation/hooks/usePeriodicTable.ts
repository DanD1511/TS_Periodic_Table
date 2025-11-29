import { useState, useEffect } from "react";
import { useInjection } from "../context/ServiceContext";
import { TYPES } from "../../ioc/types"; 
import type { ElementFacade } from "../../application/services/ElementFacade";
import type { Element } from "../../domain/entities/Element";

export const usePeriodicTable = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const facade = useInjection<ElementFacade>(TYPES.ElementFacade);

  useEffect(() => {
    facade.getAllElements()
      .then((data) => {
        setElements(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); 

  return { elements, loading, error };
};
