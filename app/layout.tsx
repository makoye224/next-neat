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
    <html lang="en" data-theme="light">
      <body className="relative bg-neat-color">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
