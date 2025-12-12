import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Trophy } from 'lucide-react';

const Home: React.FC = () => {
  const events = [
    {
      title: "New Admissions Open 2026",
      date: "Ongoing",
      desc: "Secure your child's future with us. Visit the administration office for details.",
      icon: <Users className="text-blue-500" size={24} />
    },
    {
      title: "Parent-Teacher Meeting",
      date: "January 15, 2026",
      desc: "Join us to discuss student progress and upcoming academic goals.",
      icon: <Calendar className="text-green-500" size={24} />
    },
    {
      title: "Winter Sports Week",
      date: "February 20, 2026",
      desc: "Cheer on our teams in athletics, football, and volleyball!",
      icon: <Trophy className="text-orange-500" size={24} />
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="School Campus" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Minds,<br/> 
            <span className="text-blue-400">Shaping Futures</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Welcome to Bal Aawasiya Vidhyalaya in Dhanusha. We prepare students for a bright and successful future in a safe and caring environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/admissions" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Apply Now
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/800/600" 
                alt="Students learning" 
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-blue-600 font-bold uppercase tracking-widest mb-2">Welcome</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Excellence in Education
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Welcome to Bal Aawasiya Vidhyalaya, where we are committed to providing high-quality education that prepares students for a bright and successful future.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                In our safe, caring, and stimulating environment in Dhanushadham, every student is encouraged to discover their strengths, achieve their full potential, and become confident, responsible members of society.
              </p>
              <Link to="/about" className="inline-flex items-center text-blue-700 font-semibold hover:gap-2 transition-all">
                Read More About Us <ArrowRight size={20} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest News & Events</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    {event.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">{event.date}</p>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">{event.title}</h3>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;