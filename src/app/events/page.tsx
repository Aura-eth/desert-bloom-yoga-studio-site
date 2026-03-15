"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function EventsPage() {
  const events = [
    {
      name: "Full Moon Sound Bath",
      date: "Monthly",
      time: "7:30 PM",
      description: "Immersive sound healing experience with singing bowls, chimes, and guided meditation"
    },
    {
      name: "Workshop Series",
      date: "Quarterly",
      time: "Various",
      description: "Deep-dive workshops on specific aspects of yoga practice and philosophy"
    },
    {
      name: "Community Practice",
      date: "Weekly",
      time: "Sunday 5 PM",
      description: "Donation-based community class welcoming all levels and abilities"
    }
  ];

  const galleryImages = [
    { url: "https://source.unsplash.com/600x800/?sound+bath+singing+bowls+candles+meditation+ceremony", alt: "Sound bath setup with singing bowls and candles" },
    { url: "https://source.unsplash.com/800x600/?yoga+class+vinyasa+flow+students+peaceful+studio", alt: "Community yoga class in session" },
    { url: "https://source.unsplash.com/700x900/?desert+yoga+studio+warm+lighting+meditation+space", alt: "Meditation space with warm desert lighting" },
    { url: "https://source.unsplash.com/600x700/?scottsdale+arizona+desert+landscape+sunrise+golden+hour", alt: "Desert sunrise meditation" },
    { url: "https://source.unsplash.com/900x600/?yoga+teacher+training+group+students+learning+poses", alt: "Workshop session with students" },
    { url: "https://source.unsplash.com/500x800/?desert+plants+succulents+warm+earth+tones+interior+design", alt: "Studio interior with desert plants" }
  ];

  return (
    <>
      <style jsx>{`
        .desert-texture::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 80%, rgba(218, 165, 32, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, rgba(210, 180, 140, 0.02) 0%, transparent 50%);
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        .horizon-divider {
          background: linear-gradient(135deg, transparent 0%, rgba(218, 165, 32, 0.1) 50%, transparent 100%);
          clip-path: polygon(0 50%, 100% 20%, 100% 80%, 0 50%);
        }

        .flowing-border {
          border-radius: 40px 20px 40px 20px;
        }

        .masonry-grid {
          column-count: 1;
          column-gap: 1rem;
        }

        @media (min-width: 640px) {
          .masonry-grid {
            column-count: 2;
          }
        }

        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: 3;
          }
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden desert-texture">
        <img 
          src="https://source.unsplash.com/1920x1080/?desert+yoga+studio+warm+lighting+meditation+space" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/70 via-amber-900/50 to-yellow-900/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              Sacred Sound & Community
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Monthly sound baths and special events to deepen your wellness journey
            </p>
          </FadeInUp>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Horizon Divider */}
      <div className="horizon-divider h-16" />

      {/* Event Listing Section */}
      <section id="event-listing" className="py-24 px-6 relative desert-texture">
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-amber-900">
              Upcoming Events
            </h2>
          </FadeInUp>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <FadeInUp key={event.name} delay={index * 100}>
                <div className="group bg-white/80 backdrop-blur-sm flowing-border p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-white/90">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-amber-900">
                          {event.name}
                        </h3>
                        <div className="flex gap-4 text-sm font-semibold">
                          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full">
                            {event.date}
                          </span>
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full">
                            {event.time}
                          </span>
                        </div>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                        {event.description}
                      </p>
                    </div>
                    <div className="flex-none">
                      <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Horizon Divider */}
      <div className="horizon-divider h-16" />

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-gradient-to-b from-amber-50/50 to-orange-50/30 relative desert-texture">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900">
                Event Atmosphere
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Experience the magic of our sound bath gatherings and community events
              </p>
            </FadeInUp>
          </div>
          
          <FadeInUp delay={200}>
            <div className="masonry-grid">
              {galleryImages.map((img, index) => (
                <div key={index} className="masonry-item group cursor-pointer">
                  <div className="flowing-border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                    <img 
                      src={img.url} 
                      alt={img.alt} 
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp delay={0}>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h3>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Reserve your spot for our next transformative event
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <button className="px-10 py-4 bg-white text-amber-700 font-bold text-lg rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              View Schedule & Book
            </button>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}