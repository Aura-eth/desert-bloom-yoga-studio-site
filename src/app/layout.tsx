"use client"

import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FadeInUp } from '@/components/fade-in-up'
import { cn } from '@/lib/utils'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Playfair Display', 'serif']
})

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Inter', 'sans-serif']
})

const navLinks = [
  {"label":"Home","href":"/"},
  {"label":"Classes","href":"/classes"},
  {"label":"Teacher Training","href":"/teacher-training"},
  {"label":"Events","href":"/events"},
  {"label":"About","href":"/about"},
  {"label":"Contact","href":"/contact"}
]

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'backdrop-blur-sm bg-white/90 shadow-sm' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className={cn(
              'text-2xl font-bold tracking-wide text-[var(--color-primary)]',
              cormorantGaramond.className
            )}>
              Desert Bloom Yoga
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200',
                  'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] after:transition-all after:duration-300',
                  'hover:after:w-full',
                  sourceSans3.className
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={cn(
              'w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300',
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            )}></span>
            <span className={cn(
              'w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300',
              isMobileMenuOpen ? 'opacity-0' : ''
            )}></span>
            <span className={cn(
              'w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300',
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            )}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}>
          <div className="py-4 space-y-4 border-t border-[var(--color-secondary)]/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200',
                  sourceSans3.className
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-[var(--color-text)] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-[var(--color-secondary)] to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <FadeInUp delay={0}>
              <h3 className={cn(
                'text-2xl font-bold text-white mb-4 tracking-wide',
                cormorantGaramond.className
              )}>
                Desert Bloom Yoga
              </h3>
              <p className={cn(
                'text-gray-300 leading-relaxed mb-6',
                sourceSans3.className
              )}>
                A sanctuary for mindful movement and inner peace in the heart of the desert.
              </p>
            </FadeInUp>
          </div>

          {/* Navigation Column */}
          <div>
            <FadeInUp delay={100}>
              <h4 className={cn(
                'text-lg font-semibold text-white mb-6',
                cormorantGaramond.className
              )}>
                Navigation
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'text-gray-300 hover:text-[var(--color-secondary)] transition-colors duration-200',
                        sourceSans3.className
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeInUp>
          </div>

          {/* Contact Column */}
          <div>
            <FadeInUp delay={200}>
              <h4 className={cn(
                'text-lg font-semibold text-white mb-6',
                cormorantGaramond.className
              )}>
                Contact Info
              </h4>
              <div className={cn('space-y-3 text-gray-300', sourceSans3.className)}>
                <p>4821 N Scottsdale Rd Suite 110</p>
                <p>
                  <a href="tel:(480) 555-0342" className="hover:text-[var(--color-secondary)] transition-colors duration-200">
                    (480) 555-0342
                  </a>
                </p>
                <p>
                  <a href="mailto:hello@desertbloomyoga.com" className="hover:text-[var(--color-secondary)] transition-colors duration-200">
                    hello@desertbloomyoga.com
                  </a>
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* Social & Hours Column */}
          <div>
            <FadeInUp delay={300}>
              <h4 className={cn(
                'text-lg font-semibold text-white mb-6',
                cormorantGaramond.className
              )}>
                Connect With Us
              </h4>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.087.105.11.199.081.305-.09.375-.293 1.199-.335 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>
                <div className={cn('text-sm text-gray-400', sourceSans3.className)}>
                  <p>Studio Hours:</p>
                  <p>Mon-Fri: 6am - 9pm</p>
                  <p>Sat-Sun: 7am - 7pm</p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={cn(
              'text-gray-400 text-sm',
              sourceSans3.className
            )}>
              © 2024 Desert Bloom Yoga Studio. All rights reserved.
            </p>
            <div className={cn(
              'flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400',
              sourceSans3.className
            )}>
              <a href="#" className="hover:text-[var(--color-secondary)] transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--color-secondary)] transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --color-primary: #A67C5A;
            --color-secondary: #D4B08A;
            --color-accent: #E8AA6B;
            --color-bg: #F9F6F2;
            --color-text: #3A2F28;
            --color-surface: #FFFFFF;
            --color-muted: #8B7355;
            --space-section: 6rem;
            --space-content: 3rem;
            --space-element: 1.5rem;
            --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --duration-fast: 200ms;
            --duration-normal: 300ms;
            --duration-slow: 500ms;
            --font-heading: ${cormorantGaramond.style.fontFamily};
            --font-body: ${sourceSans3.style.fontFamily};
          }
        `}</style>
      </head>
      <body className={cn(
        sourceSans3.className,
        'bg-[var(--color-bg)] text-[var(--color-text)] antialiased'
      )}>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}