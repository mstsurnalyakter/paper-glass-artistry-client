import { useQuery } from "@tanstack/react-query";

const useBanner = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/banners");
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useBanner;
