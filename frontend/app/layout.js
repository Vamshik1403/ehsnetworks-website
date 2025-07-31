import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Electronics Website",
  description: "Electronic Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jost.className + " min-h-screen flex flex-col bg-white"}>
        {children}
      </body>
    </html>
  );
}