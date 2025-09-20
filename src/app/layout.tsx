import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ColorProvider } from "@/contexts/color-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "ROI Agency - Marketing That Delivers ROI",
    template: "%s | ROI Agency",
  },
  description: "Your marketing spend should always pay for itself. We deliver data-driven marketing solutions that guarantee measurable ROI and sustainable business growth.",
  keywords: ["Marketing Agency", "ROI Marketing", "Digital Marketing", "Performance Marketing", "Web Development", "SEO", "AI Automation", "Brand Design", "Data-Driven Marketing"],
  authors: [{ name: "ROI Agency Team" }],
  creator: "ROI Agency",
  publisher: "ROI Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://roi-agency.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roi-agency.com",
    title: "ROI Agency - Marketing That Delivers ROI",
    description: "Your marketing spend should always pay for itself. We deliver data-driven marketing solutions that guarantee measurable ROI and sustainable business growth.",
    siteName: "ROI Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ROI Agency - Marketing That Delivers ROI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROI Agency - Marketing That Delivers ROI",
    description: "Your marketing spend should always pay for itself. We deliver data-driven marketing solutions that guarantee measurable ROI and sustainable business growth.",
    images: ["/og-image.jpg"],
    creator: "@roiagency",
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="light"
        >
          <ColorProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
            <SpeedInsights />
            <Analytics />
          </ColorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
