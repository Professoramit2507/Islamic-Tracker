import React from 'react';

const Activity = () => {
  const activities = [
    {
      id: 1,
      user: 'Rahim Ahmed',
      action: 'completed task',
      target: 'Fix Auth Redirection Bug',
      timestamp: '10 minutes ago',
      type: 'success',
    },
    {
      id: 2,
      user: 'Admin User',
      action: 'assigned new task to',
      target: 'Sadia Khan',
      timestamp: '45 minutes ago',
      type: 'info',
    },
    {
      id: 3,
      user: 'Tanvir Hossain',
      action: 'submitted work for approval on',
      target: 'Database Indexing Review',
      timestamp: '2 hours ago',
      type: 'warning',
    },
    {
      id: 4,
      user: 'Admin User',
      action: 'rejected task submission of',
      target: 'Banner Redesign v2',
      timestamp: '5 hours ago',
      type: 'danger',
    },
  ];

  const getIndicatorColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-emerald-500';
      case 'warning':
        return 'bg-amber-500';
      case 'danger':
        return 'bg-rose-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      {/* হেডার */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Activity Logs</h2>
          <p className="text-sm text-slate-500">Track all operational updates, submissions, and status changes.</p>
        </div>
        <button className="self-start sm:self-auto px-4 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors shadow-sm">
          Clear Logs
        </button>
      </div>

      {/* টাইমলাইন কার্ড */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <div className="relative border-l-2 border-slate-200 ml-4 space-y-8 py-2">
          {activities.map((item) => (
            <div key={item.id} className="relative pl-6">
              {/* টাইমলাইন ডট */}
              <span
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-white ${getIndicatorColor(
                  item.type
                )}`}
              />

              {/* অ্যাক্টিভিটি বিবরণ */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">{item.user}</span>{' '}
                  <span className="text-slate-500">{item.action}</span>{' '}
                  <span className="font-medium text-slate-800">"{item.target}"</span>
                </p>
                <span className="text-xs text-slate-400 whitespace-nowrap">{item.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;