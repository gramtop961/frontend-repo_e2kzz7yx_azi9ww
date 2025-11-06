import React from 'react';
import { Briefcase, Sparkles } from 'lucide-react';

const jobs = [
  {
    role: 'Full Stack Developer',
    company: 'Muyalogy',
    period: '2023/02 – present',
    location: 'Addis Ababa, Ethiopia',
    highlights: [
      'Contributed to multiple platforms delivering seamless UX and robust backend solutions.',
      'Scaled and optimized online learning platform performance across muya.et and Muyalogy.com.',
      'Built Telegram bot for community management with moderation, access control, and automation.',
      'Designed landing/certificate builders used across multiple client properties.',
    ],
    projects: [
      'Jiret.com – drag-and-drop builder with Puck + multi-tenant & analytics',
      'Learn.afriworket.com – dynamic landing pages',
      'Speaktoreach.jiret.site – certificates and landing pages',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Royd Tech Solutions',
    period: '2024/01 – 2024/12',
    location: 'Addis Ababa, Ethiopia',
    highlights: [
      'Led management portal for Eposea conference platform: scheduling, speakers, sponsors, delegates.',
      'Built dashboards and analytics for organizers; contributed to public-facing platform.',
      'Developed SEO-friendly blog platform with dynamic rendering, filtering, and custom CMS.',
    ],
    stack: 'Next.js, Redux, React Query, Tailwind CSS, Mantine',
  },
  {
    role: 'Telegram Bot Developer',
    company: 'Blih Marketing',
    period: '2023/12 – 2024/12',
    location: 'Addis Ababa, Ethiopia',
    highlights: [
      'Referral bot with unique codes, weekly winners, and anti-fraud detection.',
      'Grew a bank’s Telegram from 39k to 60k in one month; +40k new users.',
    ],
    stack: 'Telegraf, MySQL, JavaScript',
  },
  {
    role: 'Software Developer (Freelance)',
    company: 'Page Builder Integration',
    period: '2024/05 – 2025/02',
    location: 'Addis Ababa, Ethiopia',
    highlights: [
      'Integrated custom React drag-and-drop page builder into an Angular project.',
      'Delivered seamless interop, performance wins, and scalable UX.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-center gap-3">
        <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400"><Briefcase size={20}/></div>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Professional Experience</h2>
      </div>

      <div className="grid gap-6">
        {jobs.map((job, idx) => (
          <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-white">{job.role} · {job.company}</h3>
                <p className="text-sm text-slate-300">{job.period} • {job.location}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                <Sparkles size={14}/> Impact
              </span>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-200">
              {job.highlights?.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            {job.projects && (
              <div className="mt-3 text-sm text-slate-300">
                <span className="font-medium text-slate-200">Projects:</span> {job.projects.join(' • ')}
              </div>
            )}
            {job.stack && (
              <div className="mt-2 text-sm text-slate-400">Stack: {job.stack}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
