import { Link, useParams } from 'react-router';
import { Navbar } from './Navbar';
import { ArrowLeft, Skull, User } from 'lucide-react';

const characters = {
  'ella-leonza-calma': {
    name: 'ELLA-LEONZA CALMA',
    role: 'Colossians 04:05-06',
    image: '/characters/El_closeup.jpeg',
    description: '“05 | Walk in wisdom toward those who are outside, redeeming the time. 06 | Let your speech always be with grace, seasoned with salt, that you may know how you ought to answer each one.” - Colossians 04:05-06',
    fullBio: `“Restored, not perfect.”

      Ella-Leonza Calma, known as El, is the oldest of three siblings — a role that shaped her into someone who learned strength early. Baptized at nine, she grew up knowing the Lord, but life’s pain slowly pulled her into a season of being lukewarm in her faith.

      In high school, she formed a deep bond with Jeremiah Tech, a friendship that became an important chapter in her story before life led them in different directions.

      At 20, Ella felt the Lord call her back — and this time, she answered. Her journey wasn’t instant healing; she faced bitterness, depression, and struggles with self-worth. But at 25, during an unplanned baptism after a sermon on the Holy Spirit, something shifted. Surrounded by prayer, she broke down and experienced a release she hadn’t allowed herself in years.

      That day marked the beginning of true restoration — not perfection, but surrender.`,
      abilities: [
        'Sacred Elemental Archery - Infuses arrows with awakened spiritual power',
        'Fire Arrow - A blazing strike that purifies and consumes',
        'Earth Arrow - A grounding force that binds enemies to their fate',
        'Debater’s Insight - Reads opponents quickly, countering tactics with precision',
        'Renewed Spirit - Gains strength and focus after enduring hardship'
      ],
    weakness: 'Self-Doubt - Lingering insecurities can momentarily weaken her resolve'
  },
  'rreei-spencer': {
  name: 'R’REEI SPENCER',
  role: 'Hebrews 12:11',
  image: '/characters/rreei-profile.png',
  description: '“11 | Now no chastening seems to be joyful for the present, but painful; nevertheless, afterward it yields the peaceable fruit of righteousness to those who have been trained by it.” - Hebrews 12:11',
  fullBio: `“Trained by the Fire.”

      R’Reei Spencer, known as Reei, carries the presence of a commander — decisive, disciplined, and fiercely competitive. Gymnastics shaped her early years, building resilience and control that later defined her precision in knife-throwing, a skill sharpened within her family through focus and relentless practice.

      Yet her most significant battles were internal.

      Before fully surrendering her life to Abba, Reei struggled with insecurity, comparison, and distorted identity. Lust and sexual immorality were normalized around her, and for a time, she believed those patterns were freedom.

      Through conviction and correction, Abba began refining her — not through condemnation, but through discipline. The process was painful, but it produced something lasting: peace rooted in truth.

      Now confident not in performance but in identity, Reei studies film with intention, desiring to create stories that honor the One who restored her. Drawn to fire for its beauty and power, she understands it as refinement — a force that reveals what endures.

      R’Reei Spencer walks trained, refined, and grounded in righteousness.`,
  abilities: [
    'Precision Blade Mastery - Near-perfect knife accuracy under pressure',
    'Refined Focus - Discipline sharpens her clarity in chaotic moments',
    'Competitive Surge - Performance heightens when challenged directly',
    'Cinematic Discernment - Analyzes structure, symbolism, and hidden meaning',
    'Command Presence - Naturally assumes leadership in high-stakes environments'
  ],
  weakness: 'Severity - High standards and intensity can make her slow to extend grace in moments of weakness'
  },
  'robin-baker': {
    name: 'ROBIN BAKER',
    role: 'Proverbs 31:25',
    icon: 'user',
    description: '“Strength and dignity are her clothing, and she laughs at the time to come.” - Proverbs 31:25',
    fullBio: `Robin Baker once carried deep wounds — particularly from relationships that left her guarded and independent to a fault. Hurt shaped her mindset, convincing her she needed no one and wanted no one. Intimacy became detached, self-protected, and eventually replaced by substitutes that numbed rather than healed.

    But when the Lord called her name — clearly and persistently — she answered.

    In obedience, Robin surrendered everything tied to her past. She removed what no longer aligned with holiness and allowed God to cleanse not only her space, but her heart. That moment marked the beginning of true transformation. Old mindsets fell. A new identity emerged.

    The very next day, she met Kai.

    At first, he tested her patience — awkward, persistent, and undeniably different. What began as reluctant kindness grew into friendship. Friendship grew into something neither of them expected. Their first date centered on conversations about God, and Robin recognized something genuine in him: a sincere love for the Lord.

    Through shared Bible studies and growing faith, their relationship deepened. Kai eventually asked her to marry him — and she said yes.

    Now, Robin walks in a marriage rooted in Christ, built on communication, honesty, and intentional love. The independence that once protected her has been reshaped into strength guided by grace.

    Redeemed, restored, and no longer defined by past wounds, Robin Baker stands as a woman made new.`,
    abilities: [
      'ISFJ - The Defender: Loyal, protective, and empathetic',
      'Mastery of all firearms — precise, confident, and unshakable',
      'Strong intuition — reads people and situations quickly',
      'Patient and nurturing — supports others while staying grounded',
      'Resilient — able to endure challenges without losing composure'
    ],
    weakness: 'Emotional Vulnerability - prolonged self-sacrifice and suppressed feelings affect her composure'
  },
  'jeremiah-tech': {
    name: 'JEREMIAH TECH',
    role: 'JEREMIAH 29:11',
    icon: 'user',
    description: '“11 | For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.” - Jeremiah 29:11',
    fullBio: `“Master of Precision.”

      Jeremiah Tech, once a professional NBA player, stepped away from the spotlight to invest in something greater — his family’s legacy. His mother, founder of TechHorizon, built a company for future generations, instilling in him a deep appreciation for purpose, perseverance, and innovation.

      Outside of work, Jeremiah channels creativity and strategy into the kitchen, mastering recipes with the same precision he once applied on the court. Video games provide a space to relax, compete, and explore — a balance to his disciplined life.

      Spiritually, Jeremiah wrestled with insecurity, rejection, and self-doubt. The pressures of performance and personal expectation weighed heavily. But through divine guidance and reflection, he discovered that true fulfillment was not just in achievement — it was in relationships, faith, and intentional living.

      El, a friendship forged in youth, eventually revealed itself as a profound blessing. Through connection, patience, and grace, Jeremiah embraced the fullness of love, partnership, and spiritual alignment.

      Now grounded, focused, and unwavering, Jeremiah Tech embodies innovation, precision, and heart — a man of action shaped by discipline, faith, and purpose.`,
    abilities: [
      'ISTP – The Virtuoso: Creative, analytical, and adaptive',
      'Can Craft Without Planning – Builds solutions instinctively and efficiently',
      'Strategic Mind – Evaluates situations quickly and acts decisively',
      'Independent – Comfortable solving challenges alone',
      'Calm Under Pressure – Maintains focus in tense situations'
    ],
    weakness: 'Overly Skeptical – doubt and mistrust can hinder openness'
  },
  'tanner-blacksmith': {
    name: 'TANNER BLACKSMITH',
    role: 'JOHN 14:01-03',
    icon: 'user',
    description: '“01 | Do not let your hearts be troubled. You believe in God; believe also in me. 02 | My Father’s house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you? 03 | And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am.” - John 14:01-03',
    fullBio: `“From Control to Surrender.”

      Tanner Blacksmith grew up in rural Virginia, the first in his family to leave home in search of purpose. Early ambition led him into the military, where his desire for control often eclipsed trust in God. His first marriage ended in heartbreak, leaving him disillusioned and spiritually unmoored.

      A season of darkness brought him to the brink of despair, even planning to end his life. But divine intervention stopped him, and he surrendered fully to the Lord. This moment became the foundation for transformation, humility, and renewed purpose.

      It was after surrendering that Tanner met R’Reei Spencer. Their connection, marked by peace and alignment with God’s will, blossomed into marriage and shared faith. Baptized together, Tanner now walks in purpose, guided not by his own control but by God’s direction.

      Grounded, disciplined, and resilient, Tanner Blacksmith balances strength with surrender — a man shaped by past struggles, faith, and the gift of a second chance.`,
    abilities: [
      'ESTJ – The Executive: Organized, decisive, and natural leader',
      'Martial Arts – Skilled in hand-to-hand combat and physical strategy',
      'Strategic Thinker – Plans effectively and executes decisively',
      'Resilient – Overcomes hardship with determination',
      'Grounded in Faith – Strengthened by surrender and divine guidance'
    ],
    weakness: 'Over-Controlled – struggles with inflexibility, stubbornness, and judgment, especially when adjusting to change'
  },
  'kai-baker': {
    name: 'KAI BAKER',
    role: 'NUMBERS 23:19',
    icon: 'user',
    description: '“19 | God is not human, that he should lie, not a human being, that he should change his mind. Does he speak and then not act? Does he promise and not fulfill?” - Numbers 23:19',
    fullBio: `“Redeemed, Not Perfect.”

    Kai, born and raised in Brazil, lived much of his early life chasing attention and power without understanding true love. The class clown and charmer, he struggled with pornography, fleeting relationships, and a distorted view of intimacy. Yet even in his brokenness, God saw him, loved him, and called him to transformation.

    Through surrender to Christ, Kai found forgiveness, healing, and purpose. He learned to make amends, forgive others, and live with integrity. Meeting Robin Baker became a turning point — a relationship rooted in mutual growth, faith, and love, where God’s guidance remains central.

    Now grounded, playful, and deeply devoted, Kai balances his natural charm and energy with faith, love, and commitment. Not perfect, but redeemed, he walks life fully alive — still spirited, still bold, but forever changed.
`,
    abilities: [
      'ESFP – The Entertainer: Energetic, charming, and charismatic',
      'Rope Mastery – Skilled in creative and tactical use of rope',
      'Forgiving Heart – Moves past conflict with grace',
      'Adaptive – Responds fluidly to changing situations',
      'Passionate & Devoted – Fully engages in relationships and purpose'
    ],
    weakness: 'Emotional Reactivity – sensitive, easily bored, and unfocused at time'
  }
};

export function CharacterPage() {
  const { slug } = useParams();
  const character = characters[slug];

  if (!character) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Character Not Found</h1>
          <Link to="/" className="text-white hover:text-gray-300">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <article className="max-w-4xl mx-auto px-4 py-20">
        {/* Back Button */}
        <Link 
          to="/#character-profiles"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Characters
        </Link>

        {/* Character Header */}
        <div className="mb-12 text-center">
          <div className="w-48 h-48 mx-auto mb-8 border-4 border-gray-700 flex items-center justify-center bg-gray-900">
              {character.image ? (
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              ) : character.icon === 'skull' ? (
                <Skull className="w-32 h-32 text-white" />
              ) : (
                <User className="w-32 h-32 text-white" />
              )}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wider">
            {character.name}
          </h1>
          <p className="text-xl text-gray-500 tracking-wider mb-8">{character.role}</p>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-xl text-gray-300 leading-relaxed italic border-l-4 border-white pl-6">
            {character.description}
          </p>
        </div>

        {/* Full Bio */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 tracking-wide">BIOGRAPHY</h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            {character.fullBio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>

        {/* Abilities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 tracking-wide">ABILITIES & TRAITS</h2>
          <ul className="space-y-3">
            {character.abilities.map((ability, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-white mt-1">▸</span>
                <span className="text-gray-300">{ability}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weakness */}
        <div className="mb-12 p-6 border border-gray-700 bg-gray-900 bg-opacity-50">
          <h3 className="text-xl font-bold mb-3 tracking-wide text-red-500">WEAKNESS</h3>
          <p className="text-gray-300">{character.weakness}</p>
        </div>

        {/* Back to All Characters */}
        <div className="text-center">
          <Link
            to="/#character-profiles"
            className="inline-block px-12 py-4 text-xl font-bold border-2 border-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider"
          >
            VIEW ALL CHARACTERS
          </Link>
        </div>
      </article>
    </div>
  );
}


