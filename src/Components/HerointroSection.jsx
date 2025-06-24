import { Link } from "react-router";
import img from "../assets/img8.jpg";
import BtnArrow from "../Icons/BtnArrow";

export default function HerointroSection() {
    return (

      <div className="bg-cover bg-center relative min-h-[calc(100vh-150px)] my-5" style={{backgroundImage:`url(${img})`}}>
         <div className=" inset-0  absolute backdrop-blur-xs bg-black/40 z-10"/>
          <div className=" flex flex-col justify-center items-center w-full  h-full  absolute z-10 text-white space-y-5 text-center p-4">
            <h1 className=" text-4xl md:text-7xl font-heading">Bringing Life to Your Living Spaces</h1>
            <p className=" md:text-lg">Modern, affordable, elegant interior design solutions.</p>
            <Link className="py-2 px-4 bg-accent rounded-full shadow-2xl  outline shadow-accent outline-offset-3 outline-accent/60 hover:scale-95 transition flex items-center gap-2" to={'/services'}>
              View Projects <BtnArrow />
            </Link>
          </div>
       
      </div>
    );
}