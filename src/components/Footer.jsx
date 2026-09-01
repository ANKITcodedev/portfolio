import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];

  return (
    <footer className="border-t border-gray-200 bg-black/30 mt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-5">
            <a
              href="#home"
              className="text-2xl font-bold tracking-normal text-gray-900"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Ankit
              <span className="text-blue-500">.</span>
            </a>

            <p className="text-gray-500 text-sm leading-relaxed">
              Professional Full Stack Web Developer from India, crafting
              modern, scalable, and beautifully designed web applications.
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/ANKITcodedev"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-gray-400 transition-all"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ankit-singh-a5a342305/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-all"
              >
                <FaLinkedin size={20} />
              </a>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href="mailto:asing5702@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-500 transition-colors"
              >
                <FaEnvelope size={18} className="text-purple-500 shrink-0" />
                <span className="truncate">asing5702@gmail.com</span>
              </a>

              <a
                href="tel:+919119028638"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-500 transition-colors"
              >
                <FaPhone size={18} className="text-green-500 shrink-0" />
                <span className="truncate">+91 9119028638</span>
              </a>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaMapMarkerAlt size={18} className="text-blue-500 shrink-0" />
                <span>India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-gray-600">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {quickLinks.map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-sm text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-gray-600">
              Tech Stack
            </h4>

            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Tailwind",
                "Express",
                "Java",
                "Spring Boot",
                "MySQL",
                "Git",
                "GitHub",
                "Postman",
                "WordPress",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-gray-100 border border-gray-200 rounded-lg text-xs text-gray-600 hover:text-blue-500 hover:border-blue-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex justify-center items-center text-sm text-gray-500">
          <p>© 2026 Ankit Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;