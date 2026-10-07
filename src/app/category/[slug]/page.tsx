import { getCategoryBySlug, getPostsByCategory } from '@/lib/wordpress';
import { PostCard } from '@/components/PostCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Pagination } from '@/components/Pagination';
import { notFound } from 'next/navigation';

export default async function CategoryPage({ 
  params, 
  searchParams 
}: { 
  params: { slug: string }, 
  searchParams: { page?: string } 
}) {
  const { slug } = await params;
  const sParams = await searchParams;
  const page = parseInt(sParams.page || '1');
  
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const { posts, totalPages } = await getPostsByCategory(category.id, page, 12);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="layout-container">
        {/* Category Header */}
        <header className="mb-20 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 bg-[#4ea88a1a] rounded-full text-[10px] font-black text-primary tracking-widest uppercase">
            Category Archive
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight text-[#09231a] capitalize">
            {category.name}
          </h1>
          {category.description && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {category.description}
            </p>
          )}
        </header>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#4ea88a1a]">
            <p className="text-gray-500 font-bold">No posts found in this category.</p>
          </div>
        )}

        {/* Pagination */}
        <Pagination currentPage={page} totalPages={totalPages} baseUrl={`/category/${slug}`} />
      </div>
    </main>
    <Footer />
  </>
  );
}
