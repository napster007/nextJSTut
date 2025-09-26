export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{border: "2px solid #000", padding: "20px"}}>
      {children}
      <h2>Featured Products</h2>
    </div>
  );
}
