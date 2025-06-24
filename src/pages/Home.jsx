import AllServices from "../Components/AllServices";
import Hero from "../Components/Hero";
import OurAchivMents from "../Components/OurAchivMents";
import ProvideServices from "../Components/ProvideServices";
import Subscribe from "../Components/Subscribe";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <ProvideServices />
      <OurAchivMents/>
      <AllServices />
      <Subscribe />
     
    </div>
  );
}
