const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function getPosts(page = 1, perPage = 12) {
  const res = await fetch(`${WP_API_URL}/posts?_embed&page=${page}&per_page=${perPage}`, {
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts = await res.json();
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
  const totalPosts = parseInt(res.headers.get('X-WP-Total') || '0');

  return { posts, totalPages, totalPosts };
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }

  const posts = await res.json();
  return posts[0];
}

export async function getCategoryBySlug(slug: string) {
  const res = await fetch(`${WP_API_URL}/categories?slug=${slug}`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch category');
  }

  const categories = await res.json();
  return categories[0];
}

export async function getPostsByCategory(categoryId: number, page = 1, perPage = 12) {
  const res = await fetch(`${WP_API_URL}/posts?categories=${categoryId}&_embed&page=${page}&per_page=${perPage}`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch category posts');
  }

  const posts = await res.json();
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');

  return { posts, totalPages };
}

export async function getCategories() {
  const res = await fetch(`${WP_API_URL}/categories?hide_empty=true&per_page=100`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
}

export async function getRelatedPosts(categoryIds: number[], excludePostId: number, limit = 4) {
  const res = await fetch(
    `${WP_API_URL}/posts?categories=${categoryIds.join(',')}&exclude=${excludePostId}&per_page=${limit}&_embed`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
}
