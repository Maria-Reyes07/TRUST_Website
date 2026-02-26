import { Link } from 'react-router';
import { Navbar } from './navbar';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'development-update-1',
    title: 'Development Update #1',
    author: 'Dev Team',
    date: 'Feb 20, 2024',
    excerpt: "We're excited to share our progress on T.R.U.S.T. and give you a behind-the-scenes look at what we've been working on...",
    image: null,
  },
//   {
//     id: 2,
//     slug: 'art-of-horror',
//     title: 'The Art of Horror',
//     author: 'Art Director',
//     date: 'Feb 15, 2024',
//     excerpt: 'Creating the unsettling atmosphere of T.R.U.S.T. requires careful attention to visual design and psychological elements...',
//     image: null,
//   },
//   {
//     id: 3,
//     slug: 'sound-design-deep-dive',
//     title: 'Sound Design Deep Dive',
//     author: 'Sound Designer',
//     date: 'Feb 10, 2024',
//     excerpt: "Audio plays a crucial role in horror games. Here's how we're crafting the soundscape to keep you on edge...",
//     image: null,
//   },
];

export function BlogList() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold mb-8 tracking-wider text-center">DEV BLOG</h1>
          <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="border border-gray-700 bg-black bg-opacity-50 overflow-hidden hover:border-white transition-colors group">
              <div className="aspect-video bg-gray-900 border-b border-gray-700 flex items-center justify-center">
                <span className="text-gray-600">Featured Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3 tracking-wide group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-white hover:text-gray-300 font-bold tracking-wide"
                >
                  READ MORE →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}