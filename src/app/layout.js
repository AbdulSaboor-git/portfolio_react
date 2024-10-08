import { Inter } from 'next/font/google';
import '/public/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Abdul Saboor',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
