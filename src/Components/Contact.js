import ContactBar from "./ContactBar";
import {
  ContactContainer,
  MapQueryContainer,
  ContactForm,
  ContactInput,
  ContactTextArea,
  ContactButton,
  Contactheading,
  ContactLocation,
} from "./StyledItems";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactBar></ContactBar>
      <MapQueryContainer>
        <ContactForm as="div">
          <ContactLocation
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31035.796237489034!2d75.07511602793235!3d13.50644487137644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb66fd4553d1df%3A0xe18a102e325d46dc!2sAgumbe%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1627223479939!5m2!1sen!2sin"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            loading="lazy"
            tabIndex="0"
            title="Location"
          ></ContactLocation>
        </ContactForm>
        <ContactForm>
          <Contactheading>SEND US YOUR QUERY</Contactheading>
          <ContactInput
            type="text"
            placeholder="Enter Your Name"
            name="from_name"
            pattern="[A-Za-z]"
            required
          ></ContactInput>
          <ContactInput
            type="email"
            placeholder="Enter Your Email"
            name="from_email"
            required
          ></ContactInput>
          <ContactTextArea
            placeholder="Enter Your Message"
            name="message"
            required
          ></ContactTextArea>
          <ContactButton type="submit">Submit</ContactButton>
        </ContactForm>
      </MapQueryContainer>
    </ContactContainer>
  );
};

export default Contact;
