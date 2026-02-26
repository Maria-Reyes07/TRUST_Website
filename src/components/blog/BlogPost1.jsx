import { Link } from 'react-router';
import { Navbar } from '../navbar';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export function BlogPost1() {
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
            Development Update #1
          </h1>
          <div className="flex items-center gap-6 text-gray-400 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              February 20, 2024
            </span>
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Dev Team
            </span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
        </header>

        {/* Featured Image */}
        <div className="aspect-video bg-gray-900 border border-gray-700 flex items-center justify-center mb-12">
          <span className="text-gray-600">Featured Image</span>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            We're thrilled to share our first major development update for T.R.U.S.T. (The Reality Until Sight Transform). 
            Over the past few months, our team has been working tirelessly to bring this psychological horror experience to life.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wide">What We've Been Working On</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">Core Gameplay Mechanics</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            The foundation of T.R.U.S.T. revolves around perception and reality distortion. We've implemented a unique 
            system where the player's choices and mental state directly affect how they perceive the game world. What 
            you see might not always be what's really there.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">Visual Effects System</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Our custom glitch and distortion system creates an unsettling atmosphere that keeps players on edge. 
            We've developed TV static effects, scanline overlays, and reality-breaking visual anomalies that 
            intensify based on your character's psychological state. The lion eyes that watch from the shadows 
            are just the beginning...
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">Environmental Storytelling</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Every location in T.R.U.S.T. tells a story. We're crafting environments that feel lived-in and abandoned, 
            with environmental clues that hint at the dark history of this world. Players who take the time to explore 
            will uncover secrets that shed light on the true nature of T.R.U.S.T.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wide">What's Next</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We're currently working on expanding the playable area and implementing more character interactions. 
            Our sound design team is creating an audio landscape that complements the visual horror, and we're 
            refining the narrative to ensure every twist hits just right.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            We'll be sharing more updates regularly, including gameplay footage, behind-the-scenes content, and 
            developer diaries. Stay tuned to our social channels for the latest news.
          </p>

          <div className="mt-12 p-6 border border-gray-700 bg-gray-900 bg-opacity-50">
            <p className="text-gray-300 italic">
              "Creating T.R.U.S.T. has been a journey into the depths of psychological horror. We want players 
              to question everything they see and never feel truly safe." - Lead Developer
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
            to="/blog/art-of-horror"
            className="text-gray-400 hover:text-white transition-colors font-bold tracking-wide"
          >
            NEXT POST →
          </Link>
        </div>
      </article>
    </div>
  );
}