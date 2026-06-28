import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 md:px-40 px-8 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>

      {/* Sub-heading */}
      <p className="text-sm md:text-base text-gray-500 mt-3 leading-relaxed">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>

      {/* Courses Grid */}
      <div className="grid grid-cols-[var(--grid-cols-auto)] sm:grid-cols-2 md:grid-cols-4 gap-6 mt-14">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      {/* CENTERED BUTTON */}
      <div className="flex justify-center mt-10">
        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="text-gray-600 border border-gray-500/40 px-10 py-3 rounded-md"
        >
          Show all courses
        </Link>
      </div>
    </div>
  );
};

export default CoursesSection;
