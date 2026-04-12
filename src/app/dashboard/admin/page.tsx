export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Admin Dashboard</h1>
        <p className="text-zinc-500 mt-1">Welcome to the administration overview.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Placeholder cards */}
        {['Total Leads', 'Active Clients', 'Total Circulars', 'Employees'].map((item) => (
          <div key={item} className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h3 className="text-zinc-500 text-sm font-medium">{item}</h3>
            <p className="text-3xl font-bold mt-2 text-zinc-900 dark:text-zinc-100">0</p>
          </div>
        ))}
      </div>
    </div>
  );
}
