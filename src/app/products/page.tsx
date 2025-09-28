import Link from "next/link";

export default function ProductList() {
  const productId = 100;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Product List Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products/1">Product 1</Link>
          </li>
          <li>
            <Link href="/products/2">Product 2</Link>
          </li>
          <li>
            <Link href="/products/3">Product 3</Link>
          </li>
          <li>
            <Link href={`/products/${productId}`}>Product {productId}</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
