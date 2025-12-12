import React from 'react';
import { Monitor, Book, FlaskConical, Trophy, Droplets, LayoutTemplate } from 'lucide-react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      title: "Spacious Classrooms",
      desc: "Well-lit and ventilated for a comfortable learning environment.",
      icon: <LayoutTemplate size={40} />
    },
    {
      title: "Science Laboratories",
      desc: "Equipped for practical experiments in Physics, Chemistry, and Biology.",
      icon: <FlaskConical size={40} />
    },
    {
      title: "Computer Lab",
      desc: "Modern computers to teach digital literacy.",
      icon: <Monitor size={40} />
    },
    {
      title: "Library",
      desc: "A quiet space filled with books and educational resources.",
      icon: <Book size={40} />
    },
    {
      title: "Playground",
      desc: "Large open spaces for sports and recreation.",
      icon: <Trophy size={40} />
    },
    {
      title: "Clean Drinking Water & Sanitation",
      desc: "Ensuring health and hygiene for all students.",
      icon: <Droplets size={40} />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
       <div className="bg-blue-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Facilities</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Well-maintained facilities to support learning and activities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="text-blue-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {facility.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{facility.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {facility.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Showcase (Placeholder) */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Campus Tour</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://picsum.photos/400/300?1" alt="Facility 1" className="rounded-lg w-full h-48 object-cover" />
            <img src="https://picsum.photos/400/300?2" alt="Facility 2" className="rounded-lg w-full h-48 object-cover" />
            <img src="https://picsum.photos/400/300?3" alt="Facility 3" className="rounded-lg w-full h-48 object-cover" />
            <img src="https://picsum.photos/400/300?4" alt="Facility 4" className="rounded-lg w-full h-48 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;