import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MusicExperience = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) hours = 23;
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeCircle = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold text-gray-900">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-white text-xs mt-1">{label}</span>
    </div>
  );

  return (
    <section className="container-custom py-12">
      <div className="bg-black rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 p-8 md:p-16 text-white">
            <span className="text-green-400 font-medium mb-4 block">Categories</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Enhance Your<br />Music Experience
            </h2>
            
            <div className="flex gap-4 mb-8">
              <TimeCircle value={timeLeft.hours} label="Hours" />
              <TimeCircle value={timeLeft.minutes} label="Minutes" />
              <TimeCircle value={timeLeft.seconds} label="Seconds" />
            </div>

            <Link
              to="/"
              className="inline-block px-8 py-3 bg-green-500 text-white rounded font-medium hover:bg-green-600 transition-colors"
            >
              Buy Now!
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center p-8">
            <img
              src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=500&fit=crop"
              alt="Speaker"
              className="max-h-[300px] md:max-h-[400px] object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicExperience;

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const MusicExperience = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 23,
//     minutes: 59,
//     seconds: 59,
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { hours, minutes, seconds } = prev;
//         seconds--;
//         if (seconds < 0) {
//           seconds = 59;
//           minutes--;
//         }
//         if (minutes < 0) {
//           minutes = 59;
//           hours--;
//         }
//         if (hours < 0) hours = 23;
//         return { hours, minutes, seconds };
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const TimeCircle = ({ value, label }: { value: number; label: string }) => (
//     <div className="flex flex-col items-center">
//       <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold text-gray-900">
//         {String(value).padStart(2, '0')}
//       </div>
//       <span className="text-white text-xs mt-1">{label}</span>
//     </div>
//   );

//   return (
//     <section className="container-custom py-12">
//       <div className="bg-black rounded-lg overflow-hidden">
//         <div className="flex flex-col md:flex-row items-center">
//           {/* Left Content */}
//           <div className="flex-1 p-8 md:p-16 text-white">
//             <span className="text-green-400 font-medium mb-4 block">Categories</span>
//             <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
//               Enhance Your<br />Music Experience
//             </h2>
            
//             {/* Timer */}
//             <div className="flex gap-4 mb-8">
//               <TimeCircle value={timeLeft.hours} label="Hours" />
//               <TimeCircle value={timeLeft.minutes} label="Days" />
//               <TimeCircle value={timeLeft.minutes} label="Minutes" />
//               <TimeCircle value={timeLeft.seconds} label="Seconds" />
//             </div>

//             <Link
//               to="/"
//               className="inline-block px-8 py-3 bg-green-500 text-white rounded font-medium hover:bg-green-600 transition-colors"
//             >
//               Buy Now!
//             </Link>
//           </div>

//           {/* Right Image */}
//           <div className="flex-1 flex items-center justify-center p-8">
//             <img
//               src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-202210?wid=1080&hei=880&fmt=jpeg&qlt=90&.v=1670427235267"
//               alt="Speaker"
//               className="max-h-[300px] md:max-h-[400px] object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MusicExperience;