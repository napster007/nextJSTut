function getRandomInt(count: number) {
  return Math.floor(Math.random() * count); //The maximum is inclusive and the minimum is inclusive
}
export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Random error occurred! in Product Layout");
  }
  return (
    <div style={{border: "2px solid #000", padding: "20px"}}>
      {children}
      <h2>Featured Products</h2>
    </div>
  );
}
