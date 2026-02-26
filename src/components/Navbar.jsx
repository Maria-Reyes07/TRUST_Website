import { Coffee } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold tracking-[0.3em] hover:opacity-80 transition-opacity">
              T.R.U.S.T.
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a
              href="#character-profiles"
              className="text-lg font-medium tracking-wider hover:text-gray-400 transition-colors"
            >
              CHARACTER PROFILES
            </a>
            <a
              href="#meet-the-team"
              className="text-lg font-medium tracking-wider hover:text-gray-400 transition-colors"
            >
              MEET THE TEAM
            </a>
            <a
              href="#dev-blog"
              className="text-lg font-medium tracking-wider hover:text-gray-400 transition-colors"
            >
              DEV BLOG
            </a>
            <a
              href="https://ko-fi.com/intermeritclub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wider"
            >
              <Coffee className="w-5 h-5" />
              KO-FI
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}