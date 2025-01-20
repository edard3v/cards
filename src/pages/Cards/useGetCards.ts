import { API } from "@services/api/api";
import { useQuery } from "@tanstack/react-query";

export const useGetCards = () => {
  const filters = { limit: 20 };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cards", filters],
    queryFn: (tanStack) =>
      API.getCards({
        signal: tanStack.signal,
        ...filters,
      }),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { cards: data, isLoading, isError };
};
