"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl font-bold text-red-600">Something went wrong!</h2>
      <p className="text-gray-700">
        {error.message || "Unexpected error occurred."}
      </p>
      <button
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg"
        onClick={() => reset()} // Resets the error boundary
      >
        Try Again
      </button>
    </div>
  );
}
