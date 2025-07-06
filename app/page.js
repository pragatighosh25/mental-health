import About from "@/components/About";
import Consult from "@/components/Consult";
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Books from "@/components/Books";
import FAQ from "@/components/FAQ";
import ContactHeader from "@/components/ContactHeader";
import ContactDetail from "@/components/ContactDetail";

export default function Home() {
  return (
    <div>
      <main className="">
        <HeroSection />
        <Stats />
        <section id="services" className="">
          <Services />
        </section>
        <section id="consult" className="">
          <Consult />
        </section>
        <section id="about" className="">
          <About />
        </section>
        <section id="featured" className="">
          <Featured />
        </section>
        <section id="testimonials" className="">
          <Testimonials />
        </section>
        <section id="books" className="">
          <Books />
        </section>
        <section id="faq" className="">
          <FAQ />
        </section>
        <ContactHeader />
        <section id= "location" className="">
          <ContactDetail />
        </section>
        
      </main>
    </div>
  );
}
