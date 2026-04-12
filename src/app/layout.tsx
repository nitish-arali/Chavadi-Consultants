import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Chavadi Consultants - Simplify Your Construction Approvals',
  description: 'Simplify your construction approvals with our documentation services. Chosen by 100+ developers for smooth, stress-free processes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/logo1.png" />
      </head>
      <body className="flex flex-col min-h-screen overflow-x-hidden w-full max-w-[100vw]">
        <Header />
        <main className="flex-1 overflow-x-hidden w-full max-w-[100vw]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <img src="/images/logo1.png" alt="Logo" className="w-[50px] md:w-[60px] h-auto object-contain" />
          <span className="text-xl md:text-2xl font-bold text-zinc-800">Chavadi Consultants</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-semibold text-zinc-600 text-sm tracking-wide">
          <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
          <Link href="/#services" className="hover:text-brand-orange transition-colors">Services</Link>
          <Link href="/clients" className="hover:text-brand-orange transition-colors">Our Clients</Link>
          <Link href="/circulars" className="hover:text-brand-orange transition-colors">Govt Circulars</Link>
          <Link href="/#about-us" className="hover:text-brand-orange transition-colors">About Us</Link>
          <Link href="/#contact-us" className="hover:text-brand-orange transition-colors">Contact Us</Link>
          <Link href="/login" className="bg-brand-orange text-white px-5 py-2 rounded-md hover:bg-brand-orange-dark transition-colors">Login / Dashboard</Link>
        </nav>
        {/* Mobile menu could be implemented here */}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative bg-orange-50/50 border-t border-orange-100/50 text-zinc-700 pt-10 pb-6 text-sm overflow-hidden">
      <img src="/images/lord_ram_bg.png" alt="Blessings" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-full object-contain opacity-[0.16] mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-orange-50/90 via-white/50 to-transparent pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 relative z-10">
        <div className="flex flex-col h-full lg:col-span-1">
          <img src="/images/logo1.png" alt="Logo" className="w-[90px] h-auto object-contain mb-6 drop-shadow-sm" />
          <h4 className="text-zinc-900 text-lg font-extrabold mb-4 flex items-center gap-2">Core Principles</h4>
          <p className="leading-relaxed font-medium text-zinc-600 mb-8">Chavadi Consultants is bridging the gap between ambition and infrastructure. We operate with intense transparency, enabling builders to confidently focus on their core construction projects.</p>
          <div className="mt-auto">
            <p className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/80 rounded-full font-bold text-brand-orange border border-orange-200/50 backdrop-blur-sm shadow-sm transition hover:shadow-md">
              <span className="text-xl">ॐ</span> Jai Shri Ram
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-zinc-900 text-lg font-extrabold mb-6">Location</h4>
          <p className="leading-relaxed font-medium text-zinc-600">#63/1, Hoodi Main Rd,<br />Surya Layout, Ayyappa Nagar,<br />Beside Adyar Ananda Bhavan - A2B,<br />K R Pura, Bengaluru, Karnataka-560036</p>
        </div>
        <div>
          <h4 className="text-zinc-900 text-lg font-extrabold mb-6">Contact Info</h4>
          <div className="space-y-4 font-medium text-zinc-600">
            <p className="flex items-center gap-3"><span className="text-brand-orange text-lg">✉</span> <a href="mailto:chavadiconsultants@gmail.com" className="hover:text-brand-orange transition-colors">ChavadiConsultants@gmail.com</a></p>
            <p className="flex items-center gap-3"><span className="text-brand-orange text-lg">☎</span> <a href="tel:+919739756973" className="hover:text-brand-orange transition-colors">+91 9739756973</a></p>
            <p className="flex items-start gap-3 mt-4"><span className="text-brand-orange text-lg">🕒</span> <span>Monday-Saturday:<br />9:00 AM - 09:00 PM</span></p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.7696766792678!2d77.71166508900062!3d13.001865438793372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11b7942ec747%3A0xb9824e65f0ed370f!2sChavadi%20Estates%20Private%20Limited%20Bangalore!5e0!3m2!1sen!2sin!4v1709202875081!5m2!1sen!2sin"
            className="w-full h-full min-h-[250px] rounded-[2rem] border-4 border-white shadow-lg hover:shadow-xl transition-all duration-300"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="text-center pt-8 mt-12 border-t border-orange-200/50 font-medium relative z-10 text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Chavadi Consultants. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
