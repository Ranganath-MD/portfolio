import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider";
import { AppBar } from "@/components/app-bar";
import { siteConfig } from "@/data/site";
import { Footer } from "@/components/footer";

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "Ranganath M.D",
//   description: "React Developer from Bengaluru",
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://acme.com"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="app relative flex min-h-screen flex-col">
          {/* border-4 rounded-lg border-current */}
            <AppBar />
            <div className="container flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
