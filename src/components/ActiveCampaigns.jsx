import React from 'react';
import { TrendingUp, Clock, Target } from 'lucide-react';

const ActiveCampaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: 'Education for All',
      description: 'Providing quality education to underprivileged children',
      goalAmount: '$50,000',
      raisedAmount: '$42,500',
      progress: 85,
      daysRemaining: 14,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Clean Water Initiative',
      description: 'Building sustainable water systems in rural areas',
      goalAmount: '$35,000',
      raisedAmount: '$24,800',
      progress: 71,
      daysRemaining: 21,
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      id: 3,
      title: 'Healthcare Access',
      description: 'Mobile health clinics for remote communities',
      goalAmount: '$60,000',
      raisedAmount: '$18,900',
      progress: 31,
      daysRemaining: 45,
      color: 'from-red-500 to-red-600',
    },
    {
      id: 4,
      title: 'Emergency Relief',
      description: 'Disaster response and humanitarian aid',
      goalAmount: '$100,000',
      raisedAmount: '$89,200',
      progress: 89,
      daysRemaining: 7,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-accent-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-soft-md p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Active Campaigns</h3>
          <p className="text-sm text-slate-500 mt-1">{campaigns.length} campaigns running</p>
        </div>
        <button className="px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors text-sm font-semibold">
          New Campaign
        </button>
      </div>

      {/* Campaign Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="border border-slate-200 rounded-lg p-4 hover:shadow-soft-md hover:border-slate-300 transition-all duration-300 cursor-pointer"
          >
            {/* Campaign Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 text-sm">{campaign.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{campaign.description}</p>
              </div>
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${campaign.color} flex items-center justify-center text-white flex-shrink-0`}
              >
                <TrendingUp size={20} />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-medium text-slate-600">Progress</div>
                <div className="text-xs font-bold text-slate-900">{campaign.progress}%</div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${campaign.color} transition-all duration-500`}
                  style={{ width: `${campaign.progress}%` }}
                />
              </div>
            </div>

            {/* Campaign Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-slate-100">
              <div>
                <p className="text-xs text-slate-500 mb-1">Goal</p>
                <p className="font-semibold text-slate-900">{campaign.goalAmount}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Raised</p>
                <p className="font-semibold text-accent-600">{campaign.raisedAmount}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <Clock size={14} />
                <span>{campaign.daysRemaining} days left</span>
              </div>
              <button className="px-3 py-1.5 bg-primary-50 text-primary-700 text-xs font-semibold rounded hover:bg-primary-100 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveCampaigns;
