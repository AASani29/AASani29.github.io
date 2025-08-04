const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Passionate about creating innovative solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-800">Profile Summary</h3>
              <p className="text-slate-600 leading-relaxed">
                Passionate Software Engineering student with expertise in full-stack development, 
                AI/ML technologies, and modern web frameworks. Experienced in building innovative 
                solutions using Python, JavaScript, React, and Spring Boot.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Proven track record in hackathons with multiple finalist positions. Skilled in 
                cloud technologies and AI-powered applications, always eager to learn and tackle 
                new challenges in the ever-evolving tech landscape.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-800">Education</h3>
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-slate-800">Bachelor of Science in Software Engineering</h4>
                  <span className="text-sm text-slate-500">2022 - Present</span>
                </div>
                <p className="text-slate-600 mb-2">Islamic University of Technology</p>
                <p className="text-sm text-slate-500">CGPA: 3.51</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-slate-600 text-sm">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
                  <div className="text-slate-600 text-sm">Tech Stacks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                  <div className="text-slate-600 text-sm">Hackathon Wins</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">2+</div>
                  <div className="text-slate-600 text-sm">Work Experience</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-800">Certifications</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-800">Meta Front-End Developer Professional Certificate</h4>
                  <p className="text-sm text-slate-600">2024 • HTML5, CSS, JavaScript, React, Bootstrap</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-800">Supervised Machine Learning</h4>
                  <p className="text-sm text-slate-600">2025 • DeepLearning.AI • Regression and Classification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About