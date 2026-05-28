import Navbar from "./_components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Contact Manager",
  description: "A simple contact management application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="min-h-screen bg-slate-100">
          <Navbar />
          <main className="container mx-auto px-6 py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
