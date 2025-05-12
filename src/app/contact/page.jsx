import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import Subscribe from "@/components/Subscribe";

const Contact = () => {
  return (
    <>
      <div className="pt-48 pb-20">
        <div className="container">
          <h1 className="heading">Get in Touch</h1>
          <p className="sub_heading font-light">We are here to help you.</p>
          <p className="sub_heading font-light">We will reach you in an instant.</p>
          <div className="navigation">
            <Breadcrumb />
          </div>
        </div>
      </div>

      <ContactForm />
      {/* <Subscribe /> */}
    </>
  );
};

export default Contact;
