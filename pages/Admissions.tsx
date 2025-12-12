import React from 'react';
import { Phone, ClipboardCheck, School, FileCheck, Bus } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-blue-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Join a school where your child will flourish in a safe, supportive setting.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Bal Aawasiya Vidhyalaya?</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                We invite parents and guardians to join our vibrant community. We prioritize academics, character, skills, and wellbeing, ensuring your child receives an education that goes beyond textbooks.
              </p>
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded text-green-800">
                <strong>New Admissions Open for 2026 Session!</strong> Secure your child's future with us.
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Application Process</h2>
              <div className="space-y-8">
                {[
                  { title: "Inquiry", desc: "Contact us via Mobile or WhatsApp (+977 970-1849133).", icon: <Phone /> },
                  { title: "Visit", desc: "Come to our campus at Dhanushadham -3 for a tour.", icon: <School /> },
                  { title: "Assessment", desc: "Student entrance test for placement.", icon: <ClipboardCheck /> },
                  { title: "Enrollment", desc: "Complete the registration forms and join our family.", icon: <FileCheck /> },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Info - Transport */}
          <div className="lg:w-1/3">
             <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 sticky top-32">
               <div className="flex items-center gap-3 mb-6">
                 <Bus className="text-yellow-600" size={32} />
                 <h2 className="text-xl font-bold text-slate-900">Transport Services</h2>
               </div>
               <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                 For student safety and convenience, we offer reliable transport services across the Dhanusha district.
               </p>
               <ul className="space-y-2 text-sm text-slate-700">
                 <li className="flex items-center gap-2">✓ Well-maintained buses</li>
                 <li className="flex items-center gap-2">✓ Comfortable seating</li>
                 <li className="flex items-center gap-2">✓ Fixed routes</li>
                 <li className="flex items-center gap-2">✓ Strict safety rules</li>
                 <li className="flex items-center gap-2">✓ Punctual schedules</li>
               </ul>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Admissions;