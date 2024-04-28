import Banner from "../../components/Banner/Banner";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";


const Home = () => {
  return (
    <div>
      <DynamicTitle pageTitle="Home" />
      <div>
        <Banner/>
      </div>
    </div>
  );
}

export default Home