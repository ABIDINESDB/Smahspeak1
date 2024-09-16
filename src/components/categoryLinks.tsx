import React from "react";

import {
  IconBriefcase,
  IconBulb,
  IconSchool,
  IconWriting,
  IconMoodSmile,
  IconHeart,
} from "@tabler/icons-react";

const categories = [
  {
    icon: IconBriefcase,
    label: "Business",
  },
  {
    icon: IconSchool,
    label: "Education",
  },
  {
    icon: IconBulb,
    label: "Creative",
  },
  {
    icon: IconHeart,
    label: "health",
  },
  {
    icon: IconWriting,
    label: "journaling",
  },
  {
    icon: IconMoodSmile,
    label: "Communication",
  },
];

const CategoryLinks: React.FC = () => {
  return (
    <div className="mt-10 sm:mt-20 ">
      {categories.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="
          m-1 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg boreder border-r-gray-200 shadow-sm hover:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none bg-neutral-800 text-white
          "
        >
          <Icon size={40} />
          <p className="text-neutral-400">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryLinks;
