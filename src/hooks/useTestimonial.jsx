
import { useQuery } from "@tanstack/react-query";
const useTestimonial = () => {
   const { data, isLoading, refetch } = useQuery({
     queryKey: ["testimonials"],
     queryFn: async () => {
       const res = await fetch("http://localhost:5000/testimonials");
       const data = await res.json();
       return data;
     },
   });
   return { data, isLoading, refetch };
}

export default useTestimonial