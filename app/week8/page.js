"use client";

import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Failed to log in with GitHub:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {user ? (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
          <Link
            className="text-blue-600 hover:underline"
            href="/week8/shopping-list"
          >
            Go to Shopping List
          </Link>
        </>
      ) : (
        <>
          <p>Please log in to access the shopping list.</p>
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login with GitHub
          </button>
        </>
      )}
    </div>
  );
};

export default Page;
