import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Usman Ali | Full-Stack Developer",
  description:
    "Full-stack developer specializing in Next.js, React, Node.js, and production systems. Software that holds up when your business depends on it.",
  icons: {
    icon: "/avatar.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${jetbrains.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-on-background">
        <div
          aria-hidden
          className="pointer-events-none fixed top-[-20%] left-[-10%] -z-10 h-[50vw] w-[50vw] rounded-full bg-secondary-container/20 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed right-[-10%] bottom-[-20%] -z-10 h-[60vw] w-[60vw] rounded-full bg-primary-fixed/20 blur-[150px]"
        />
        <div
          aria-hidden
          className="bg-grid-pattern pointer-events-none fixed inset-0 -z-10 opacity-50"
        />
        {children}
      </body>
    </html>
  );
}
