
import About from '@/components/About';
import Consult from '@/components/Consult';
import Featured from '@/components/Featured';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';

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
      </main>
    </div>
  );
}

