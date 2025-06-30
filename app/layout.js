// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finance Tracker",
  description: "AI Finance Tracker",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* Client-side Clerk UI goes inside Header */}
          <Header />

          <main className="min-h-screen">{children}</main>

          {/* footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>my major project</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
