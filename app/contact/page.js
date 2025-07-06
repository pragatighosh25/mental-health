
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';


export default function Home() {
  return (
    <div>
      <main className="">
        <About />
        <ContactForm />
        <Testimonials />
      </main>
    </div>
  );
}