import { Montserrat } from 'next/font/google'
import "./globals.css";
import SplashScreen from '@/components/SplashScreen';

 
// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Genisys",
  description: "Genisys offre soluzioni di CSR per le aziende sul territorio italiano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={montserrat.className + " antialiased bg-[#fff5f1] mx-auto"}
      >
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
