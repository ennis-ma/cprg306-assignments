import React from "react";
import Link from "next/link";
import "./StudentInfo.css";

const StudentInfo = () => {
  return (
    <div className="student-info">
      <p className="student-name">Name: Ennis</p>
      <p className="course-section">Course Section: CPRG 306 A</p>
      <p className="student-link">
        <Link target="_blank" href="https://github.com/ennis-ma">
          Github
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
