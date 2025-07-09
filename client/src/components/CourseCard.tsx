import { Clock, Users, Calendar, Star, ArrowRight } from "lucide-react";

interface Course {
  title: string;
  description: string;
  category: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  instructor: string;
  rating: number;
  studentsEnrolled: number;
  startDate: string;
  image?: string;
  features: string[];
}
interface CourseCardProps extends Course {
  onEnroll: (course: Course) => void;
}

const CourseCard = ({
  title,
  description,
  category,
  duration,
  level,
  price,
  instructor,
  rating,
  studentsEnrolled,
  startDate,
  image,
  features,
  onEnroll
}: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      {/* Header Image */}
      <div className="h-48 bg-gradient-to-br from-kipm-navy to-blue-800 relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-sm font-medium">{category}</div>
            </div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-kipm-orange text-white rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(level)}`}
          >
            {level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold font-mokoto text-gray-900 mb-2 group-hover:text-kipm-navy transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {description}
          </p>
          <p className="text-sm text-gray-500">
            by <span className="font-medium text-kipm-navy">{instructor}</span>
          </p>
        </div>

        {/* Course Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {duration}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {studentsEnrolled}
            </div>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 flex items-center"
              >
                <div className="h-1.5 w-1.5 bg-kipm-orange rounded-full mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-auto flex flex-wrap gap-4 items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="text-2xl font-bold text-kipm-navy">
              {price === 0 ? "Free" : `₹${price.toLocaleString()}`}
            </div>
            <div className="text-xs text-gray-500 flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              Starts {startDate}
            </div>
          </div>
          <button
            onClick={() =>
              onEnroll({
                title,
                description,
                category,
                duration,
                level,
                price,
                instructor,
                rating,
                studentsEnrolled,
                startDate,
                image,
                features,
              })
            }
            className="bg-kipm-crimson hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center group"
          >
            Enroll Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
