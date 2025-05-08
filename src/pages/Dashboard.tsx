
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import Navbar from '@/components/Layout/Navbar';
import Sidebar from '@/components/Layout/Sidebar';
import DashboardStats from '@/components/dashboard/DashboardStats';
import AnnouncementCard from '@/components/dashboard/AnnouncementCard';
import CourseCard from '@/components/dashboard/CourseCard';
import EventsList from '@/components/dashboard/EventsList';
import { Skeleton } from '@/components/ui/skeleton';

// Mock data
const announcements = [
  {
    id: 1,
    title: "Campus Maintenance Notice",
    content: "The main library will be closed for renovations from June 10-15. Alternative study spaces will be available in the Student Center.",
    date: "2025-06-05",
    author: "Facilities Management"
  },
  {
    id: 2,
    title: "New Online Resources Available",
    content: "The university has acquired access to several new research databases. Training sessions will be held next week.",
    date: "2025-06-02",
    author: "Library Services"
  }
];

const courses = {
  student: [
    {
      id: 101,
      code: "CS101",
      name: "Introduction to Computer Science",
      instructor: "Dr. Alan Turing",
      schedule: "Mon, Wed 10:00-11:30",
      progress: 65,
      location: "Tech Building, Room 305"
    },
    {
      id: 102,
      code: "MATH201",
      name: "Calculus II",
      instructor: "Dr. Katherine Johnson",
      schedule: "Tue, Thu 13:00-14:30",
      progress: 42,
      location: "Science Hall, Room 210"
    },
    {
      id: 103,
      code: "ENG105",
      name: "Academic Writing",
      instructor: "Prof. Maya Angelou",
      schedule: "Wed, Fri 09:00-10:30",
      progress: 78,
      location: "Humanities Center, Room 115"
    },
    {
      id: 104,
      code: "PHYS211",
      name: "University Physics I",
      instructor: "Dr. Richard Feynman",
      schedule: "Mon, Wed, Fri 14:00-15:00",
      progress: 55,
      location: "Science Hall, Room 310"
    }
  ],
  faculty: [
    {
      id: 201,
      code: "CS350",
      name: "Database Systems",
      students: 32,
      schedule: "Mon, Wed 13:00-14:30",
      progress: 70,
      location: "Tech Building, Room 405"
    },
    {
      id: 202,
      code: "CS450",
      name: "Operating Systems",
      students: 28,
      schedule: "Tue, Thu 10:00-11:30",
      progress: 60,
      location: "Tech Building, Room 301"
    },
    {
      id: 203,
      code: "CS480",
      name: "Software Engineering",
      students: 35,
      schedule: "Wed, Fri 15:00-16:30",
      progress: 45,
      location: "Tech Building, Room 205"
    },
    {
      id: 204,
      code: "CS490",
      name: "Computer Ethics",
      students: 25,
      schedule: "Tue 15:00-18:00",
      progress: 80,
      location: "Tech Building, Room 105"
    }
  ],
  admin: [
    {
      id: 301,
      code: "CS101",
      name: "Introduction to Computer Science",
      instructor: "Dr. Alan Turing",
      students: 120,
      departments: ["Computer Science", "Engineering"],
      status: "Active"
    },
    {
      id: 302,
      code: "MATH201",
      name: "Calculus II",
      instructor: "Dr. Katherine Johnson",
      students: 85,
      departments: ["Mathematics", "Engineering", "Physics"],
      status: "Active"
    },
    {
      id: 303,
      code: "ENG105",
      name: "Academic Writing",
      instructor: "Prof. Maya Angelou",
      students: 150,
      departments: ["English", "General Education"],
      status: "Active"
    },
    {
      id: 304,
      code: "PHYS211",
      name: "University Physics I",
      instructor: "Dr. Richard Feynman",
      students: 95,
      departments: ["Physics", "Engineering"],
      status: "Active"
    }
  ]
};

const events = [
  {
    id: 201,
    name: "Career Fair",
    date: "2025-06-15T10:00:00",
    location: "Student Center Ballroom",
    type: "career"
  },
  {
    id: 202,
    name: "Guest Lecture: AI Ethics",
    date: "2025-06-10T15:00:00",
    location: "Auditorium A",
    type: "academic"
  },
  {
    id: 203,
    name: "Student Club Showcase",
    date: "2025-06-12T12:00:00",
    location: "Campus Quad",
    type: "social"
  },
  {
    id: 204,
    name: "Finals Week Study Session",
    date: "2025-06-20T18:00:00",
    location: "Library Commons",
    type: "academic"
  }
];

// Faculty-specific announcements
const facultyAnnouncements = [
  {
    id: 3,
    title: "Grade Submission Deadline",
    content: "Please submit all final grades by June 30th. The registrar's office requires all grades to be finalized before the end of the month.",
    date: "2025-06-08",
    author: "Academic Affairs"
  },
  {
    id: 4,
    title: "Faculty Development Workshop",
    content: "Join us for a workshop on incorporating active learning techniques in your classroom on June 15th.",
    date: "2025-06-07",
    author: "Faculty Development Center"
  }
];

// Admin-specific announcements
const adminAnnouncements = [
  {
    id: 5,
    title: "Budget Planning Meeting",
    content: "All department heads are required to attend the annual budget planning meeting on June 20th in the Administration Building.",
    date: "2025-06-10",
    author: "Office of the President"
  },
  {
    id: 6,
    title: "New Staff Onboarding",
    content: "Please submit all new staff documentation to HR by the end of the week for processing before the next semester.",
    date: "2025-06-09",
    author: "Human Resources"
  }
];

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
      return;
    }
    
    setUser(JSON.parse(storedUser));
    
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Show welcome toast
      toast(`Welcome back, ${JSON.parse(storedUser).name}!`, {
        description: "Your dashboard is ready.",
        duration: 3000,
      });
    }, 800);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  // Handle path changes to update content
  useEffect(() => {
    if (user && !isLoading) {
      // We could load different data based on the path
      console.log(`Path changed to: ${location.pathname}`);
    }
  }, [location.pathname, user, isLoading]);

  const getAnnouncementsForRole = () => {
    switch(user?.role) {
      case 'faculty':
        return [...facultyAnnouncements, ...announcements];
      case 'admin':
        return [...adminAnnouncements, ...announcements];
      default:
        return announcements;
    }
  };

  const getCoursesForRole = () => {
    if (!user?.role) return [];
    return courses[user.role as keyof typeof courses] || courses.student;
  };
  
  const getWelcomeMessage = () => {
    const currentHour = new Date().getHours();
    let timeGreeting = "Welcome";
    
    if (currentHour < 12) {
      timeGreeting = "Good morning";
    } else if (currentHour < 18) {
      timeGreeting = "Good afternoon";
    } else {
      timeGreeting = "Good evening";
    }
    
    return `${timeGreeting}, ${user?.name || 'User'}`;
  };

  const renderRoleSpecificContent = () => {
    switch(user?.role) {
      case 'faculty':
        return (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-campus-dark mb-4">Teaching Schedule</h2>
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-campus-primary font-medium">Next Class:</p>
              <p className="text-lg font-semibold">CS350: Database Systems</p>
              <p>Today at 1:00 PM • Tech Building, Room 405</p>
              <div className="mt-2 flex gap-2">
                <Button variant="outline" size="sm">View Roster</Button>
                <Button size="sm">Take Attendance</Button>
              </div>
            </div>
          </div>
        );
      case 'admin':
        return (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-campus-dark mb-4">System Status</h2>
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-2">
                <span>Database</span>
                <span className="text-campus-success font-medium">Operational</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span>Authentication Services</span>
                <span className="text-campus-success font-medium">Operational</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span>File Storage</span>
                <span className="text-campus-warning font-medium">Degraded Performance</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Email Services</span>
                <span className="text-campus-success font-medium">Operational</span>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-campus-dark mb-4">Upcoming Assignments</h2>
            <div className="bg-white rounded-lg shadow p-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <div>
                    <p className="font-medium">Database Design Project</p>
                    <p className="text-sm text-gray-500">CS350 • Due in 2 days</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <div>
                    <p className="font-medium">Calculus Quiz</p>
                    <p className="text-sm text-gray-500">MATH201 • Due tomorrow</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Essay Draft</p>
                    <p className="text-sm text-gray-500">ENG105 • Due in 5 days</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-campus-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-campus-primary">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <Navbar 
        user={user} 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} userRole={user?.role} />
        
        <main className="flex-1 overflow-y-auto bg-campus-light p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-campus-primary mb-6">
              {getWelcomeMessage()}
            </h1>
            
            <DashboardStats userRole={user?.role} />
            
            {renderRoleSpecificContent()}
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold text-campus-dark mb-4">
                  {user?.role === 'faculty' ? 'Your Courses' : 
                   user?.role === 'admin' ? 'Active Courses' : 
                   'Your Courses'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {isLoading ? (
                    Array(4).fill(0).map((_, i) => (
                      <div key={i} className="bg-white rounded-lg shadow">
                        <Skeleton className="h-32 w-full" />
                      </div>
                    ))
                  ) : (
                    getCoursesForRole().slice(0, 4).map((course: any) => (
                      <CourseCard key={course.id} course={course} />
                    ))
                  )}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-campus-dark mb-4">Upcoming Events</h2>
                {isLoading ? (
                  <Skeleton className="h-64 w-full" />
                ) : (
                  <EventsList events={events} />
                )}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-campus-dark mb-4">Latest Announcements</h2>
              <div className="space-y-4">
                {isLoading ? (
                  Array(2).fill(0).map((_, i) => (
                    <Skeleton key={i} className="h-24 w-full" />
                  ))
                ) : (
                  getAnnouncementsForRole().map((announcement) => (
                    <AnnouncementCard key={announcement.id} announcement={announcement} />
                  ))
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
