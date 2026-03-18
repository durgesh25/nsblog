import { getPosts, getCategories } from '@/lib/wordpress';
import { PostCard } from '@/components/PostCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Pagination } from '@/components/Pagination';
import Link from 'next/link';

export default async function Home({ searchParams }: { searchParams: { page?: string } }) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const { posts, totalPages } = await getPosts(page, 12);
  const categories = await getCategories();

  return (
    <main className="min-h-screen pt-32 pb-24">
      <Navbar />

      <div className="layout-container">
        {/* Hero Section (Only show on first page) */}
        {page === 1 && (
          <>
            <section className="mb-16 text-center">
              <div className="inline-block px-4 py-1.5 mb-6 bg-[#4ea88a1a] rounded-full text-[10px] font-black text-primary tracking-widest uppercase">
                Innovate with Novostack
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight text-[#09231a]">
                Modern Solutions <br />
                <span className="gradient-text tracking-tighter">Powered by Tech.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Exploring the intersection of design, performance, and scalability. Welcome to the official Novostack insights blog.
              </p>
            </section>

            {/* Category List Section */}
            <section className="mb-16">
              <div className="flex flex-wrap justify-center gap-3">
                <Link 
                  href="/" 
                  className="px-6 py-2 rounded-full border border-primary bg-primary text-white text-[11px] font-black tracking-widest uppercase shadow-lg shadow-primary/20"
                >
                  ALL TOPICS
                </Link>
                {categories.map((cat: any) => (
                  <Link 
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    className="px-6 py-2 rounded-full border border-[#4ea88a33] bg-white text-[#3d3d3d] text-[11px] font-black tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination Controls */}
        <Pagination currentPage={page} totalPages={totalPages} baseUrl="/" />

        {/* Empty State/Newsletter Section (Show on first page) */}
        {page === 1 && (
          <section className="mt-32 p-16 glass-card rounded-[3rem] text-center border-[#4ea88a1a] overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-6 text-[#09231a]">Stay in the loop</h2>
              <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg leading-relaxed">Get our latest insights on technology and design delivered to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full sm:w-80 px-6 py-4 rounded-md bg-white border border-[#4ea88a33] text-[#3d3d3d] focus:outline-none focus:border-primary transition-all"
                />
                <button className="button-primary w-full sm:w-auto h-full py-4 px-10">
                  Join Now
                </button>
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}
