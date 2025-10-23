// app/layout.tsx - Configuração de Metadata e SEO
import type { Metadata } from "next";
import ImprovedThemeRegistry from "./components/ThemeRegistry";
import ImprovedHeader from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "VacinaBrasil - Informações sobre Vacinas e Campanhas",
    template: "%s | VacinaBrasil",
  },
  description:
    "Portal completo com informações sobre vacinas, campanhas de vacinação, calendário vacinal e recursos educativos. Proteja sua saúde e de sua família.",
  keywords: [
    "vacinas",
    "vacinação",
    "imunização",
    "saúde pública",
    "campanhas de vacinação",
    "calendário vacinal",
    "Brasil",
  ],
  authors: [{ name: "VacinaBrasil" }],
  creator: "VacinaBrasil",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vacinabrasil.com.br",
    siteName: "VacinaBrasil",
    title: "VacinaBrasil - Informações sobre Vacinas",
    description: "Portal completo sobre vacinas e campanhas de vacinação no Brasil",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VacinaBrasil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VacinaBrasil - Informações sobre Vacinas",
    description: "Portal completo sobre vacinas e campanhas de vacinação",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "seu-codigo-de-verificacao",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ImprovedThemeRegistry>
          <ImprovedHeader />
          <main>{children}</main>
          <Footer />
        </ImprovedThemeRegistry>
      </body>
    </html>
  );
}
