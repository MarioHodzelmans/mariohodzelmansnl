import React from 'react'
import './styles.css'

export default async function HomePage() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', color: '#fff' }}>

      {/* Hero */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '160px 2rem 100px',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(204,255,0,0.1)',
          border: '1px solid rgba(204,255,0,0.25)',
          borderRadius: '999px',
          padding: '0.35rem 1rem',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#CCFF00',
          marginBottom: '2rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#CCFF00', display: 'inline-block' }} />
          AI · Toekomst · Technologie
        </div>

        <h1 style={{
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          margin: '0 0 1.5rem',
        }}>
          De toekomst<br />
          <span style={{
            background: '#CCFF00',
            color: '#0A0A0A',
            padding: '0 0.2em',
            display: 'inline-block',
          }}>begint nu.</span>
        </h1>

        <p style={{
          fontSize: '1.15rem',
          color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.7,
          maxWidth: '560px',
          margin: '0 0 2.5rem',
        }}>
          Ik schrijf over AI, deel tools die ik gebruik en laat zien hoe technologie ons werk en leven transformeert.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/blog" style={{
            background: '#CCFF00',
            color: '#0A0A0A',
            padding: '0.75rem 1.75rem',
            borderRadius: '999px',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '0.95rem',
          }}>
            Lees de blog →
          </a>
          <a href="/tools" style={{
            background: 'transparent',
            color: '#fff',
            padding: '0.75rem 1.75rem',
            borderRadius: '999px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '0.95rem',
            border: '1px solid rgba(255,255,255,0.2)',
          }}>
            Bekijk tools
          </a>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', maxWidth: '900px', margin: '0 auto' }} />

      {/* Feature blocks */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              icon: '✍️',
              title: 'Blog',
              desc: 'Artikelen over AI, tools en de toekomst van werk. Eerlijk, praktisch en to-the-point.',
              href: '/blog',
            },
            {
              icon: '🛠️',
              title: 'Tools',
              desc: 'Een overzicht van AI tools die ik dagelijks gebruik en aanbeveel.',
              href: '/tools',
            },
            {
              icon: '📋',
              title: 'CV',
              desc: 'Mijn achtergrond, ervaring en waar ik naartoe wil.',
              href: '/cv',
            },
          ].map(({ icon, title, desc, href }) => (
            <a key={title} href={href} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '1.75rem',
              textDecoration: 'none',
              color: '#fff',
              transition: 'border-color 0.2s, background 0.2s',
              display: 'block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(204,255,0,0.3)'
              e.currentTarget.style.background = 'rgba(204,255,0,0.04)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
            }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', margin: '0 0 0.5rem', letterSpacing: '-0.01em' }}>{title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '2rem',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.3)',
        fontSize: '0.85rem',
      }}>
        © {new Date().getFullYear()} Mario Hodzelmans
      </footer>
    </div>
  )
}
