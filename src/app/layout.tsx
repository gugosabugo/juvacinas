import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeRegistry from './components/ThemeRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vacinas e Campanhas - Saúde Pública',
  description: 'Informações sobre vacinas, calendários e campanhas de vacinação.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={inter.className}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        <ThemeRegistry>
          <Header />
          <main style={{ flex: 1, padding: "24px" }}>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
