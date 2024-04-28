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
         const name = form.name.value;
         const occupation = form.occupation.value;
         const testimonial = form.testimonial.value;

         const itemInfo = {
           image,
          name,
          occupation,
          testimonial
         };

         fetch("http://localhost:5000/testimonials", {
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
          placeholder="Name"
          label="Name"
          id="name"
          name="name"
        />
        <CustomInput
          type="text"
          placeholder="occupation"
          label="occupation"
          id="occupation"
          name="occupation"
        />

        <div className="mt-4">
          <label className="block mb-2 " htmlFor="testimonial">
            testimonial
          </label>

          <textarea
            required
            id="testimonial"
            name="testimonial"
            placeholder="testimonial"
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