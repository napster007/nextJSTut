import {notFound} from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count); //The maximum is inclusive and the minimum is inclusive
}
export default async function ReviewDetails({
  params,
}: {
  params: Promise<{reviewId: string; productId: string}>;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Random error occurred!");
  }
  const productId = (await params).productId;
  const reviewId = (await params).reviewId;
  if (parseInt(reviewId) > 1000) {
    notFound();
    //redirect("/products");
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
