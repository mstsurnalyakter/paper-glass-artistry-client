import MyItemCard from "../../components/MyItemCard/MyItemCard";
import Spinner from "../../components/Spinner/Spinner";
import useMyArtAndCraftList from "../../hooks/useMyArtAndCraftList"


const MyArtAndCraftList = () => {
  const { data, isLoading, refetch } = useMyArtAndCraftList();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-44">
        <Spinner />
      </div>
    );
  }

  console.log(data);
  return (
    <div>
      <h1 className="bg-gradient-to-r text-center py-10 font-bold text-4xl from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent bg-clip-text animate-gradient">
        My Art & Craft Lists
      </h1>

      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
        {data?.length &&
          data?.map((item) => <MyItemCard key={item?._id} item={item} />)}
      </div>
    </div>
  );
}

export default MyArtAndCraftList