import Navigation from "@/components/layout/navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/footer";
import MouseTrail from "@/components/global/MouseTrail";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Be Aware! - Cybersecurity",
  description: "Description for Be Aware",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MouseTrail>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </MouseTrail>
      </body>
    </html>
  );
}
