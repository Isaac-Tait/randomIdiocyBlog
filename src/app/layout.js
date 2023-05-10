import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: "./myFont.ttf",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}
