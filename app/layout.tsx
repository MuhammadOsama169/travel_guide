import { Navbar } from '@/components/layout/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Provider from '@/components/AuthProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Travel Guide',
  description:
    'Unlock a World of Inspiration with Handcrafted Destination Guides by Your Favorite Creators.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>
          {/* <Navbar /> */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
