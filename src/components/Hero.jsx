import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-28 md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Available for opportunities
        </span>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Million Gossaye Lema
        </h1>
        <p className="text-lg text-slate-200 md:text-xl">
          Full-Stack Developer • Telegram Bot Developer • UI/UX Designer
        </p>

        <p className="max-w-3xl text-slate-300">
          Versatile Full Stack Developer with expertise in modern frontend (Next.js, React, Redux Toolkit, React Query)
          and backend technologies (Firebase, Supabase, Prisma, Drizzle, PostgreSQL). Passionate about building scalable,
          high-performance products with clean architecture, robust authentication, and seamless API integrations. I’ve
          delivered SaaS platforms, Telegram bots, and conference management systems with a focus on user-centric design
          and automation.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2"><MapPin size={16}/> Addis Ababa, Ethiopia</span>
          <a href="mailto:millagoss19@gmail.com" className="inline-flex items-center gap-2 hover:text-white transition-colors"><Mail size={16}/> millagoss19@gmail.com</a>
          <a href="tel:+251923624645" className="inline-flex items-center gap-2 hover:text-white transition-colors"><Phone size={16}/> +251 92 362 4645</a>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/Millagoss"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-slate-900 hover:bg-slate-100 transition"
          >
            <Github size={18}/> GitHub
          </a>
          <a
            href="https://linkedin.com/in/million-gossaye"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 hover:border-white/60"
          >
            <Linkedin size={18}/> LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 font-medium text-slate-900 hover:bg-emerald-400 transition"
          >
            Let’s collaborate <ArrowRight size={18}/>
          </a>
        </div>
      </div>

      {/* Subtle bottom gradient divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950" />
    </section>
  );
};

export default Hero;
