import "./globals.scss";
import Footer from "@components/Footer";
import Nav from "@components/NavBar/Nav";
import { inter } from "../app/fonts";

export const metadata = {
  title: "Quirkable.io",
  description: "Where innovation meets functionality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
