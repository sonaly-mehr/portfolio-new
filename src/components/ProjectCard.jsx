import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 100; // Limit for the description preview

  // Toggle Read More
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div
        className="h-[20rem] md:h-[26rem] relative group bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition duration-500">
          <Link
            target="_blank"
            href={previewUrl}
            className="h-14 w-14 flex items-center justify-center border-2 border-[#ADB7BE] rounded-full hover:border-white transition-colors"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
      <div className="p-4 text-white bg-[#282828]">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">
          {isExpanded ? description : `${description.slice(0, MAX_LENGTH)}...`}
          {description.length > MAX_LENGTH && (
            <button
              onClick={toggleReadMore}
              className="text-primary-500 hover:underline ml-1 text-[15px]"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
