import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Assistant Event Management Executive',
      company: 'IUT Computer Society',
      period: 'Oct 2024 – Present',
      location: 'Dhaka, Bangladesh',
      description: 'Organized events, managed logistics, and handled social media communications for the organization.',
      type: 'Part-time'
    },
    {
      title: 'Intern',
      company: 'Development Initiative for Social Advancement (DISA)',
      period: 'July 2024 – Sep 2024',
      location: 'Dhaka, Bangladesh',
      description: 'Collaborated with IT section and learned about NGO landscape, microfinance, and technology integration.',
      type: 'Internship'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Professional experience and internships that shaped my development journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-20 bg-slate-50 rounded-2xl p-6 w-full hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.title}</h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-2">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col sm:items-end space-y-1">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience