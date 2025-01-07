import { useState } from 'react';
import { ChevronDown, LayoutDashboard, Users, Settings, BarChart2, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItem {
  title: string;
  icon: JSX.Element;
  submenu?: { title: string; path: string }[];
}

export default function Sidebar() {
  const [expandedMenu, setExpandedMenu] = useState<string | null>('Dashboard');
  const [selectedSubmenu, setSelectedSubmenu] = useState<string>('Overview');

  const menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      submenu: [
        { title: 'Overview', path: '/overview' },
        { title: 'Analytics', path: '/analytics' },
        { title: 'Reports', path: '/reports' },
      ],
    },
    {
      title: 'Users',
      icon: <Users className="w-5 h-5" />,
      submenu: [
        { title: 'All Users', path: '/users' },
        { title: 'User Groups', path: '/user-groups' },
        { title: 'Permissions', path: '/permissions' },
      ],
    },
    {
      title: 'Analytics',
      icon: <BarChart2 className="w-5 h-5" />,
      submenu: [
        { title: 'Statistics', path: '/statistics' },
        { title: 'Performance', path: '/performance' },
        { title: 'Metrics', path: '/metrics' },
      ],
    },
    {
      title: 'Reports',
      icon: <FileText className="w-5 h-5" />,
      submenu: [
        { title: 'Daily', path: '/daily-reports' },
        { title: 'Weekly', path: '/weekly-reports' },
        { title: 'Monthly', path: '/monthly-reports' },
      ],
    },
    {
      title: 'Settings',
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-64 bg-white dark:bg-[#1C1C1C] shadow-lg h-screen rounded-tr-2xl rounded-br-2xl">
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold text-blue-600">System Name</span>
        </div>
        <nav>
          {menuItems.map((item) => (
            <div key={item.title}>
              <button
                onClick={() => setExpandedMenu(expandedMenu === item.title ? null : item.title)}
                className={cn(
                  'w-full flex items-center justify-between p-3 rounded-lg mb-1 transition-colors duration-100',
                  expandedMenu === item.title
                    ? 'bg-blue-50 dark:bg-blue-600 text-blue-600 dark:text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-[#242424] hover:text-blue-600 text-gray-700 dark:text-gray-300'
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="transition-colors duration-100">{item.icon}</span>
                  <span className="font-medium transition-colors duration-100">{item.title}</span>
                </div>
                {item.submenu && (
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-100',
                      expandedMenu === item.title ? 'transform rotate-180' : ''
                    )}
                  />
                )}
              </button>
              {item.submenu && expandedMenu === item.title && (
                <div className="ml-4 mb-2 overflow-hidden animate-slideDown">
                  {item.submenu.map((sub) => {
                    const isSelected = selectedSubmenu === sub.title;
                    return (
                      <button
                        key={sub.title}
                        onClick={() => setSelectedSubmenu(sub.title)}
                        className={cn(
                          'w-full text-left p-2 pl-8 rounded-lg mb-1 transition-colors duration-100',
                          isSelected
                            ? 'bg-blue-600 text-white'
                            : 'hover:bg-gray-100 dark:hover:bg-[#242424] hover:text-blue-600 text-gray-600 dark:text-gray-400'
                        )}
                      >
                        {sub.title}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}