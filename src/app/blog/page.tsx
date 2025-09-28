import { Metadata} from "next";

export const metadata: Metadata = {
  title: { absolute: 'Blog' },
  description: "A blog about my experiences",

};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Blog Page</h1>
    </main>
  );
}
