import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Send, User, Mail, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-blue-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            We are here to answer your questions and welcome you to our community!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
             <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MapPin size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Our Location</h3>
              <p className="text-slate-600">Dhanushadham -3, Dhanusha</p>
              <p className="text-slate-600">Nepal</p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Phone size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Phone & WhatsApp</h3>
              <p className="text-slate-600">Mobile: 981-9814933</p>
              <div className="flex items-center gap-2 justify-center mt-1">
                 <MessageCircle size={16} className="text-green-500" />
                 <p className="text-slate-600">+977 970-1849133</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Clock size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Opening Hours</h3>
              <p className="text-slate-600">Sun - Fri: 10:00 AM - 4:00 PM</p>
              <p className="text-slate-500 text-sm">Closed on Saturdays</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Send className="text-blue-600" size={24} /> Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    <input 
                      type="tel" 
                      placeholder="98XXXXXXXX"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Subject</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3.5 text-slate-400" size={18} />
                     <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none bg-white text-slate-600">
                        <option>General Inquiry</option>
                        <option>Admissions</option>
                        <option>Academics</option>
                        <option>Feedback</option>
                     </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Embed */}
          <div className="h-full min-h-[400px]">
             <div className="bg-slate-200 rounded-2xl h-full w-full relative overflow-hidden group border border-slate-200 shadow-md">
               <iframe 
                 width="100%" 
                 height="100%" 
                 title="School Location"
                 style={{ border: 0, minHeight: '400px' }}
                 src="https://maps.google.com/maps?q=26.835479,86.062609&t=&z=15&ie=UTF8&iwloc=&output=embed"
                 allowFullScreen
                 loading="lazy"
               ></iframe>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;