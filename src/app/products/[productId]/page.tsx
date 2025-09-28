import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{productId: string}>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;
  return {
    title: `Product ${productId}`,
    description: `Details about product ${productId}.`,
  };
}

export default async function ProductDetails({
  params,
}: Props) {
  const productId = (await params).productId;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h5><Link href="/products">Back to Products</Link></h5>
      <h1 className="text-4xl font-bold">
        Welcome to the Product Details Page ID: {productId}
      </h1>
    </main>
  );
}
