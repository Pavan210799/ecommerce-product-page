import { FiChevronRight } from "react-icons/fi";

function Breadcrumb() {
  const items = ["Home", "Audio", "Headphones", "Sony WH-1000XM6"];

  return (
    <nav className="flex items-center flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
      {items.map((item, index) => (
        <div key={item} className="flex items-center gap-2">
          <span
            className={`${
              index === items.length - 1
                ? "text-slate-900 dark:text-white font-semibold"
                : "hover:text-red-600 cursor-pointer transition-colors"
            }`}
          >
            {item}
          </span>

          {index !== items.length - 1 && (
            <FiChevronRight className="text-xs" />
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumb;