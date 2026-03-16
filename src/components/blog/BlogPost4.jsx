import { Link } from 'react-router';
import { Navbar } from '../Navbar';
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
              February 26, 2026
            </span>
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Maria
            </span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
        </header>

        {/* Featured Image */}
        <div className="aspect-video bg-gray-900 border border-gray-700 flex items-center justify-center mb-12">
          <img src="/screenshots/main_menu.png" alt="Purple background with T.R.U.S.T. logo" />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            We're thrilled to share our first major development update for T.R.U.S.T. (The Reality Until Sight Transform). 
            It has been almost a year now, and this journey has been very much like a roller coaster.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wide">What We've Been Working On</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">Core Gameplay Mechanics</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            The foundation of T.R.U.S.T. revolves around perception and reality distortion. 
            We've implemented a unique system where the player's choices and mental state directly affect how they perceive the game world. 
            What you see might not always be what's really there.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">Visual Effects System</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Our custom screen-shake and distortion system creates the fear the characters feel in the moment, 
            keeping the player on edge. Seeing doubles, not knowing the difference between reality and the character's mental state.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">Environmental Storytelling</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Every location in T.R.U.S.T. tells its own story. We’re designing environments that feel both lived-in and abandoned, filled with subtle clues that reflect the inner 
            struggles many Christians face—battling doubts, fears, and the mind’s illusions. Players will constantly question what’s real and what’s imagined, mirroring that 
            journey of discernment.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wide">What's Next</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We're currently working on the game's demo. We have the first floor set up and ready. We are working on the character design of the main characters. 
            The enemies are already drawn out, and now they will be turned into 3D. This is our first time designing a video game, so we are also learning as we go.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            At first, we were going to use Unreal to build our game, but it kept crashing, so we moved to Godot. We had to learn the hard way that Unreal is not laptop-friendly. 
            Unreal probably works better with PCs.
          </p>

          <div className="mt-12 p-6 border border-gray-700 bg-gray-900 bg-opacity-50">
            <p className="text-gray-300 italic">
              “Do not conform to the pattern of this world, but be transformed by the renewing of your mind, 
              so that you may discern what is the good, pleasing and perfect will of God.” — Romans 12:2
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
            to="/blog/development-update-2"
            className="text-gray-400 hover:text-white transition-colors font-bold tracking-wide"
          >
            NEXT POST →
          </Link>
        </div>
      </article>
    </div>
  );
}