import DreamShape from "../Components/DreamShape";
import Envairoments from "../Components/Envairoments";
import ExtraOrdinary from "../Components/ExtraOrdinary";
import Hero from "../Components/Hero";

export default function Home() {
    return (
        <div className="container mx-auto">
            <Hero />
            <Envairoments/>
            <ExtraOrdinary/>
            <DreamShape/>
        </div>
    );
}