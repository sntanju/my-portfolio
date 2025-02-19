import Header from '@/components/Header';
import './globals.css';
import { DM_Mono } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';

const dm_mono = DM_Mono({ weight: '400', subsets: [] });

export const metadata = {
  title: 'Sanjida Nasrin',
  description:
    'Sanjida Nasrin is a software developer with proper skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${dm_mono.className} bg-[#e5e7eb] text-gray-950 relative py-0 md:py-3 text-md md:text-lg dark:bg-gray-800 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
