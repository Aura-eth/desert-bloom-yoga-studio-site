"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { ShineBorder } from '@/components/shine-border';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Our Story Section */}
      <section id="story" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInUp delay={0}>
            <div className="rounded-[2rem] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-orange-300/20 z-10" />
              <img 
                src="https://source.unsplash.com/600x500/?desert-yoga-studio-interior-warm-lighting-cacti" 
                alt="Desert Bloom Yoga Studio interior" 
                className="w-full h-[500px] object-cover" 
              />
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <div>
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide block mb-4">About Desert Bloom</span>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="text-gray-600 text-lg leading-relaxed">
                <p>Founded in the heart of Scottsdale, Desert Bloom Yoga Studio emerged from a vision to create a sanctuary where ancient yoga wisdom meets the healing energy of the Sonoran Desert. We believe in nurturing authentic practice and genuine community connection.</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Team Profiles Section */}
      <section id="team-profiles" className="py-24 px-6 bg-gradient-to-b from-amber-50/30 to-orange-50/30 relative">
        <style jsx>{`
          .sand-texture {
            background-image: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(251, 146, 60, 0.08) 0%, transparent 50%);
            position: absolute;
            inset: 0;
            pointer-events: none;
          }
        `}</style>
        <div className="sand-texture" />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeInUp delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Teachers</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Experienced guides for your yoga journey</p>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <FadeInUp delay={100}>
              <div className="text-center bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-amber-200/50">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-amber-200/50">
                  <img 
                    src="https://source.unsplash.com/300x300/?yoga-teacher-woman-peaceful" 
                    alt="Sarah Mitchell" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Sarah Mitchell</h3>
                <p className="text-amber-700 font-medium mb-3">Lead Instructor & Founder</p>
                <p className="text-gray-600 text-sm">500-hour certified instructor specializing in Vinyasa and sound healing</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="text-center bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-amber-200/50">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-amber-200/50">
                  <img 
                    src="https://source.unsplash.com/300x300/?yoga-instructor-man-meditation" 
                    alt="David Chen" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">David Chen</h3>
                <p className="text-amber-700 font-medium mb-3">Hot Yoga Specialist</p>
                <p className="text-gray-600 text-sm">Bikram-certified teacher with 8+ years of heated room experience</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="text-center bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-amber-200/50">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-amber-200/50">
                  <img 
                    src="https://source.unsplash.com/300x300/?meditation-teacher-woman-serene" 
                    alt="Luna Rodriguez" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Luna Rodriguez</h3>
                <p className="text-amber-700 font-medium mb-3">Yin & Meditation Guide</p>
                <p className="text-gray-600 text-sm">Trauma-informed yoga teacher focused on restorative practices</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="feature-highlight" className="py-24 px-6 relative">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1600x800/?wellness-boutique-natural-products-desert-aesthetic" 
            alt="Wellness boutique" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/95" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeInUp delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Desert Wellness Boutique</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Curated local wellness products</p>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <FadeInUp delay={100}>
              <ShineBorder 
                borderRadius={24}
                borderWidth={2}
                duration={3}
                color={['#f59e0b', '#ea580c', '#dc2626']}
                className="bg-white/80 backdrop-blur-sm p-8"
              >
                <div className="w-12 h-12 rounded-[1rem] bg-amber-100 flex items-center justify-center mb-6">
                  <span className="text-amber-700 text-2xl">🌵</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Local Wellness Brands</h3>
                <p className="text-gray-600">Handpicked products from Arizona artisans and wellness creators</p>
              </ShineBorder>
            </FadeInUp>
            <FadeInUp delay={200}>
              <ShineBorder 
                borderRadius={24}
                borderWidth={2}
                duration={3}
                color={['#10b981', '#059669', '#047857']}
                className="bg-white/80 backdrop-blur-sm p-8"
              >
                <div className="w-12 h-12 rounded-[1rem] bg-emerald-100 flex items-center justify-center mb-6">
                  <span className="text-emerald-700 text-2xl">🧘</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Sustainable Yoga Gear</h3>
                <p className="text-gray-600">Eco-friendly mats, blocks, and props for conscious practitioners</p>
              </ShineBorder>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative">
        <style jsx>{`
          .organic-shape {
            border-radius: 2rem 3rem 2.5rem 2rem;
          }
          .desert-stone {
            border-radius: 1.5rem 2rem 1.8rem 1.3rem;
          }
        `}</style>
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold mb-16 text-gray-900">Student Stories</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <div className="bg-white organic-shape shadow-lg border border-gray-100 p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 desert-stone opacity-30 transform translate-x-8 -translate-y-8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 desert-stone opacity-30 transform -translate-x-4 translate-y-4" />
              <div className="text-6xl text-amber-600 mb-8 relative z-10">&ldquo;</div>
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-gray-800 relative z-10">
                Desert Bloom transformed not just my flexibility, but my entire relationship with stress and self-care. The teachers create such a welcoming, non-judgmental space.
              </blockquote>
              <div className="flex items-center justify-center gap-4 relative z-10">
                <img 
                  src="https://source.unsplash.com/80x80/?woman-happy-yoga-student" 
                  alt="Jessica M." 
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-200" 
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Jessica M.</div>
                  <div className="text-sm text-gray-600">Scottsdale</div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Full-width atmospheric section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img 
          src="https://source.unsplash.com/1600x800/?meditation-sound-bowl-singing-bowl-desert-setting" 
          alt="Desert meditation" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        <FadeInUp delay={0}>
          <div className="relative text-center text-white px-6 max-w-3xl">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Find Your Desert Sanctuary</h3>
            <p className="text-xl text-white/80">Where ancient wisdom meets modern wellness</p>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}