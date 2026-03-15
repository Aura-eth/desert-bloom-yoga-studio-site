"use client";

import { Inter, Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import './globals.css';

const cormorantGaramond = Inter({ subsets: ['latin'], variable: '--font-heading' });
const sourceSans3 = Inter({ subsets: ['latin'], variable: '--font-body' });

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { "label": "Home", "href": "/" },
    { "label": "Classes", "href": "/classes" },
    { "label": "Teacher Training", "href": "/teacher-training" },
    { "label": "Events", "href": "/events" },
    { "label": "About", "href": "/about" }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]"></div>
            <span className="font-heading text-xl lg:text-2xl font-semibold text-[var(--color-text)]">
              Desert Bloom Yoga
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[var(--color-secondary)]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 font-body text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Footer() {
  const navLinks = [
    { "label": "Home", "href": "/" },
    { "label": "Classes", "href": "/classes" },
    { "label": "Teacher Training", "href": "/teacher-training" },
    { "label": "Events", "href": "/events" },
    { "label": "About", "href": "/about" }
  ];

  return (
    <footer className="bg-[var(--color-surface)] relative overflow-hidden">
      {/* Desert horizon SVG divider */}
      <div className="absolute top-0 left-0 right-0 h-16 -mt-1">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          <path
            d="M0,60 C300,20 400,80 600,50 C800,20 900,70 1200,40 L1200,0 L0,0 Z"
            fill="var(--color-bg)"
          />
        </svg>
      </div>

      <div className="relative pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]"></div>
                <span className="font-heading text-xl font-semibold text-[var(--color-text)]">
                  Desert Bloom Yoga
                </span>
              </div>
              <p className="font-body text-[var(--color-muted)] leading-relaxed mb-6">
                Discover inner peace and strength in our serene desert sanctuary. Join our community of mindful practitioners.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] mb-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] mb-4">
                Contact
              </h3>
              <div className="space-y-3 font-body text-[var(--color-muted)]">
                <div>
                  <p className="font-medium text-[var(--color-text)] mb-1">Phone</p>
                  <a href="tel:(480) 555-0342" className="hover:text-[var(--color-primary)] transition-colors">
                    (480) 555-0342
                  </a>
                </div>
                <div>
                  <p className="font-medium text-[var(--color-text)] mb-1">Email</p>
                  <a href="mailto:hello@desertbloomyoga.com" className="hover:text-[var(--color-primary)] transition-colors">
                    hello@desertbloomyoga.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-[var(--color-text)] mb-1">Address</p>
                  <p>4821 N Scottsdale Rd<br />Suite 110</p>
                </div>
              </div>
            </div>

            {/* Studio Hours Column */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] mb-4">
                Studio Hours
              </h3>
              <div className="space-y-2 font-body text-[var(--color-muted)]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>6:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="border-t border-[var(--color-secondary)] mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="font-body text-[var(--color-muted)] text-center md:text-left">
                © 2024 Desert Bloom Yoga Studio. All rights reserved.
              </p>
              <div className="flex space-x-6 font-body text-sm">
                <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${sourceSans3.variable}`}>
      <head>
        <style>{`
          :root {
            --color-primary: #B8956A;
            --color-secondary: #E4C5A0;
            --color-accent: #D4A574;
            --color-bg: #FEFBF7;
            --color-text: #3A2F2A;
            --color-surface: #F7F2ED;
            --color-muted: #8B7355;
            --space-section: 5rem;
            --space-content: 3rem;
            --space-element: 1.5rem;
            --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --duration-fast: 200ms;
            --duration-normal: 300ms;
            --duration-slow: 500ms;
            --font-heading: ${cormorantGaramond.style.fontFamily};
            --font-body: ${sourceSans3.style.fontFamily};
          }

          /* Custom sand texture overlay */
          .sand-texture::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              radial-gradient(circle at 25% 25%, rgba(184, 149, 106, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(212, 165, 116, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(228, 197, 160, 0.05) 0%, transparent 50%);
            background-size: 100px 100px, 150px 150px, 200px 200px;
            background-position: 0 0, 50px 50px, 100px 100px;
            mix-blend-mode: multiply;
            pointer-events: none;
          }
        `}</style>
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] font-body antialiased">
        <Navigation />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}