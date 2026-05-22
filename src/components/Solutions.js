import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    number: '01',
    title: 'Creativity.',
    desc: 'Not as a trend or a marketing angle — creativity as a way of living and building. We bring our full selves into everything we make. The most genuine expression of who you are is always the most powerful thing you can build.',
    tags: ['Self-Expression', 'Authentic', 'Full Selves'],
  },
  {
    number: '02',
    title: 'Innovation.',
    desc: 'We don\'t claim innovation — we prove it. Every venture asks the same question: what are we doing here that has never been done before? What problem are we solving in a way that actually changes something for the people who live with it?',
    tags: ['Measurable', 'Problem-First', 'Impact-Driven'],
  },
  {
    number: '03',
    title: 'Community.',
    desc: 'We build for people. Not markets, not demographics, not numbers on a spreadsheet. Every venture inside The Black Project is anchored to the community it serves. Community is not a side effect of what we build — it is the reason we build.',
    tags: ['People First', 'Purpose', 'Real Impact'],
  },
  {
    number: '04',
    title: 'No playbook needed.',
    desc: 'Corporate structure does not define how we operate. We prove every day that you can start from nothing, stay true to yourself, and build something that lasts. The Black Project is proof of concept for every person waiting for permission to start.',
    tags: ['Bootstrap', 'No Permission', 'Proof of Concept'],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" style={{ padding: '120px 40px', background: 'rgba(0,0,0,0.015)', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '80px' }}>
          <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>The Three Pillars</span>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#000' }}>Creativity. Innovation. Community.</h2>
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
