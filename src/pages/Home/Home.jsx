import Banner from "../../components/Banner/Banner";
import CraftItems from "../../components/CraftItems/CraftItems";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";


const Home = () => {
  return (
    <div>
      <DynamicTitle pageTitle="Home" />
      <div>
        <Banner/>
        <CraftItems/>
      </div>
    </div>
  );
}

export default Home