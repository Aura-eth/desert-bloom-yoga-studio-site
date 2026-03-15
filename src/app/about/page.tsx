"use client";

import FadeInUp from "@/components/fade-in-up";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <>
      <style jsx>{`
        .desert-texture {
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(218, 165, 32, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(205, 133, 63, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(160, 82, 45, 0.03) 0%, transparent 50%);
          mix-blend-mode: multiply;
        }
        
        .sand-pattern {
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(218, 165, 32, 0.02) 2px,
            rgba(218, 165, 32, 0.02) 4px
          );
        }
        
        .horizon-curve {
          clip-path: ellipse(100% 100% at 50% 0%);
        }
      `}</style>
      
      <main className="min-h-screen">
        {/* Story Section */}
        <section id="story" className="relative py-24 px-6">
          <div className="absolute inset-0">
            <img 
              src="https://source.unsplash.com/1920x1080/?desert%20yoga%20studio%20warm%20lighting%20meditation%20space" 
              alt="" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>
          <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <FadeInUp delay={0}>
                <span className="text-sm font-semibold text-white/70 uppercase tracking-widest">Our Story</span>
              </FadeInUp>
              <FadeInUp delay={100}>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 leading-tight">Rooted in the Desert</h1>
              </FadeInUp>
              <FadeInUp delay={200}>
                <p className="text-lg text-white/80 leading-relaxed">
                  Desert Bloom Yoga Studio was born from a vision to create a space where the serene beauty of the Sonoran Desert meets the ancient wisdom of yoga. We believe that just as desert plants bloom with remarkable resilience and grace, each student who enters our doors has the potential to flourish in their own unique way. Our studio serves as a nurturing oasis where community, authentic practice, and personal growth intersect.
                </p>
              </FadeInUp>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden">
              <FadeInUp delay={300}>
                <img 
                  src="https://source.unsplash.com/600x500/?scottsdale%20arizona%20desert%20landscape%20sunrise%20golden%20hour" 
                  alt="Desert landscape at sunrise" 
                  className="w-full h-[400px] object-cover" 
                />
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Feature Highlight Section */}
        <section id="feature-highlight" className="py-24 px-6 bg-gradient-to-b from-white to-amber-50/30 desert-texture">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeInUp delay={0}>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">More Than Just Yoga</h2>
              </FadeInUp>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FadeInUp delay={100}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Boutique Wellness Corner</h3>
                  <p className="text-gray-600 leading-relaxed">Curated selection of products from local artisans and wellness brands</p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Partnerships</h3>
                  <p className="text-gray-600 leading-relaxed">Collaborating with Scottsdale wellness practitioners and local businesses</p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={300}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Sustainable Practices</h3>
                  <p className="text-gray-600 leading-relaxed">Eco-conscious operations reflecting our connection to the desert environment</p>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Curved Section Divider */}
        <div className="h-16 bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100 horizon-curve"></div>

        {/* Location Map Section */}
        <section id="location-map" className="py-24 px-6 bg-white sand-pattern">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 flex flex-col justify-center">
              <FadeInUp delay={0}>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Visit Our Desert Sanctuary</h2>
              </FadeInUp>
              
              <div className="space-y-6">
                <FadeInUp delay={100}>
                  <div>
                    <span className="font-semibold block mb-2 text-gray-900">Studio Location</span>
                    <p className="text-gray-600">8745 E Via de Commercio<br />Scottsdale, AZ 85258</p>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={200}>
                  <div>
                    <span className="font-semibold block mb-2 text-gray-900">Open Daily</span>
                    <p className="text-gray-600">6:00 AM - 9:00 PM</p>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={300}>
                  <div>
                    <span className="font-semibold block mb-2 text-gray-900">Parking</span>
                    <p className="text-gray-600">Free parking available in our private lot</p>
                  </div>
                </FadeInUp>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <FadeInUp delay={400}>
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 relative">
                  <img 
                    src="https://source.unsplash.com/800x600/?yoga%20class%20vinyasa%20flow%20students%20peaceful%20studio" 
                    alt="Studio location" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-medium">Located in the heart of Scottsdale's wellness district</p>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-gradient-to-b from-amber-50/50 to-white desert-texture">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeInUp delay={0}>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Connect With Us</h2>
              </FadeInUp>
              <FadeInUp delay={100}>
                <p className="text-xl text-gray-600">Ready to begin your journey?</p>
              </FadeInUp>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <FadeInUp delay={200}>
                  <h3 className="text-2xl font-semibold mb-8 text-gray-900">Send us a message</h3>
                </FadeInUp>
                
                <FadeInUp delay={300}>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                </FadeInUp>
              </div>
              
              {/* Contact Info */}
              <div className="lg:pl-8">
                <div className="space-y-8">
                  <FadeInUp delay={400}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-amber-500 to-orange-500"></div>
                      </div>
                      <div>
                        <span className="font-semibold block mb-1 text-gray-900">Call or text</span>
                        <p className="text-gray-600">(480) 555-YOGA</p>
                      </div>
                    </div>
                  </FadeInUp>
                  
                  <FadeInUp delay={500}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-amber-500 to-orange-500"></div>
                      </div>
                      <div>
                        <span className="font-semibold block mb-1 text-gray-900">Email us</span>
                        <p className="text-gray-600">hello@desertbloomyoga.com</p>
                      </div>
                    </div>
                  </FadeInUp>
                  
                  <FadeInUp delay={600}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-amber-500 to-orange-500"></div>
                      </div>
                      <div>
                        <span className="font-semibold block mb-1 text-gray-900">Studio hours</span>
                        <p className="text-gray-600">6:00 AM - 9:00 PM Daily</p>
                      </div>
                    </div>
                  </FadeInUp>
                  
                  <FadeInUp delay={700}>
                    <div className="pt-8 border-t border-gray-200">
                      <img 
                        src="https://source.unsplash.com/400x250/?sound%20bath%20singing%20bowls%20candles%20meditation%20ceremony" 
                        alt="Sound bath meditation" 
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <p className="text-sm text-gray-500 mt-3 text-center">
                        Join our welcoming desert sanctuary
                      </p>
                    </div>
                  </FadeInUp>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}