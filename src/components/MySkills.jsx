import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Frontend",
    color: "blue",
    skills: [
      ["HTML5 & CSS3", 95],
      ["JavaScript (ES6+)", 88],
      ["React.js", 90],
      ["Tailwind CSS", 92],
      ["Bootstrap", 85],
      ["Vite", 90],
    ],
  },
  {
    title: "Backend",
    color: "purple",
    skills: [
      ["Node.js", 83],
      ["Express.js", 80],
      ["Java", 70],
      ["REST APIs", 88],
      ["JWT Authentication", 80],
    ],
  },
  {
    title: "Database",
    color: "green",
    skills: [
      ["MongoDB", 90],
      ["MySQL", 87],
      ["Mongoose", 82],
    ],
  },
  {
    title: "CMS & Tools",
    color: "orange",
    skills: [
      ["WordPress & Elementor", 80],
      ["Git & GitHub", 90],
      ["Figma", 78],
      ["Postman", 80],
      ["VS Code", 95],
    ],
  },
];

const colors = {
  blue: {
    dot: "bg-blue-500",
    badge: "bg-blue-50 text-blue-600",
    gradient: "linear-gradient(90deg, rgb(79, 142, 247), rgba(79, 142, 247, 0.667))",
  },
  purple: {
    dot: "bg-purple-500",
    badge: "bg-purple-50 text-purple-600",
    gradient: "linear-gradient(90deg, rgb(168, 85, 247), rgba(168, 85, 247, 0.667))",
  },
  green: {
    dot: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-600",
    gradient: "linear-gradient(90deg, rgb(16, 185, 129), rgba(16, 185, 129, 0.667))",
  },
  orange: {
    dot: "bg-orange-500",
    badge: "bg-orange-50 text-orange-600",
    gradient: "linear-gradient(90deg, rgb(245, 158, 11), rgba(245, 158, 11, 0.667))",
  },
};

const MySkills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-24 px-6 lg:px-8 bg-gray-200"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-blue-500 tracking-widest uppercase border border-gray-200 bg-white">
            What I Know
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            <span className="bg-gradient-to-r from-[#2563eb] to-purple-500 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            A comprehensive overview of the technologies and tools I use to
            build modern web solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => {
            const color = colors[group.color];

            return (
              <div
                key={group.title}
                className="p-7 rounded-3xl bg-white shadow-sm"
              >
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 ${color.badge}`}
                >
                  <span className={`w-2 h-2 rounded-full ${color.dot}`}></span>
                  {group.title}
                </div>

                <div className="space-y-5">
                  {group.skills.map(([skill, percentage]) => (
                    <div key={skill}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium">
                          {skill}
                        </span>

                        <span className="text-xs text-gray-500 font-mono">
                          {percentage}%
                        </span>
                      </div>

                      <div className="h-1.5 bg-gray-300 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: color.gradient }}
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${percentage}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-lg text-gray-600 font-semibold">
            Other Expertise
          </h3>

          <div className="flex flex-wrap gap-5 justify-center">
            {[
              "REST APIs",
              "RESPONSIVE WEB DESIGN",
              "WEBSITE MAINTENANCE",
              "HOSTING & DEPLOYMENT",
              "API INTEGRATION",
              "BUG FIXING & DEBUGGING",
              "WEBSITE SECURITY",
              "AUTHENTICATION & AUTHORIZATION",
              "SPRING BOOT",
            ].map((item) => (
              <span
                key={item}
                className="border border-gray-200 bg-white rounded-full py-2 px-4 text-sm font-medium cursor-default hover:text-blue-500 shadow-sm transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;