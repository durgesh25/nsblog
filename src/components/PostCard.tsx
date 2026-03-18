import Image from 'next/image';
import Link from 'next/link';

export function PostCard({ post }: { post: any }) {
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const imageUrl = featuredMedia?.source_url || 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  const author = post._embedded?.['author']?.[0]?.name || 'Anonymous';
  const date = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const categories = post._embedded?.['wp:term']?.[0] || [];
  const primaryCategory = categories.length > 0 ? categories[0] : { name: 'Article', slug: 'uncategorized' };

  return (
    <div className="glass-card overflow-hidden group">
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={post.title.rendered}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09231a55] to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
            <Link 
              href={`/category/${primaryCategory.slug}`}
              className="px-4 py-1.5 bg-white/60 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-[#09231a] hover:bg-primary hover:text-white transition-all"
            >
              {primaryCategory.name}
            </Link>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4 text-[10px] font-black tracking-widest text-[#4ea88a] uppercase">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        
        <Link href={`/post/${post.slug}`}>
          <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-all duration-300 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
          />
        </Link>
        
        <div 
          className="text-gray-500 mb-6 line-clamp-3 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
        />

        <Link href={`/post/${post.slug}`} className="text-primary font-bold inline-flex items-center gap-2 group/btn">
          Explore Case Study 
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
