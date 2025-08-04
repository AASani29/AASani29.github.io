import { Trophy, Award, Users, Code } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: '2nd Runner-Up - Dhaka Divisional Hackathon',
      event: 'Technocrats V.2 organized by IIEC 2024',
      description: 'Secured 2nd runner-up position in the prestigious divisional hackathon',
      color: 'text-yellow-600'
    },
    {
      icon: Award,
      title: 'Top 24 Finalist - KUET Bitfest Hackathon 2025',
      event: 'Selected from 200+ teams nationwide',
      description: "Made it to the top 24 out of 200+ teams in KUET's Annual CSE Fest",
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'FGD Round - Battle of Minds 2024',
      event: 'BAT Business Competition with Team Silicon Suits',
      description: 'Reached top 35 out of 1250 teams in the prestigious business competition',
      color: 'text-purple-600'
    },
    {
      icon: Code,
      title: 'Multiple Contest Finalist',
      event: 'Various Programming & Business Competitions',
      description: 'Finalist in Code Catalyst, Admania OVC, and MindSparks competitions',
      color: 'text-emerald-600'
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Achievements</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Recognition and accomplishments in hackathons, competitions, and academic pursuits
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {achievement.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 mb-3">{achievement.event}</p>
                  <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Competition Participations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-blue-100">Hackathon Wins</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Teams Competed Against</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-blue-100">Professional Certificates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements