import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "@/styles/font";

export const metadata: Metadata = {
  title: "PR Deliver",
  description: "PR 왔어요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable}`}>{children}</body>
    </html>
  );
}
