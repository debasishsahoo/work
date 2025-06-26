interface LogoProps {
  className?: string;
  showText?: boolean;
  textSize?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({
  className = "",
  showText = false,
  textSize = "lg",
}: LogoProps) => {
  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* KIPM Logo */}
      <div className="h-12 w-auto flex-shrink-0">
        <img
          src="/kipm-logo-simple.svg"
          alt="KIPM Innovators Foundation Logo"
          className="h-full w-full object-contain"
        />
      </div>
      {showText && (
        <div
          className={`text-kipm-white ${textSizeClasses[textSize]} font-bold font-mokoto tracking-wide`}
        >
          KIPM INNOVATORS FOUNDATION
        </div>
      )}
    </div>
  );
};

export default Logo;
