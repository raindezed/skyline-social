import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Skyline — Travel Social', description: 'Flight tracking meets a social network for travelers.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
