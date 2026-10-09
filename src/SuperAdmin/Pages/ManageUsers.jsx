
import { useState } from "react";
import { UserPlus, Trash2, Users } from "lucide-react";
import { useSuperAdmin } from "../../SuperAdmin/Layouts/SuperAdminContext";

export default function ManageUsers() {
  const { users, setUsers,  setTasks } = useSuperAdmin();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Staff");

  function handleAddUser(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) return;

    const exists = users.some(
      (user) =>
        user.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (exists) {
      alert("This email already exists!");
      return;
    }

    setUsers((previous) => [
      ...previous,
      {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        role,
      },
    ]);

    setName("");
    setEmail("");
    setRole("Staff");
  }

  function handleRemoveUser(id) {
    const confirmed = window.confirm("Remove this user?");

    if (!confirmed) return;

    // Remove the user
    setUsers((previous) =>
      previous.filter((user) => user.id !== id)
    );

    // Unassign this user from tasks, but keep the tasks
    setTasks((previous) =>
      previous.map((task) =>
        task.assignedTo === id
          ? { ...task, assignedTo: null }
          : task
      )
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Manage Users
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Add and manage your team members.
        </p>
      </div>

      <form
        onSubmit={handleAddUser}
        className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-2 xl:grid-cols-4"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          required
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500"
        >
          <option value="Admin">Admin</option>
          <option value="Staff">Staff</option>
        </select>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 font-medium text-white hover:bg-violet-700"
        >
          <UserPlus size={18} />
          Add User
        </button>
      </form>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b p-5">
          <h3 className="font-bold text-slate-800">
            Team Members
          </h3>

          <span className="flex items-center gap-2 text-sm text-slate-500">
            <Users size={17} /> {users.length} users
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-slate-100">
                  <td className="p-4 font-medium text-slate-800">
                    {user.name}
                  </td>

                  <td className="p-4 text-slate-600">
                    {user.email}
                  </td>

                  <td className="p-4">
                    <span className="rounded-full bg-violet-50 px-3 py-1 text-xs text-violet-700">
                      {user.role}
                    </span>
                  </td>

                  <td className="p-4">
                    <button
                      type="button"
                      onClick={() => handleRemoveUser(user.id)}
                      className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                      title="Remove user"
                      aria-label={`Remove ${user.name}`}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="p-8 text-center text-slate-500"
                  >
                    No users found. Add your first team member.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

