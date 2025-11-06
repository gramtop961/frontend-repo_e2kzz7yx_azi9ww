import React from 'react';
import { Code2, Cpu, Layout, Database, ShieldCheck, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Frontend',
    icon: <Layout size={18} />,
    items: [
      'Next.js', 'React.js', 'Redux Toolkit', 'React Query', 'Tailwind CSS', 'Mantine', 'Chakra UI', 'shadcn/ui',
    ],
  },
  {
    title: 'Backend & DevOps',
    icon: <Cpu size={18} />,
    items: [
      'Node.js', 'NestJS', 'Prisma', 'Drizzle', 'Firebase', 'Supabase', 'REST APIs', 'CI/CD',
    ],
  },
  {
    title: 'Databases',
    icon: <Database size={18} />,
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Bots & Automation',
    icon: <Rocket size={18} />,
    items: ['Telegraf (Telegram Bot)', 'Webhooks', 'Rate limiting', 'Anti-spam'],
  },
  {
    title: 'Design & Tools',
    icon: <Code2 size={18} />,
    items: ['TypeScript', 'JavaScript', 'Figma', 'GitHub', 'GitLab'],
  },
  {
    title: 'Auth & Security',
    icon: <ShieldCheck size={18} />,
    items: ['Authentication', 'Authorization', 'Session Mgmt'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Skills</h2>
        <p className="text-sm text-slate-300">Amharic • English</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-slate-200"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl" />
            <div className="mb-3 flex items-center gap-2 text-white">
              <span className="rounded-md bg-emerald-500/10 p-2 text-emerald-400">{cat.icon}</span>
              <h3 className="text-lg font-semibold">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm transition hover:border-emerald-400/30 hover:bg-white/10">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
