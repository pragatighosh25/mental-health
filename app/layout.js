import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mindcure',
  description: 'Mental wellness site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}

