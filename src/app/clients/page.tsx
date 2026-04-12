import dbConnect from '@/lib/db';
import Client from '@/models/Client';
import { MapPin } from 'lucide-react';

// Force dynamic since Next.js normally statically evaluates pages with no dynamic functions
export const dynamic = 'force-dynamic';

export default async function ClientsPage() {
  await dbConnect();
  const clients = await Client.find({}).sort({ createdAt: -1 });

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tight">Our Esteemed Clients</h1>
          <p className="text-lg text-zinc-600 font-medium leading-relaxed">
            We are proud to have simplified the documentation and approval processes for some of the most prestigious projects in Karnataka.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-orange to-brand-teal mx-auto mt-8 rounded-full"></div>
        </div>

        {clients.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[2rem] border border-slate-200 shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-zinc-800">Clients list is currently being updated.</h3>
            <p className="mt-4 text-zinc-500 font-medium">Please check back later or contact us to receive our full portfolio.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {clients.map((client) => (
              <div key={client._id.toString()} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-orange/30 transition-all duration-300 flex flex-col hover:-translate-y-2">
                <div className="h-56 overflow-hidden relative p-4 bg-white flex items-center justify-center">
                  {/* Subtle blur background for extra polish */}
                  <div className="absolute inset-4 bg-brand-orange/5 blur-xl group-hover:bg-brand-orange/10 transition-colors z-0 rounded-full" />
                  <img src={client.imageUrl} alt={client.name} className="relative z-10 w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col border-t border-slate-100 bg-slate-50">
                  <h3 className="text-xl font-extrabold text-zinc-900 mb-3">{client.name}</h3>
                  <div className="flex items-start gap-3 text-zinc-600 text-sm mt-auto font-medium leading-relaxed">
                    <MapPin className="shrink-0 mt-0.5 text-brand-orange" size={18} />
                    <span>{client.address}</span>
                  </div>
                  {client.mapUrl && (
                    <a href={client.mapUrl} target="_blank" rel="noreferrer" className="mt-6 text-white text-center bg-zinc-900 hover:bg-brand-orange py-3 rounded-xl font-bold transition-colors w-full shadow-md">
                      View on Google Maps
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
