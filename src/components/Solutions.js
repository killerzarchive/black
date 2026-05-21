import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    number: '01',
    title: 'Rebellious by nature.',
    desc: 'We don\'t follow industry playbooks. We write our own. Every venture under The Black Company is built on the question: what would we do if no one told us what we couldn\'t?',
    tags: ['Anti-Playbook', 'Original', 'No Ceilings'],
  },
  {
    number: '02',
    title: 'Creative by design.',
    desc: 'Every venture is built with intention, aesthetic, and originality — because how you build matters as much as what you build. Mediocrity is never an option.',
    tags: ['Intentional', 'Aesthetic', 'Originality'],
  },
  {
    number: '03',
    title: 'Calculated in execution.',
    desc: 'Disruption without strategy is just noise. We\'re bold and smart. Every move is deliberate — from the idea to the business model to the market we enter.',
    tags: ['Strategic', 'Bold', 'Deliberate'],
  },
  {
    number: '04',
    title: 'Raw in truth.',
    desc: 'No corporate fluff. No inflated promises. Just honest work, honest growth, and honest money. We say what we mean and build what we say.',
    tags: ['No Fluff', 'Transparent', 'Real'],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" style={{ padding: '120px 40px', background: 'rgba(0,0,0,0.015)', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '80px' }}>
          <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>How We Move</span>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#000' }}>The standard we operate by</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {solutions.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
