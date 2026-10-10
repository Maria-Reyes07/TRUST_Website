
import { Link } from 'react-router';
import { Navbar } from '../Navbar';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export function BlogPost6() {
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
            Art Update #3
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              October 9, 2026
            </span>

            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Maria
            </span>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
        </header>

        {/* Featured Image */}
        <div className="aspect-video bg-gray-900 border border-gray-700 flex items-center justify-center mb-12 overflow-hidden">
          <img
            src="/screenshots/main_menu.png"
            alt="Redesigned T.R.U.S.T. main menu"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Welcome back to another T.R.U.S.T. development update!
            This time, I'm sharing some progress on the art and
            visual side of the game. From redesigning the menus
            to experimenting with character presentation in Godot,
            I've been working on bringing more of the game's
            visual identity to life.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wide">
            What I've Been Working On
          </h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">
            Main Menu & Loading Screen Redesign
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            I've redesigned the main menu and loading screen in
            Figma! I wanted to refine these screens so they better
            fit the atmosphere and visual identity of T.R.U.S.T.
            These screens are an important part of the player's
            first impression, so I want them to feel connected
            to the world and experience of the game.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 tracking-wide">
            Bringing 2D Characters Into a 3D World
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            One of my biggest breakthroughs was finally figuring
            out how to place a 2D character into a 3D environment
            in Godot! This opens up new possibilities for how
            characters can appear and interact with the game's
            environments while maintaining the visual style
            we're exploring.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            It's exciting to see these ideas move from concepts
            and experiments into the actual game. Each step
            helps us discover new ways to bring the world of
            T.R.U.S.T. together.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wide">
            What's Next?
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I'll keep refining the UI and exploring ways to bring
            the game's art and environments together. There's
            still plenty to experiment with, and I'm excited to
            keep improving the visual experience as development
            continues.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Thank you for following our journey as we continue
            building T.R.U.S.T.! Every milestone, big or small,
            brings us closer to the experience we want to share
            with you.
          </p>

          {/* Bible Verse */}
          <div className="mt-12 p-6 border border-gray-700 bg-gray-900 bg-opacity-50">
            <p className="text-gray-300 italic">
              "He has filled them with skill to do all kinds of
              work as engravers, designers, embroiderers in blue,
              purple and scarlet yarn and fine linen, and weavers—
              all of them skilled workers and designers."
              {' '}— Exodus 35:35 (NIV)
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
            to="/blog/development-update-5"
            className="text-gray-400 hover:text-white transition-colors font-bold tracking-wide"
          >
            PREVIOUS POST →
          </Link>
        </div>
      </article>
    </div>
  );
}
