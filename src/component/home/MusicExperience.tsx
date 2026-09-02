import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface TimeCircleProps {
  value: number;
  label: string;
}

// ✅ Component ko bahar define karein taake TypeScript props ko clean infer kare
const TimeCircle = ({ value, label }: TimeCircleProps) => (
  <div className="flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full text-gray-900 shrink-0">
    <span className="text-base md:text-lg font-bold leading-tight">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-[10px] md:text-xs font-medium -mt-1 text-gray-700">
      {label}
    </span>
  </div>
);

const MusicExperience = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container-custom py-12">
      <div className="bg-black rounded-sm overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8">
          {/* Left Content */}
          <div className="flex-1 text-white z-10 text-center md:text-left">
            <span className="text-[#00FF66] font-semibold text-sm md:text-base mb-6 block">
              Categories
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 leading-tight tracking-wide">
              Enhance Your<br />Music Experience
            </h2>

            {/* Countdown Circles: Days, Hours, Minutes, Seconds */}
            <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 mb-10">
              <TimeCircle value={timeLeft.days} label="Days" />
              <TimeCircle value={timeLeft.hours} label="Hours" />
              <TimeCircle value={timeLeft.minutes} label="Minutes" />
              <TimeCircle value={timeLeft.seconds} label="Seconds" />
            </div>

            <Link
              to="/"
              className="inline-block px-10 py-4 bg-[#00FF66] text-white rounded font-medium hover:bg-[#00dd55] transition-colors text-sm md:text-base"
            >
              Buy Now!
            </Link>
          </div>

          {/* Right Image with radial glow */}
          <div className="flex-1 flex items-center justify-center relative w-full">
            {/* Background Glow Effect */}
            <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=500&fit=crop"
              alt="JBL Boombox Speaker"
              className="relative max-h-[280px] md:max-h-[350px] object-contain drop-shadow-2xl z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicExperience;
