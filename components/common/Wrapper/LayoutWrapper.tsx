"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header/page";
import Footer from "@/components/layout/Footer/page";
import Sidebar from "@/components/layout/Sidebar";
import { fetchAppRoutes } from "@/actions/public/getRoutes";
import { isExactOrDynamicMatch } from "@/utils/RouteConfig/matchPathWithRoute";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [validRoutes, setValidRoutes] = useState<Set<string>>(new Set());
  const userInfo = useSelector((state: RootState) => state.user);

  useEffect(() => {
    async function loadRoutes() {
      try {
        const routes = await fetchAppRoutes();
        setValidRoutes(routes);
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    }

    loadRoutes();
  }, []);

  const normalizedPathname = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  const showLayout = Array.from(validRoutes).some((route) =>
    isExactOrDynamicMatch(normalizedPathname, route)
  );

  return (
    <>
      {showLayout && <Header />}
      <div className="flex min-h-screen">
        {/* {userInfo?.id && <Sidebar />} */}
        <Sidebar/>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </>
  );
}
