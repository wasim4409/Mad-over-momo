import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mad Over Momos & Cafe | Mira Road",
  description: "Best Momos, Pizza Momos, Burgers & Drinks in Rassaz Mall. Women-owned cafe.",
  openGraph: {
    images: [{ url: "https://picsum.photos/id/1080/1200/630" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
