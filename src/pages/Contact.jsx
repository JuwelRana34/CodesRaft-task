import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-230px)]">
      {/* heading  */}
      <div>
        <h1 className=" text-3xl md:text-6xl font-heading font-bold text-center underline decoration-accent/50 gradient ">
          contact us
        </h1>
      </div>
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
