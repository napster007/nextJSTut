import {notFound, redirect} from "next/navigation";

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{reviewId: string; productId: string}>;
}) {
  const productId = (await params).productId;
  const reviewId = (await params).reviewId;
  if (parseInt(reviewId) > 1000) {
    //notFound();
    redirect("/products");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">
        Welcome to the Review Details Review ID: {reviewId} for ProductID:
        {productId}
      </h1>
    </main>
  );
}
