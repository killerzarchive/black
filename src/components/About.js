import React from 'react';
import { motion } from 'framer-motion';

const values = [
  { title: 'Ideas first, always', desc: 'Every venture starts with a real idea worth building — not a pitch deck. The concept earns its place by solving something real, then we build the business around it.' },
  { title: 'Every industry', desc: "Good ideas don't belong to one category. The Black Company spans technology, media, brands, and beyond — because the ecosystem grows wherever the ideas are strongest." },
  { title: 'Ideas into real things', desc: 'Apps. SaaS. Media brands. Physical products. The goal is closing the gap between concept and company — and proving that a strong idea, built right, can compete with anything.' },
  { title: 'Private. To $1 billion.', desc: "The goal is audacious by design. No venture capital. Growth is backed by fellow creatives and private investors who believe in the vision — and we stay private the entire way there." },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '140px 40px', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="about-grid">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>The Ecosystem</span>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#000', marginBottom: '32px' }}>
            Not just a company.<br />
            <span style={{ color: 'rgba(0,0,0,0.35)' }}>A growing ecosystem.</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)', lineHeight: 1.75, marginBottom: '20px' }}>
            The Black Company is a private portfolio built on a simple principle — take ideas further. Technology, media, brands, and future ventures that each stand on their own while contributing to one compounding whole.
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)', lineHeight: 1.75, marginBottom: '20px' }}>
            The company stays private. Growth is backed by fellow creatives and private investors who believe in the vision — not venture capital, not public markets. The target is $1 billion in combined portfolio value, built on our terms.
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)', lineHeight: 1.75 }}>
            Every company in the portfolio is a real business solving a real problem — built to last, not to flip.
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
