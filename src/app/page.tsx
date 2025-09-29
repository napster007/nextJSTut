import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
           <li>
            <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
          </li>
          <li>
            <Link href="/articles/breaking-news-123?lang=es">Read in Spanish</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
