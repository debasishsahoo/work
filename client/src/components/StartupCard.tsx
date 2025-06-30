import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";

interface StartupCardProps {
  name: string;
  description: string;
  category: string;
  stage: string;
  founded: string;
  teamSize: number;
  website?: string;
  image?: string;
  isStudent?: boolean;
}

const StartupCard = ({
  name,
  description,
  category,
  stage,
  founded,
  teamSize,
  website,
  image,
  isStudent = false,
}: StartupCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group">
      {/* Header */}
      <div className="h-48 bg-gradient-to-br from-kipm-navy to-blue-800 relative overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-6xl font-bold text-white opacity-20">
              {name.charAt(0)}
            </div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isStudent
                ? "bg-kipm-yellow text-kipm-navy"
                : "bg-kipm-orange text-white"
            }`}
          >
            {isStudent ? "Student Venture" : "External Startup"}
          </span>
        </div>
        {website && (
          <div className="absolute top-4 right-4">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white hover:bg-opacity-30 transition-all"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold font-mokoto text-gray-900 mb-2 group-hover:text-kipm-navy transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-kipm-gray text-gray-700">
              {category}
            </span>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                stage === "Ideation"
                  ? "bg-yellow-100 text-yellow-800"
                  : stage === "MVP"
                    ? "bg-blue-100 text-blue-800"
                    : stage === "Growth"
                      ? "bg-green-100 text-green-800"
                      : "bg-purple-100 text-purple-800"
              }`}
            >
              <TrendingUp className="h-3 w-3 mr-1" />
              {stage}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              Founded {founded}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {teamSize} members
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupCard;
