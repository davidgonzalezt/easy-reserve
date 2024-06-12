import ContextState from "@/contex";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Resrve",
  description: "App to find restaurants with available seating based on your preferences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ContextState>{children}</ContextState>
      </body>
    </html>
  );
}
