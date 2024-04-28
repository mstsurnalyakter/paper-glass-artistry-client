import { useEffect, useState } from "react";
import useCraftItems from "../../hooks/useCraftItems";
import Spinner from "../../components/Spinner/Spinner";
import CraftItemCard from "../../components/CraftItemCard/CraftItemCard";


const Scrapbooking = () => {
    const { data, isLoading, refetch } = useCraftItems();
    const [scrapbooking, setScrapbooking] = useState([]);

     useEffect(() => {
       const filterData = data?.filter(
         (item) => item.subcategory_Name === "Scrapbooking"
       );
       setScrapbooking(filterData);
     }, [data, refetch]);

       if (isLoading) {
         return (
           <div className="flex items-center justify-center mt-44">
             <Spinner />
           </div>
         );
       }
        console.log(scrapbooking);


  return (
    <div>
      <h1 className="bg-gradient-to-r mt-10 text-center py-10 font-bold text-4xl from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent bg-clip-text animate-gradient">
        Scrapbooking
      </h1>

      <div className="grid  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 ">
        {scrapbooking?.length &&
          scrapbooking?.map((item) => (
            <CraftItemCard key={item?._id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default Scrapbooking