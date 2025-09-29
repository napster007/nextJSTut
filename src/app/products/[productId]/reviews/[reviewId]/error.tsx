"use client";

import {useRouter} from "next/navigation";
import {startTransition} from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-red-600">Error Loading Review</h2>
      <p>There was an error loading the review. Please try again later.</p>
      <p>Cause: {error.message}</p>
      <button onClick={reload}>Try Again</button>
    </div>
  );
}
