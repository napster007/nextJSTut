export default async function Docs({
  params,
}: {
  params: Promise<{slug: string[]}>;
}) {
  const {slug} = await params;
  if (slug?.length === 2) {
    return (
      <h1 className="text-4xl font-bold">
        Viewing for the feature {slug[0]} and concept of {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return (
      <h1 className="text-4xl font-bold">Viewing for the Feature {slug[0]}</h1>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Docs Page</h1>
    </main>
  );
}
