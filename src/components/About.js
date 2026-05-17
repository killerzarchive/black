import React from 'react';
import { motion } from 'framer-motion';

const values = [
  { title: 'Creative first, always', desc: 'Every idea here starts as a creative impulse — not a market analysis. The work comes first. The business follows.' },
  { title: 'No lane', desc: "Creativity isn't just for artists. It's for anyone with a healthy imagination and the drive to build. The Black Company exists in every industry because good ideas don't belong to one category." },
  { title: 'Ideas into real things', desc: "Apps. SaaS. Brands. Businesses. The goal is to close the gap between imagination and execution — and prove it's possible without outside money or permission." },
  { title: 'Bootstrap to $1B', desc: "The number is audacious on purpose. No VC. But the co-founders? Every creative who believes in creativity and the authenticity of it — they're already in." },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '140px 40px', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="about-grid">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>A Movement</span>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#000', marginBottom: '32px' }}>
            Not just a company.<br />
            <span style={{ color: 'rgba(0,0,0,0.35)' }}>A creative movement.</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)', lineHeight: 1.75, marginBottom: '20px' }}>
            The Black Company is a thought that became a direction — turning creative energy into apps, SaaS products, brands, and businesses across every industry. Not a business plan. A creative impulse taken all the way.
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)', lineHeight: 1.75, marginBottom: '20px' }}>
            The goal is real: bootstrap a portfolio of companies to $1 billion — fully owned, no outside money, built from ideas alone. But the bigger point is what that proves. Creativity isn't a lane. It never was. It's the foundation every industry is secretly built on.
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)', lineHeight: 1.75 }}>
            If this inspires another creative to stop waiting for permission and start building — that's just as important as the billion.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {values.map((v, i) => (
              <div key={v.title} style={{ padding: '28px 0', borderBottom: i < values.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ width: 7, height: 7, background: '#000', borderRadius: '50%', opacity: 0.4, flexShrink: 0 }} />
                  <h4 style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.02em', color: '#000' }}>{v.title}</h4>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.4)', lineHeight: 1.6, paddingLeft: '17px' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
