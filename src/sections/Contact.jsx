import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageStatus, setMessageStatus] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [emailError, setEmailError] = useState("");

  // Basic email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required.";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address (e.g., example@domain.com).";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "email") {
      setEmailError(validateEmail(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentEmailError = validateEmail(form.email);
    if (currentEmailError) {
      setEmailError(currentEmailError);
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      const autoReplyTemplateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;

      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        autoReplyTemplateID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setMessageStatus("success");
      setMessageText("Your message has been sent successfully!");
      setForm({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setMessageStatus("error");
      setMessageText("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessageStatus(null);
        setMessageText("");
      }, 5000);
    }
  };

  // Determine button text based on loading and message status
  const getButtonText = () => {
    if (loading) {
      return "Sending...";
    }
    if (messageStatus === "success") {
      return "Message Sent!";
    }
    if (messageStatus === "error") {
      return "Message Failed!";
    }
    return "Send Message";
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <h2 className="text-white font-semibold text-5xl md:text-6xl lg:text-6xl leading-tight mb-16 text-center">
          Get In Touch!
        </h2>
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={() => setEmailError(validateEmail(form.email))}
                    placeholder="What’s your email address?"
                    required
                    className={`rounded-md p-2 border ${
                      emailError ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 ${
                      emailError ? "focus:ring-red-500" : "focus:ring-blue-500"
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>
                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">{getButtonText()} </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#336c95] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
