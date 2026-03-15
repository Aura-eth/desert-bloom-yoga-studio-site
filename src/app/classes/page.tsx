"use client";

import { FadeInUp } from '@/components/fade-in-up';

export default function Classes() {
  return (
    <>
      <style jsx>{`
        .sand-texture {
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(210, 180, 140, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(222, 184, 135, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(160, 82, 45, 0.05) 0%, transparent 50%);
          mix-blend-mode: multiply;
        }
        .desert-divider {
          background: linear-gradient(135deg, transparent 0%, var(--color-surface) 20%, var(--color-surface) 80%, transparent 100%);
          clip-path: ellipse(100% 60% at 50% 40%);
        }
        .flowing-border {
          border-radius: 3rem 1rem 3rem 1rem;
        }
        .meditation-glow {
          background: radial-gradient(ellipse at center, rgba(139, 69, 19, 0.1) 0%, transparent 70%);
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1200/?desert yoga studio warm lighting meditation space" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="sand-texture absolute inset-0" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>
              Classes for Every Body
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              From gentle beginnings to advanced practice, find your perfect flow
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section id="services-pricing" className="py-24 px-6 relative">
        <div className="meditation-glow absolute inset-0" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>
                Our Class Offerings
              </h2>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FadeInUp delay={0}>
              <div className="bg-white p-10 flowing-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Vinyasa Flow</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Dynamic flowing sequences that build strength and flexibility while connecting breath to movement
                </p>
                <div className="flex justify-between items-center text-sm font-medium text-amber-800">
                  <span>60 minutes</span>
                  <span>All levels welcome</span>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="bg-white p-10 flowing-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Hatha Yoga</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Slower-paced practice focusing on proper alignment and holding poses with intention
                </p>
                <div className="flex justify-between items-center text-sm font-medium text-amber-800">
                  <span>75 minutes</span>
                  <span>Perfect for beginners</span>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="bg-white p-10 flowing-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Yin Yoga</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Restorative practice with poses held for 3-5 minutes to release deep tension
                </p>
                <div className="flex justify-between items-center text-sm font-medium text-amber-800">
                  <span>90 minutes</span>
                  <span>All levels</span>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={300}>
              <div className="bg-white p-10 flowing-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Hot Yoga</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Classes in our heated room to deepen flexibility and enhance detoxification
                </p>
                <div className="flex justify-between items-center text-sm font-medium text-amber-800">
                  <span>60 minutes</span>
                  <span>Intermediate recommended</span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Desert Divider */}
      <div className="desert-divider h-32 relative"></div>

      {/* Process Steps Section */}
      <section id="process-steps" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-white relative">
        <div className="sand-texture absolute inset-0" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>
                Your First Class Experience
              </h2>
            </FadeInUp>
          </div>
          
          <div className="space-y-16">
            <FadeInUp delay={0}>
              <div className="flex gap-8 items-start">
                <div className="flex flex-col items-center flex-none">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                    1
                  </div>
                  <div className="w-px h-16 bg-gradient-to-b from-amber-200 to-transparent mt-6" />
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold mb-4 text-amber-900">Arrive Early</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Come 15 minutes before class to get settled and meet your instructor
                  </p>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="flex gap-8 items-start">
                <div className="flex flex-col items-center flex-none">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                    2
                  </div>
                  <div className="w-px h-16 bg-gradient-to-b from-amber-200 to-transparent mt-6" />
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold mb-4 text-amber-900">Bring Water & Towel</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We provide mats and blocks, but personal water and towel enhance comfort
                  </p>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="flex gap-8 items-start">
                <div className="flex flex-col items-center flex-none">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                    3
                  </div>
                  <div className="w-px h-16 bg-gradient-to-b from-amber-200 to-transparent mt-6" />
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold mb-4 text-amber-900">Listen to Your Body</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Every pose has modifications - honor where you are today
                  </p>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={300}>
              <div className="flex gap-8 items-start">
                <div className="flex flex-col items-center flex-none">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                    4
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold mb-4 text-amber-900">Embrace the Journey</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Yoga is a practice, not a performance. Focus on your breath and inner experience
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-24 px-6 relative">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1920x800/?yoga class vinyasa flow students peaceful studio" 
            alt="" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/85" />
        </div>
        <div className="sand-texture absolute inset-0" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>
                Student Experiences
              </h2>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FadeInUp delay={0}>
              <div className="bg-white/90 backdrop-blur-sm p-10 flowing-border shadow-xl">
                <div className="text-6xl text-amber-600 mb-6 font-serif">&ldquo;</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  The Yin classes have completely transformed how I handle stress. This studio feels like a true sanctuary.
                </p>
                <div className="text-right">
                  <cite className="text-amber-900 font-semibold not-italic">Sarah M.</cite>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="bg-white/90 backdrop-blur-sm p-10 flowing-border shadow-xl">
                <div className="text-6xl text-amber-600 mb-6 font-serif">&ldquo;</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  As a beginner, the Hatha classes gave me confidence to explore yoga. The instructors are incredibly supportive.
                </p>
                <div className="text-right">
                  <cite className="text-amber-900 font-semibold not-italic">Michael R.</cite>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="bg-white/90 backdrop-blur-sm p-10 flowing-border shadow-xl">
                <div className="text-6xl text-amber-600 mb-6 font-serif">&ldquo;</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  The hot yoga room is perfectly heated. I leave every class feeling renewed and stronger.
                </p>
                <div className="text-right">
                  <cite className="text-amber-900 font-semibold not-italic">Jennifer L.</cite>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-900 to-amber-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://source.unsplash.com/1920x600/?desert plants succulents warm earth tones" 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-amber-100 mb-10 leading-relaxed">
              Join us for a class and discover the transformative power of yoga in our desert sanctuary
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <a 
              href="/contact" 
              className="inline-block px-12 py-4 bg-white text-amber-900 font-bold rounded-full text-lg hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Your First Class
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}