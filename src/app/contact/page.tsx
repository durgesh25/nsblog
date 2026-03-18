import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Contact() {
    return (
        <main className="min-h-screen pt-32 pb-24">
            <Navbar />

            <div className="layout-container max-w-4xl">
                <h1 className="text-6xl font-black mb-12 text-[#09231a]">Get In Touch</h1>

                <div className="glass-card p-12 rounded-[2rem] border-[#4ea88a1a] space-y-8 text-lg text-gray-700">
                    <p>
                        Have a project in mind or just want to chat? We're always open to collaborating with 
                        innovators and forward-thinkers.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 text-left">
                        <div className="p-8 bg-[#4ea88a0a] rounded-2xl border border-[#4ea88a1a]">
                            <h3 className="text-xl font-bold text-[#09231a] mb-4">Our Office</h3>
                            <p className="text-sm text-gray-600">Discover where the magic happens and meet our team of experts.</p>
                        </div>
                        <div className="p-8 bg-[#4ea88a0a] rounded-2xl border border-[#4ea88a1a]">
                            <h3 className="text-xl font-bold text-[#09231a] mb-4">Direct Email</h3>
                            <p className="text-sm text-gray-600">Reach out directly for partnership inquiries or technical support.</p>
                        </div>
                    </div>

                    <p>
                        Our team typically responds within 24 hours. Let's build something extraordinary together.
                    </p>

                    <button className="button-primary w-full py-4 text-xl">Send Message</button>
                </div>
            </div>
            <Footer />
        </main>
    );
}
