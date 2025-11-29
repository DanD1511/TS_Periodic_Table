import { useState, useEffect } from "react";
import { ElementMapperImp } from "../../infrastructure/services/mappers/ElementMapperImp";
import { ElementRepositoryImp } from "../../infrastructure/repositories/ElementRepositoryImp";
import { GetAllElementsUseCase } from "../../application/useCases/elementsUseCase/GetAllElementsUseCase";
import type { Element } from "../../domain/entities/Element";

export const usePeriodicTable = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const mapper = new ElementMapperImp();
    const repository = new ElementRepositoryImp(mapper);
    const useCase = new GetAllElementsUseCase(repository);

    useCase.execute()
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