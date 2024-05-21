import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Events App",
  description: "new events app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <SessionProvider session={session}>
          <Toaster />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
