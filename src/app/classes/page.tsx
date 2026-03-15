"use client"

import { FadeInUp } from '@/components/fade-in-up'
import { ShineBorder } from '@/components/shine-border'
import { cn } from '@/lib/utils'

const classOfferings = [
  {
    name: "Vinyasa Flow",
    price: "$28 drop-in",
    description: "Dynamic sequences linking breath with movement, building strength and flexibility"
  },
  {
    name: "Hatha Yoga",
    price: "$25 drop-in",
    description: "Slower-paced practice focusing on alignment and holding poses for deeper awareness"
  },
  {
    name: "Yin Yoga",
    price: "$25 drop-in",
    description: "Meditative practice with long-held poses to release deep tension and restore balance"
  },
  {
    name: "Hot Yoga Sessions",
    price: "$32 drop-in",
    description: "Heated room classes for enhanced detoxification and increased flexibility"
  }
]

const galleryImages = [
  {
    url: "https://source.unsplash.com/600x400/?desert-yoga-studio-interior-warm-lighting-cacti",
    alt: "Desert yoga studio interior with warm lighting"
  },
  {
    url: "https://source.unsplash.com/600x500/?yoga-class-sunset-golden-hour-desert-mountains",
    alt: "Yoga class at sunset with desert mountains"
  },
  {
    url: "https://source.unsplash.com/600x450/?meditation-sound-bowl-singing-bowl-desert-setting",
    alt: "Meditation sound bowl in desert setting"
  },
  {
    url: "https://source.unsplash.com/600x480/?hot-yoga-room-warm-lighting-bamboo-floor",
    alt: "Hot yoga room with warm lighting and bamboo floor"
  },
  {
    url: "https://source.unsplash.com/600x520/?yoga-teacher-training-group-desert-retreat",
    alt: "Yoga teacher training group at desert retreat"
  },
  {
    url: "https://source.unsplash.com/600x380/?wellness-boutique-natural-products-desert-aesthetic",
    alt: "Wellness boutique with natural products and desert aesthetic"
  }
]

export default function ClassesPage() {
  return (
    <>
      <style jsx>{`
        .sand-texture {
          position: relative;
        }
        .sand-texture::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 25% 25%, rgba(210, 180, 140, 0.1) 1px, transparent 1px),
                          radial-gradient(circle at 75% 75%, rgba(160, 130, 98, 0.08) 1px, transparent 1px);
          background-size: 24px 24px, 36px 36px;
          animation: sand-shift 20s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes sand-shift {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(2px) translateY(-1px); }
          50% { transform: translateX(-1px) translateY(2px); }
          75% { transform: translateX(1px) translateY(1px); }
        }
        .organic-radius {
          border-radius: 24% 76% 32% 68% / 42% 28% 72% 58%;
        }
        .organic-radius-alt {
          border-radius: 68% 32% 76% 24% / 58% 72% 28% 42%;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden sand-texture">
        <img 
          src="https://source.unsplash.com/1920x1080/?desert-yoga-studio-interior-warm-lighting-cacti" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 via-orange-800/60 to-amber-900/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-[var(--font-heading)]">
              Classes for Every Body, Every Journey
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discover the perfect practice to align with your wellness goals
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="services-pricing" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-5xl font-bold text-center mb-20 text-[var(--color-text)] font-[var(--font-heading)]">
              Our Class Offerings
            </h2>
          </FadeInUp>
          
          <div className="space-y-8">
            {classOfferings.map((classItem, i) => (
              <FadeInUp key={classItem.name} delay={100 + i * 100}>
                <ShineBorder 
                  borderRadius={20} 
                  borderWidth={2} 
                  duration={3} 
                  color={["#d97706", "#f59e0b", "#d97706"]}
                  className="organic-radius"
                >
                  <div className="p-8 bg-[var(--color-surface)] rounded-2xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-[var(--color-text)]">{classItem.name}</h3>
                        <p className="text-lg text-[var(--color-muted)] leading-relaxed">{classItem.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-[var(--color-primary)]">{classItem.price}</div>
                      </div>
                    </div>
                  </div>
                </ShineBorder>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 px-6 bg-gradient-to-b from-amber-50/30 to-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-5xl font-bold text-center mb-20 text-[var(--color-text)] font-[var(--font-heading)]">
              Our Sacred Spaces
            </h2>
          </FadeInUp>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, i) => (
              <FadeInUp key={i} delay={100 + (i % 3) * 100}>
                <div className="break-inside-avoid overflow-hidden organic-radius-alt group">
                  <img 
                    src={img.url} 
                    alt={img.alt} 
                    className="w-full hover:scale-105 transition duration-700 ease-out" 
                  />
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking-cta" className="relative py-32 px-6 overflow-hidden sand-texture">
        <img 
          src="https://source.unsplash.com/1920x800/?yoga-teacher-training-group-desert-retreat" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-orange-800/80 to-amber-900/90" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white font-[var(--font-heading)]">
              Ready to Flow?
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join our community and begin your journey toward balance and inner peace
            </p>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <ShineBorder 
                borderRadius={50} 
                borderWidth={2} 
                duration={2} 
                color={["#ffffff", "#f59e0b", "#ffffff"]}
              >
                <a 
                  href="#booking" 
                  className="inline-block px-12 py-5 bg-white text-amber-900 font-bold rounded-full text-lg hover:bg-white/95 transition duration-300 organic-radius"
                >
                  Reserve Your Mat
                </a>
              </ShineBorder>
              
              <a 
                href="#schedule" 
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white/10 transition duration-300"
              >
                View Weekly Schedule
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}