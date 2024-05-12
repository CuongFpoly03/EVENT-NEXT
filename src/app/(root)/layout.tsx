import Footer from "@/components/Navbar/Footer";
import Header from "@/components/Navbar/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events App",
  description: "new events app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-h-screen fex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
  