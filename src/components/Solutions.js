import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  { number: '01', title: 'Find the idea. Build the company.', desc: 'Every venture starts with an idea worth taking further. We identify gaps across technology, media, and brands — then build real businesses around them, focused on revenue from day one.', tags: ['Tech', 'Media', 'Brands', 'Revenue First'] },
  { number: '02', title: 'Expand the ecosystem.', desc: 'Each company that works becomes a permanent part of the portfolio. They operate independently but contribute to one compounding whole — a private ecosystem that grows stronger with every addition.', tags: ['Private Portfolio', 'Multi-venture', 'Long Game'] },
  { number: '03', title: 'Reach $1 billion. Stay private.', desc: 'The target is a combined $1B portfolio valuation — funded not by venture capital, but by private investors and fellow creatives who believe in the vision. No board control. No exit pressure. Built to last.', tags: ['$1B Goal', 'Private', 'Believer-Backed'] },
];

export default function Solutions() {
  return (
    <section id="solutions" style={{ padding: '120px 40px', background: 'rgba(0,0,0,0.015)', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '80px' }}>
          <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>How It Works</span>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#000' }}>Building the ecosystem</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {solutions.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '48px', alignItems: 'start', padding: '48px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
              className="solution-row"
            >
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(0,0,0,0.2)', letterSpacing: '0.04em', paddingTop: '6px' }}>{s.number}</div>
              <div>
                <h3 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#000', marginBottom: '16px' }}>{s.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, maxWidth: '520px' }}>{s.desc}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end', paddingTop: '4px' }} className="solution-tags">
                {s.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(0,0,0,0.35)', background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.08)', padding: '5px 12px', borderRadius: '100px', whiteSpace: 'nowrap', letterSpacing: '0.04em' }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .solution-row { grid-template-columns: 48px 1fr !important; gap: 24px !important; } .solution-tags { display: none !important; } }
      `}</style>
    </section>
  );
}
