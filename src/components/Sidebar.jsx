import React from 'react';
import {
  LayoutDashboard,
  Users,
  Heart,
  TrendingUp,
  Wallet,
  BarChart3,
  MessageSquare,
  Settings,
  X,
  LogOut,
} from 'lucide-react';

const Sidebar = ({ isOpen, isMobile, setMobileMenuOpen }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
    { icon: Users, label: 'Donors', href: '#' },
    { icon: Heart, label: 'Volunteers', href: '#' },
    { icon: TrendingUp, label: 'Campaigns', href: '#' },
    { icon: Wallet, label: 'Donations', href: '#' },
    { icon: BarChart3, label: 'Reports', href: '#' },
    { icon: MessageSquare, label: 'Messages', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'w-64' : 'w-20'
        } ${
          isMobile ? 'fixed left-0 top-0 z-50 h-full w-64' : ''
        } bg-white shadow-soft-lg transition-all duration-300 ease-out flex flex-col`}
      >
        {/* Logo */}
        <div className={`flex items-center justify-between p-6 border-b border-slate-100`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            {(isOpen || isMobile) && (
              <div className="animate-fade-in">
                <h1 className="text-lg font-bold text-slate-900">CRMHub</h1>
                <p className="text-xs text-slate-500">NGO Management</p>
              </div>
            )}
          </div>
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X size={20} className="text-slate-600" />
            </button>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                index === 0
                  ? 'bg-primary-50 text-primary-700 border border-primary-200'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
              title={!isOpen && !isMobile ? item.label : ''}
            >
              <item.icon size={20} className="flex-shrink-0" />
              {(isOpen || isMobile) && (
                <span className="font-medium text-sm animate-fade-in">{item.label}</span>
              )}
            </a>
          ))}
        </nav>

        {/* User Section */}
        <div className={`border-t border-slate-100 p-4 space-y-3 ${!isOpen && !isMobile ? 'text-center' : ''}`}>
          <div className={`flex items-center gap-3 ${!isOpen && !isMobile ? 'justify-center' : ''}`}>
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=NGO"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            {(isOpen || isMobile) && (
              <div>
                <p className="text-sm font-semibold text-slate-900">Sarah Johnson</p>
                <p className="text-xs text-slate-500">Admin</p>
              </div>
            )}
          </div>
          <button
            className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors text-sm font-medium ${
              !isOpen && !isMobile ? 'p-2' : ''
            }`}
          >
            <LogOut size={16} />
            {(isOpen || isMobile) && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
