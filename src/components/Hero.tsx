import { ArrowRight, Lightbulb, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <>
      <section ref={ref} className="bg-gradient-to-br from-kipm-navy via-kipm-navy to-blue-900 text-kipm-white py-10 md:py-15 lg:py-20 min-h-[92svh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight font-mokoto tracking-tight">
                  Innovate.
                  <br />
                  <span className="text-kipm-yellow"> Incubate.</span>
                  <br />
                  <span className="text-kipm-orange">Accelerate.</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 max-w-lg font-mokoto font-medium">
                  Transform your groundbreaking ideas into successful startups
                  at KIPM Innovators Foundation - Your gateway to
                  entrepreneurial excellence.
                </p>
              </div>
              {/* CTC buttons */}
              <div className="flex flex-col md:flex-row gap-6">
                <Link
                  to="/startups"
                  className="bg-kipm-crimson hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group"
                >
                  Explore Startups
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/courses"
                  className="border-2 border-kipm-orange text-kipm-orange hover:bg-kipm-orange hover:text-kipm-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center"
                >
                  Join Programs
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-kipm-orange">
                   {inView ? <CountUp end={50} duration={2.5} separator="," /> : 0}+
                  </div>
                  <div className="text-sm lg:text-base text-gray-300">
                    Startups Incubated
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-kipm-yellow">
                    {inView ? <CountUp end={1000} duration={2.5} separator="," /> : 0}+
                  </div>
                  <div className="text-sm lg:text-base text-gray-300">
                    Students Trained
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-kipm-crimson">
                    {inView ? <CountUp end={25} duration={2.5} separator="," /> : 0}+
                  </div>
                  <div className="text-sm lg:text-base text-gray-300">
                    Success Stories
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div className="space-y-6">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:transform hover:scale-105 transition-all duration-300 flex flex-col items-center">
                    <Lightbulb className="h-12 w-12 text-kipm-yellow mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Innovation Lab
                    </h3>
                    <p className="text-gray-300 text-sm">
                      State-of-the-art facilities for rapid prototyping and
                      development
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:transform hover:scale-105 transition-all duration-300 flex flex-col items-center">
                    <Users className="h-12 w-12 text-kipm-orange mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Expert Mentorship
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Learn from industry leaders and successful entrepreneurs
                    </p>
                  </div>
                </div>
                <div className="space-y-6 md:mt-12">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:transform hover:scale-105 transition-all duration-300 flex flex-col items-center">
                    <Rocket className="h-12 w-12 text-kipm-crimson mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Startup Acceleration
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Fast-track your startup journey with our proven
                      methodologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom Wave */}
      <div className="w-full overflow-hidden leading-none -mt-20 z-10">
        <svg
          className="w-full h-[100px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f4f4f4"
            d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,160C672,171,768,213,864,213.3C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </>
  );
};

export default Hero;
