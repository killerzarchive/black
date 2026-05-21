import React from 'react';
import { motion } from 'framer-motion';

const beliefs = [
  { title: 'Ideas are currency.', desc: 'Protect them, develop them, monetize them. The most valuable asset you own is the idea you haven\'t built yet.' },
  { title: 'Innovation is a discipline.', desc: 'Not a department. Not a meeting. A way of operating every single day — questioning, building, and pushing past what already exists.' },
  { title: 'Profit and creativity are not enemies.', desc: 'The most creative minds should also be the most financially free. We build businesses that prove it.' },
  { title: 'You don\'t need permission.', desc: 'To build an empire, to take up space, to go further than anyone expected. The only requirement is the willingness to start.' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '140px 40px', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="about-grid">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>What We Are</span>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#000', marginBottom: '32px' }}>
            Not a corporation.<br />
            <span style={{ color: 'rgba(0,0,0,0.35)' }}>A movement.</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)', lineHeight: 1.75, marginBottom: '20px' }}>
            The Black Company is not a corporation. It's not a startup. It's not a brand. It's a movement built on the belief that the best ideas don't come from boardrooms — they come from garages, late nights, napkin sketches, and people who refused to be told no.
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)', lineHeight: 1.75, marginBottom: '20px' }}>
            We are an umbrella of ventures, projects, and people united by one principle: build something real, build something that lasts, and never let the system decide your ceiling.
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)', lineHeight: 1.75 }}>
            We exist for the builders who don't fit the mold. For the creatives who see what others can't. For the everyday person who has an idea worth more than their 9-to-5 will ever pay them for.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '24px' }}>What We Believe</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {beliefs.map((b, i) => (
              <div key={b.title} style={{ padding: '28px 0', borderBottom: i < beliefs.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ width: 7, height: 7, background: '#000', borderRadius: '50%', opacity: 0.4, flexShrink: 0 }} />
                  <h4 style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.02em', color: '#000' }}>{b.title}</h4>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.4)', lineHeight: 1.6, paddingLeft: '17px' }}>{b.desc}</p>
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
