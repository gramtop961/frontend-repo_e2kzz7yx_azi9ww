import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Get in touch</h2>
        <p className="mt-2 max-w-2xl text-slate-300">Have a project in mind or looking for a full‑stack engineer who ships? I’d love to hear from you.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-slate-200">
          <div className="space-y-3 text-sm">
            <p className="inline-flex items-center gap-2"><Mail size={18}/> <a className="hover:text-white" href="mailto:millagoss19@gmail.com">millagoss19@gmail.com</a></p>
            <p className="inline-flex items-center gap-2"><Phone size={18}/> <a className="hover:text-white" href="tel:+251923624645">+251 92 362 4645</a></p>
            <p className="inline-flex items-center gap-2"><MapPin size={18}/> Addis Ababa, Ethiopia</p>
          </div>

          <div className="mt-6 text-sm text-slate-400">
            <p>Certificates: Meta - React.js • Meta - Version Control • IBM - Cloud Computing • Meta - Frontend Development</p>
            <p className="mt-2">Education: Computer Science, Unity University</p>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input className="rounded-md border border-white/10 bg-slate-900/60 p-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none" placeholder="Your name"/>
            <input className="rounded-md border border-white/10 bg-slate-900/60 p-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none" placeholder="Email" type="email"/>
            <input className="md:col-span-2 rounded-md border border-white/10 bg-slate-900/60 p-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none" placeholder="Subject"/>
            <textarea rows={5} className="md:col-span-2 rounded-md border border-white/10 bg-slate-900/60 p-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none" placeholder="Tell me about your project"/>
          </div>
          <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 font-medium text-slate-900 hover:bg-emerald-400">
            <Send size={18}/> Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
