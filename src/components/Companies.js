import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const companies = [
  { name: 'Obsidian Labs', domain: 'Deep Tech R&D', founded: '2019', desc: 'Pioneering quantum-resistant cryptography and next-generation hardware security modules for critical infrastructure.' },
  { name: 'NovaSoft', domain: 'Enterprise SaaS', founded: '2020', desc: 'AI-powered ERP solutions replacing legacy systems for Fortune 500 companies worldwide.' },
  { name: 'PulseMedia', domain: 'Media & Content', founded: '2021', desc: 'Next-generation content platform distributing creator-owned media across 40+ countries.' },
  { name: 'ChainVault', domain: 'Fintech', founded: '2022', desc: 'Institutional-grade digital asset custody and settlement infrastructure for global financial markets.' },
  { name: 'AxisCloud', domain: 'Cloud Infrastructure', founded: '2020', desc: 'Sovereign cloud platform purpose-built for regulated industries: healthcare, government, and defense.' },
  { name: 'StudioAI', domain: 'Creative Tech', founded: '2023', desc: 'Generative AI tools for creative professionals — design, video, and music production at scale.' },
];

function CompanyRow({ company, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid', gridTemplateColumns: '1fr 80px 40px', gap: '24px', alignItems: 'center',
        padding: '28px 32px', borderRadius: '16px',
        background: hovered ? 'rgba(0,0,0,0.03)' : 'transparent',
        border: `1px solid ${hovered ? 'rgba(0,0,0,0.1)' : 'transparent'}`,
        transition: 'all 0.25s ease', cursor: 'pointer',
      }}
      className="company-row"
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.02em', color: '#000' }}>{company.name}</h3>
          <span style={{ fontSize: '11px', color: 'rgba(0,0,0,0.35)', background: 'rgba(0,0,0,0.04)', padding: '3px 9px', borderRadius: '100px', border: '1px solid rgba(0,0,0,0.08)' }}>
            {company.domain}
          </span>
        </div>
        <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.4)', lineHeight: 1.5, maxWidth: '520px' }}>{company.desc}</p>
      </div>
      <div style={{ fontSize: '13px', color: 'rgba(0,0,0,0.3)', textAlign: 'center' }}>Est. {company.founded}</div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', color: hovered ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.2)', transition: 'color 0.2s', transform: hovered ? 'translate(2px, -2px)' : 'none' }}>
        <ArrowUpRight size={18} />
      </div>
    </motion.div>
  );
}

export default function Companies() {
  return (
    <section id="companies" style={{ padding: '120px 40px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '72px' }}>
          <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
            The Portfolio
          </span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#000', marginBottom: '12px' }}>Real ventures. Fully owned.</h2>
              <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.35)', fontWeight: 400, maxWidth: '480px', lineHeight: 1.6 }}>
                Every company in this portfolio is built to last — not to flip. No board control, no outside pressure. Just real businesses built by people who refused to be told no.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 40px', gap: '24px', width: '100%', padding: '0 32px', opacity: 0.3 }} className="company-row">
              <span style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Company</span>
              <span style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center' }}>Founded</span>
              <span />
            </div>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '16px' }}>
          {companies.map((c, i) => <CompanyRow key={c.name} company={c} index={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .company-row { grid-template-columns: 1fr 30px !important; } .company-row > :nth-child(2) { display: none; } }
        @media (max-width: 500px) { .company-row { grid-template-columns: 1fr !important; } .company-row > :nth-child(3) { display: none; } }
      `}</style>
    </section>
  );
}
