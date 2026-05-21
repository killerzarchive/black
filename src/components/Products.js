import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, BarChart2, Globe, Code2, Cpu } from 'lucide-react';

const products = [
  { icon: <Zap size={22} />, name: 'Plugged', tag: 'Social', desc: 'Enterprise workflow automation that eliminates repetitive tasks and scales operations without adding headcount.', metric: '10x faster' },
  { icon: <Shield size={22} />, name: 'VaultOS', tag: 'Security', desc: 'Zero-trust security infrastructure for modern enterprises. End-to-end encrypted, compliance-ready.', metric: '99.99% uptime' },
  { icon: <BarChart2 size={22} />, name: 'DataPulse', tag: 'Analytics', desc: 'Real-time analytics platform that turns raw data into actionable intelligence for your entire organization.', metric: '500ms insights' },
  { icon: <Globe size={22} />, name: 'EdgeNet', tag: 'Infrastructure', desc: 'Global edge computing network delivering sub-20ms latency for applications at any scale.', metric: '180 edge nodes' },
  { icon: <Code2 size={22} />, name: 'DeployKit', tag: 'DevOps', desc: 'Ship software with confidence. Automated CI/CD, rollbacks, and blue-green deployments built in.', metric: '3min deploys' },
  { icon: <Cpu size={22} />, name: 'NeuralBase', tag: 'AI / ML', desc: 'Foundation model infrastructure that lets any team build, fine-tune, and deploy AI at enterprise scale.', metric: '1T+ parameters' },
];

function Card({ product, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.02)',
        border: `1px solid ${hovered ? 'rgba(0,0,0,0.14)' : 'rgba(0,0,0,0.07)'}`,
        borderRadius: '20px', padding: '32px', cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: hovered ? 'linear-gradient(90deg, transparent, rgba(0,0,0,0.15), transparent)' : 'transparent',
        transition: 'all 0.3s',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div style={{ width: 44, height: 44, background: 'rgba(0,0,0,0.06)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', border: '1px solid rgba(0,0,0,0.08)' }}>
          {product.icon}
        </div>
        <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(0,0,0,0.4)', background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)', padding: '4px 10px', borderRadius: '100px', letterSpacing: '0.04em' }}>
          {product.tag}
        </span>
      </div>

      <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '10px', color: '#000' }}>{product.name}</h3>
      <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.45)', lineHeight: 1.65, marginBottom: '24px' }}>{product.desc}</p>

      <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ width: 6, height: 6, background: '#000', borderRadius: '50%', opacity: 0.5 }} />
        {product.metric}
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '72px' }}>
        <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>The Ventures</span>
        <h2 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, maxWidth: '600px', color: '#000' }}>Built with intention. Built to last.</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="products-grid">
        {products.map((p, i) => <Card key={p.name} product={p} index={i} />)}
      </div>

      <style>{`
        @media (max-width: 1024px) { .products-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .products-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
