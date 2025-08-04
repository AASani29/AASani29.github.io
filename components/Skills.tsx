const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 75 },
        { name: 'C#', level: 70 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Spring Boot', level: 75 },
        { name: 'Express.js', level: 85 },
        { name: 'LangChain', level: 70 }
      ]
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Azure', level: 65 },
        { name: 'Docker', level: 70 }
      ]
    },
    {
      title: 'AI/ML & Specializations',
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'NLP', level: 75 },
        { name: 'RAG', level: 70 },
        { name: 'Computer Vision', level: 75 },
        { name: 'FastAPI', level: 80 },
        { name: 'TensorFlow', level: 65 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Git/GitHub', 'RESTful APIs', 'GraphQL', 'WebSockets', 'Microservices', 'Agile/Scrum', 'CI/CD', 'Testing', 'Solidity', 'Blockchain'].map((tech, index) => (
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
  )
}

export default Skills