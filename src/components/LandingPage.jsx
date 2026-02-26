import { LionLogo } from './LionLogo';
import { Navbar } from './navbar';
import { Play, Download, Calendar, User, Users, Skull } from 'lucide-react';
import { Link } from 'react-router';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Logo */}
      <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4">
        <LionLogo />
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-8 tracking-wider">ABOUT THE GAME</h2>
          <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mb-8" />
          <p className="text-xl leading-relaxed text-gray-300 mb-6">
            Enter a world where reality bends and truth is subjective. 
            T.R.U.S.T. challenges your perception of what's real and what's not.
          </p>
          <p className="text-xl leading-relaxed text-gray-300">
            Navigate through psychological horror as you question every sight, 
            every sound, and every shadow that moves in the corner of your vision.
          </p>
        </div>
      </section>

 {/* Character Profiles Section */}
<section id="character-profiles" className="min-h-screen flex items-center justify-center py-20 px-4">
  <div className="max-w-7xl mx-auto w-full">
    <h2 className="text-6xl font-bold mb-16 text-center tracking-wider">CHARACTER PROFILES</h2>
    <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mb-16" />
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Character 1 - The Watcher */}
      <Link 
        to="/character/the-watcher" 
        className="border-2 border-gray-700 hover:border-white transition-all duration-300 bg-black bg-opacity-50 overflow-hidden group block"
      >
        <div className="aspect-square bg-gray-900 border-b-2 border-gray-700 group-hover:border-white transition-colors flex items-center justify-center">
          <Skull className="w-24 h-24 text-gray-600 group-hover:text-white transition-colors" />
        </div>
        <div className="p-6">
          <h3 className="text-3xl font-bold mb-2 tracking-wide">THE WATCHER</h3>
          <p className="text-sm text-gray-500 mb-4 tracking-wider">ANTAGONIST</p>
          <p className="text-gray-400 leading-relaxed">
            A mysterious entity that lurks in the shadows. It sees everything, knows everything, 
            and feeds on your fear. You can't hide from what's already inside your mind.
          </p>
          <p className="text-white font-bold tracking-wide mt-4 group-hover:text-gray-300 transition-colors">
            READ MORE →
          </p>
        </div>
      </Link>

      {/* Character 2 - Alex Morgan */}
      <Link 
        to="/character/alex-morgan" 
        className="border-2 border-gray-700 hover:border-white transition-all duration-300 bg-black bg-opacity-50 overflow-hidden group block"
      >
        <div className="aspect-square bg-gray-900 border-b-2 border-gray-700 group-hover:border-white transition-colors flex items-center justify-center">
          <User className="w-24 h-24 text-gray-600 group-hover:text-white transition-colors" />
        </div>
        <div className="p-6">
          <h3 className="text-3xl font-bold mb-2 tracking-wide">ALEX MORGAN</h3>
          <p className="text-sm text-gray-500 mb-4 tracking-wider">PROTAGONIST</p>
          <p className="text-gray-400 leading-relaxed">
            A journalist investigating strange occurrences in an abandoned facility. 
            Armed with only a camera and determination, Alex must uncover the truth before reality itself collapses.
          </p>
          <p className="text-white font-bold tracking-wide mt-4 group-hover:text-gray-300 transition-colors">
            READ MORE →
          </p>
        </div>
      </Link>

      {/* Character 3 - Dr. Sarah Chen */}
      <Link 
        to="/character/dr-sarah-chen" 
        className="border-2 border-gray-700 hover:border-white transition-all duration-300 bg-black bg-opacity-50 overflow-hidden group block"
      >
        <div className="aspect-square bg-gray-900 border-b-2 border-gray-700 group-hover:border-white transition-colors flex items-center justify-center">
          <User className="w-24 h-24 text-gray-600 group-hover:text-white transition-colors" />
        </div>
        <div className="p-6">
          <h3 className="text-3xl font-bold mb-2 tracking-wide">DR. SARAH CHEN</h3>
          <p className="text-sm text-gray-500 mb-4 tracking-wider">ALLY / ???</p>
          <p className="text-gray-400 leading-relaxed">
            The last surviving scientist from the failed experiment. Her cryptic messages 
            may be your only hope... or the final piece of a sinister puzzle.
          </p>
          <p className="text-white font-bold tracking-wide mt-4 group-hover:text-gray-300 transition-colors">
            READ MORE →
          </p>
        </div>
      </Link>

      {/* Character 4 - The Echoes */}
      <Link 
        to="/character/the-echoes" 
        className="border-2 border-gray-700 hover:border-white transition-all duration-300 bg-black bg-opacity-50 overflow-hidden group block"
      >
        <div className="aspect-square bg-gray-900 border-b-2 border-gray-700 group-hover:border-white transition-colors flex items-center justify-center">
          <Skull className="w-24 h-24 text-gray-600 group-hover:text-white transition-colors" />
        </div>
        <div className="p-6">
          <h3 className="text-3xl font-bold mb-2 tracking-wide">THE ECHOES</h3>
          <p className="text-sm text-gray-500 mb-4 tracking-wider">ENTITIES</p>
          <p className="text-gray-400 leading-relaxed">
            Remnants of past victims trapped between dimensions. They appear as distorted 
            reflections of reality, mimicking human behavior but lacking humanity.
          </p>
          <p className="text-white font-bold tracking-wide mt-4 group-hover:text-gray-300 transition-colors">
            READ MORE →
          </p>
        </div>
      </Link>

      {/* Character 5 - Marcus Vale */}
      <Link 
        to="/character/marcus-vale" 
        className="border-2 border-gray-700 hover:border-white transition-all duration-300 bg-black bg-opacity-50 overflow-hidden group block"
      >
        <div className="aspect-square bg-gray-900 border-b-2 border-gray-700 group-hover:border-white transition-colors flex items-center justify-center">
          <User className="w-24 h-24 text-gray-600 group-hover:text-white transition-colors" />
        </div>
        <div className="p-6">
          <h3 className="text-3xl font-bold mb-2 tracking-wide">MARCUS VALE</h3>
          <p className="text-sm text-gray-500 mb-4 tracking-wider">UNKNOWN</p>
          <p className="text-gray-400 leading-relaxed">
            A voice on the radio. A face in old photographs. Someone who claims to be trying 
            to help you escape. But can you trust someone who shouldn't exist?
          </p>
          <p className="text-white font-bold tracking-wide mt-4 group-hover:text-gray-300 transition-colors">
            READ MORE →
          </p>
        </div>
      </Link>

      {/* Character 6 - IT */}
      <Link 
        to="/character/it" 
        className="border-2 border-gray-700 hover:border-white transition-all duration-300 bg-black bg-opacity-50 overflow-hidden group block"
      >
        <div className="aspect-square bg-gray-900 border-b-2 border-gray-700 group-hover:border-white transition-colors flex items-center justify-center">
          <Skull className="w-24 h-24 text-gray-600 group-hover:text-white transition-colors" />
        </div>
        <div className="p-6">
          <h3 className="text-3xl font-bold mb-2 tracking-wide">IT</h3>
          <p className="text-sm text-gray-500 mb-4 tracking-wider">???</p>
          <p className="text-gray-400 leading-relaxed">
            You'll know when you see it. Or maybe you won't. Maybe it's been with you 
            all along. Maybe it's reading this right now through your eyes.
          </p>
          <p className="text-white font-bold tracking-wide mt-4 group-hover:text-gray-300 transition-colors">
            READ MORE →
          </p>
        </div>
      </Link>
    </div>
  </div>
</section>

      {/* Meet the Team Section */}
      <section id="meet-the-team" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-6xl font-bold mb-16 text-center tracking-wider">MEET THE TEAM</h2>
          <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Maria */}
            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-gray-700 group-hover:border-white transition-all duration-300 flex items-center justify-center bg-gray-900 overflow-hidden">
                <img src="./src/assets/Maria.jpeg" alt="" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-wide">Maria</h3>
              <p className="text-sm text-gray-500 mb-3 tracking-wider">GAME DIRECTOR / LEAD PROGRAMMER</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                First time game developer with a background in software engineering. 
                Maria's vision for T.R.U.S.T. is to create a deeply immersive horror experience that blurs the line between reality and nightmare. 
              </p>
            </div>

            {/* Talia */}
            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-gray-700 group-hover:border-white transition-all duration-300 flex items-center justify-center bg-gray-900 overflow-hidden">
                <img src="./src/assets/talia.jpg" alt="Talia" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-wide">Talia</h3>
              <p className="text-sm text-gray-500 mb-3 tracking-wider">ANIMATOR / 3D ARTIST / CHARACTER DESIGNER</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                With an amazing talent for creating unsettling and surreal visuals,
                Talia brings the twisted world of T.R.U.S.T. to life with her hauntingly beautiful art style.
              </p>
            </div>

            {/* Von */}
            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-gray-700 group-hover:border-white transition-all duration-300 flex items-center justify-center bg-gray-900 overflow-hidden">
                <img src="./src/assets/von.png" alt="Von" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-wide">Von</h3>
              <p className="text-sm text-gray-500 mb-3 tracking-wider">3D ARTIST / CHARACTER DESIGNER</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Von's way of capturing the character's emotions and expressions is truly remarkable. 
                His work on the character design adds a layer of depth and realism that makes the horror feel all the more personal.
              </p>
            </div>
          </div>

          {/* Join the Team CTA */}
          {/* <div className="mt-16 text-center">
            <p className="text-xl text-gray-400 mb-6">Want to be part of our team?</p>
            <a
              href="mailto:careers@trustgame.com"
              className="inline-block px-12 py-4 text-xl font-bold border-2 border-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider"
            >
              WE'RE HIRING
            </a>
          </div> */}
        </div> 
      </section>

      {/* Media Gallery Section */}
      <section id="media" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-6xl font-bold mb-16 text-center tracking-wider">MEDIA GALLERY</h2>
          <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mb-16" />
          
          {/* Trailer Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center tracking-wide">OFFICIAL TRAILER</h3>
            <div className="relative w-full max-w-5xl mx-auto aspect-video bg-gray-900 border-2 border-gray-700 flex items-center justify-center group cursor-pointer hover:border-white transition-colors">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-black transition-all">
                  <Play className="w-12 h-12 ml-2" />
                </div>
                <p className="text-xl text-gray-400">Click to watch trailer</p>
              </div>
              {/* Replace this with actual video embed when ready */}
              {/* <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ... /> */}
            </div>
          </div>

          {/* Screenshots Grid */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center tracking-wide">SCREENSHOTS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i}
                  className="aspect-video bg-gray-900 border border-gray-700 hover:border-white transition-colors cursor-pointer overflow-hidden group"
                >
                  <div className="w-full h-full flex items-center justify-center text-gray-600 group-hover:text-gray-400 transition-colors">
                    Screenshot {i}
                  </div>
                  {/* Replace with actual images */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download/Purchase Section */}
      <section id="download" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-5xl mx-auto w-full text-center">
          <h2 className="text-6xl font-bold mb-8 tracking-wider">WISHLIST THE GAME</h2>
          <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mb-12" />
          
          <p className="text-2xl text-gray-300 mb-16">
            Available soon on multiple platforms
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Steam */}
            <a
              href="#"
              className="p-8 border-2 border-gray-700 hover:border-white hover:bg-white hover:bg-opacity-10 transition-all group"
            >
              <Download className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">STEAM</h3>
              <p className="text-gray-400">PC / Mac / Linux</p>
            </a>

            {/* Itch.io */}
            <a
              href="#"
              className="p-8 border-2 border-gray-700 hover:border-white hover:bg-white hover:bg-opacity-10 transition-all group"
            >
              <Download className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">ITCH.IO</h3>
              <p className="text-gray-400">PC / Mac / Linux</p>
            </a>

            {/* Console */}
            <a
              href="#"
              className="p-8 border-2 border-gray-700 hover:border-white hover:bg-white hover:bg-opacity-10 transition-all group"
            >
              <Download className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">CONSOLES</h3>
              <p className="text-gray-400">Coming Soon</p>
            </a>
          </div>

        </div>
      </section>

      {/* Dev Blog Section */}
      <section id="dev-blog" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-6xl font-bold mb-16 text-center tracking-wider">DEV BLOG</h2>
          <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <article className="border border-gray-700 bg-black bg-opacity-50 overflow-hidden hover:border-white transition-colors group">
              <div className="aspect-video bg-gray-900 border-b border-gray-700 flex items-center justify-center">
                <span className="text-gray-600">Featured Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Feb 20, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    Dev Team
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-wide group-hover:text-gray-300 transition-colors">
                  Development Update #1
                </h3>
                <p className="text-gray-400 mb-4">
                  We're excited to share our progress on T.R.U.S.T. and give you a behind-the-scenes look at what we've been working on...
                </p>
                <Link to="/blog/development-update-1" className="text-white hover:text-gray-300 font-bold tracking-wide">
                  READ MORE →
                </Link>
              </div>
            </article>

            {/* Blog Post 2 */}
            {/* <article className="border border-gray-700 bg-black bg-opacity-50 overflow-hidden hover:border-white transition-colors group">
              <div className="aspect-video bg-gray-900 border-b border-gray-700 flex items-center justify-center">
                <span className="text-gray-600">Featured Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Feb 15, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    Art Director
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-wide group-hover:text-gray-300 transition-colors">
                  The Art of Horror
                </h3>
                <p className="text-gray-400 mb-4">
                  Creating the unsettling atmosphere of T.R.U.S.T. requires careful attention to visual design and psychological elements...
                </p>
                <Link to="/blog/art-of-horror" className="text-white hover:text-gray-300 font-bold tracking-wide">
                  READ MORE →
                </Link>
              </div>
            </article> */}

            {/* Blog Post 3 */}
            {/* <article className="border border-gray-700 bg-black bg-opacity-50 overflow-hidden hover:border-white transition-colors group">
              <div className="aspect-video bg-gray-900 border-b border-gray-700 flex items-center justify-center">
                <span className="text-gray-600">Featured Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Feb 10, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    Sound Designer
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-wide group-hover:text-gray-300 transition-colors">
                  Sound Design Deep Dive
                </h3>
                <p className="text-gray-400 mb-4">
                  Audio plays a crucial role in horror games. Here's how we're crafting the soundscape to keep you on edge...
                </p>
                <Link to="/blog/sound-design-deep-dive" className="text-white hover:text-gray-300 font-bold tracking-wide">
                  READ MORE →
                </Link>
              </div>
            </article> */}
          </div>

          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-block px-12 py-4 text-xl font-bold border-2 border-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider"
            >
              VIEW ALL POSTS
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          {/* Social Media Links */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center tracking-wider">JOIN THE COMMUNITY</h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {/* <a
                href="https://discord.gg/your-server"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:text-gray-400 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <span className="font-bold text-sm tracking-wide">DISCORD</span>
              </a> */}

              <a
                href="https://www.youtube.com/@Intermeritclub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:text-gray-400 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="font-bold text-sm tracking-wide">YOUTUBE</span>
              </a>

              <a
                href="https://www.twitch.tv/intermeritclub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:text-gray-400 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                  </svg>
                </div>
                <span className="font-bold text-sm tracking-wide">TWITCH</span>
              </a>

                <a
                href="https://www.instagram.com/trustindiegame"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:text-gray-400 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.365-.333 2.632-1.308 3.607-.975.975-2.242 1.246-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.365-.063-2.632-.333-3.607-1.308-.975-.975-1.246-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.778 6.98 6.978 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <span className="font-bold text-sm tracking-wide">INSTAGRAM</span>
              </a>

              <a
                href="https://www.tiktok.com/@trustindiegames"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:text-gray-400 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <span className="font-bold text-sm tracking-wide">TIKTOK</span>
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          {/* <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4 text-center tracking-wider">STAY UPDATED</h3>
            <p className="text-center text-gray-400 mb-6">Subscribe to our newsletter for exclusive updates and behind-the-scenes content</p>
            <form className="flex gap-4 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-black border-2 border-gray-700 focus:border-white outline-none text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-black font-bold tracking-wider hover:bg-gray-300 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div> */}

          {/* Copyright */}
          <div className="text-center text-gray-500 pt-8 border-t border-gray-800">
            <p>&copy; 2024 T.R.U.S.T. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
