import "./globals.css";
import "./css-variable.scss";
import "./RallomyRegular.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "@/store/provider";
import LayoutWrapper from "@/components/common/Wrapper/LayoutWrapper";
import { GlobalUIComponents } from "@/components/common/UI/GlobalUIComponents";

const interSans = Inter({ variable: "--font-Inter-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>
          <Providers>
            <GlobalUIComponents />
            <LayoutWrapper>{children}</LayoutWrapper>
          </Providers>
      </body>
    </html>
  );
}
