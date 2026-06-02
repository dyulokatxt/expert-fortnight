import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, change, isPositive, color = 'primary' }) => {
  const colorClasses = {
    primary: 'bg-primary-50 text-primary-600 border-primary-200',
    accent: 'bg-accent-50 text-accent-600 border-accent-200',
    amber: 'bg-amber-50 text-amber-600 border-amber-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-soft-md p-6 hover:shadow-soft-lg transition-all duration-300 hover:border-slate-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg border ${colorClasses[color]}`}>
          <Icon size={24} />
        </div>
        <div
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
            isPositive
              ? 'bg-accent-100 text-accent-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {isPositive ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}
          {change}%
        </div>
      </div>

      {/* Content */}
      <h3 className="text-slate-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl lg:text-3xl font-bold text-slate-900">{value}</p>

      {/* Footer */}
      <p className="text-xs text-slate-500 mt-3">vs last month</p>
    </div>
  );
};

export default StatCard;
