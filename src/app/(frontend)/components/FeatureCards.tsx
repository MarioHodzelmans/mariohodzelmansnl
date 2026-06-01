'use client'

export default function FeatureCards() {
  const cards = [
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
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
      {cards.map(({ icon, title, desc, href }) => (
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
  )
}
