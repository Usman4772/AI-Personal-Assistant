import localFont from "next/font/local";
import "./globals.css";
import SmokyCursor from "@/components/SmookyCursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Usman Ali | Full-Stack Developer",
  description:
    "Explore the portfolio of Usman Ali, a skilled Full-Stack Developer specializing in Next.js, React, Node.js, and MongoDB. Showcasing innovative web applications, scalable solutions, and modern UI/UX design.",
  icons: {
    icon: "/avatar.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <SmokyCursor/>
        {children}
      </body>
    </html>
  );
}
