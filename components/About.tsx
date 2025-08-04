import {
  GraduationCap,
  Briefcase,
  Sparkles,
  Award,
  Laptop,
  Monitor,
  Brain,
  Link,
  Coffee,
  ArrowRight,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Passionate about creating innovative solutions that make a
            difference
          </p>
        </div>

        {/* Education Hero Section */}
        <div className="relative mb-20">
          <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-emerald-50 rounded-3xl p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex-1">
                  <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <span className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" /> Current Education
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-3">
                    Bachelor of Science in Software Engineering
                  </h3>
                  <p className="text-xl text-slate-600 mb-4">
                    Islamic University of Technology
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-500 font-medium">
                      2022 - Present
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <GraduationCap className="w-16 h-16 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 text-center hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
            <div className="text-slate-600 text-sm font-medium">
              Major Projects
            </div>
          </div>

          <div className="bg-white border-2 border-emerald-100 rounded-2xl p-6 text-center hover:border-emerald-200 transition-colors">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
            <div className="text-slate-600 text-sm font-medium">
              Tech Stacks
            </div>
          </div>

          <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 text-center hover:border-purple-200 transition-colors">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
            <div className="text-slate-600 text-sm font-medium">
              Competition Wins
            </div>
          </div>

          <div className="bg-white border-2 border-orange-100 rounded-2xl p-6 text-center hover:border-orange-200 transition-colors">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Laptop className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">2+</div>
            <div className="text-slate-600 text-sm font-medium">
              Work Experience
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-800 mb-3">
              Certifications & Learning
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto">
              Continuous professional development through industry-recognized
              programs
            </p>
          </div>

          <div className="space-y-6">
            {/* Featured Certification */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h4 className="text-xl font-bold text-slate-800">
                      Meta Front-End Developer Professional Certificate
                    </h4>
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      2024
                    </span>
                  </div>
                  <p className="text-slate-600 mb-3">
                    HTML5, CSS, JavaScript, React, Bootstrap
                  </p>
                  <a
                    href="https://coursera.org/share/521d3ca39c4f52dceb13365895f1ac1f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm cursor-target"
                  >
                    View Certificate <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Other Certifications Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-xs font-medium">
                    2025
                  </span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2 leading-tight">
                  Supervised Machine Learning
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  DeepLearning.AI • Regression and Classification
                </p>
                <a
                  href="https://coursera.org/share/89767edbcdc3ea89b97c61bd3b5ec571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm cursor-target"
                >
                  View Certificate <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Link className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-xs font-medium">
                    2025
                  </span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2 leading-tight">
                  Blockchain Specialization
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  University at Buffalo, The State University of New York
                </p>
                <a
                  href="https://www.coursera.org/account/accomplishments/specialization/84L08H34QGQ2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm cursor-target"
                >
                  View Certificate <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-xs font-medium">
                    2024
                  </span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2 leading-tight">
                  Java Spring Framework 6 with Spring Boot 3
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  Core Java, Spring Framework, Spring MVC, Spring Security,
                  Spring Boot
                </p>
                <a
                  href="https://www.udemy.com/certificate/UC-7de35b87-1c11-431f-9d34-b139a5484074/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm cursor-target"
                >
                  View Certificate <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
