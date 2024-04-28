
import { useQuery } from "@tanstack/react-query";

const useSubcategory = () => {
   const { data, isLoading, refetch } = useQuery({
     queryKey: ["/subcategories"],
     queryFn: async () => {
       const res = await fetch("http://localhost:5000/subcategories");
       const data = await res.json();
       return data;
     },
   });
   return { data, isLoading, refetch };
}

export default useSubcategory