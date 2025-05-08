
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Users, Clock, MapPin } from 'lucide-react';

interface BaseCourse {
  id: number;
  code: string;
  name: string;
  location?: string;
  progress?: number;
}

interface StudentCourse extends BaseCourse {
  instructor: string;
  schedule: string;
}

interface FacultyCourse extends BaseCourse {
  students: number;
  schedule: string;
}

interface AdminCourse extends BaseCourse {
  instructor: string;
  students: number;
  departments: string[];
  status: string;
}

type CourseProps = {
  course: StudentCourse | FacultyCourse | AdminCourse;
};

const CourseCard = ({ course }: CourseProps) => {
  // Determine the type of course based on properties
  const isStudentCourse = 'instructor' in course && !('departments' in course);
  const isFacultyCourse = 'students' in course && !('departments' in course);
  const isAdminCourse = 'departments' in course;

  return (
    <Card className="overflow-hidden">
      <div className="h-2 bg-campus-primary"></div>
      <CardContent className="p-4">
        <div className="flex flex-col h-full">
          <div className="mb-3">
            <span className="text-xs font-medium text-campus-secondary">{course.code}</span>
            <h3 className="font-semibold text-campus-dark truncate">{course.name}</h3>
          </div>
          
          <div className="flex-grow space-y-2">
            {isStudentCourse && (
              <>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{(course as StudentCourse).instructor}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{(course as StudentCourse).schedule}</span>
                </div>
                {course.location && (
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{course.location}</span>
                  </div>
                )}
              </>
            )}
            
            {isFacultyCourse && (
              <>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{(course as FacultyCourse).students} Students</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{(course as FacultyCourse).schedule}</span>
                </div>
                {course.location && (
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{course.location}</span>
                  </div>
                )}
              </>
            )}
            
            {isAdminCourse && (
              <>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{(course as AdminCourse).students} Students</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Instructor: </span>
                  <span>{(course as AdminCourse).instructor}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Status: </span>
                  <span className={`${(course as AdminCourse).status === 'Active' ? 'text-campus-success' : 'text-campus-warning'} font-medium`}>
                    {(course as AdminCourse).status}
                  </span>
                </div>
              </>
            )}
          </div>
          
          {course.progress !== undefined && !isAdminCourse && (
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-1.5" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
