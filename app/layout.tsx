import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Neatify Tanzania",
  description: "love your space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className="relative">
        <NavBar />
        <br />
        {children}
        <Footer />
      </body>
    </html>
  );
}
