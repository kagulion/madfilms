import { getCollection } from 'astro:content';

export const prerender = false;

export async function GET() {
  const posts = await getCollection('blog');
  
  if (posts.length === 0) {
    return new Response(JSON.stringify({ error: 'No films found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Выбираем случайный фильм из коллекции blog
  const randomIndex = Math.floor(Math.random() * posts.length);
  const randomPost = posts[randomIndex];

  return new Response(JSON.stringify({ slug: randomPost.id }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
