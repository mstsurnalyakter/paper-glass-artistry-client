import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import useCraftItems from "../../hooks/useCraftItems"


const AllArtAndCraftItems = () => {
  const { data, isLoading, refetch } = useCraftItems();

  if (isLoading) {
     return (
       <div className="flex items-center justify-center mt-44">
         <Spinner/>
       </div>
     );
  }
  return (
    <div>
      <h1 className="bg-gradient-to-r text-center py-10 font-bold text-4xl from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent bg-clip-text animate-gradient">
        {" "}
        All Art & Craft Items
      </h1>

      <div className="container p-2 shadow-md border mx-auto px-1 py-1 lg:py-10 lg:px-10">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left border-b border-[#9856AC] border-opacity-20 text-[#9856AC] ">
                <th className="p-3"></th>
                <th className="p-3"> Item Name</th>
                <th className="p-3">Subcategory Name</th>
                <th className="p-3"> Price</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Stock Status</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {data?.length &&
                data?.map((item, index) => {
                  return (
                    <tr
                      key={item._id}
                      className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                    >
                      <td>{index + 1}</td>
                      <td className="p-3">
                        <p>{item?.item_name}</p>
                      </td>
                      <td className="p-3">
                        <p>{item?.subcategory_Name}</p>
                      </td>
                      <td className="p-3">
                        <p>{item?.price}</p>
                      </td>
                      <td className="p-3">
                        <p>{item?.rating}</p>
                      </td>
                      <td className="p-3">
                        <p>{item?.stockStatus}</p>
                      </td>
                      <td className="p-3">
                        <button className="bg-[#9856AC] text-white px-3 py-2">
                          <Link to="/view-details-page"> View Details</Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllArtAndCraftItems