"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  return (
    <>
      <style jsx>{`
        .sand-texture {
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(194, 154, 108, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(218, 165, 32, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 90%, rgba(160, 82, 45, 0.06) 0%, transparent 50%);
        }
        .organic-radius {
          border-radius: 42% 58% 70% 30% / 45% 35% 65% 55%;
        }
        .stone-radius {
          border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
        }
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 overflow-hidden sand-texture">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1920x1080/?desert%20yoga%20studio%20interior%20warm%20lighting%20cacti" 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/90 via-amber-50/95 to-yellow-50/90" />
        </div>
        
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <FadeInUp delay={0}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-900 leading-tight">
                Visit Our Desert Sanctuary
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 organic-radius bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center flex-none">
                    <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1 text-amber-900">Location</span>
                    <p className="text-amber-700 text-lg">Scottsdale, Arizona</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 organic-radius bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center flex-none">
                    <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1 text-amber-900">Hours</span>
                    <p className="text-amber-700 text-lg">Open Daily 6:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
          
          {/* Contact Form */}
          <FadeInUp delay={200}>
            <div className="stone-radius bg-white/80 backdrop-blur-sm p-10 shadow-xl border border-amber-100">
              <h3 className="text-2xl font-semibold mb-8 text-amber-900">Get in Touch</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-amber-800">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-amber-800">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 transition"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-amber-800">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 transition"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-amber-800">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 transition"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-amber-800">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 transition resize-none"
                    placeholder="Tell us about your yoga journey or ask any questions..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-700 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Location Map Section */}
      <section id="location-map" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold mb-8 text-amber-900">Find Us</h2>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="space-y-6">
                <div>
                  <span className="font-semibold block mb-2 text-amber-800">Address</span>
                  <p className="text-amber-700 text-lg">Scottsdale, Arizona</p>
                </div>
                
                <div>
                  <span className="font-semibold block mb-2 text-amber-800">Directions</span>
                  <p className="text-amber-700">Located in central Scottsdale with easy access from major roads</p>
                </div>
                
                <div>
                  <span className="font-semibold block mb-2 text-amber-800">Parking</span>
                  <p className="text-amber-700">Free parking available in adjacent lot</p>
                </div>
                
                <div>
                  <span className="font-semibold block mb-2 text-amber-800">Hours</span>
                  <p className="text-amber-700">Open Daily 6:00 AM - 9:00 PM</p>
                </div>
              </div>
            </FadeInUp>
          </div>
          
          <FadeInUp delay={200} className="lg:col-span-3">
            <div className="stone-radius bg-gradient-to-br from-amber-100 to-orange-100 h-96 flex items-center justify-center border-2 border-amber-200 shadow-xl overflow-hidden relative">
              <img 
                src="https://source.unsplash.com/800x600/?desert%20landscape%20mountains%20arizona" 
                alt="Desert landscape" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 organic-radius bg-amber-600 flex items-center justify-center mx-auto mb-4 floating-animation">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-amber-900 font-medium text-lg">Interactive Map</p>
                <p className="text-amber-700 text-sm">Click to open directions</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white sand-texture">
        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold text-center mb-4 text-amber-900">First Visit Questions</h2>
            <p className="text-center text-amber-700 mb-16 text-lg">Everything you need to know for your first desert yoga experience</p>
          </FadeInUp>
          
          <div className="space-y-6">
            <FadeInUp delay={100}>
              <details className="group stone-radius border-2 border-amber-200 bg-gradient-to-r from-white to-amber-50 shadow-lg hover:shadow-xl transition-all duration-300">
                <summary className="flex justify-between items-center p-8 cursor-pointer font-semibold text-lg text-amber-900 hover:text-amber-800 transition">
                  What should I bring to my first class?
                  <span className="text-2xl group-open:rotate-45 transition-transform text-amber-600">+</span>
                </summary>
                <div className="px-8 pb-8 text-amber-700 leading-relaxed">
                  Just yourself! We provide mats, blocks, and water. Wear comfortable, breathable clothing.
                </div>
              </details>
            </FadeInUp>
            
            <FadeInUp delay={150}>
              <details className="group stone-radius border-2 border-amber-200 bg-gradient-to-r from-white to-amber-50 shadow-lg hover:shadow-xl transition-all duration-300">
                <summary className="flex justify-between items-center p-8 cursor-pointer font-semibold text-lg text-amber-900 hover:text-amber-800 transition">
                  Do I need yoga experience to start?
                  <span className="text-2xl group-open:rotate-45 transition-transform text-amber-600">+</span>
                </summary>
                <div className="px-8 pb-8 text-amber-700 leading-relaxed">
                  Not at all! Our classes welcome all levels, and our teachers provide modifications for every pose.
                </div>
              </details>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <details className="group stone-radius border-2 border-amber-200 bg-gradient-to-r from-white to-amber-50 shadow-lg hover:shadow-xl transition-all duration-300">
                <summary className="flex justify-between items-center p-8 cursor-pointer font-semibold text-lg text-amber-900 hover:text-amber-800 transition">
                  How early should I arrive?
                  <span className="text-2xl group-open:rotate-45 transition-transform text-amber-600">+</span>
                </summary>
                <div className="px-8 pb-8 text-amber-700 leading-relaxed">
                  Please arrive 10-15 minutes early to get settled and centered before class begins.
                </div>
              </details>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1920x800/?yoga%20class%20sunset%20golden%20hour%20desert%20mountains" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/70" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our desert sanctuary and discover the transformative power of yoga in Arizona's most inspiring setting.
            </p>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/classes" 
                className="inline-block px-10 py-4 bg-white text-amber-900 font-bold rounded-full text-lg hover:bg-amber-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                View Classes
              </a>
              <a 
                href="tel:" 
                className="inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-amber-900 transform hover:scale-105 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}