import { useQuery } from "@tanstack/react-query";

const useCraftItems = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["craftItems"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/paperGlasses");
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useCraftItems;
