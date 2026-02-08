import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Mo-Apex Design | Architectural Engineering & Construction",
  description: "Accra-based design and build firm specializing in consulting, engineering, and development.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
