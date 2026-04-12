export default function EmployeeDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Employee Dashboard</h1>
        <p className="text-zinc-500 mt-1">Here are your recent assigned inquiries and leads.</p>
      </div>
      
      <div className="bg-white dark:bg-zinc-900 p-6 flex flex-col items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm min-h-[300px]">
        <p className="text-zinc-500">No leads assigned yet.</p>
      </div>
    </div>
  );
}
