
import { useState } from "react";
import {
  ShieldCheck,
  Users,
  UserCog,
  UserRound,
  UserPlus,
} from "lucide-react";

import { useSuperAdmin } from "../Layouts/SuperAdminContext";

export default function RoleManage() {
  const { users, tasks, setTasks } = useSuperAdmin();

  // Store selected assignments as "userId-taskId"
  const [selectedAssignments, setSelectedAssignments] = useState([]);

  const teamMembers = users.filter((user) =>
    ["Admin", "Staff"].includes(user.role)
  );

  const adminCount = teamMembers.filter(
    (user) => user.role === "Admin"
  ).length;

  const staffCount = teamMembers.filter(
    (user) => user.role === "Staff"
  ).length;

  function assignmentKey(userId, taskId) {
    return `${userId}-${taskId}`;
  }

  function isAssigned(userId, taskId) {
    const task = tasks.find((item) => item.id === taskId);
    return task?.assignedTo === userId;
  }

  function toggleAssignment(userId, taskId) {
    const key = assignmentKey(userId, taskId);

    setSelectedAssignments((previous) =>
      previous.includes(key)
        ? previous.filter((item) => item !== key)
        : [...previous, key]
    );
  }

  function handleAssignTasks() {
    if (selectedAssignments.length === 0) {
      alert("Please select at least one checkbox.");
      return;
    }

    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        const selectedUser = teamMembers.find((user) =>
          selectedAssignments.includes(
            assignmentKey(user.id, task.id)
          )
        );

        if (selectedUser) {
          return { ...task, assignedTo: selectedUser.id };
        }

        return task;
      })
    );

    alert("Selected tasks assigned successfully!");
    setSelectedAssignments([]);
  }

  function handleUnassignTasks() {
    if (selectedAssignments.length === 0) {
      alert("Please select the assignments first.");
      return;
    }

    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        const selectedUser = teamMembers.find((user) =>
          selectedAssignments.includes(
            assignmentKey(user.id, task.id)
          )
        );

        if (selectedUser && task.assignedTo === selectedUser.id) {
          return { ...task, assignedTo: null };
        }

        return task;
      })
    );

    setSelectedAssignments([]);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
          <ShieldCheck size={26} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Role & Task Assignment
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Select tasks for each team member using the checkboxes.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          title="Total Members"
          value={users.length}
          icon={Users}
          color="text-violet-600 bg-violet-50"
        />

        <StatCard
          title="Admins"
          value={adminCount}
          icon={UserCog}
          color="text-blue-600 bg-blue-50"
        />

        <StatCard
          title="Staff Members"
          value={staffCount}
          icon={UserRound}
          color="text-emerald-600 bg-emerald-50"
        />
      </div>

      {/* Assignment Matrix */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="mb-5">
          <h3 className="text-lg font-bold text-slate-800">
            Assign Tasks to Users
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Each row represents a user. Each column represents a task.
          </p>
        </div>

        <div className="mb-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleAssignTasks}
            disabled={selectedAssignments.length === 0}
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-3 font-medium text-white hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <UserPlus size={18} />
            Assign Selected ({selectedAssignments.length})
          </button>

          <button
            type="button"
            onClick={handleUnassignTasks}
            disabled={selectedAssignments.length === 0}
            className="rounded-xl border border-red-200 px-4 py-3 font-medium text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Unassign Selected
          </button>
        </div>

        {teamMembers.length > 0 && tasks.length > 0 ? (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-max border-collapse text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th className="sticky left-0 z-10 min-w-52 border-b border-r border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-700">
                    Team Member
                  </th>

                  {tasks.map((task) => (
                    <th
                      key={task.id}
                      className="min-w-36 border-b border-r border-slate-200 px-4 py-4 text-center"
                    >
                      <p className="max-w-40 whitespace-normal text-sm font-semibold text-slate-700">
                        {task.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {task.priority}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {teamMembers.map((user) => (
                  <tr
                    key={user.id}
                    className="transition hover:bg-violet-50/40"
                  >
                    <td className="sticky left-0 z-10 border-b border-r border-slate-200 bg-white px-4 py-4">
                      <p className="font-semibold text-slate-800">
                        {user.name}
                      </p>
                      <span
                        className={`mt-1 inline-block rounded-full px-2 py-1 text-xs ${
                          user.role === "Admin"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    {tasks.map((task) => {
                      const key = assignmentKey(user.id, task.id);
                      const checked = isAssigned(user.id, task.id)
                        ? !selectedAssignments.includes(key)
                        : selectedAssignments.includes(key);

                      return (
                        <td
                          key={task.id}
                          className="border-b border-r border-slate-200 px-4 py-4 text-center"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              toggleAssignment(user.id, task.id)
                            }
                            aria-label={`${task.title} for ${user.name}`}
                            className="h-5 w-5 cursor-pointer accent-violet-600"
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center">
            <p className="font-semibold text-slate-700">
              {teamMembers.length === 0
                ? "No Admin or Staff members found"
                : "No tasks available"}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Add team members from Manage Users and tasks from Manage Tasks.
            </p>
          </div>
        )}

        <p className="mt-4 text-xs text-slate-500">
          Note: One task can be assigned to one user at a time with the current
          task data structure.
        </p>
      </section>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function StatCard({ title, value, icon: Icon, color }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className={`inline-flex rounded-xl p-3 ${color}`}>
        <Icon size={24} />
      </div>

      <h3 className="mt-4 text-sm font-medium text-slate-500">
        {title}
      </h3>

      <p className="mt-2 text-2xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}