import { MapPin, Clock, Users, Calendar, ArrowRight } from "lucide-react";

interface FacilityCardProps {
  name: string;
  description: string;
  capacity: number;
  operatingHours: string;
  location: string;
  amenities: string[];
  bookingRequired: boolean;
  image?: string;
  pricePerHour?: number;
}

const FacilityCard = ({
  name,
  description,
  capacity,
  operatingHours,
  location,
  amenities,
  bookingRequired,
  image,
  pricePerHour,
}: FacilityCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      {/* Header Image */}
      <div className="h-56 bg-gradient-to-b from-kipm-navy to-blue-800 relative overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white">
              <div className="text-6xl mb-2">🏢</div>
              <div className="text-lg font-medium">{name}</div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold font-mokoto text-white mb-2">
            {name}
          </h3>
          <div className="flex items-center text-white text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
        </div>
        {bookingRequired && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-kipm-orange text-white rounded-full text-xs font-semibold">
              Booking Required
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Facility Info */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-kipm-orange" />
            <span>Capacity: {capacity}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-kipm-orange" />
            <span>{operatingHours}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Amenities
          </h4>
          <div className="flex flex-wrap gap-2">
            {amenities.slice(0, 4).map((amenity, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-kipm-gray text-gray-700 rounded-md text-xs"
              >
                {amenity}
              </span>
            ))}
            {amenities.length > 4 && (
              <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md text-xs">
                +{amenities.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            {pricePerHour ? (
              <div>
                <div className="text-lg font-bold text-kipm-navy">
                  ₹{pricePerHour}/hour
                </div>
                <div className="text-xs text-gray-500">Base pricing</div>
              </div>
            ) : (
              <div>
                <div className="text-lg font-bold text-green-600">
                  Free Access
                </div>
                <div className="text-xs text-gray-500">For members</div>
              </div>
            )}
          </div>
          <div className="flex space-x-2">
            <button className="border border-kipm-navy text-kipm-navy hover:bg-kipm-navy hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200">
              View Details
            </button>
            {bookingRequired && (
              <button className="bg-kipm-crimson hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center group">
                Book Now
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
