import "./globals.css";
import Navbar from "@/components/navbar";


export const metadata = {
  title: "Oliver's Portfolio",
  description: "Portfolio website conaining my programming projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">    
      <body className="bg-slate-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
