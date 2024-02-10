import Banner from "@/components/Banners/Banner";
import ContactForm from "@/components/ContactUs/ContactForm";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <Banner
        title={"Contact Us"}
        bgImg={"/images/contactbanner.webp"}
        page={"Contact Us"}
      />
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
