"use client"

import { FadeInUp } from '@/components/fade-in-up'
import { ShineBorder } from '@/components/shine-border'
import { cn } from '@/lib/utils'

export default function HomePage() {
  return (
    <>
      <style jsx>{`
        .desert-texture {
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(218, 165, 32, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(139, 69, 19, 0.02) 0%, transparent 50%);
        }
        .horizon-curve {
          clip-path: ellipse(100% 55% at 50% 100%);
        }
        .sand-blend {
          mix-blend-mode: soft-light;
        }
        .parallax-layer {
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-layer">
        {/* Background Layers */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://source.unsplash.com/1920x1080/?desert%20yoga%20studio%20warm%20lighting%20meditation%20space" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover scale-110" 
          />
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://source.unsplash.com/1920x1080/?scottsdale%20arizona%20desert%20landscape%20sunrise%20golden%20hour" 
              alt="" 
              className="w-full h-full object-cover opacity-40 sand-blend scale-105" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
          <div className="absolute inset-0 desert-texture" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
              Find Your Flow in the Desert
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              A sanctuary for mindful movement where desert serenity meets transformative yoga practice
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ShineBorder 
                borderRadius={9999}
                borderWidth={2}
                duration={3}
                color={["#DAA520", "#CD853F", "#F4A460"]}
              >
                <a 
                  href="#booking-cta" 
                  className="px-10 py-4 bg-white text-gray-900 font-bold rounded-full text-lg hover:bg-gray-100 transition-all duration-300 inline-block"
                >
                  Book Your First Class
                </a>
              </ShineBorder>
              <a 
                href="#feature-highlight" 
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Classes
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight */}
      <section id="feature-highlight" className="py-32 px-6 desert-texture">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Discover Your Practice
              </h2>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Vinyasa Flow",
                description: "Dynamic sequences linking breath and movement"
              },
              {
                title: "Hatha Yoga",
                description: "Gentle poses held with mindful awareness"
              },
              {
                title: "Yin Yoga",
                description: "Deep restorative stretches for inner calm"
              },
              {
                title: "Hot Yoga",
                description: "Heated room practice for deeper flexibility"
              }
            ].map((feature, i) => (
              <FadeInUp key={feature.title} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-600 to-amber-700 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1080/?yoga%20class%20vinyasa%20flow%20students%20peaceful%20studio" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent horizon-curve" />
        
        <div className="relative text-center text-white max-w-4xl px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              A Space That Breathes
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Step into our warm, earth-toned sanctuary where soft lighting and desert-inspired design create the perfect environment for your practice
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Stats Bar */}
      <section id="stats-bar" className="py-20 px-6 bg-gradient-to-r from-yellow-600 to-amber-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5", label: "Years Serving Scottsdale" },
              { number: "6AM-9PM", label: "Open Daily" },
              { number: "4", label: "Yoga Styles" },
              { number: "Monthly", label: "Sound Bath Events" }
            ].map((stat, i) => (
              <FadeInUp key={stat.label} delay={i * 100}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base opacity-90 uppercase tracking-wide font-medium">
                    {stat.label}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking-cta" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1920x1080/?sound%20bath%20singing%20bowls%20candles%20meditation%20ceremony" 
            alt="" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 desert-texture" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Begin Your Journey
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-2xl text-white/90 mb-4">
              New student special: First class free
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-lg text-white/70 mb-12">
              Open 6AM-9PM Daily
            </p>
          </FadeInUp>
          <FadeInUp delay={300}>
            <ShineBorder 
              borderRadius={9999}
              borderWidth={3}
              duration={2}
              color={["#FFD700", "#FFA500", "#FF6347"]}
            >
              <a 
                href="tel:+14805551234" 
                className="inline-block px-12 py-5 bg-white text-gray-900 font-bold rounded-full text-xl hover:bg-gray-100 transition-all duration-300"
              >
                Reserve Your Spot
              </a>
            </ShineBorder>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}