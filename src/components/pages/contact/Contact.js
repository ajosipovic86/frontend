import React from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
  <div className="contact-container">
    <div className="contact-info">
      <h2>Get in Touch with Us!</h2>
      <p>
        Thank you for visiting Freude Flora! We’d love to hear from you. Whether you have a question, need assistance, or want to learn more about our products and services, feel free to reach out.
      </p>
      <h3>Shop Info</h3>
      <p><strong>Address:</strong><br />123 Flora Street, Green City</p>
      <p><strong>Phone:</strong><br />+43 123 456 789</p>
      <p><strong>Email:</strong><br />freudeflora@gmail.com</p>
      <p><strong>Hours:</strong><br />Mon–Fri: 9am – 6pm</p>
    </div>

    <div className="contact-map">
      <iframe
        title="Freude Flora Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.9467908587!2d16.21165777065591!3d48.20817431176456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07f15b6a91a9%3A0x400fef04d1c2c20!2sVienna%2C%20Austria!5e0!3m2!1sen!2sus!4v1649897888612!5m2!1sen!2sus"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  <ContactForm />
</section>

   
  );
}

export default Contact;
