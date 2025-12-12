import React from 'react';
import { Target, Eye, BookOpen, Star, Heart, Users, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const staffMembers = [
    { name: "Mr. Rajesh Sharma", dept: "Mathematics", id: 101 },
    { name: "Ms. Anita Singh", dept: "Science", id: 102 },
    { name: "Mr. Binod Yadav", dept: "Social Studies", id: 103 },
    { name: "Ms. Sunita Thapa", dept: "English", id: 104 },
    { name: "Mr. Krishna Jha", dept: "Sports Coordinator", id: 105 },
    { name: "Ms. Reema Karki", dept: "Arts & Culture", id: 106 },
    { name: "Mr. Dinesh Paudel", dept: "Computer Science", id: 107 },
    { name: "Ms. Geeta Mahato", dept: "Primary Section Head", id: 108 },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-blue-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Bal Aawasiya Vidhyalaya has evolved into a premier educational institution in Dhanusha.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* History */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our History</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Established with a vision to bring quality education to Dhanusha, Bal Aawasiya Vidhyalaya has evolved into a premier educational institution.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our campus features modern classrooms, labs, and sports facilities, creating an inspiring environment for holistic growth. We take pride in our journey of transforming young minds.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://picsum.photos/800/500?history" alt="School History" className="rounded-xl shadow-lg w-full" />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg text-white">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Our Vision</h2>
            </div>
            <p className="text-slate-700 text-lg">
              To inspire and empower young individuals to become confident, responsible, and successful citizens of Nepal and the world.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate-800 p-3 rounded-lg text-white">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <BookOpen className="text-blue-600 flex-shrink-0" size={20} />
                <span className="text-slate-700">Deliver quality education through innovative teaching methods.</span>
              </li>
              <li className="flex gap-3">
                <Heart className="text-blue-600 flex-shrink-0" size={20} />
                <span className="text-slate-700">Build strong values of discipline, respect, and integrity.</span>
              </li>
              <li className="flex gap-3">
                <Star className="text-blue-600 flex-shrink-0" size={20} />
                <span className="text-slate-700">Provide opportunities for students to explore their talents.</span>
              </li>
              <li className="flex gap-3">
                <Users className="text-blue-600 flex-shrink-0" size={20} />
                <span className="text-slate-700">Foster a positive and inclusive school culture.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Excellence", desc: "Striving for the best in academics and character.", color: "bg-amber-100 text-amber-800" },
              { title: "Discipline", desc: "Creating a structured environment for learning.", color: "bg-blue-100 text-blue-800" },
              { title: "Community", desc: "Working together with parents and locals in Dhanushadham.", color: "bg-green-100 text-green-800" },
            ].map((value) => (
              <div key={value.title} className="text-center p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 mx-auto ${value.color} rounded-full flex items-center justify-center mb-4 text-2xl font-bold`}>
                  {value.title[0]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Principal */}
            <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-200 shadow-sm hover:shadow-md transition-all group">
              <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-5 overflow-hidden ring-4 ring-white shadow-lg relative">
                <img src="https://picsum.photos/400/400?random=50" alt="Dr. Emily Carter" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Dr. Emily Carter</h3>
              <p className="text-blue-600 font-medium mb-3 uppercase tracking-wide text-xs">Principal</p>
              <p className="text-slate-600 text-sm leading-relaxed px-2">
                With 20 years in education, Dr. Carter leads with a passion for holistic student success.
              </p>
            </div>
            
            {/* Vice Principal */}
            <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-200 shadow-sm hover:shadow-md transition-all group">
              <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-5 overflow-hidden ring-4 ring-white shadow-lg relative">
                <img src="https://picsum.photos/400/400?random=51" alt="Mr. John Lee" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Mr. John Lee</h3>
              <p className="text-blue-600 font-medium mb-3 uppercase tracking-wide text-xs">Vice Principal</p>
              <p className="text-slate-600 text-sm leading-relaxed px-2">
                Oversees curriculum, extracurriculars, and student wellbeing.
              </p>
            </div>
            
            {/* Head of Admissions */}
            <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-200 shadow-sm hover:shadow-md transition-all group">
              <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-5 overflow-hidden ring-4 ring-white shadow-lg relative">
                <img src="https://picsum.photos/400/400?random=52" alt="Ms. Sarah Patel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Ms. Sarah Patel</h3>
              <p className="text-blue-600 font-medium mb-3 uppercase tracking-wide text-xs">Head of Admissions</p>
              <p className="text-slate-600 text-sm leading-relaxed px-2">
                Your dedicated guide to joining our supportive community.
              </p>
            </div>
          </div>
        </section>

        {/* Staff Directory */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Dedicated Staff</h2>
            <p className="text-slate-500">Meet the passionate educators who nurture our students' potential.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {staffMembers.map((staff) => (
              <div key={staff.id} className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-slate-100 shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <img src={`https://picsum.photos/300/400?random=${staff.id}`} alt={staff.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-4 opacity-100">
                  <span className="text-white font-bold text-lg leading-tight">{staff.name}</span>
                  <span className="text-blue-300 text-sm font-medium">{staff.dept}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all">
              View Full Directory
            </button>
          </div>
        </section>

        {/* Location Map Placeholder */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Location</h2>
            <p className="text-slate-500">Visit our campus in Dhanushadham</p>
          </div>
          <div className="bg-slate-200 rounded-2xl h-[400px] w-full relative overflow-hidden group shadow-lg border border-slate-200">
             <iframe 
                width="100%" 
                height="100%" 
                title="School Location"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?q=26.835479,86.062609&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;