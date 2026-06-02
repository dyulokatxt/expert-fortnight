import React from 'react';
import { CheckCircle, Clock, AlertCircle, ArrowRight } from 'lucide-react';

const VolunteerActivity = () => {
  const activities = [
    {
      id: 1,
      volunteerName: 'James Patterson',
      task: 'Community outreach for Education Campaign',
      status: 'Completed',
      date: 'Jun 01, 2025',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      icon: CheckCircle,
      color: 'text-accent-600',
    },
    {
      id: 2,
      volunteerName: 'Linda Martinez',
      task: 'Water quality testing - Rural Area',
      status: 'In Progress',
      date: 'Jun 02, 2025',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linda',
      icon: Clock,
      color: 'text-blue-600',
    },
    {
      id: 3,
      volunteerName: 'David Kumar',
      task: 'Data entry and database updates',
      status: 'Pending',
      date: 'Jun 03, 2025',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      icon: AlertCircle,
      color: 'text-amber-600',
    },
    {
      id: 4,
      volunteerName: 'Rachel Green',
      task: 'Healthcare camp coordination',
      status: 'Completed',
      date: 'May 31, 2025',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel',
      icon: CheckCircle,
      color: 'text-accent-600',
    },
    {
      id: 5,
      volunteerName: 'Marcus Brown',
      task: 'Fundraising event planning',
      status: 'In Progress',
      date: 'Jun 04, 2025',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
      icon: Clock,
      color: 'text-blue-600',
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-soft-md p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Volunteer Activity</h3>
          <p className="text-sm text-slate-500 mt-1">Recent volunteer assignments and tasks</p>
        </div>
        <button className="px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors text-sm font-semibold">
          Manage Volunteers
        </button>
      </div>

      {/* Activity List */}
      <div className="space-y-3">
        {activities.map((activity) => {
          const IconComponent = activity.icon;
          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-4 border border-slate-100 rounded-lg hover:bg-slate-50 hover:border-slate-200 transition-all duration-200 cursor-pointer group"
            >
              {/* Avatar */}
              <img
                src={activity.avatar}
                alt={activity.volunteerName}
                className="w-12 h-12 rounded-full flex-shrink-0"
              />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-semibold text-slate-900">{activity.volunteerName}</h4>
                  <IconComponent size={18} className={`flex-shrink-0 ${activity.color}`} />
                </div>
                <p className="text-sm text-slate-600 mb-2">{activity.task}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{activity.date}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      activity.status === 'Completed'
                        ? 'bg-accent-100 text-accent-700'
                        : activity.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {activity.status}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={18}
                className="text-slate-400 group-hover:text-primary-600 transition-colors flex-shrink-0 mt-1"
              />
            </div>
          );
        })}
      </div>

      {/* View All Button */}
      <button className="w-full mt-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors text-sm font-semibold">
        View All Activities
      </button>
    </div>
  );
};

export default VolunteerActivity;
