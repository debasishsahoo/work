import LogoImg from "/kipm-logo.svg";

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
    <div className={`flex items-start justify-center flex-col gap-2 ${className}`}>
      {/* KIPM Logo */}
        <img
          src={LogoImg}
          alt="KIPM Innovators Foundation Logo"
          className="h-[12vh] w-auto object-contain"
        />

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
