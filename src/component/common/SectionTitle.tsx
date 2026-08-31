interface SectionTitleProps {
  title: string;
  subtitle?: string;
  showViewAll?: boolean;
  onViewAll?: () => void;
}

const SectionTitle = ({ title, subtitle, showViewAll = false, onViewAll }: SectionTitleProps) => {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        {subtitle && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
            <span className="text-red-500 font-semibold text-sm">{subtitle}</span>
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      {showViewAll && (
        <button
          onClick={onViewAll}
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          View All
        </button>
      )}
    </div>
  );
};

export default SectionTitle;

// import { Link } from 'react-router-dom';

// interface SectionTitleProps {
//   title: string;
//   subtitle?: string;
//   showViewAll?: boolean;
//   onViewAll?: () => void;
// }

// const SectionTitle = ({ title, subtitle, showViewAll = false, onViewAll }: SectionTitleProps) => {
//   return (
//     <div className="flex items-end justify-between mb-8">
//       <div>
//         {subtitle && (
//           <div className="flex items-center gap-2 mb-2">
//             <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
//             <span className="text-red-500 font-semibold text-sm">{subtitle}</span>
//           </div>
//         )}
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
//       </div>
//       {showViewAll && (
//         <button
//           onClick={onViewAll}
//           className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
//         >
//           View All
//         </button>
//       )}
//     </div>
//   );
// };

// export default SectionTitle;