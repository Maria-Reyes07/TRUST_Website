import { Link } from 'react-router';
import { Navbar } from '../Navbar';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export function BlogPost5() {
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
            Art Update #2
          </h1>
          <div className="flex items-center gap-6 text-gray-400 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              October 2, 2026
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
          <video
            controls
            autoplay
            loop
            muted
            playsinline
            className="w-full h-full object-contain"
          >
            <source src="/videos/vexara_walk.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            We're thrilled to share our Art development update for T.R.U.S.T. (The Reality Until Sight Transform). 
            Talia our enemy designer and animator has an update about Vexara.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wide">What We've Been Working On</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">Vexara Walking Animation</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Overview: Finish finalizing vex walking animation by the end of the month with line art and flat color - Talia
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wide">What's Next</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            As Talia said by the end of October there will be the total look which is the line art and flat color. 
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Vexara will officially be wallking around the maze in Godot.
          </p>

          <div className="mt-12 p-6 border border-gray-700 bg-gray-900 bg-opacity-50">
            <p className="text-gray-300 italic">
                  “Do not despise these small beginnings, for the LORD rejoices
                    to see the work begin...” — Zechariah 4:10 (NLT)
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