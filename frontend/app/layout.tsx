import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Vendor Tracker",
  description: "Manage your vendors with AWS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // by wrapping the children in the Providers component, we ensure that Amplify is configured and available throughout the app
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
