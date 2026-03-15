"use client"

import FadeInUp from '@/components/fade-in-up'
import ShineBorder from '@/components/shine-border'
import { cn } from '@/lib/utils'

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Monthly Sound Bath Journey",
      date: "First Friday of Every Month",
      time: "7:00 PM - 8:30 PM",
      price: "$35",
      description: "Immersive sound healing experience with crystal singing bowls and meditation"
    },
    {
      title: "Desert Sunrise Yoga",
      date: "Seasonal Offerings",
      time: "6:00 AM - 7:00 AM",
      price: "$40",
      description: "Outdoor yoga sessions welcoming the day with mountain views"
    }
  ]

  return (
    <>
      <style jsx>{`
        .sand-texture {
          position: relative;
          overflow: hidden;
        }
        .sand-texture::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.08) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(160, 82, 45, 0.06) 1px, transparent 1px),
            radial-gradient(circle at 40% 90%, rgba(210, 180, 140, 0.04) 1px, transparent 1px);
          background-size: 50px 50px, 80px 80px, 120px 120px;
          animation: sandDrift 20s linear infinite;
          pointer-events: none;
        }
        @keyframes sandDrift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-30px) translateY(-15px); }
        }
        .organic-border {
          border-radius: 45% 55% 60% 40% / 50% 65% 35% 50%;
        }
        .cactus-border {
          border-radius: 60% 40% 40% 60% / 45% 55% 45% 55%;
        }
      `}</style>

      {/* Hero Section - Gradient Dramatic */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden sand-texture">
        <img 
          src="https://source.unsplash.com/1920x1080/?meditation sound bowl singing bowl desert setting" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-800/60 to-red-900/90" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Transformative Events & Workshops
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Deepen your practice through special offerings and healing experiences
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShineBorder
                borderRadius={12}
                borderWidth={2}
                duration={3}
                color={["#f59e0b", "#d97706", "#b45309"]}
                className="inline-block"
              >
                <a 
                  href="#events" 
                  className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors block"
                >
                  View Events
                </a>
              </ShineBorder>
              <a 
                href="tel:555-123-4567" 
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Book Now
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Event Listing Section */}
      <section id="events" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-900">
              Upcoming Events
            </h2>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <FadeInUp key={event.title} delay={index * 100}>
                <div className="organic-border bg-gradient-to-br from-amber-50 to-orange-50 p-8 border border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-amber-900 mb-2">
                        {event.title}
                      </h3>
                      <div className="space-y-1 text-amber-800">
                        <p className="font-semibold">{event.date}</p>
                        <p className="text-sm">{event.time}</p>
                      </div>
                    </div>
                    <div className="cactus-border bg-amber-600 text-white px-4 py-2 text-xl font-bold">
                      {event.price}
                    </div>
                  </div>
                  
                  <p className="text-amber-700 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                      Register
                    </button>
                    <button className="px-6 py-3 border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
          <FadeInUp delay={200} className="mt-12 text-center">
            <p className="text-amber-700 mb-6">
              Join our community for transformative experiences that honor both ancient wisdom and modern wellness.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Contact Us for Custom Events
            </a>
          </FadeInUp>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 px-6 bg-gradient-to-br from-amber-50 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1920x1080/?desert yoga studio interior warm lighting cacti" 
            alt="" 
            className="w-full h-full object-cover opacity-20" 
          />
        </div>
        
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInUp delay={0}>
            <div className="organic-border overflow-hidden">
              <img 
                src="https://source.unsplash.com/600x500/?yoga class sunset golden hour desert mountains" 
                alt="Desert wellness experience" 
                className="w-full h-[500px] object-cover" 
              />
            </div>
          </FadeInUp>
          
          <div>
            <FadeInUp delay={100}>
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide block mb-4">
                Ancient Wisdom
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 leading-tight">
                The Power of Sound Healing
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="space-y-6 text-amber-800 text-lg leading-relaxed">
                <p>
                  Sound baths use vibrational frequencies to promote deep relaxation and healing, connecting us to ancient wellness traditions that have flourished in desert cultures for millennia.
                </p>
                
                <p>
                  In the profound silence of the desert, sound becomes medicine. Our crystal singing bowls create harmonic frequencies that resonate with your body's natural rhythms, washing away stress and tension like desert winds sculpting stone.
                </p>
                
                <p>
                  Each event is crafted to honor the sacred relationship between sound, space, and spirit—creating transformative experiences that echo the timeless wisdom of desert sanctuaries.
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={300} className="mt-8">
              <div className="flex gap-4">
                <div className="cactus-border bg-amber-100 p-4 text-center">
                  <div className="text-2xl font-bold text-amber-900">7+ Years</div>
                  <div className="text-sm text-amber-700">Sound Healing</div>
                </div>
                <div className="cactus-border bg-orange-100 p-4 text-center">
                  <div className="text-2xl font-bold text-amber-900">500+</div>
                  <div className="text-sm text-amber-700">Participants</div>
                </div>
                <div className="cactus-border bg-red-100 p-4 text-center">
                  <div className="text-2xl font-bold text-amber-900">Monthly</div>
                  <div className="text-sm text-amber-700">Gatherings</div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://source.unsplash.com/1920x600/?wellness boutique natural products desert aesthetic" 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Practice?
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our community of seekers and discover the healing power of sound in the heart of the desert sanctuary.
            </p>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShineBorder
                borderRadius={50}
                borderWidth={2}
                duration={2}
                color={["#ffffff", "#fbbf24", "#ffffff"]}
                className="inline-block"
              >
                <a 
                  href="tel:555-123-4567" 
                  className="px-10 py-4 bg-white text-amber-600 font-bold rounded-full text-lg hover:bg-white/90 transition block"
                >
                  Book Your Spot Today
                </a>
              </ShineBorder>
              
              <a 
                href="/classes" 
                className="px-10 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition backdrop-blur-sm"
              >
                Explore Classes
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}