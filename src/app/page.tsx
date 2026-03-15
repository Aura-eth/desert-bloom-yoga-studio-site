"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { ShineBorder } from '@/components/shine-border';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <>
      <style jsx>{`
        .sand-texture {
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(210, 180, 140, 0.03) 0%, transparent 50%);
        }
        .organic-border {
          border-radius: 45% 55% 60% 40% / 30% 45% 55% 70%;
        }
        .cactus-border {
          border-radius: 40% 60% 70% 30% / 60% 30% 70% 40%;
        }
        .stone-border {
          border-radius: 65% 35% 45% 55% / 35% 65% 35% 65%;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden sand-texture">
        <img 
          src="https://source.unsplash.com/1920x1080/?desert yoga studio interior warm lighting cacti" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>
              Find Your Center in the Desert
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Premium yoga sanctuary in Scottsdale offering transformative Vinyasa, Hatha, and Yin classes in our serene desert-inspired studio
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShineBorder
                borderRadius={12}
                borderWidth={2}
                duration={3000}
                color={['#d4af37', '#f4e09c', '#d4af37']}
              >
                <a 
                  href="#booking" 
                  className="px-8 py-4 bg-white text-black font-bold rounded-lg text-lg hover:bg-white/90 transition duration-300"
                >
                  Start Your Practice
                </a>
              </ShineBorder>
              <a 
                href="#schedule" 
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300"
              >
                View Schedule
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="feature-highlight" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" style={{fontFamily: 'var(--font-heading)'}}>
                Your Wellness Journey Awaits
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Three pillars of transformation at Desert Bloom
              </p>
            </FadeInUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInUp delay={0}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Diverse Class Offerings
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From energizing Vinyasa flows to restorative Yin sessions, find the perfect practice for your body and spirit
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Sacred Hot Yoga Room
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Deepen your practice in our specialized heated studio designed for ultimate detoxification and flexibility
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Monthly Sound Healing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Restore balance with our transformative sound bath events featuring crystal bowls and ancient healing frequencies
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative py-32 px-6 sand-texture">
        <img 
          src="https://source.unsplash.com/1920x1080/?meditation sound bowl singing bowl desert setting" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{fontFamily: 'var(--font-heading)'}}>
              Where Desert Meets Divine
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Step into serenity
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section id="stats-bar" className="py-16 px-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <FadeInUp delay={0}>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-2">
                6AM-9PM
              </div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                Open Daily
              </div>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-2">
                3
              </div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                Yoga Styles
              </div>
            </div>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-2">
                500+
              </div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                Community Members
              </div>
            </div>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-2">
                10
              </div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                Expert Teachers
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section id="booking-cta" className="relative py-24 px-6">
        <img 
          src="https://source.unsplash.com/1920x1080/?yoga class sunset golden hour desert mountains" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/60" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>
              Begin Your Practice Today
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl md:text-2xl opacity-90 mb-10 leading-relaxed">
              New students enjoy their first class for just $20
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShineBorder
                borderRadius={50}
                borderWidth={2}
                duration={2500}
                color={['#ffffff', '#f4e09c', '#ffffff']}
              >
                <a 
                  href="#book" 
                  className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-white/90 transition duration-300"
                >
                  Book First Class
                </a>
              </ShineBorder>
              <a 
                href="#schedule" 
                className="inline-block px-10 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition duration-300"
              >
                View Full Schedule
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}