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
        <section id="services">
          <Services />
        </section>
        <section id="consult">
          <Consult />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="featured">
          <Featured />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="books" >
          <Books />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <ContactHeader />
        <section id= "location">
          <ContactDetail />
        </section>
        
      </main>
    </div>
  );
}
