
import { Card } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  type: string;
}

interface EventsListProps {
  events: Event[];
}

const EventsList = ({ events }: EventsListProps) => {
  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    
    const time = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    
    const day = date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
    
    return { time, day };
  };
  
  const getEventTypeStyles = (type: string) => {
    switch (type) {
      case 'academic':
        return 'bg-blue-100 text-blue-700';
      case 'social':
        return 'bg-green-100 text-green-700';
      case 'career':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="dashboard-card">
      <div className="divide-y divide-gray-100">
        {events.map((event) => {
          const { time, day } = formatEventDate(event.date);
          
          return (
            <div key={event.id} className="p-4 flex items-start gap-3">
              <div className="flex-shrink-0 flex flex-col items-center justify-center">
                <Calendar className="h-5 w-5 text-gray-400 mb-1" />
                <span className="text-xs font-medium text-gray-500">{day}</span>
              </div>
              
              <div className="flex-1">
                <h4 className="text-sm font-semibold mb-1">{event.name}</h4>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{time}</span>
                  <span>•</span>
                  <span>{event.location}</span>
                </div>
                <div className="mt-1">
                  <span className={`text-xs px-2 py-1 rounded-full ${getEventTypeStyles(event.type)}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="p-3 border-t border-gray-100 text-center">
        <a href="/calendar" className="text-sm text-campus-secondary hover:underline">
          View All Events
        </a>
      </div>
    </Card>
  );
};

export default EventsList;
