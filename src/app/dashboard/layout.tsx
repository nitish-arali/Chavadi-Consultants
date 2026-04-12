import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Users, FileText, UsersRound, Building2, LogOut, LayoutDashboard } from 'lucide-react';
import LogoutButton from './LogoutButton';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  const isAdmin = session.role === 'Admin';

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex">
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-zinc-200 dark:border-zinc-800">
          <Link href="/" className="font-bold text-lg text-[#e3651d]">Chavadi Portal</Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {isAdmin ? (
            <>
              <NavItem href="/dashboard/admin" icon={<LayoutDashboard size={20} />} label="Overview" />
              <NavItem href="/dashboard/admin/leads" icon={<Users size={20} />} label="Leads" />
              <NavItem href="/dashboard/admin/clients" icon={<Building2 size={20} />} label="Clients" />
              <NavItem href="/dashboard/admin/circulars" icon={<FileText size={20} />} label="Circulars" />
              <NavItem href="/dashboard/admin/employees" icon={<UsersRound size={20} />} label="Employees" />
            </>
          ) : (
            <>
              <NavItem href="/dashboard/employee" icon={<LayoutDashboard size={20} />} label="Overview" />
              <NavItem href="/dashboard/employee/leads" icon={<Users size={20} />} label="Leads" />
            </>
          )}
        </nav>
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="mb-4 px-2">
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{session.email}</p>
            <p className="text-xs text-zinc-500">{session.role}</p>
          </div>
          <LogoutButton />
        </div>
      </aside>
      
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile header could go here */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center space-x-3 px-3 py-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 transition-colors">
      {icon}
      <span>{label}</span>
    </Link>
  );
}
