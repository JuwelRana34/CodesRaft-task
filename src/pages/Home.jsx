import AllServices from "../Components/AllServices";
import ExtraOrdinary from "../Components/Subscribe";
import Hero from "../Components/Hero";
import OurAchivMents from "../Components/OurAchivMents";
import ProvideServices from "../Components/ProvideServices";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <ProvideServices />
      <OurAchivMents/>
      <ExtraOrdinary />
      <AllServices />
     
    </div>
  );
}
