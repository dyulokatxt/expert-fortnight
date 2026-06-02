import React from 'react';
import { MoreVertical, ArrowUpRight } from 'lucide-react';

const RecentDonations = () => {
  const donations = [
    {
      id: 1,
      donorName: 'Michael Chen',
      amount: '$5,000',
      campaign: 'Education for All',
      date: 'Jun 01, 2025',
      status: 'Completed',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    },
    {
      id: 2,
      donorName: 'Sarah Williams',
      amount: '$2,500',
      campaign: 'Clean Water Initiative',
      date: 'May 31, 2025',
      status: 'Pending',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
    {
      id: 3,
      donorName: 'Tech Corp Foundation',
      amount: '$15,000',
      campaign: 'Healthcare Access',
      date: 'May 30, 2025',
      status: 'Completed',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TechCorp',
    },
    {
      id: 4,
      donorName: 'Emma Johnson',
      amount: '$1,200',
      campaign: 'Education for All',
      date: 'May 29, 2025',
      status: 'Completed',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    },
    {
      id: 5,
      donorName: 'Global Charity Fund',
      amount: '$8,750',
      campaign: 'Emergency Relief',
      date: 'May 28, 2025',
      status: 'Pending',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GlobalCharity',
    },
  ];

  const statusColors = {
    Completed: 'bg-accent-100 text-accent-700',
    Pending: 'bg-amber-100 text-amber-700',
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-soft-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Recent Donations</h3>
          <p className="text-sm text-slate-500 mt-1">Latest donation activity</p>
        </div>
        <button className="px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors text-sm font-semibold">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Donor Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Amount</th>
              <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Campaign</th>
              <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {donations.map((donation) => (
              <tr key={donation.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={donation.avatar}
                      alt={donation.donorName}
                      className="w-9 h-9 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-slate-900">{donation.donorName}</p>
                      <p className="text-xs text-slate-500">{donation.status}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <ArrowUpRight size={14} className="text-accent-600" />
                    <span className="font-semibold text-slate-900">{donation.amount}</span>
                  </div>
                </td>
                <td className="hidden sm:table-cell px-6 py-4 text-sm text-slate-600">
                  {donation.campaign}
                </td>
                <td className="hidden md:table-cell px-6 py-4 text-sm text-slate-600">
                  {donation.date}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      statusColors[donation.status]
                    }`}
                  >
                    {donation.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="p-1 hover:bg-slate-200 rounded transition-colors">
                    <MoreVertical size={16} className="text-slate-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentDonations;
