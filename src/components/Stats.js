import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '1', label: 'Builder' },
  { value: '$1B', label: 'The Goal' },
  { value: '0→∞', label: 'Bootstrap Only' },
  { value: '∞', label: 'Ideas in Progress' },
];

export default function Stats() {
  return (
    <section style={{
      padding: '80px 40px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(255,255,255,0.015)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
      }}
      className="stats-grid"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', padding: '32px 16px' }}
          >
            <div style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: '#fff',
              lineHeight: 1,
              marginBottom: '8px',
            }}>
              {s.value}
            </div>
            <div style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.4)',
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
