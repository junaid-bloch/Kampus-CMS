
import { NavLink } from 'react-router-dom';
import { Book, Calendar, BarChart, Clock, Layout, Settings, User, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  userRole?: string;
}

const Sidebar = ({ isOpen, userRole = 'student' }: SidebarProps) => {
  // Define navigation items based on user role
  const getNavItems = () => {
    const commonItems = [
      { name: 'Dashboard', path: '/dashboard', icon: <Layout className="h-5 w-5" /> },
      { name: 'Courses', path: '/courses', icon: <Book className="h-5 w-5" /> },
      { name: 'Calendar', path: '/calendar', icon: <Calendar className="h-5 w-5" /> },
    ];
    
    const roleSpecificItems = {
      student: [
        { name: 'Attendance', path: '/attendance', icon: <Clock className="h-5 w-5" /> },
        { name: 'Grades', path: '/grades', icon: <BarChart className="h-5 w-5" /> },
      ],
      faculty: [
        { name: 'Attendance', path: '/attendance/manage', icon: <Clock className="h-5 w-5" /> },
        { name: 'Grading', path: '/grading', icon: <BarChart className="h-5 w-5" /> },
        { name: 'Students', path: '/students', icon: <Users className="h-5 w-5" /> },
      ],
      admin: [
        { name: 'Users', path: '/users', icon: <User className="h-5 w-5" /> },
        { name: 'Reports', path: '/reports', icon: <BarChart className="h-5 w-5" /> },
        { name: 'Settings', path: '/settings', icon: <Settings className="h-5 w-5" /> },
      ],
    };
    
    return [...commonItems, ...(roleSpecificItems[userRole as keyof typeof roleSpecificItems] || [])];
  };

  return (
    <aside 
      className={cn(
        "bg-sidebar h-full transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-0 md:w-16"
      )}
    >
      <div className="h-full flex flex-col overflow-y-auto">
        <div className="flex items-center justify-center h-16 border-b border-sidebar-border">
          {isOpen ? (
            <h1 className="text-xl font-bold text-white">CampusFlow</h1>
          ) : (
            <span className="text-white font-bold text-xl md:block hidden">CF</span>
          )}
        </div>
        <nav className="flex-1 px-2 py-4">
          <ul className="space-y-1">
            {getNavItems().map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn("nav-link", isActive && "active")
                  }
                >
                  {item.icon}
                  {isOpen && <span>{item.name}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-sidebar-border">
          <div className="text-center text-white text-opacity-60">
            {isOpen && (
              <div className="text-xs">
                <p>Campus Flow v1.0</p>
                <p>© 2025 All rights reserved</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
