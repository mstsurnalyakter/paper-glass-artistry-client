import Swal from "sweetalert2";
import CustomInput from "../../components/CustomInput/CustomInput";
import useBanner from "../../hooks/useBanner";
import useSubcategory from "../../hooks/useSubcategory";


const From = () => {
    const { data, isLoading, refetch } = useSubcategory()
    console.log(data);

    const handleForm = e =>{
         e.preventDefault();

         const form = e.target;

         const image = form.image.value;
         const item_name = form.item_name.value;
         const origins = form.origins.value;
         const key_elements = form.key_elements.value;

         const itemInfo = {
           image,
           item_name,
           origins,
           key_elements,
         };

         fetch("http://localhost:5000/subcategories", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(itemInfo),
         })
           .then((res) => res.json())
           .then((data) => {
             console.log(data);
             if (data.insertedId) {
               Swal.fire({
                 title: "Success!",
                 text: "Craft Item Added Successfully",
                 icon: "success",
                 confirmButtonText: "Cool",
               });
               form.reset();
             }
           });

    }
  return (
    <div>
      <form onSubmit={handleForm}>
        <CustomInput
          type="url"
          placeholder="Image"
          label="Image"
          id="image"
          name="image"
        />

        <CustomInput
          type="text"
          placeholder="Item Name"
          label="Item Name"
          id="item_name"
          name="item_name"
        />

        <div className="mt-4">
          <label className="block mb-2 " htmlFor="key_elements">
            Key Elements
          </label>

          <textarea
            required
            id="key_elements"
            name="key_elements"
            placeholder="Key Elements"
            className="textarea textarea-bordered w-full focus:outline-[#9856AC]"
          ></textarea>
        </div>
        <div className="mt-4">
          <label className="block mb-2 " htmlFor="origins">
            Origins
          </label>

          <textarea
            required
            id="origins"
            name="origins"
            placeholder="Origins"
            className="textarea textarea-bordered w-full focus:outline-[#9856AC]"
          ></textarea>
        </div>

        <input
          className="px-4 w-full py-2 mt-4 rounded  bg-gradient-to-r from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent animate-gradient
              duration-200 text-white cursor-pointer font-semibold"
          type="submit"
          value="Add Craft Item"
        />
      </form>
    </div>
  );
}

export default From