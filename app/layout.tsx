import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider, App } from "antd";
import theme from "@/theme/themeConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://moapexdesignandbuild.com"),
  title: "Mo Apex Design & Build | Architecture Engineering & Construction Accra, Ghana",
  description: "Mo Apex Design & Build is a premier architecture and construction firm in Accra, Ghana. Specializing in architectural designs, structural engineering, building construction, and project management in West Africa.",
  keywords: "Mo Apex, Apex Design and Build, Architectural designs Accra, Structural engineering Ghana, Building construction Accra, Construction management West Africa, MEP services Ghana, Project estimation Accra, Quantity surveying Ghana",
  authors: [{ name: "Mo Apex Design & Build" }],
  creator: "Mo Apex Design & Build",
  publisher: "Mo Apex Design & Build",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/images/logo.png" },
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/images/logo.png"],
  },
  openGraph: {
    title: "Mo Apex Design & Build | Architectural Engineering & Construction",
    description: "Accra-based premier design and build firm specializing in consulting, engineering, and development in Ghana.",
    url: "https://moapexdesign.com", // Assuming this is the future domain
    siteName: "Mo Apex Design & Build",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Mo Apex Design & Build Logo",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mo Apex Design & Build | Architectural & Construction Firm",
    description: "Transforming visions into reality through innovative design and engineering in Accra, Ghana.",
    images: ["/images/logo.png"],
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
  verification: {
    google: "google-site-verification-id", // User should provide this eventually
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mo Apex Design & Build",
    "image": "https://moapexdesign.com/images/logo.png",
    "@id": "https://moapexdesign.com",
    "url": "https://moapexdesign.com",
    "telephone": "+233205826884",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mayor Road - Opposite Ghana Geological Survey Authority",
      "addressLocality": "Accra",
      "addressRegion": "Greater Accra",
      "postalCode": "GA-000",
      "addressCountry": "GH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 5.5593, // Approximate latitude for Accra
      "longitude": -0.1870
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/moapexdesign", // Placeholders
      "https://www.instagram.com/moapexdesign",
      "https://www.linkedin.com/company/moapexdesign"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col grain-overlay`}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <App>
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </App>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
