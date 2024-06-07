import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/provider";
import { UserProvider } from "@/components/context";

export const metadata: Metadata = {
  title: "Seva",
  description: "Seva is a nextjs application which enables authentication and protected routes using the next auth package.",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  keywords: ["Seva", "Seva in Nextjs", "nextjs", "nextauth", "protected routes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <UserProvider>
            {children}
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
