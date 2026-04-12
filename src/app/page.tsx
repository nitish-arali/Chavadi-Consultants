'use client';

import { useState, useEffect } from 'react';
import { ShieldCheck, Clock, FileCheck } from 'lucide-react';
import { AnimatePresence, motion as m } from 'framer-motion';

const HERO_IMAGES = [
  '/images/build4.jpg',
  '/images/building51.jpg'
];

const SERVICES = [
  { "title": "Taluk Office", "imgSrc": "/images/taluk-logo.png", "items": ["Haddubasth", "11E Sketch", "Thathkal Phodi", "ADLR Sketch", "3 and 9 Column Tally", "Patha Badalavane", "Documents"] },
  { "title": "G B A", "desc": "Greater Bengaluru Authority", "imgSrc": "/images/bbmp-logo.png", "items": ["Sensitive Clearance", "CLU - Change Of Land Use", "Single Plot Approval", "Development Plan", "Katha Registration", "Katha Amalgamation", "Katha Bifurcations", "Katha Transfer", "Building Plan Approval", "CC - Commencement Certificate", "OC - Occupation Certificate", "Property Tax / Building Assessment"] },
  { "title": "B D A", "desc": "Bangalore Development Authority", "imgSrc": "/images/BDA-Logo.png", "items": ["Sensitive Clearance", "CLU - Change Of Land Use", "Single Plot Approval", "DLP - Development Plan", "BLP - Building Plan Approvals", "PRL - Provisional Residential Layout", "CC - Commencement Certificate", "OC - Occupation Certificate", "Plot Amalgamation & Bifurcation"] },
  { "title": "B M R D A", "desc": "Bangalore Metropolitan Region Development Authority", "imgSrc": "/images/bmrda.jpg", "items": ["CLU - Change Of Land Use.", "Single Plot Approval", "Layout Approval", "Development Plan", "Building Plan Approval"] },
  { "title": "S T R R", "desc": "Satellite Town Ring Road", "imgSrc": "/images/sttr.png", "items": ["CLU - Change Of Land Use.", "Single Plot Approval", "Layout Approval", "Development Plan", "Building Plan Approval"] },
  { "title": "K S P C B", "desc": "Karnataka State Polution Control Board", "imgSrc": "/images/kspcb-logo.png", "items": ["CFE - Consent For Establishment", "CFO - Consent For Operation"] },
  { "title": "B W S S B", "desc": "Bangalore Water Supply & Sewerage Board", "imgSrc": "/images/bwssb-logo.webp", "items": ["NOC - No Objection Certificate", "Water Connection"] },
  { "title": "B I A P P A", "desc": "Bengaluru International Airport Area Planning Authority", "imgSrc": "/images/dcOffice-logo.jpg", "items": ["CLU - Change Of Land Use", "Single Plot Approval", "Development Plan", "Building Plan Approval", "Layout Approval"] },
  { "title": "B M I C A P A", "desc": "Bengaluru - Mysuru Infrastructure Corridor Area Planning Authority", "imgSrc": "/images/dcOffice-logo.jpg", "items": ["CLU - Change Of Land Use", "Single Plot Approval", "Development Plan", "Building Plan Approval", "Layout Approval"] },
  { "title": "KPTCL / BESCOM / All ESCOMs", "desc": "Karnataka Power Transmission Corporation Limited", "imgSrc": "/images/kptcl-logo.jpg", "items": ["NOC - No Objection Certificate", "Electrical New Connection", "Electricity Bill Name Change", "EHT Line Shifting", "Sub Station Works"] },
  { "title": "S E I A A", "desc": "State Environmental Impact Assessment Authority", "imgSrc": "/images/Seiaa-logo.png", "items": ["Environment Clearance"] },
  { "title": "K S F E S D", "desc": "Karnataka State Fire And Emergency Services Department", "imgSrc": "/images/fire-logo.png", "items": ["FIRE NOC - No Objection Certificate", "Clearance Certificate"] },
  { "title": "H A L", "desc": "Hindustan Aeronotics Limited", "imgSrc": "/images/hal-logo.jpg", "items": ["NOC - No Objection Certificate"] },
  { "title": "B S N L", "desc": "Bharat Sanchar Nigam Limited", "imgSrc": "/images/bsnl-logo.png", "items": ["NOC - No Objection Certificate"] },
  { "title": "A A I", "desc": "Airports Authority Of India", "imgSrc": "/images/aai-logo.png", "items": ["No Objection Certificate (NOC)"] },
  { "title": "R E R A", "desc": "Real Estate Regulatory Authority", "imgSrc": "/images/rera-logo.png", "items": ["Document Scrutiny & Uploading", "Project Registration", "Post Registration & Quarterly Updates", "Project Completion", "Change Request", "Modification & Extensions", "Legal Services", "Project Modification", "Project Transfer Of Rights", "Project Extension", "Agent Registration", "Complaints / Griviences"] }
];

const CLIENT_LOGOS = [
  { name: 'Rosewood', src: '/images/rosewood2.jpg' },
  { name: 'Brindavan', src: '/images/brindavan.jpg' },
  { name: 'Garuda', src: '/images/garuda.jpg' },
  { name: 'Destiny Gables', src: '/images/destinyGables.jpg' },
  { name: 'White Woods', src: '/images/whitewoods.jpg' },
  { name: 'United Dream City', src: '/images/unitedDreamCity.jpg' },
  { name: 'Nirmanika', src: '/images/nirmanika.jpg' }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <m.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${HERO_IMAGES[currentSlide]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Seamless gradient instead of thick overlay */}
            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-black/10" />
          </m.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <m.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            Welcome to Chavadi Consultants
          </m.h1>
          <m.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl text-zinc-100 font-semibold leading-relaxed drop-shadow-lg"
          >
            Trusted Partner in Streamlining<br /> <span className="text-brand-orange font-bold drop-shadow-lg">Building Approvals</span>.
          </m.h2>
          <m.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex justify-center gap-4"
          >
            <a href="#services" className="bg-brand-orange hover:bg-brand-orange-dark text-white px-10 py-4 rounded-md font-bold shadow-lg transition-transform hover:-translate-y-1">
              Explore Services
            </a>
            <a href="#contact-us" className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-zinc-900 text-white px-10 py-4 rounded-md font-bold shadow-lg transition-all hover:-translate-y-1">
              Contact Us
            </a>
          </m.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-teal mb-6">Our Services</h2>
            <p className="text-lg text-zinc-600 font-medium">
              We specialize in providing comprehensive documentation services for builders in Karnataka, India. With a proven track record of assisting over 100 builders, we navigate the complex landscape of obtaining NO-objection clearances from various government agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv, idx) => (
              <ServiceCard
                key={idx}
                title={srv.title}
                desc={srv.desc}
                imgSrc={srv.imgSrc}
                items={srv.items}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/circulars" className="text-brand-orange border border-brand-orange hover:bg-brand-orange hover:text-white transition-colors bg-white px-6 py-3 rounded-md font-bold text-lg inline-flex items-center gap-2 shadow-sm">
              View all relevant Government Circulars &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about-us" className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-teal mb-6">Why Choose Us?</h2>
            <p className="text-xl text-zinc-600 font-medium leading-relaxed">
              Choose Us for hassle-free construction. We bring expertise, proven success, and personalized solutions to make your project journey smooth and successful.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Column */}
            <div className="lg:w-1/2 relative w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange via-brand-teal to-blue-500 opacity-10 blur-2xl rounded-[3rem]" />
              <img src="/images/building61.jpg" alt="Building Construction" className="relative z-10 w-full h-[400px] md:h-[550px] object-cover rounded-[2rem] shadow-2xl border-[6px] border-white" />
              <div className="absolute -bottom-6 md:-bottom-10 -right-2 md:-right-6 bg-white p-5 rounded-3xl shadow-xl z-20 border border-slate-100 flex items-center gap-4 transform-gpu transition-transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
                  <ShieldCheck size={28} />
                </div>
                <div className="pr-2">
                  <p className="font-extrabold text-zinc-900 text-sm uppercase">100% Trusted</p>
                  <p className="text-xs text-zinc-500 font-semibold tracking-wide">Clearance Partners</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:w-1/2 space-y-6 w-full relative z-10">
              <div className="group flex items-start gap-6 p-6 bg-white hover:bg-slate-50 transition-all duration-500 rounded-[2rem] border border-slate-100 hover:border-brand-orange/30 shadow-sm hover:shadow-xl cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-150" />
                <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-[1.25rem] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-zinc-900 mb-2 group-hover:text-brand-orange transition-colors">100+ Builders</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">
                    Over 100 builders have chosen us for seamless documentation solutions, marking our success in meeting their diverse project requirements.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-6 p-6 bg-white hover:bg-slate-50 transition-all duration-500 rounded-[2rem] border border-slate-100 hover:border-brand-teal/30 shadow-sm hover:shadow-xl cursor-default relative overflow-hidden md:-ml-8 md:mr-8 hover:-translate-x-2">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-150" />
                <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-[1.25rem] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <FileCheck size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-zinc-900 mb-2 group-hover:text-brand-teal transition-colors">Expertise in Local Regulations</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">
                    Navigate the intricacies of Karnataka's regulations effortlessly with our deep understanding of local norms, ensuring a smooth approval process for your projects.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-6 p-6 bg-white hover:bg-slate-50 transition-all duration-500 rounded-[2rem] border border-slate-100 hover:border-blue-500/30 shadow-sm hover:shadow-xl cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-150" />
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-[1.25rem] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Clock size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">Tailored Solutions</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">
                    Recognizing that each project is unique, we provide customized solutions to fit your specific requirements, ensuring efficiency and accuracy in every step of the documentation process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 bg-slate-50 border-t border-slate-100 overflow-hidden relative">
        <div className="container mx-auto px-6 mb-0 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tight">Clients We Have Worked With</h2>
          <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            We are proud to have partnered with some of the most dynamic real estate developers and builders across Karnataka, helping them achieve timely clearances and operational excellence.
          </p>

          <div className="text-center mt-12 relative z-10 w-full flex justify-center pb-8">
            <a href="/clients" className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-lg hover:bg-brand-orange transition-colors shadow-lg hover:-translate-y-1 transform duration-300">
              View all our esteemed clients. &rarr;
            </a>

          </div>
        </div>

        {/* Simple Marquee Implementation */}
        <div className="relative flex overflow-x-hidden group bg-white py-12 border-y border-slate-200">
          <div className="py-2 animate-marquee flex whitespace-nowrap min-w-full justify-around items-center gap-16 px-6">
            {CLIENT_LOGOS.map((client, i) => (
              <div key={`c1-${i}`} className="flex flex-col items-center justify-center gap-0 transition-all duration-300 transform hover:scale-110">
                <img src={client.src} alt={client.name} className="h-20 lg:h-50 w-auto object-contain filter drop-shadow-sm" />
                <span className="text-zinc-800 font-bold text-sm tracking-widest uppercase">{client.name}</span>
              </div>
            ))}
          </div>
          <div className="absolute top-0 py-14 animate-marquee2 flex whitespace-nowrap min-w-full justify-around items-center gap-16 px-6">
            {CLIENT_LOGOS.map((client, i) => (
              <div key={`c2-${i}`} className="flex flex-col items-center justify-center gap-0 transition-all duration-300 transform hover:scale-110">
                <img src={client.src} alt={client.name} className="h-20 lg:h-50 w-auto object-contain filter drop-shadow-sm" />
                <span className="text-zinc-800 font-bold text-sm tracking-widest uppercase">{client.name}</span>
              </div>
            ))}
          </div>
        </div>


      </section>

      {/* Contact Form Section */}
      <ContactSection />
    </div>
  );
}

function ServiceCard({ title, desc, imgSrc, items }: any) {
  return (
    <div className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2 overflow-hidden z-10 hover:border-transparent">
      {/* Massive subtle background logo watermark */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none flex items-center justify-center">
        {imgSrc && <img src={imgSrc} alt="" className="w-[150%] h-[150%] object-contain scale-[1.5] filter grayscale" />}
      </div>
      
      {/* Gradient border effect overlay */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-[3px] border-brand-orange/40 rounded-[2rem]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-brand-orange/[0.02] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 rounded-[2rem]" />
      
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center h-full">
        <div className="h-[90px] w-[90px] bg-white rounded-[1.5rem] flex items-center justify-center p-3 mb-6 shadow-sm border border-slate-100 group-hover:shadow-md group-hover:scale-110 transition-all duration-500">
          {imgSrc && <img src={imgSrc} alt={title} className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all" />}
        </div>
        <h3 className="text-xl font-extrabold text-zinc-900 mb-2 group-hover:text-brand-orange transition-colors">{title}</h3>
        {desc && <p className="text-[11px] text-brand-teal font-extrabold mb-5 uppercase tracking-widest leading-relaxed">{desc}</p>}
        <ul className="space-y-4 text-sm text-left w-full border-t border-slate-100 pt-6 mt-2">
          {items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-zinc-600 font-semibold">
              <span className="text-brand-orange shrink-0 font-extrabold text-base leading-none translate-y-0.5">✓</span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Failed to submit the form');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Network connection failed');
    }
  };

  return (
    <section id="contact-us" className="py-6 bg-brand-teal text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-slate-100 mb-10 leading-relaxed text-lg">
              Have a project that requires our expertise? Leave your details below and our team will get back to you shortly.
            </p>
            <div className="space-y-8 font-medium">
              <div className="flex gap-5 items-center">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl">📍</div>
                <p className="text-lg">#63/1, Hoodi Main Rd, Surya Layout,<br />Ayyappa Nagar, K R Pura,<br />Bengaluru - 560036</p>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl">📞</div>
                <p className="text-lg">+91 9739756973</p>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl">✉️</div>
                <p className="text-lg">ChavadiConsultants@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="bg-white text-zinc-900 rounded-md p-8 md:p-10 shadow-xl border-t-8 border-brand-orange">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="font-medium text-zinc-500 mb-8">We've received your request and will be in touch soon.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 px-8 py-3 bg-brand-orange text-white rounded-md font-bold hover:bg-brand-orange-dark transition-colors">Send Another Response</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold mb-6 text-brand-teal">Drop A Message</h3>
                <div>
                  <label className="block text-sm font-bold text-zinc-600 mb-1">Full Name</label>
                  <input type="text" placeholder="John Doe" required value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange font-medium" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-zinc-600 mb-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-600 mb-1">Phone Number</label>
                    <input type="tel" placeholder="+91 9000000000" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange font-medium" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-600 mb-1">Reason code / Project Details</label>
                  <textarea placeholder="How can we help you?" required rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange font-medium resize-none"></textarea>
                </div>
                <button disabled={status === 'loading'} className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-4 px-6 rounded-md transition-all shadow-md mt-4 disabled:opacity-50 text-lg">
                  {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
                </button>
                {status === 'error' && <p className="text-red-500 font-bold text-sm mt-3 text-center">Error: {errorMsg}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
