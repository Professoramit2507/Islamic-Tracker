import React, { useState } from 'react';

const Approve = () => {
  // ডামি পেন্ডিং সাবমিশন ডাটা
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      taskTitle: 'Database Indexing Optimization',
      submittedBy: 'Tanvir Hossain',
      submittedAt: 'Today at 2:30 PM',
      notes: 'Applied B-tree indexing on users and tasks table. Query latency dropped by 45%.',
      link: 'https://github.com/example/repo/pull/42',
    },
    {
      id: 2,
      taskTitle: 'Landing Page Responsive Fixes',
      submittedBy: 'Sadia Khan',
      submittedAt: 'Yesterday at 6:15 PM',
      notes: 'Fixed mobile view overflow on the hero and footer sections.',
      link: 'https://staging.example.com',
    },
  ]);

  const handleApprove = (id) => {
    setSubmissions((prev) => prev.filter((item) => item.id !== id));
  };

  const handleReject = (id) => {
    setSubmissions((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      {/* হেডার */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Task Approvals</h2>
        <p className="text-sm text-slate-500">
          Review submissions and verify deliverables before marking tasks as resolved.
        </p>
      </div>

      {/* সাবমিশন লিস্ট */}
      {submissions.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-500">
          No pending approvals right now. All caught up!
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between gap-6"
            >
              {/* সাবমিশন ডিটেইলস */}
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-lg text-slate-800">{item.taskTitle}</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-amber-100 text-amber-700">
                    Needs Review
                  </span>
                </div>

                <p className="text-xs text-slate-400">
                  Submitted by <span className="font-medium text-slate-600">{item.submittedBy}</span> • {item.submittedAt}
                </p>

                <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  {item.notes}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-xs font-medium text-blue-600 hover:underline"
                  >
                    View Deliverable / Attachment →
                  </a>
                )}
              </div>

              {/* অ্যাকশন বাটন */}
              <div className="flex md:flex-col justify-end gap-2 shrink-0">
                <button
                  onClick={() => handleApprove(item.id)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                >
                  Approve Task
                </button>
                <button
                  onClick={() => handleReject(item.id)}
                  className="px-4 py-2 border border-rose-300 text-rose-600 hover:bg-rose-50 text-sm font-medium rounded-lg transition-colors"
                >
                  Reject & Feedback
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Approve;