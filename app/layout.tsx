import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OutageCost — Calculate Real Business Impact of Cloud Outages",
  description: "Track downtime costs, SLA breach penalties, and revenue impact during AWS, Google Cloud, and Azure outages. Built for CTOs, DevOps, and finance teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="04fb3a7d-516c-4575-9287-8f8f43781e02"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
