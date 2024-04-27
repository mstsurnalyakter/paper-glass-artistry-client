import { useQuery } from "@tanstack/react-query";
import useContextData from "./useContextData";

const useMyArtAndCraftList = () => {

    const {user} = useContextData()

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myArtAndCraftList"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/paperGlasses/${user.user_email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useMyArtAndCraftList;
