import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Greedy - Free & Open-Source Tools For Developers",
  description:
    "Greedy is a collection of small free tools to help you with annoying stuff.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background antialiased font-mono")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
