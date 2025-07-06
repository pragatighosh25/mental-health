
import About from '@/components/About';
import Consult from '@/components/Consult';
import Featured from '@/components/Featured';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Books from '@/components/Books';
import FAQ from '@/components/FAQ';
import ContactHeader from '@/components/ContactHeader';
import ContactDetail from '@/components/ContactDetail';

export default function Home() {
  return (
    <div>
      <main className="">
        <HeroSection />
        <Stats/>
        <Services/>
        <Consult />
        <About />
        <Featured />
        <Testimonials />
        <Books />
        <FAQ/>
        <ContactHeader />
        <ContactDetail />
      </main>
    </div>
  );
}

