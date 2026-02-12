import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTs Sunan Drajat - Teladan Jayamahe",
  description: "MTs Sunan Drajat, lembaga pendidikan Islam yang berkomitmen mencetak generasi berkualitas, berakhlak mulia, dan berprestasi. Geger, Kedungadem, Bojonegoro.",
  keywords: "MTs Sunan Drajat, MTs Bojonegoro, Sekolah Islam, Madrasah Tsanawiyah, Geger Kedungadem",
  authors: [{ name: "Tim IT Madrasah" }],
  icons: {
    icon: "/favicon.png", // Ensure this uses the correct icon path if changed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
