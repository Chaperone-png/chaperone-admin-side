import AdminLogin from "@/components/AdminLogin";
import { Viewport } from "next";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function Home() {

  return (
    <>
     <h1>Home Page</h1>
    </>
  );
}
