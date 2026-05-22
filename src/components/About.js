import React from 'react';
import { motion } from 'framer-motion';

const beliefs = [
  { title: 'Be yourself while serving others.', desc: 'The more genuine the expression, the more powerful the product. We don\'t ask builders to sand down their edges — we ask them to bring everything they are into what they build.' },
  { title: 'Raw creativity over polish.', desc: 'Genuine work beats manufactured work every time. A raw, honest product built from real experience will always outlast a polished product built from a brief.' },
  { title: 'Innovation that serves society.', desc: 'The best invention means nothing if it only serves the person who invented it. We measure innovation by its reach and impact — not just its novelty.' },
  { title: 'Profit and purpose are the same thing.', desc: 'We reject the idea that making money and doing good are in tension. Built right, they are identical. The ventures that genuinely serve communities are also the ones that last.' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '140px 40px', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="about-grid">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>What We Are</span>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#000', marginBottom: '32px' }}>
            A movement. A company.<br />
            <span style={{ color: 'rgba(0,0,0,0.35)' }}>A project.</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)', lineHeight: 1.75, marginBottom: '20px' }}>
            The Black Project is a movement, a company, and a project all at once. A creative collective building ventures across every industry — entertainment, art, technology, food, media, finance, software, and anything else where genuine creativity can create real value for real people.
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)', lineHeight: 1.75, marginBottom: '20px' }}>
            We exist to prove that businesses do not have to start the way corporations say they should. You do not need investors, pedigree, or a playbook. The most powerful competitive advantage in the world is a genuine idea pushed through with conviction.
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)', lineHeight: 1.75 }}>
            We are not defined by a single sector. We are defined by a philosophy: be yourself while serving others. Every venture we launch carries the same DNA — raw, honest creativity expressed through something that makes a genuine difference in the communities it touches.
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
