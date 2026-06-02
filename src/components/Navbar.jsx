import React from 'react';
import {
  Menu,
  Search,
  Bell,
  Settings,
  HelpCircle,
} from 'lucide-react';

const Navbar = ({ onToggleSidebar, onMobileMenu }) => {
  return (
    <nav className="bg-white border-b border-slate-200 shadow-soft h-16 flex items-center justify-between px-6">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="hidden lg:flex p-2 hover:bg-slate-100 rounded-lg transition-colors"
          title="Toggle sidebar"
        >
          <Menu size={20} className="text-slate-600" />
        </button>

        <button
          onClick={onMobileMenu}
          className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          title="Toggle menu"
        >
          <Menu size={20} className="text-slate-600" />
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-lg px-4 py-2 flex-1 max-w-sm">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search donors, campaigns..."
            className="bg-transparent text-sm placeholder-slate-500 focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Mobile Search Icon */}
        <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <Search size={18} className="text-slate-600" />
        </button>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors group">
          <Bell size={18} className="text-slate-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
          <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-soft-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <h3 className="font-semibold text-slate-900 mb-3">Notifications</h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {[
                { title: 'New donation received', subtitle: 'USD 5,000 from Tech Corp' },
                { title: 'Campaign milestone reached', subtitle: '"Education for All" reached 80%' },
                { title: 'Volunteer assignment pending', subtitle: '3 volunteers awaiting task assignment' },
              ].map((notif, idx) => (
                <div key={idx} className="p-2 hover:bg-slate-50 rounded cursor-pointer transition-colors">
                  <p className="text-sm font-medium text-slate-900">{notif.title}</p>
                  <p className="text-xs text-slate-500">{notif.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </button>

        {/* Help */}
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Help">
          <HelpCircle size={18} className="text-slate-600" />
        </button>

        {/* Settings */}
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Settings">
          <Settings size={18} className="text-slate-600" />
        </button>

        {/* User Avatar */}
        <button className="w-9 h-9 rounded-full overflow-hidden border-2 border-primary-200 hover:border-primary-400 transition-colors">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=NGO"
            alt="User"
            className="w-full h-full"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
