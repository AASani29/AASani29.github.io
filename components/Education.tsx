import {
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
} from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        {/* Current Education Hero Section */}
        <div className="relative mb-12">
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

        {/* Previous Education Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* College Education */}
          <div className="bg-white border-2 border-purple-100 rounded-2xl p-8 hover:border-purple-200 transition-all hover:shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                HSC
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Dhaka College
            </h3>
            <div className="flex items-center gap-2 text-slate-600 mb-4">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">2021</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-purple-600" />
              <div>
                <span className="text-slate-600 text-sm">GPA: </span>
                <span className="text-2xl font-bold text-purple-600">5.00</span>
                <span className="text-slate-500 text-sm ml-1">/ 5.00</span>
              </div>
            </div>
          </div>

          {/* School Education */}
          <div className="bg-white border-2 border-emerald-100 rounded-2xl p-8 hover:border-emerald-200 transition-all hover:shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-emerald-600" />
              </div>
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                SSC
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Ideal School and College
            </h3>
            <div className="flex items-center gap-2 text-slate-600 mb-4">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">2019</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-emerald-600" />
              <div>
                <span className="text-slate-600 text-sm">GPA: </span>
                <span className="text-2xl font-bold text-emerald-600">5.00</span>
                <span className="text-slate-500 text-sm ml-1">/ 5.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Excellence Section */}
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-3xl p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Award className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-slate-800">
              Academic Excellence
            </h3>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Consistently maintained excellent academic performance throughout my educational journey, 
            achieving perfect GPA in both HSC and SSC examinations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
