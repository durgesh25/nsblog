import { getPostBySlug, getRelatedPosts } from '@/lib/wordpress';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PostCard } from '@/components/PostCard';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

function decodeHtml(html: string) {
  return html
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/<[^>]*>/g, ""); // Strip tags too
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found - NovoStack' };
  }

  const cleanTitle = decodeHtml(post.title.rendered);
  const cleanDescription = decodeHtml(post.excerpt.rendered)
    .substring(0, 160)
    .trim();

  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const ogImage = featuredMedia?.source_url;

  return {
    title: `${cleanTitle} | NovoStack`,
    description: cleanDescription,
    keywords: cleanTitle.split(' ').join(', '),
    openGraph: {
      images: ogImage ? [ogImage] : [],
      title: cleanTitle,
      description: cleanDescription,
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.categories, post.id, 4);

  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const imageUrl = featuredMedia?.source_url || 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  const author = post._embedded?.['author']?.[0];
  const date = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <main className="min-h-screen pt-32 pb-24">
      <Navbar />

      <article className="layout-container max-w-4xl mb-32">
        <header className="mb-12 text-center">
          <div className="flex gap-4 justify-center items-center text-[10px] font-black text-primary tracking-widest uppercase mb-6">
            <span>Case Study #{post.id}</span>
            <span className="w-1.5 h-1.5 bg-[#4ea88a33] rounded-full" />
            <span>{date}</span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tight text-[#09231a]"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div className="flex items-center justify-center gap-4">
            {author?.avatar_urls && (
              <img
                src={author.avatar_urls['96']}
                alt={author.name}
                className="w-12 h-12 rounded-full ring-4 ring-[#4ea88a1a]"
              />
            )}
            <div className="text-left">
              <span className="block font-bold text-[#09231a] text-lg">{author?.name}</span>
              <span className="text-gray-500 text-sm font-medium">{author?.description || 'Novostack Specialist'}</span>
            </div>
          </div>
        </header>

        <div className="relative h-[600px] w-full mb-16 rounded-[3rem] overflow-hidden shadow-2xl shadow-[#4ea88a1a]">
          <Image
            src={imageUrl}
            alt={post.title.rendered}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09231a44]" />
        </div>

        <div
          className="wp-content prose prose-lg prose-slate max-w-none px-4"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        <div className="mt-24 pt-12 border-t border-[#4ea88a1a] flex flex-col items-center">
          <h3 className="text-2xl font-black mb-10 text-[#09231a]">Share this insight</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Twitter', 'Facebook', 'LinkedIn'].map((platform) => (
              <button key={platform} className="px-8 py-3 bg-white border border-[#4ea88a33] rounded-md text-sm font-bold text-[#3d3d3d] hover:bg-[#4ea88a0a] hover:border-primary transition-all">
                {platform}
              </button>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#f6fbf9] py-32 border-t border-[#4ea88a1a]">
          <div className="layout-container">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-6 bg-[#4ea88a1a] rounded-full text-[10px] font-black text-primary tracking-widest uppercase">
                Expand your knowledge
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#09231a]">Related Insights</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPosts.map((rPost: any) => (
                <PostCard key={rPost.id} post={rPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
