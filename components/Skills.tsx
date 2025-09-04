const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Java" },
        { name: "C++" },
        { name: "C#" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "Next.js" },
        { name: "Spring Boot" },
        { name: "Express.js" },
        { name: "LangChain" },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Firebase" },
        { name: "AWS" },
        { name: "Azure" },
        { name: "Docker" },
      ],
    },
    {
      title: "AI/ML & Specializations",
      skills: [
        { name: "Machine Learning" },
        { name: "NLP" },
        { name: "RAG" },
        { name: "Computer Vision" },
        { name: "FastAPI" },
        { name: "TensorFlow" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    <span className="font-medium text-slate-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Bootstrap",
              "Git/GitHub",
              "RESTful APIs",
              "GraphQL",
              "WebSockets",
              "Microservices",
              "Agile/Scrum",
              "CI/CD",
              "Testing",
              "Solidity",
              "Blockchain",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-slate-700 rounded-full border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
