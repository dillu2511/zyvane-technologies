import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { JsonLd } from "@/components/seo/json-ld";
import { GoogleAnalytics } from "@/components/seo/analytics";
import { CommandMenu } from "@/components/layout/command-menu";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.zyvanetechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zyvane Technologies | AI & Enterprise Software Engineering",
    template: "%s | Zyvane Technologies",
  },
  description:
    "Zyvane Technologies engineers intelligence and delivers scale. We build custom AI software, enterprise web applications, and workflow automation for the world's most ambitious companies.",
  keywords: [
    "AI software engineering",
    "enterprise software development",
    "custom software company",
    "machine learning engineering",
    "cloud architecture",
    "microservices",
    "React Next.js agency",
    "HIPAA compliant software",
    "fintech software",
    "Zyvane Technologies",
  ],
  authors: [{ name: "Zyvane Technologies", url: siteUrl }],
  creator: "Zyvane Technologies",
  publisher: "Zyvane Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Zyvane Technologies",
    title: "Zyvane Technologies | AI & Enterprise Software Engineering",
    description:
      "Engineering Intelligence. Delivering Scale. We architect, build, and deploy high-performance software systems for global enterprises.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zyvane Technologies — Engineering Intelligence. Delivering Scale.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zyvanetech",
    creator: "@zyvanetech",
    title: "Zyvane Technologies | AI & Enterprise Software Engineering",
    description:
      "Engineering Intelligence. Delivering Scale. We architect, build, and deploy high-performance software systems for global enterprises.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  verification: {
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <JsonLd />
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          <CommandMenu />
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
