import './globals.css';

export const metadata = {
  metadataBase: new URL('https://salon-matarazzo-new-design.vercel.app'),
  title: {
    default: 'Salon Matarazzo — Hair Salon in Bellevue, WA',
    template: '%s · Salon Matarazzo',
  },
  description:
    'Salon Matarazzo is an Eastside hair salon in Bellevue, WA — expert colorists and precision cutters delivering personalized, on-trend looks since 1990.',
  keywords: ['hair salon', 'Bellevue', 'Eastside', 'hair color', 'haircut', 'balayage', 'Salon Matarazzo'],
  openGraph: {
    title: 'Salon Matarazzo — Hair Salon in Bellevue, WA',
    description: 'Expert colorists and precision cutters in Bellevue, WA. Quiet craft since 1990.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Salon Matarazzo',
  },
  twitter: { card: 'summary_large_image', title: 'Salon Matarazzo — Bellevue, WA' },
  icons: { icon: '/favicon.ico' },
};

export const viewport = {
  themeColor: '#FFFEF2',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
