import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <Navbar />

      <div className="layout-container max-w-4xl">
        <h1 className="text-6xl font-black mb-12 text-[#09231a]">About Our Mission</h1>

        <div className="glass-card p-12 rounded-[2rem] border-[#4ea88a1a] space-y-8 text-lg text-gray-700">
          <p>
            At <span className="text-primary font-bold">Novostack</span>, we push the boundaries of digital experiences. 
            This blog serves as a hub for our technical insights, design philosophies, and cultural updates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 text-left">
            <div className="p-8 bg-[#4ea88a0a] rounded-2xl border border-[#4ea88a1a]">
              <h3 className="text-xl font-bold text-[#09231a] mb-4">Innovation First</h3>
              <p className="text-sm text-gray-600">We leverage and build upon the latest technologies to solve real-world problems.</p>
            </div>
            <div className="p-8 bg-[#4ea88a0a] rounded-2xl border border-[#4ea88a1a]">
              <h3 className="text-xl font-bold text-[#09231a] mb-4">Design Led</h3>
              <p className="text-sm text-gray-600">Aesthetics and usability are at the core of everything we ship to clients.</p>
            </div>
          </div>

          <p>
            Our tech stack for this implementation includes Next.js 15+, Tailwind CSS, and a headless 
            WordPress backend, ensuring speed, security, and scalability.
          </p>

          <button className="button-primary w-full py-4 text-xl">Work With Us</button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
