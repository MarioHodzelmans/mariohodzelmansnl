'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '0 2rem',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(10,10,10,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <Link href="/" style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff', textDecoration: 'none', letterSpacing: '-0.02em' }}>
        Mario<span style={{ color: '#CCFF00' }}>.</span>
      </Link>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {[
          { label: 'Blog', href: '/blog' },
          { label: 'Tools', href: '/tools' },
          { label: 'CV', href: '/cv' },
          { label: 'Over mij', href: '/over' },
        ].map(({ label, href }) => (
          <Link key={href} href={href} style={{
            color: 'rgba(255,255,255,0.65)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
          >
            {label}
          </Link>
        ))}
        <Link href="/blog" style={{
          background: '#CCFF00',
          color: '#0A0A0A',
          padding: '0.45rem 1.1rem',
          borderRadius: '999px',
          fontSize: '0.85rem',
          fontWeight: 700,
          textDecoration: 'none',
        }}>
          Lees meer →
        </Link>
      </div>
    </nav>
  )
}
