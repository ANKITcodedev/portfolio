import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const Info = () => {
  return (
    <div className="space-y-3 px-2 sm:pl-8">
      <p className="mt-11 text-md md:text-2xl font-medium text-[#4b6080]">
        Hi there, I'm
      </p>

      <h1
        className="mt-7 font-bold text-5xl lg:text-6xl tracking-normal leading-[1.05] text-[#0d1829] flex flex-wrap"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        Ankit{" "}
        <span className="bg-gradient-to-r from-[#2563eb] to-purple-600 bg-clip-text text-transparent pl-3">
          Singh
        </span>
      </h1>

      <div className="text-2xl lg:text-2xl font-semibold text-[#4b6080] h-10 flex items-center">
        FULL STACK WEB DEVELOPER
      </div>

      <p className="mt-7 text-[#4b6080] leading-relaxed max-w-lg text-base">
        Passionate Full Stack Web Developer from India with a Bachelor of
        Computer Applications. I build modern, scalable, and user-focused web
        applications, turning ideas into seamless digital experiences from
        concept to deployment.
      </p>

      <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4 px-2">
        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white rounded-full font-semibold hover:bg-blue-800 transition-all text-sm shadow-lg"
        >
          Hire Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>

        <a
          href="/resume.pdf"
          download="Ankit-Singh-Resume.pdf"
          className="px-8 py-4 mt-5 inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full font-semibold text-sm transition-all shadow-sm hover:border-blue-300 hover:text-blue-600"
        >
          <FaDownload />
          Download CV
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white border px-8 py-4 mt-5 border-gray-200 rounded-full font-semibold text-sm transition-all shadow-sm text-gray-500 hover:text-black hover:border-gray-300"
        >
          <FaEnvelope />
          Contact Me
        </a>
      </div>

      <div className="flex flex-wrap items-center mt-10 gap-4 px-6">
        <span className="text-gray-600 font-semibold text-lg">
          Follow me:
        </span>

        <a
          href="https://github.com/ANKITcodedev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-2xl border border-gray-100 rounded-full w-11 h-11 flex items-center justify-center bg-white shadow-sm text-gray-500 hover:text-black hover:border-gray-300 transition-all"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ankit-singh-a5a342305/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-2xl border border-gray-100 rounded-full w-11 h-11 flex items-center justify-center bg-white shadow-sm text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-all"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=asing5702@gmail.com"
          target="_blank"
          aria-label="Email"
          className="text-2xl border border-gray-100 rounded-full w-11 h-11 flex items-center justify-center bg-white shadow-sm text-gray-500 hover:text-purple-500 hover:border-purple-300 transition-all"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="mt-4 flex flex-wrap justify-between border-t border-gray-300 gap-4 mx-5">
        <div className="text-center">
          <div
            className="mt-6 bg-gradient-to-r from-[#2563eb] to-purple-600 bg-clip-text text-transparent text-3xl font-bold"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            25+
          </div>
          <div className="text-gray-500 text-xl">Projects</div>
        </div>

        <div className="text-center">
          <div
            className="mt-6 bg-gradient-to-r from-[#2563eb] to-purple-600 bg-clip-text text-transparent text-3xl font-bold"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            24/7
          </div>
          <div className="text-gray-500 text-xl">Support</div>
        </div>

        <div className="text-center">
          <div
            className="mt-6 bg-gradient-to-r from-[#2563eb] to-purple-600 bg-clip-text text-transparent text-3xl font-bold"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            25K+
          </div>
          <div className="text-gray-500 text-xl">Lines of Code</div>
        </div>
      </div>
    </div>
  );
};

export default Info;