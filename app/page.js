import Link from "next/link";
import StudentInfo from "./StudentInfo";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <StudentInfo />
      <p className="mt-8 space-x-4">
        <Link
          className="text-blue-500 hover:text-blue-400 hover:underline"
          target="_blank"
          href="/week2"
        >
          week2
        </Link>
        <Link
          className="text-blue-500 hover:text-blue-400 hover:underline"
          target="_blank"
          href="/week3"
        >
          week3
        </Link>
        <Link
          className="text-blue-500 hover:text-blue-400 hover:underline"
          target="_blank"
          href="/week4"
        >
          week4
        </Link>
        <Link
          className="text-blue-500 hover:text-blue-400 hover:underline"
          target="_blank"
          href="/week5"
        >
          week5
        </Link>
        <Link
          className="text-blue-500 hover:text-blue-400 hover:underline"
          target="_blank"
          href="/week6"
        >
          week6
        </Link>
        <Link
          className="text-blue-500 hover:text-blue-400 hover:underline"
          target="_blank"
          href="/week7"
        >
          week7
        </Link>
        <Link
          className="text-blue-500 hover:text-blue-400 hover:underline"
          target="_blank"
          href="/week8"
        >
          week8
        </Link>
      </p>
    </div>
  );
};

export default Home;
