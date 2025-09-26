export default async function ProductDetails({
  params,
}: {
  params: Promise<{productId: string}>;
}) {
  const productId = (await params).productId;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">
        Welcome to the Product Details Page ID: {productId}
      </h1>
    </main>
  );
}
