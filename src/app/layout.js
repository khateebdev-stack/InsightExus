import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL('https://insightexus.com'),
  title: {
    default: 'Insightexus - Digital Engine for Your Business | Web Development & Cloud Solutions',
    template: '%s | Insightexus'
  },
  description: 'Professional web development, cloud infrastructure, and scalable digital solutions for high-growth companies. Expert team with years of experience building enterprise-grade systems.',
  keywords: [
    'web development',
    'cloud infrastructure',
    'digital transformation',
    'enterprise software development',
    'scalable web applications',
    'custom software solutions',
    'API development',
    'cloud architecture',
    'DevOps services',
    'full-stack development',
    'React development',
    'Node.js development',
    'Next.js agency',
    'software consulting',
    'digital engines',
    'insightexus'
  ],
  authors: [{ name: 'Insightexus', url: 'https://insightexus.com' }],
  creator: 'Insightexus',
  publisher: 'Insightexus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://insightexus.com',
    siteName: 'Insightexus',
    title: 'Insightexus - Digital Engine for Your Business',
    description: 'Building scalable, resilient digital solutions for tomorrow. Expert web development and cloud infrastructure services.',
    images: [
      {
        url: 'https://insightexus.com/logo1.png',
        width: 1200,
        height: 630,
        alt: 'Insightexus - Digital Engine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insightexus - Digital Engine for Your Business',
    description: 'Building scalable, resilient digital solutions for tomorrow',
    images: ['https://insightexus.com/logo1.png'],
    creator: '@insightexus',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo1.png',
    shortcut: '/logo1.png',
    apple: '/logo1.png',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Replace this after Google Search Console setup
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data for Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Insightexus',
    description: 'Digital Engine for Your Business - Professional web development and cloud solutions',
    url: 'https://insightexus.com',
    logo: 'https://insightexus.com/logo1.png',
    sameAs: [
      'https://twitter.com/insightexus',
      'https://www.linkedin.com/in/insightexus/'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'admin@insightexus.com',
      availableLanguage: ['English']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK'
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
