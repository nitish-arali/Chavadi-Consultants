import dbConnect from '@/lib/db';
import Circular from '@/models/Circular';
import { ExternalLink, FileText } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function CircularsPage() {
  await dbConnect();
  const circulars = await Circular.find({}).sort({ createdAt: -1 });

  // Group by department
  const grouped = circulars.reduce((acc, curr) => {
    if (!acc[curr.department]) acc[curr.department] = [];
    acc[curr.department].push(curr);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mx-auto mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Government Circulars</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Stay updated with the latest government circulars and regulations for construction and development.
          </p>
        </div>

        {Object.keys(grouped).length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-medium text-zinc-600 dark:text-zinc-400">No circulars added yet.</h3>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.keys(grouped).map((dept) => (
              <div key={dept} className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
                <div className="bg-zinc-100 dark:bg-zinc-800/50 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                  <h2 className="text-xl font-bold text-brand-teal dark:text-brand-teal-dark">{dept}</h2>
                </div>
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {grouped[dept].map((c: any) => (
                    <a key={c._id.toString()} href={c.url} target="_blank" rel="noreferrer" className="block px-6 py-5 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors group">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 shrink-0 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <FileText size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-zinc-900 dark:text-zinc-100 font-medium group-hover:text-brand-orange transition-colors">
                            {c.title}
                          </h3>
                          {c.subDepartment && <p className="text-sm text-zinc-500 mt-1">{c.subDepartment}</p>}
                        </div>
                        <div className="shrink-0 flex items-center gap-3">
                          {c.isNewBadge && (
                            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">New</span>
                          )}
                          <ExternalLink size={18} className="text-zinc-400 group-hover:text-brand-orange" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
