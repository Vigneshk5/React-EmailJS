import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hwnzkmo",
        "template_upgm462",
        form.current,
        "_3KfyQcAR_wFd4vJ-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className="container">
        <h1 className="--text-center">contact us </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="--form-control --card --flex-center --dir-column"
        >
          <input
            type="text"
            placeholder="Full name"
            name="user_name"
            required
          />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea name="message" cols="30" rows="10"></textarea>
          <button type="submit" className="--btn --btn-primary">
            send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
