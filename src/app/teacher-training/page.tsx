"use client";

import FadeInUp from '@/components/fade-in-up';
import ShineBorder from '@/components/shine-border';
import { cn } from '@/lib/utils';

export default function TeacherTrainingPage() {
  return (
    <>
      <style jsx>{`
        .sand-texture::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(218, 165, 32, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.06) 0%, transparent 50%);
          mix-blend-mode: multiply;
          pointer-events: none;
        }
        .desert-curve {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .flow-divider {
          background: linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%);
          height: 2px;
          border-radius: 1px;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative sand-texture">
        <div className="flex items-center px-8 lg:px-16 py-24">
          <div className="max-w-lg">
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-4 block">Transform Your Practice</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-stone-900">Deepen Your Practice, Share Your Gift</h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-lg text-stone-600 mb-8">Comprehensive 200-hour teacher training rooted in authentic yoga tradition</p>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="flex gap-4">
                <ShineBorder borderRadius={12} borderWidth={2} duration={3000} color={['#d97706', '#92400e']}>
                  <a href="#pricing-tiers" className="px-8 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition block">
                    Begin Your Journey
                  </a>
                </ShineBorder>
                <a href="#feature-highlight" className="px-8 py-3 border-2 border-stone-300 text-stone-700 rounded-xl font-semibold hover:border-amber-600 hover:text-amber-600 transition">
                  Learn More
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-screen desert-curve">
          <img 
            src="https://source.unsplash.com/800x1200/?yoga teacher training group students learning poses" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-stone-900/30" />
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="feature-highlight" className="py-24 px-6 relative sand-texture">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold mb-4 text-stone-900">Training Program Highlights</h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="flow-divider w-24 mx-auto"></div>
            </FadeInUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Comprehensive Curriculum",
                description: "Anatomy, philosophy, sequencing, and teaching methodology",
                icon: "📚"
              },
              {
                title: "Experienced Faculty",
                description: "Learn from certified instructors with decades of combined experience",
                icon: "🧘‍♀️"
              },
              {
                title: "Yoga Alliance Certified",
                description: "Receive your 200-hour RYT certification upon completion",
                icon: "🏆"
              },
              {
                title: "Ongoing Support",
                description: "Monthly graduate meetups and continuing education opportunities",
                icon: "🤝"
              }
            ].map((feature, i) => (
              <FadeInUp key={feature.title} delay={i * 100} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mx-auto mb-6 text-2xl shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-stone-900">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.description}</p>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section id="process-steps" className="py-24 px-6 bg-gradient-to-b from-stone-50 to-white relative sand-texture">
        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold text-center mb-16 text-stone-900">Your Training Journey</h2>
          </FadeInUp>
          <div className="space-y-16">
            {[
              {
                step: "1",
                title: "Foundation Month",
                description: "Yoga philosophy, history, and establishing personal practice"
              },
              {
                step: "2",
                title: "Anatomy & Alignment",
                description: "Body mechanics, safe adjustments, and injury prevention"
              },
              {
                step: "3",
                title: "Teaching Methodology",
                description: "Class sequencing, verbal cues, and hands-on practice teaching"
              },
              {
                step: "4",
                title: "Certification & Beyond",
                description: "Final assessments, certification, and launching your teaching journey"
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-8 items-start">
                <FadeInUp delay={i * 100}>
                  <div className="flex flex-col items-center flex-none">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    {i < 3 && <div className="w-px h-16 bg-gradient-to-b from-amber-300 to-amber-200 mt-4" />}
                  </div>
                </FadeInUp>
                <div className="pt-4">
                  <FadeInUp delay={i * 100 + 50}>
                    <h3 className="text-2xl font-semibold mb-3 text-stone-900">{step.title}</h3>
                  </FadeInUp>
                  <FadeInUp delay={i * 100 + 100}>
                    <p className="text-stone-600 text-lg leading-relaxed">{step.description}</p>
                  </FadeInUp>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section id="pricing-tiers" className="py-24 px-6 relative">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1600x800/?desert arizona sunrise golden hour" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-amber-50/80" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold mb-4 text-stone-900">Training Investment</h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-stone-600 text-lg">Choose the payment option that works best for your journey</p>
            </FadeInUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Full Payment",
                price: "$2,800",
                description: "Complete training program with early bird savings",
                features: [
                  "200-hour certification",
                  "All materials included",
                  "Monthly graduate support",
                  "$200 discount"
                ],
                featured: true
              },
              {
                name: "Payment Plan",
                price: "$3,000",
                description: "Spread investment over four monthly payments",
                features: [
                  "200-hour certification",
                  "All materials included",
                  "Monthly graduate support",
                  "Flexible payments"
                ],
                featured: false
              }
            ].map((tier, i) => (
              <FadeInUp key={tier.name} delay={i * 200} className={cn(
                "p-10 rounded-3xl border-2 backdrop-blur-sm transition-all duration-300 hover:shadow-xl",
                tier.featured 
                  ? "border-amber-400 bg-white/95 shadow-lg scale-105" 
                  : "border-stone-200 bg-white/90 hover:border-amber-300"
              )}>
                <h3 className="text-xl font-semibold mb-2 text-stone-900">{tier.name}</h3>
                <div className="text-5xl font-black mb-3 text-amber-600">{tier.price}</div>
                <p className="text-stone-600 mb-8 leading-relaxed">{tier.description}</p>
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-stone-700">
                      <span className="text-amber-500 mt-1 flex-none">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={cn(
                  "w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300",
                  tier.featured
                    ? "bg-amber-600 text-white hover:bg-amber-700 shadow-lg hover:shadow-xl"
                    : "bg-stone-100 text-stone-700 hover:bg-amber-50 hover:text-amber-700 border border-stone-200 hover:border-amber-300"
                )}>
                  Get Started
                </button>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-amber-600 via-amber-700 to-stone-800 text-white relative sand-texture">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Teaching Journey?</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">Join our supportive community of dedicated practitioners and experienced teachers. Transform not only your own practice, but learn to guide others on their yoga journey.</p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShineBorder borderRadius={16} borderWidth={2} duration={4000} color={['#ffffff', '#fbbf24']}>
                <button className="px-10 py-4 bg-white text-amber-700 font-bold rounded-2xl text-lg hover:bg-amber-50 transition">
                  Enroll Now
                </button>
              </ShineBorder>
              <button className="px-10 py-4 border-2 border-white/50 text-white rounded-2xl font-semibold hover:bg-white/10 transition">
                Schedule a Call
              </button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}