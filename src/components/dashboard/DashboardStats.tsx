
import { Card, CardContent } from '@/components/ui/card';
import { Book, Calendar, Clock, Users } from 'lucide-react';

interface DashboardStatsProps {
  userRole: string;
}

const DashboardStats = ({ userRole }: DashboardStatsProps) => {
  // Define stats based on user role
  const getStats = () => {
    switch (userRole) {
      case 'student':
        return [
          { 
            id: 1, 
            title: 'Enrolled Courses', 
            value: '5', 
            icon: <Book className="h-8 w-8 text-campus-primary" />,
            change: '+1 this semester' 
          },
          { 
            id: 2, 
            title: 'Attendance Rate', 
            value: '95%', 
            icon: <Clock className="h-8 w-8 text-campus-success" />,
            change: '+2% from last month' 
          },
          { 
            id: 3, 
            title: 'Upcoming Events', 
            value: '3', 
            icon: <Calendar className="h-8 w-8 text-campus-secondary" />,
            change: 'Next: Career Fair' 
          },
          { 
            id: 4, 
            title: 'Active Assignments', 
            value: '7', 
            icon: <Book className="h-8 w-8 text-campus-warning" />,
            change: '2 due this week' 
          },
        ];
      case 'faculty':
        return [
          { 
            id: 1, 
            title: 'Teaching Courses', 
            value: '4', 
            icon: <Book className="h-8 w-8 text-campus-primary" />,
            change: 'Current semester' 
          },
          { 
            id: 2, 
            title: 'Total Students', 
            value: '124', 
            icon: <Users className="h-8 w-8 text-campus-secondary" />,
            change: 'Across all courses' 
          },
          { 
            id: 3, 
            title: 'Attendance Today', 
            value: '87%', 
            icon: <Clock className="h-8 w-8 text-campus-success" />,
            change: '+3% from yesterday' 
          },
          { 
            id: 4, 
            title: 'Upcoming Classes', 
            value: '3', 
            icon: <Calendar className="h-8 w-8 text-campus-warning" />,
            change: 'Next: Today at 2:00 PM' 
          },
        ];
      case 'admin':
        return [
          { 
            id: 1, 
            title: 'Active Courses', 
            value: '42', 
            icon: <Book className="h-8 w-8 text-campus-primary" />,
            change: 'Current semester' 
          },
          { 
            id: 2, 
            title: 'Total Users', 
            value: '1,245', 
            icon: <Users className="h-8 w-8 text-campus-secondary" />,
            change: '+18 this month' 
          },
          { 
            id: 3, 
            title: 'Average Attendance', 
            value: '91%', 
            icon: <Clock className="h-8 w-8 text-campus-success" />,
            change: '+2% from last semester' 
          },
          { 
            id: 4, 
            title: 'Upcoming Events', 
            value: '12', 
            icon: <Calendar className="h-8 w-8 text-campus-warning" />,
            change: 'Next 30 days' 
          },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {getStats().map((stat) => (
        <Card key={stat.id} className="dashboard-card">
          <CardContent className="flex p-6">
            <div className="mr-4">
              {stat.icon}
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <p className="text-2xl font-bold text-campus-dark">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
