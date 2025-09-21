import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const BlogSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/posts?limit=6');
        const json = await res.json();
        setPosts(json.posts);
      } catch (err) {
        console.error('Failed to fetch posts', err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Latest Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.body.slice(0, 100)}...</p>
              <div className="text-sm text-gray-500">
                <span>By User {post.userId}</span>.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
