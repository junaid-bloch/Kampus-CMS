
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

interface AnnouncementCardProps {
  announcement: Announcement;
}

const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <Card className="dashboard-card overflow-hidden border border-gray-100">
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold text-campus-primary mb-2">
          {announcement.title}
        </h3>
        <p className="text-gray-600">{announcement.content}</p>
      </CardContent>
      <CardFooter className="px-5 py-3 bg-gray-50 flex justify-between items-center">
        <span className="text-sm text-gray-500">{formatDate(announcement.date)}</span>
        <span className="text-sm font-medium text-campus-primary">{announcement.author}</span>
      </CardFooter>
    </Card>
  );
};

export default AnnouncementCard;
