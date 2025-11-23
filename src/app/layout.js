import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL('https://insightexus.com'),
  title: {
    default: "Insightexus | Digital Engines & Scalable Systems",
    template: "%s | Insightexus"
  },
  description: "We build Digital Engines. Full-spectrum scalability, real-time systems, and AI-powered solutions for high-growth startups and enterprises.",
  keywords: ["Digital Engines", "Scalable Systems", "Real-Time Tech", "AI Solutions", "WebRTC", "High-Frequency Trading", "FinTech", "Software Architecture"],
  authors: [{ name: "Insightexus Team" }],
  creator: "Insightexus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://insightexus.com",
    title: "Insightexus | Digital Engines & Scalable Systems",
    description: "Architecting the future with scalable systems, real-time tech, and AI solutions.",
    siteName: "Insightexus",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Insightexus Digital Engines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insightexus | Digital Engines & Scalable Systems",
    description: "We build Digital Engines. Full-spectrum scalability, real-time systems, and AI-powered solutions.",
    images: ["/og-image.jpg"],
    creator: "@insightexus",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, "font-sans bg-background text-foreground antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <SpeedInsights />
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
