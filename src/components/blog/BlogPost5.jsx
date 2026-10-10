
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
            Development Update #3
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
            alt="T.R.U.S.T. main menu"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Welcome back to another T.R.U.S.T. development update!
            I've been focusing on fixing gameplay bugs and improving
            the systems that bring the demo together. Some of these
            issues took a little troubleshooting, but each fix has
            helped me better understand how the different parts of
            the game work together in Godot.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wide">
            What I've Fixed
          </h2>

          <ul className="text-gray-300 leading-relaxed mb-8 space-y-4 list-disc pl-6">
            <li>
              <strong>Subtitle display:</strong> Fixed an issue that
              prevented subtitles from appearing correctly.
            </li>

            <li>
              <strong>Game State:</strong> Worked out how to manage
              the Game State system and keep track of the game's
              current state.
            </li>

            <li>
              <strong>Sanity system:</strong> Fixed an issue where
              the player's sanity wasn't depleting as intended.
            </li>

            <li>
              <strong>Phone interactions:</strong> Fixed player
              movement locking when picking up a phone, helping
              interactions work as intended.
            </li>

            <li>
              <strong>Loading transitions:</strong> Adjusted the
              loading delay to give players more time before
              transitioning to the next screen.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 tracking-wide">
            What's Next?
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I'll continue testing the gameplay mechanics, polishing
            interactions, and working toward a smoother and more
            immersive experience. There are still more details to
            refine, but every bug fixed brings T.R.U.S.T. one step
            closer to the demo I want to share with everyone.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Thank you for following the development of T.R.U.S.T.
            Your support means a lot to our team, and I'm excited
            to share more progress as development continues!
          </p>

          <div className="mt-12 p-6 border border-gray-700 bg-gray-900 bg-opacity-50">
            <p className="text-gray-300 italic">
              "Trust in the Lord with all your heart and lean not
              on your own understanding; in all your ways submit
              to him, and he will make your paths straight."
              {' '}— Proverbs 3:5–6
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
            to="/blog/art-update-3"
            className="text-gray-400 hover:text-white transition-colors font-bold tracking-wide"
          >
            NEXT POST →
          </Link>
        </div>
      </article>
    </div>
  );
}
