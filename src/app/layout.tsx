import type { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google'
import "./globals.css";
import ThemeProvider from "./theme-provider";
import { WebVitals } from "./web-vitals";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  // Display (font-display) defines how the browser behaves during download
  display: 'swap', // Swap instructs the browser to use the fallback font to display the text until the custom font has fully downloaded
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "AI Chat App",
  description: "Chat App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className="font-inter">
        <WebVitals />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
