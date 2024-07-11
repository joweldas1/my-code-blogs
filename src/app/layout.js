import {Poppins} from "next/font/google"
import "./globals.css";
import Navbar from "./SharedComponnent/Navbar/Navbar";
import Footer from "./SharedComponnent/Footer/Footer";
import AuthProvider from "@/service/AuthProvider/AuthProvider";
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "My Blog Page",
  description: "Everything in Code Those I Know",
};
const poppins = Poppins({weight:["100","200","300","400","500","600","700","800","900"] , subsets:['latin']} )

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-main`}>
       <AuthProvider>
        <Navbar/>
       {children}
       </AuthProvider>
       <Toaster position="top-right" reverseOrder={false} />
        <Footer/>
        </body>
    </html>
  );
}
