export default function ContactInfo() {
  return (
    <div
      className=" container mx-auto p-4  text-center  bg-white  rounded-md space-y-3 
     
    "
    >
      <h1 className="text-4xl md:text-6xl py-2 r font-heading gradient  ">
        Contact Information
      </h1>
      <div className="md:flex space-y-5 gap-10 justify-center ">
        <div className="w-fit font-semibold capitalize text-gray-600 space-y-4 text-left">
          <p>email:- astethic@gmail.com</p>
          <p>Phone:- +8801761632836</p>
          <p>Address :- Level-6, 38, Awal Centre, Banani</p>
          <p> Office Hours :- 10:00AM - 4:00PM </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0289759427683!2d90.41300417410153!3d23.78198248756552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7001c1c9785%3A0x77d0ae5c819377c8!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1750745820245!5m2!1sen!2sbd"
          className=" w-full h-full md:w-[400px] md:h-[280px] shadow-2xl"
          style={{ border: "1" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
