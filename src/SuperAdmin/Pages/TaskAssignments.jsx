
import { ClipboardList, UserRound, UserMinus } from "lucide-react";
import { useSuperAdmin } from "../../SuperAdmin/Layouts/SuperAdminContext";

export default function TaskAssignments() {
  const { users, tasks, setTasks } = useSuperAdmin();

  function handleAssign(taskId, userId) {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === taskId
          ? {
              ...task,
              assignedTo: userId === "" ? null : Number(userId),
            }
          : task
      )
    );
  }

  function handleStatusChange(taskId, status) {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === taskId ? { ...task, status } : task
      )
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Task Assignments
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Assign tasks to Admin or Staff and track their status.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Total Tasks</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-800">
            {tasks.length}
          </h3>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Assigned Tasks</p>
          <h3 className="mt-2 text-2xl font-bold text-violet-600">
            {tasks.filter((task) => task.assignedTo != null).length}
          </h3>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Unassigned Tasks</p>
          <h3 className="mt-2 text-2xl font-bold text-amber-600">
            {tasks.filter((task) => task.assignedTo == null).length}
          </h3>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <ClipboardList
            size={40}
            className="mx-auto mb-3 text-slate-400"
          />
          <h3 className="font-semibold text-slate-700">
            No tasks available
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Create a task first from Manage Tasks.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => {
            const assignedUser = users.find(
              (user) => user.id === task.assignedTo
            );

            return (
              <article
                key={task.id}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-800">
                        {task.title}
                      </h3>

                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-700">
                        {task.priority} Priority
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                      {task.description || "No description provided."}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                      <UserRound size={17} className="text-slate-400" />
                      <span className="text-slate-600">
                        {assignedUser
                          ? `${assignedUser.name} (${assignedUser.role})`
                          : "Not assigned"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 md:w-64">
                    <label className="text-sm font-medium text-slate-700">
                      Assign to
                    </label>

                    <select
                      value={task.assignedTo ?? ""}
                      onChange={(e) =>
                        handleAssign(task.id, e.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-violet-500"
                    >
                      <option value="">Unassigned</option>

                      {users
                        .filter((user) =>
                          ["Admin", "Staff"].includes(user.role)
                        )
                        .map((user) => (
                          <option key={user.id} value={user.id}>
                            {user.name} — {user.role}
                          </option>
                        ))}
                    </select>

                    <label className="text-sm font-medium text-slate-700">
                      Task status
                    </label>

                    <select
                      value={task.status}
                      onChange={(e) =>
                        handleStatusChange(task.id, e.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-violet-500"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>

                    {task.assignedTo != null && (
                      <button
                        type="button"
                        onClick={() => handleAssign(task.id, "")}
                        className="flex items-center justify-center gap-2 rounded-xl border border-red-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <UserMinus size={16} />
                        Unassign Task
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {tasks.length > 0 && users.length === 0 && (
        <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
          No team members available. Add an Admin or Staff from Manage Users
          before assigning tasks.
        </p>
      )}
    </div>
  );
}

