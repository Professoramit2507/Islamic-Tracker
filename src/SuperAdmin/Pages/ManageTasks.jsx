
import { useState } from "react";
import { Plus, Trash2, ClipboardList } from "lucide-react";
import { useSuperAdmin } from "../../SuperAdmin/Layouts/SuperAdminContext";

export default function ManageTasks() {
  const { tasks, setTasks } = useSuperAdmin();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  function handleAddTask(e) {
    e.preventDefault();

    if (!title.trim()) return;

    setTasks((previous) => [
      ...previous,
      {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        priority,
        assignedTo: null,
        status: "Pending",
      },
    ]);

    setTitle("");
    setDescription("");
    setPriority("Medium");
  }

  function handleDeleteTask(id) {
    if (window.confirm("Delete this task permanently?")) {
      setTasks((previous) =>
        previous.filter((task) => task.id !== id)
      );
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Manage Tasks
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Create, review and remove tasks.
        </p>
      </div>

      <form
        onSubmit={handleAddTask}
        className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5"
      >
        <h3 className="font-bold text-slate-800">
          Create New Task
        </h3>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
          rows={3}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500"
        />

        <div className="flex flex-wrap gap-3">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-3"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700"
          >
            <Plus size={18} />
            Create Task
          </button>
        </div>
      </form>

      <section className="space-y-3">
        <h3 className="font-bold text-slate-800">
          All Tasks ({tasks.length})
        </h3>

        {tasks.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
            <ClipboardList className="mx-auto mb-3" size={35} />
            No tasks created yet.
          </div>
        ) : (
          tasks.map((task) => (
            <article
              key={task.id}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center"
            >
              <div>
                <h4 className="font-semibold text-slate-800">
                  {task.title}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  {task.description || "No description"}
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700">
                    {task.priority} priority
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                    {task.status}
                  </span>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                    {task.assignedTo != null
                      ? "Assigned"
                      : "Unassigned"}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleDeleteTask(task.id)}
                className="flex items-center justify-center gap-2 self-start rounded-lg px-3 py-2 text-sm text-red-500 hover:bg-red-50 sm:self-center"
              >
                <Trash2 size={17} />
                Delete
              </button>
            </article>
          ))
        )}
      </section>
    </div>
  );
}

