'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code, Sparkles, Zap } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'achievements', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Experience', href: '#experience', icon: '💼' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Achievements', href: '#achievements', icon: '🏆' },
    { name: 'Contact', href: '#contact', icon: '📧' },
  ]

  return (
    <>
      {/* Unique Floating Navbar */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-blue-500/10' 
          : 'bg-transparent'
      } rounded-full px-6 py-3`}>
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Ahmed
              </span>
              <div className="flex items-center space-x-1">
                <Sparkles className="w-3 h-3 text-yellow-500 animate-pulse" />
                <span className="text-xs text-slate-600 font-medium">FullStack Dev</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation - Unique Pill Design */}
          <div className="hidden lg:flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.href.slice(1)
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg'
                    : 'text-slate-700 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
                {activeSection === item.href.slice(1) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Unique Slide-in Design */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div className={`absolute top-20 left-4 right-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl transform transition-all duration-500 ${
          isOpen ? 'translate-y-0 scale-100' : '-translate-y-10 scale-95'
        }`}>
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-4 px-6 py-4 rounded-2xl text-slate-700 hover:bg-white/10 hover:text-blue-600 transition-all duration-300 group ${
                  activeSection === item.href.slice(1) ? 'bg-gradient-to-r from-blue-600/10 to-emerald-600/10 text-blue-600' : ''
                }`}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="font-medium text-lg">{item.name}</span>
                <Zap className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Footer */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-slate-600">
              <span className="font-medium">Available for opportunities</span>
            </p>
            <div className="flex justify-center space-x-2 mt-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button - Unique Addition */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="#contact"
          className="group relative w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          <span className="relative text-2xl">💬</span>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </a>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 transition-all duration-300 ease-out"
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
          }}
        ></div>
      </div>
    </>
  )
}

export default Navigation