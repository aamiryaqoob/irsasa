import NavBar from "@/Components/navbar/NavBar";
import "./globals.css";
import "node_modules/video-react/dist/video-react.css";
import { Inter } from "next/font/google";
import Footer from "@/Components/footer/Footer";
import { Providers } from "@/redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Iris Supply Chain",
  description: "For the Warehouse Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
