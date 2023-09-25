import React from "react";
import Link from "next/link";
import StudentInfo from "./StudentInfo";

const Home = () => {
  return (
    <>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <p>
        <Link href="/week2">week2</Link>
      </p>
    </>
  );
};

export default Home;
