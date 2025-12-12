import React from 'react';
import { BookOpen, Monitor, Briefcase, GraduationCap } from 'lucide-react';

const Academics: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
       <div className="bg-blue-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Academics</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Challenging, motivating, and preparing students for higher education and future careers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Curriculum Overview */}
        <section className="mb-16 bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Curriculum Overview</h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            Our academic program is designed to challenge, motivate, and prepare students for higher education and future careers. We offer a broad and balanced curriculum aligned with the National Curriculum of Nepal, promoting critical thinking and independent learning.
          </p>
        </section>

        {/* Academic Levels */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Academic Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
              <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-blue-600">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Primary Level</h3>
              <p className="text-slate-600">
                Building strong foundations in reading, writing, mathematics, and social skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
              <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-green-600">
                <Monitor size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Lower Secondary</h3>
              <p className="text-slate-600">
                Expanding knowledge in Science, Computer Studies, and Languages for holistic development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500">
              <div className="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-purple-600">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Secondary (SEE & +2)</h3>
              <p className="text-slate-600">
                Focused preparation for national examinations and higher education specialization (Science, Management, Education).
              </p>
            </div>
          </div>
        </section>

        {/* Teachers */}
        <section className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Our Teachers</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Our dedicated team of teachers is the foundation of our success. They are qualified, experienced, and passionate about teaching.
              </p>
              <p className="text-blue-100 text-lg leading-relaxed">
                 Working closely with learners, they guide, motivate, and foster academic and personal growth using modern teaching tools.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Briefcase size={120} className="text-blue-400 opacity-80" />
            </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;