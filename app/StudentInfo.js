import React from "react";
import Link from "next/link";

const StudentInfo = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Student Info</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name:</label>
        <span className="text-lg">Ennis</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Course Section:
        </label>
        <span className="text-lg">CPRG 306 A</span>
      </div>
      <Link
        className="text-blue-500 hover:text-blue-400 hover:underline"
        target="_blank"
        href="https://github.com/ennis-ma"
      >
        Github
      </Link>
    </div>
  );
};

export default StudentInfo;
