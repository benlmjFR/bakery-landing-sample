import type { Metadata } from "next";
import "@/styles/globals.css";
import { SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: SEO.title,
    template: `%s | X Boulangerie`,
  },
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: "X Boulangerie" }],
  creator: "X Boulangerie",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SEO.url,
    siteName: "X Boulangerie",
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: "X Boulangerie Paris 11",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

  alternates: { canonical: SEO.url },

  // Local Business structured data hint
  other: {
    "geo.region": "FR-75",
    "geo.placename": "Paris 11ème",
    "geo.position": "48.8559;2.3736",
    ICBM: "48.8559, 2.3736",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* JSON-LD Local Business — max SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "X Boulangerie",
              description:
                "Boulangerie pâtisserie artisanale dans le 11ème arrondissement de Paris, boulevard Voltaire.",
              url: SEO.url,
              telephone: "+33145306192",
              email: "pepiteboulangerie@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "195 Boulevard Voltaire",
                addressLocality: "Paris",
                postalCode: "75011",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 48.8559,
                longitude: 2.3736,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "07:00",
                  closes: "20:00",
                },
              ],
              servesCuisine: ["French", "Bakery", "Pastry"],
              priceRange: "€",
              image: SEO.ogImage,
              sameAs: [
                "https://www.instagram.com/pepiteboulangerie_paris/",
                "https://www.tiktok.com/@alice.lapatisserie",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
