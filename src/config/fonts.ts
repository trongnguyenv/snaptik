import { Open_Sans } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  // Preload these weights
  weight: ['400', '600', '700'],
  // Disable loading fallback fonts to avoid FOUT
  display: 'swap',
  // Preload variable font files
  variable: '--font-open-sans',
  // Adjust where fonts can be loaded from
  preload: true,
  // Add fallback fonts
  fallback: ['system-ui', 'arial'],
});