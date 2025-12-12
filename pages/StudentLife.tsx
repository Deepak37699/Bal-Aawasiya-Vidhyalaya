import React from 'react';
import { Music, Mic2, FlaskConical, Award, ShieldCheck } from 'lucide-react';

const StudentLife: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-blue-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Student Life</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Learning extends beyond classrooms at Bal Aawasiya Vidhyalaya.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Co-Curricular Activities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Students participate in a wide range of activities to build confidence and life skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { title: "Sports", desc: "Football, Cricket, Badminton", icon: <Award size={32} /> },
            { title: "Culture", desc: "Cultural Dance and Music programs", icon: <Music size={32} /> },
            { title: "Public Speaking", desc: "Speech, Debate, and Quiz contests", icon: <Mic2 size={32} /> },
            { title: "Innovation", desc: "Science exhibitions and Art competitions", icon: <FlaskConical size={32} /> },
          ].map((activity, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all border border-slate-100">
              <div className="text-blue-600 mb-4 flex justify-center">{activity.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{activity.title}</h3>
              <p className="text-slate-500 text-sm">{activity.desc}</p>
            </div>
          ))}
        </div>

        <section className="bg-green-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
           <div className="md:w-1/3 flex justify-center text-green-600">
             <ShieldCheck size={120} />
           </div>
           <div className="md:w-2/3">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Safe & Supportive Environment</h2>
             <p className="text-slate-700 leading-relaxed text-lg mb-6">
               We prioritize wellbeing with a focus on discipline, respect, and a friendly atmosphere. We have strict anti-bullying policies and ensure that every student feels valued and heard within our community.
             </p>
             <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors">
               Learn about our Policies
             </button>
           </div>
        </section>

      </div>
    </div>
  );
};

export default StudentLife;