
import {
  Users,
  ClipboardList,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Dashboard({
  users = [],
  tasks = [],
}) {
  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const stats = [
    {
      title: "Total Users",
      value: users.length,
      icon: Users,
    },
    {
      title: "Total Tasks",
      value: tasks.length,
      icon: ClipboardList,
    },
    {
      title: "Pending Tasks",
      value: pending,
      icon: Clock,
    },
    {
      title: "Completed Tasks",
      value: completed,
      icon: CheckCircle,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Super Admin Dashboard
        </h1>
        <p className="mt-1 text-slate-500">
          Manage users and monitor task progress.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500">
                  {stat.title}
                </p>
                <Icon size={24} className="text-violet-600" />
              </div>

              <h2 className="mt-4 text-3xl font-bold text-slate-800">
                {stat.value}
              </h2>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-bold text-slate-800">
          Recent Tasks
        </h2>

        {tasks.length === 0 ? (
          <p className="text-sm text-slate-500">
            No tasks available yet.
          </p>
        ) : (
          tasks.slice(0, 5).map((task) => (
            <div
              key={task.id}
              className="flex flex-wrap justify-between gap-2 border-b py-3 last:border-0"
            >
              <span className="font-medium text-slate-700">
                {task.title}
              </span>
              <span className="text-sm text-slate-500">
                {task.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}