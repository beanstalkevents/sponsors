import { useState, useEffect } from 'react'
import Image from 'next/image'

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
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 32px', height: '68px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'background 0.35s, border-color 0.35s',
      background: scrolled ? 'rgba(35,60,54,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(205,247,101,0.12)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Image src="/logos/logo-lime.png" alt="Beanstalk" width={140} height={42}
          style={{ objectFit: 'contain', height: '34px', width: 'auto' }} priority />
      </a>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="hidden md:flex">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} style={{
            fontFamily: 'Afacad, sans-serif', fontSize: '15px', fontWeight: 500,
            color: 'var(--mint)', textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--off-white)'}
          onMouseLeave={e => e.target.style.color = 'var(--mint)'}
          >{link.label}</a>
        ))}
        <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '14px' }}>
          Partner With Us
        </a>
      </div>

      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px',
      }}>
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: '24px', height: '2px',
            background: 'var(--green-lime)', borderRadius: '2px', transition: 'all 0.3s',
            transform: menuOpen ? (i===1 ? 'scaleX(0)' : i===0 ? 'rotate(45deg) translate(5px,5px)' : 'rotate(-45deg) translate(5px,-5px)') : 'none',
          }} />
        ))}
      </button>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0,
          background: 'var(--green-darkest)', borderBottom: '1px solid var(--border)',
          padding: '28px 32px 36px', display: 'flex', flexDirection: 'column', gap: '24px',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'NewSpirit, serif', fontSize: '28px', fontWeight: 700,
              color: 'var(--off-white)', textDecoration: 'none',
            }}>{link.label}</a>
          ))}
          <a href="#contact" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '8px' }}
             onClick={() => setMenuOpen(false)}>Partner With Us</a>
        </div>
      )}
    </nav>
  )
}
