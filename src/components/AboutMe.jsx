const AboutMe = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 mt-5 py-24 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-blue-500 tracking-widest uppercase border border-gray-200 bg-white">
            Get to know me
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            <span className="bg-gradient-to-r from-[#2563eb] to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mt-16">
          <div className="space-y-8">
            <div className="p-8 rounded-3xl space-y-5 bg-white shadow-sm border border-gray-100">
              <p className="text-gray-500 leading-relaxed text-base">
                I'm a passionate{" "}
                <span className="text-black font-medium">
                  MERN Full Stack Web Developer
                </span>{" "}
                from India pursuing a Bachelor of Computer Applications. I
                specialize in building modern, scalable web applications that
                combine elegant design with robust performance.
              </p>

              <p className="text-gray-500 leading-relaxed text-base">
                From crafting responsive frontends with React and Vite to
                building backend systems with Node.js, Express, and MongoDB, I
                focus on creating complete web solutions that are responsive,
                maintainable, and user-friendly.
              </p>

              <p className="text-gray-500 leading-relaxed text-base">
                I'm committed to continuous learning and improving my
                development skills while keeping up with modern tools and
                technologies.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl flex items-center gap-4 bg-white shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 1 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-medium">India</p>
                </div>
              </div>

              <a
                href="mailto:asing5702@gmail.com"
                className="p-4 rounded-xl flex items-center gap-4 bg-white shadow-sm border border-gray-100 hover:border-purple-300 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-500 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium">asing5702@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919119028638"
                className="p-4 rounded-xl flex items-center gap-4 bg-white shadow-sm border border-gray-100 hover:border-green-300 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-500 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Phone / WhatsApp
                  </p>
                  <p className="text-sm font-medium">+91 9119028638</p>
                </div>
              </a>
            </div>

            <a
              href="/resume.pdf"
              download="Ankit-Singh-Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-all shadow-lg text-sm"
            >
              Download Resume
            </a>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl flex items-center gap-5 hover:-translate-y-1 transition-transform bg-white shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-black">Education</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  Bachelor of Computer Applications
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  2024 – 2027
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl flex items-center gap-5 hover:-translate-y-1 transition-transform bg-white shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16 18 6-6-6-6" />
                  <path d="m8 6-6 6 6 6" />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-black">Skills</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  Skilled in building responsive, modern, and user-friendly
                  websites
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl flex items-center gap-5 hover:-translate-y-1 transition-transform bg-white shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                  <circle cx="12" cy="8" r="6" />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-black">Projects</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  25+ Completed Projects
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl text-center bg-white shadow-sm border border-gray-100">
                <div
                  className="text-3xl font-bold bg-gradient-to-r from-[#2563eb] to-purple-400 bg-clip-text text-transparent"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  25+
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Projects Done
                </div>
              </div>

              <div className="p-5 rounded-2xl text-center bg-white shadow-sm border border-gray-100">
                <div
                  className="text-3xl font-bold bg-gradient-to-r from-[#2563eb] to-purple-400 bg-clip-text text-transparent"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  25K+
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Lines of Code
                </div>
              </div>

              <div className="p-5 rounded-2xl text-center bg-white shadow-sm border border-gray-100">
                <div
                  className="text-3xl font-bold bg-gradient-to-r from-[#2563eb] to-purple-400 bg-clip-text text-transparent"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  20+
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Skills
                </div>
              </div>

              <div className="p-5 rounded-2xl text-center bg-white shadow-sm border border-gray-100">
                <div
                  className="text-3xl font-bold bg-gradient-to-r from-[#2563eb] to-purple-400 bg-clip-text text-transparent"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  5+
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Certifications
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;