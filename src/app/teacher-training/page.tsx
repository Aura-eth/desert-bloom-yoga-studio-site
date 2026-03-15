"use client";

import { useState, useEffect } from "react";
import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do I need to be an advanced yogi to join?",
    answer: "While we recommend at least 1-2 years of consistent practice, we welcome dedicated students at various levels. What matters most is your commitment to learning and growing."
  },
  {
    question: "How much time should I expect to dedicate?",
    answer: "Our program requires approximately 15-20 hours per week including weekend intensives, home study, and practice teaching. We spread this over 6 months for optimal learning integration."
  },
  {
    question: "Is the certification recognized?",
    answer: "Yes, our 200-hour certification is fully recognized by Yoga Alliance, allowing you to register as RYT-200 and teach anywhere in the world."
  },
  {
    question: "What if I can't attend every session?",
    answer: "We understand life happens. Up to 10% of sessions can be made up through additional assignments and one-on-one mentoring, ensuring you still receive complete training."
  }
];

export default function TeacherTrainingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <style jsx>{`
        .sand-texture {
          background-image: 
            radial-gradient(circle at 20% 20%, rgba(210, 180, 140, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(222, 184, 135, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(218, 165, 32, 0.06) 0%, transparent 50%);
        }
        .organic-border {
          border-radius: 68% 32% 45% 55% / 72% 45% 55% 28%;
        }
        .desert-stone {
          border-radius: 45% 55% 65% 35% / 55% 45% 55% 45%;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden sand-texture">
        <img 
          src="https://source.unsplash.com/1920x1080/?yoga teacher training group desert retreat" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-orange-800/60 to-red-900/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-200 mb-4 block">200-Hour Certification</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Become a Certified Yoga Teacher</h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">Transform your practice into a calling with our comprehensive 200-hour teacher training program</p>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <ShineBorder borderRadius={12} duration={3} color={["#f59e0b", "#d97706", "#b45309"]}>
                  <a href="#process" className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-amber-50 transition">
                    Learn More
                  </a>
                </ShineBorder>
                <a href="tel:480-555-0123" className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition">
                  Schedule Call
                </a>
              </div>
            </FadeInUp>
          </div>
          <div className="hidden lg:block">
            <FadeInUp delay={400}>
              <div className="relative">
                <div className="w-96 h-96 organic-border bg-gradient-to-br from-amber-400/20 to-orange-500/20 backdrop-blur-sm border border-white/20" />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-5xl font-bold text-center mb-20 text-gray-900">Your Teaching Journey</h2>
          </FadeInUp>
          <div className="space-y-16">
            {[
              {
                step: "1",
                title: "Foundation Building",
                description: "Master yoga philosophy, anatomy, and alignment principles"
              },
              {
                step: "2",
                title: "Practice Development",
                description: "Deepen your personal practice across multiple yoga styles"
              },
              {
                step: "3",
                title: "Teaching Skills",
                description: "Learn sequencing, adjustments, and effective instruction techniques"
              },
              {
                step: "4",
                title: "Certification",
                description: "Complete practicum hours and receive your 200-hour certification"
              }
            ].map((step, i) => (
              <FadeInUp key={i} delay={i * 100}>
                <div className="flex gap-8 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    {i < 3 && <div className="w-px h-16 bg-gradient-to-b from-amber-300 to-orange-300 mt-4" />}
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section id="features" className="py-24 px-6 relative">
        <img 
          src="https://source.unsplash.com/1920x1080/?desert yoga studio interior warm lighting" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/70" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-5xl font-bold text-center mb-20 text-white">Program Highlights</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Small Cohort Learning",
                description: "Maximum 12 students for personalized attention and deep connection"
              },
              {
                title: "Desert Immersion Weekend",
                description: "Retreat-style intensive in Scottsdale's beautiful desert landscape"
              },
              {
                title: "Lifetime Support",
                description: "Ongoing mentorship and continued education opportunities"
              }
            ].map((feature, i) => (
              <FadeInUp key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="w-20 h-20 desert-stone bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <div className="w-8 h-8 rounded-full bg-white/90" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-lg text-white/80 leading-relaxed">{feature.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "200+", label: "Hours Training" },
            { value: "12", label: "Max Students" },
            { value: "6", label: "Month Program" },
            { value: "100%", label: "Certification Rate" }
          ].map((stat, i) => (
            <FadeInUp key={i} delay={i * 100}>
              <div>
                <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-sm mt-2 opacity-90 uppercase tracking-wide">{stat.label}</div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-3xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-5xl font-bold text-center mb-20 text-gray-900">Frequently Asked Questions</h2>
          </FadeInUp>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeInUp key={i} delay={i * 100}>
                <div className="border border-amber-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button 
                    className="w-full flex justify-between items-center p-6 text-left font-medium text-lg hover:bg-amber-50 transition"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-gray-900">{faq.question}</span>
                    <span className={`text-2xl text-amber-600 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <div className="px-6 text-gray-600 leading-relaxed">{faq.answer}</div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white sand-texture">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Begin Your Teaching Journey?</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">Join our next cohort and transform your passion into purpose</p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShineBorder borderRadius={16} duration={3} color={["#ffffff", "#fbbf24", "#ffffff"]}>
                <a href="tel:480-555-0123" className="inline-block px-12 py-4 bg-white text-gray-900 font-bold rounded-2xl text-lg hover:bg-gray-100 transition">
                  Apply Now
                </a>
              </ShineBorder>
              <a href="#process" className="inline-block px-12 py-4 border-2 border-white text-white font-bold rounded-2xl text-lg hover:bg-white/10 transition">
                Learn More
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}