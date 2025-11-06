import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene (updated animation) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />

      {/* Floating accent blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="pointer-events-none absolute -top-10 right-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
        className="pointer-events-none absolute bottom-10 left-10 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-28 md:pt-36"
      >
        <motion.span variants={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for opportunities
        </motion.span>

        <motion.h1 variants={item} className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Million Gossaye Lema
        </motion.h1>
        <motion.p variants={item} className="text-lg text-slate-200 md:text-xl">
          Full-Stack Developer • Telegram Bot Developer • UI/UX Designer
        </motion.p>

        <motion.p variants={item} className="max-w-3xl text-slate-300">
          Versatile Full Stack Developer with expertise in modern frontend (Next.js, React, Redux Toolkit, React Query)
          and backend technologies (Firebase, Supabase, Prisma, Drizzle, PostgreSQL). Passionate about building scalable,
          high-performance products with clean architecture, robust authentication, and seamless API integrations. I’ve
          delivered SaaS platforms, Telegram bots, and conference management systems with a focus on user-centric design
          and automation.
        </motion.p>

        <motion.div variants={item} className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2"><MapPin size={16}/> Addis Ababa, Ethiopia</span>
          <a href="mailto:millagoss19@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-white"><Mail size={16}/> millagoss19@gmail.com</a>
          <a href="tel:+251923624645" className="inline-flex items-center gap-2 transition-colors hover:text-white"><Phone size={16}/> +251 92 362 4645</a>
        </motion.div>

        <motion.div variants={item} className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/Millagoss"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-slate-900 transition hover:bg-slate-100"
          >
            <Github size={18} className="transition-transform group-hover:-translate-y-0.5"/> GitHub
          </a>
          <a
            href="https://linkedin.com/in/million-gossaye"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 transition hover:border-white/60"
          >
            <Linkedin size={18} className="transition-transform group-hover:-translate-y-0.5"/> LinkedIn
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 font-medium text-slate-900 transition hover:bg-emerald-400"
          >
            Let’s collaborate <ArrowRight size={18} className="transition-transform group-hover:translate-x-1"/>
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle bottom gradient divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950" />
    </section>
  );
};

export default Hero;
