import HeroCounterSection from "./HeroCounterSection";
import HerointroSection from "./HerointroSection";

export default function Hero() {
  return (
    <>
      <HerointroSection />
      <HeroCounterSection />
      <hr className="text-gray-400 m-2 " />
    </>
  );
}
