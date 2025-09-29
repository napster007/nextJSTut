"use client";
import {useRouter} from "next/navigation";
export default function OrderProductPage() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order placed!");
    alert("Order placed!");
    router.push("/");
  };
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold">Order Product Page</h1>
        <p>This is the order product page.</p>
      </div>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
