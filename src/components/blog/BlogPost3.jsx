import { Link } from 'react-router';
import { Navbar } from '../Navbar';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export function BlogPost3() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <article className="max-w-4xl mx-auto px-4 py-20">
        {/* Back Button */}
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wider">
            3D Art Update #1
          </h1>
          <div className="flex items-center gap-6 text-gray-400 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              March 11, 2026
            </span>
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Talia
            </span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
        </header>

        {/* Featured Image */}
        <div className="aspect-video bg-gray-900 border border-gray-700 flex items-center justify-center mb-12">
          <img src="/screenshots/vexara.jpeg" alt="Vexara's character design" />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Overview: Build 3d model fully animated by the end of the month
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wide">What’s New in the Art</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">BLENDER</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Build vexara's head base: Fail: Disproportionate 

            Learn blender mechanics as far as building 3d model: Success
          </p>

          <div className="mt-12 p-6 border border-gray-700 bg-gray-900 bg-opacity-50">
            <p className="text-gray-300 italic">
                  “Beloved, do not believe every spirit, but test the spirits to see whether they are from God…”  
                  — 1 John 4:1
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center">
          <Link 
            to="/blog"
            className="text-gray-400 hover:text-white transition-colors font-bold tracking-wide"
          >
            ← ALL POSTS
          </Link>
          <Link 
            to="/blog/development-update-3"
            className="text-gray-400 hover:text-white transition-colors font-bold tracking-wide"
          >
            NEXT POST →
          </Link>
        </div>
      </article>
    </div>
  );
}