import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  { number: '01', title: 'Build', desc: 'I find problems worth solving and ship products to fix them. Everything starts as a creative idea — then gets engineered into something people actually pay for.', tags: ['Brands', 'Apps', 'Products', 'Revenue First'] },
  { number: '02', title: 'Grow the Portfolio', desc: 'Each product that works becomes its own company under the Black Company umbrella. The goal is a portfolio of compounding businesses, not one big bet.', tags: ['Bootstrapped', 'Multi-product', 'Long Game'] },
  { number: '03', title: 'Hit $1 Billion', desc: 'The target is audacious: bootstrap the entire portfolio to a combined $1B valuation without outside investment. No VC. The co-founders are fellow creatives who believe in what this is.', tags: ['$1B Goal', 'No VC', 'Creatives Only'] },
];

export default function Solutions() {
  return (
    <section id="solutions" style={{ padding: '120px 40px', background: 'rgba(0,0,0,0.015)', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '80px' }}>
          <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>What We Do</span>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#000' }}>Our approach</h2>
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
