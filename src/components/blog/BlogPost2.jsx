import { Link } from 'react-router';
import { Navbar } from '../Navbar';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export function BlogPost2() {
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
            Development Update #2
          </h1>
          <div className="flex items-center gap-6 text-gray-400 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              February 28, 2026
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
          <video
            controls
            loop
            muted
          >
            <source src="/videos/Splash_loadin_main_menu.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Devlog #2 marks a major step forward for the T.R.U.S.T. demo. 
            The storyline has now been fully integrated into gameplay, allowing the narrative to unfold naturally 
            as players explore the maze. Instead of feeling separate from the experience, the story now lives 
            inside the mechanics.
            Alongside that, we implemented multiple new UI systems to strengthen immersion, clarity, and tension.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wide">What’s New in the Demo</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">Interaction & Objectives System</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Players now have a dedicated interaction panel that appears when engaging with objects. 
            We also added an Objectives Menu (accessible by pressing “O”) so players can track their progress 
            as they move through the maze. These systems reduce confusion while preserving psychological tension.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">Sanity System</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            The sanity bar is now fully implemented. Answering phones throughout the level lowers the player’s sanity, 
            reinforcing the idea that interaction comes at a cost. As the player obeys the voice, their perception begins to shift.
            Progression is no longer just physical — it’s mental.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">Progression Mechanics</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            The keypad now appears only after every phone has been answered. 
            This ties narrative obedience directly to gameplay progression. 
            Players must decide whether continuing to answer the calls is worth the psychological toll.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">UI & Visual Additions</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            We added subtitles for dialogue, an instruction panel, a redesigned pause menu (bug fixed), 
            a loading screen, splash screen, and a demo “Thank You” screen. 
            These additions give the demo a more cohesive and polished identity.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wide">What’s Next</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The next phase of development focuses on immersion. 
            We’ll be recording voice lines, implementing environmental sound design, 
            adding floor textures to deepen atmosphere, and placing rosaries randomly throughout the maze 
            to strengthen environmental storytelling.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            We’re still learning as first-time developers, but every system we build pushes T.R.U.S.T. 
            closer to becoming the psychological experience we envisioned.
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
            to="/blog/3d-art-update-1"
            className="text-gray-400 hover:text-white transition-colors font-bold tracking-wide"
          >
            NEXT POST →
          </Link>
        </div>
      </article>
    </div>
  );
}