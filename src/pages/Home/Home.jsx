import Banner from "../../components/Banner/Banner";
import CraftItems from "../../components/CraftItems/CraftItems";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";
import Subcategories from "../../components/Subcategories/Subcategories";


const Home = () => {
  return (
    <div>
      <DynamicTitle pageTitle="Home" />
      <div>
        <Banner/>
        <CraftItems/>
        <Subcategories/>
      </div>
    </div>
  );
}

export default Home