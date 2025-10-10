"use server";
import ImageSlider from "@/components/ImageSlider";
import { serverSideFunction } from "../utils/server-utils";

export default async function ServerRoutePage() {
    const result = serverSideFunction();
    return (
        <>
            <h1>Server Route { result } </h1>
            < ImageSlider />
        </>
  );
}