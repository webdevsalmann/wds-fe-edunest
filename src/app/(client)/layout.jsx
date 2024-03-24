import { Rubik, Onest, Sora, Overpass, Be_Vietnam_Pro, Tourney, Epilogue, Josefin_Sans, Karla, Urbanist, Recursive, REM, Figtree, Niramit, Noto_Sans, Cabin, Asap, Archivo, Outfit, Kanit, Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/context/ThemeProvider';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { Toaster } from '@/components/ui/toaster';

const rubik = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'], });

export const metadata = {
  title: 'webdevsalmann',
  description: 'Website Developer Salman portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className} suppressHydrationWarning="true" suppressContentEditableWarning="true">
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html >
  )
}
