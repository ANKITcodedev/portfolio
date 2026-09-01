import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully! ✅");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Unable to connect to server.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-[#F4F7FC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-blue-500 tracking-widest uppercase border border-gray-200 bg-white">
            Get In Touch
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Let's Work{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Have a project in mind or want to discuss an opportunity? Feel
            free to reach out. I'm always open to discussing new projects and
            ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
            <h3
              className="text-2xl font-bold text-[#0d1829] mb-3"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Contact Information
            </h3>

            <p className="text-gray-500 leading-relaxed mb-8">
              You can contact me directly through email or phone. I'm happy to
              discuss your project, ideas, or any opportunities.
            </p>

            <div className="space-y-5">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=asing5702@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                  <FaEnvelope className="text-purple-500 text-xl" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-700 font-medium group-hover:text-purple-500 transition-colors">
                    asing5702@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919119028638"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                  <FaPhone className="text-green-500 text-xl" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-gray-700 font-medium group-hover:text-green-500 transition-colors">
                    +91 9119028638
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-blue-500 text-xl" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-gray-700 font-medium">India</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Follow Me</p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/ANKITcodedev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-400 transition-all"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/ankit-singh-a5a342305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-all"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
            <h3
              className="text-2xl font-bold text-[#0d1829] mb-6"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "Sending..."}
                className="w-full py-4 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-blue-800 transition-all shadow-lg disabled:opacity-60"
              >
                {status === "Sending..." ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-center text-sm font-medium text-gray-600">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

