"use client";
import {usePathname} from "next/navigation";
export default function NotFound() {
  const pathName = usePathname();
  const productId = pathName?.split("/")[2];
  const reviewId = pathName?.split("/")[4];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p>
          Could not find Review {reviewId} for Product {productId}.
        </p>
      </div>
    </main>
  );
}
