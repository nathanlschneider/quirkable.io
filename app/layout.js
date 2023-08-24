import "./globals.scss";
import Footer from "@components/Footer";
import Nav from "@components/NavBar/Nav";
import { inter } from "../app/fonts";

export const metadata = {
  title: "Quirkable.io",
  description: "Micro Web Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="main">
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
