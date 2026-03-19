import { useState, useEffect } from 'react'
import { siteConfig } from '../data/config'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#packages', label: 'Packages' },
  { href: '#addons', label: 'Add-Ons' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 32px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.4s ease, border-bottom 0.4s ease',
        background: scrolled ? 'rgba(14,12,10,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(200,169,110,0.15)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '22px',
          fontWeight: 400,
          letterSpacing: '0.08em',
          color: 'var(--gold)',
        }}>
          BEANSTALK
        </span>
        <span style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '11px',
          color: 'var(--stone-light)',
          marginLeft: '8px',
          letterSpacing: '0.12em',
        }}>
          {siteConfig.year}
        </span>
      </a>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}
           className="hidden md:flex">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            fontWeight: 400,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--stone-light)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--gold)'}
          onMouseLeave={e => e.target.style.color = 'var(--stone-light)'}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--ink)',
          background: 'var(--gold)',
          textDecoration: 'none',
          padding: '8px 20px',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.target.style.opacity = '0.85'}
        onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Partner With Us
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          padding: '4px',
        }}
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block',
            width: '22px',
            height: '1px',
            background: 'var(--gold)',
            transition: 'all 0.3s',
            transform: menuOpen
              ? i === 1 ? 'scaleX(0)' : i === 0 ? 'rotate(45deg) translate(4px, 4px)' : 'rotate(-45deg) translate(4px, -4px)'
              : 'none',
          }} />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          background: 'rgba(14,12,10,0.98)',
          borderBottom: '1px solid rgba(200,169,110,0.2)',
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
               onClick={() => setMenuOpen(false)}
               style={{
                 fontFamily: 'Cormorant Garamond, serif',
                 fontSize: '24px',
                 color: 'var(--parchment)',
                 textDecoration: 'none',
               }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
