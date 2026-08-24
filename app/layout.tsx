import type { Metadata } from "next";
import "./globals.css";

// Fonts: this project ships with a modern system-font fallback stack so it
// builds and runs with zero network dependency (see globals.css --font-display
// / --font-body). For the intended editorial look, swap in real fonts once
// you have network access at build time — see README.md "Typography" for
// the two supported options (next/font/google, or self-hosted font files).

export const metadata: Metadata = {
  title: "Create Peace — Forests to Streets",
  description:
    "Create Peace — Forests to Streets. A youth training on climate justice, artivism, peace and community. Subotica, Serbia, 18–26 August 2026.",
  metadataBase: new URL("https://createpeace.example"),
  openGraph: {
    title: "Create Peace — Forests to Streets",
    description:
      "Subotica, Serbia · 18–26 August 2026. Climate justice, eco-anxiety, artivism, peace and community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
