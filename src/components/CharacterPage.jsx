import { Link, useParams } from 'react-router';
import { Navbar } from './navbar';
import { ArrowLeft, Skull, User } from 'lucide-react';

const characters = {
  'the-watcher': {
    name: 'THE WATCHER',
    role: 'ANTAGONIST',
    icon: 'skull',
    description: 'A mysterious entity that lurks in the shadows. It sees everything, knows everything, and feeds on your fear. You can\'t hide from what\'s already inside your mind.',
    fullBio: `The Watcher is not bound by the laws of reality as we understand them. It exists in the spaces between perception and truth, feeding on fear and uncertainty. Those who have encountered it describe a presence that seems to know their deepest secrets, their darkest fears.

    No one knows where The Watcher came from or what it truly wants. Some theorize it's a manifestation of collective human anxiety, while others believe it's something far more sinister - an entity from beyond our dimension that has found a way to breach the barrier between worlds.

    What we do know is this: once The Watcher has set its sights on you, there's no escape. It will follow you through every shadow, every reflection, every moment of doubt. And when it finally reveals itself, you'll wish it had remained hidden.`,
    abilities: [
      'Reality Manipulation - Can alter perception of the environment',
      'Omnipresence - Appears in multiple locations simultaneously',
      'Fear Feeding - Grows stronger from player\'s anxiety',
      'Dimensional Shifting - Exists partially outside normal space-time'
    ],
    weakness: 'Unknown - Some believe maintaining mental clarity weakens its influence'
  },
  'alex-morgan': {
    name: 'ALEX MORGAN',
    role: 'PROTAGONIST',
    icon: 'user',
    description: 'A journalist investigating strange occurrences in an abandoned facility. Armed with only a camera and determination, Alex must uncover the truth before reality itself collapses.',
    fullBio: `Alex Morgan was once a respected investigative journalist known for exposing corporate corruption and government cover-ups. But when they stumbled upon reports of mysterious disappearances connected to an abandoned research facility, they found themselves drawn into something far beyond normal journalism.

    Armed with only a camera, a recorder, and an unwavering determination to uncover the truth, Alex ventured into the facility alone. What they found there would challenge everything they thought they knew about reality, consciousness, and the nature of fear itself.

    Now trapped in a nightmare that seems to shift and change with every passing moment, Alex must use their investigative skills and sharp instincts to survive. But as the line between what's real and what's not begins to blur, they're forced to confront a terrifying question: How can you trust your own mind when reality itself becomes unreliable?`,
    abilities: [
      'Investigation - Can discover hidden clues and secrets',
      'Camera Documentation - Taking photos reveals hidden truths',
      'Journalistic Intuition - Strong sense for finding leads',
      'Mental Fortitude - Can resist reality distortions better than most'
    ],
    weakness: 'Human limitations - vulnerable to physical and psychological threats'
  },
  'dr-sarah-chen': {
    name: 'DR. SARAH CHEN',
    role: 'ALLY / ???',
    icon: 'user',
    description: 'The last surviving scientist from the failed experiment. Her cryptic messages may be your only hope... or the final piece of a sinister puzzle.',
    fullBio: `Dr. Sarah Chen was the lead researcher on Project T.R.U.S.T., a classified experiment that sought to push the boundaries of human consciousness and perception. Brilliant, ambitious, and driven by a genuine desire to advance human understanding, she assembled a team of the world's brightest minds.

    But something went wrong. Terribly, catastrophically wrong. The experiment succeeded beyond anyone's wildest dreams - or nightmares. And Dr. Chen found herself the sole survivor, trapped in a reality that no longer follows the rules she spent her life studying.

    Now she reaches out through fragmented messages, cryptic warnings, and distorted communications. Is she trying to help Alex escape? Is she seeking redemption for her role in the catastrophe? Or has her prolonged exposure to the experiment's effects transformed her into something else entirely?

    Trust her at your own risk.`,
    abilities: [
      'Scientific Knowledge - Understands the facility\'s systems',
      'Remote Communication - Can send messages through various channels',
      'Security Access - Has clearance to locked areas',
      'Unknown Abilities - Her time in the facility may have changed her'
    ],
    weakness: 'Mental instability - prolonged exposure has affected her psyche'
  },
  'the-echoes': {
    name: 'THE ECHOES',
    role: 'ENTITIES',
    icon: 'skull',
    description: 'Remnants of past victims trapped between dimensions. They appear as distorted reflections of reality, mimicking human behavior but lacking humanity.',
    fullBio: `The Echoes are what remain when a person is consumed by the experiment - fragments of consciousness trapped between dimensions, neither fully alive nor completely gone. They exist as distorted reflections of their former selves, mimicking human behavior without truly understanding it.

    They appear as glitching, static-filled figures that seem almost human from a distance. But get too close, and you'll see the truth: empty eyes, distorted features, movements that don't quite follow the laws of physics. They're like recordings of people, playing on loop but slowly degrading with each repetition.

    The Echoes aren't necessarily hostile, but they're unpredictable and dangerous. They may try to communicate, to reach out, but their attempts at interaction often result in reality distortions and psychological harm. Some seem to be trying to warn you. Others appear to want to drag you down with them.

    Each Echo was once a person - a scientist, a security guard, a test subject. They had names, families, dreams. Now they're just shadows, forever trapped in the nightmare that consumed them.`,
    abilities: [
      'Reality Distortion - Their presence warps the environment',
      'Mimicry - Can imitate human voices and behaviors',
      'Phase Shifting - Can appear and disappear unpredictably',
      'Psychic Resonance - Can affect the player\'s mental state'
    ],
    weakness: 'Unstable - can be disrupted by strong light or sound'
  },
  'marcus-vale': {
    name: 'MARCUS VALE',
    role: 'UNKNOWN',
    icon: 'user',
    description: 'A voice on the radio. A face in old photographs. Someone who claims to be trying to help you escape. But can you trust someone who shouldn\'t exist?',
    fullBio: `Marcus Vale is an enigma wrapped in a paradox. According to all official records, he died in the initial experiment failure. His body was recovered, identified, and buried. And yet, he's here - or at least, something claiming to be him is here.

    He contacts you through radio transmissions, appearing in old photographs and video recordings that seem to update in real-time. He claims to have found a way to exist "between the cracks" of reality, and insists he's trying to help you escape before you suffer the same fate he did.

    His knowledge of the facility is extensive, and his advice has saved your life more than once. But there's something off about him - inconsistencies in his story, moments where his guidance leads you into danger rather than away from it. Is he truly trying to help? Is he being controlled by something else? Or is he part of an elaborate trap?

    The most terrifying possibility: Maybe Marcus Vale isn't Marcus Vale at all. Maybe he's something wearing his face, using his memories, speaking with his voice. And maybe that something has been manipulating you from the very beginning.`,
    abilities: [
      'Omnipresent Communication - Can contact you through any device',
      'Temporal Knowledge - Knows things that haven\'t happened yet',
      'Reality Navigation - Can guide through shifting environments',
      'Unknown Powers - His true nature and capabilities remain mysterious'
    ],
    weakness: 'Unknown - his incorporeal nature may have limitations'
  },
  'it': {
    name: 'IT',
    role: '???',
    icon: 'skull',
    description: 'You\'ll know when you see it. Or maybe you won\'t. Maybe it\'s been with you all along. Maybe it\'s reading this right now through your eyes.',
    fullBio: `We don't talk about IT. Not because we're afraid to - though we are - but because giving IT a name, a description, an identity somehow makes IT more real. And IT is already too real as it is.

    Some say IT is the experiment itself, given form and consciousness. Others believe IT is what lies beyond the veil of reality, finally given a window into our world. A few whisper that IT has always been here, lurking in the spaces between thoughts, and the experiment simply gave IT the power to manifest.

    IT doesn't follow rules. IT doesn't have patterns. IT simply IS, and that's what makes IT so terrifying.

    Those who have glimpsed IT describe different things: A shadow without a source. A sound that shouldn't exist. A presence that feels like drowning in empty space. A figure that wears different faces - sometimes your own. An absence of everything that somehow has weight and substance.

    The only consistent description: When you encounter IT, you'll know. Every instinct will scream danger. Every nerve will fire in primal terror. Your rational mind will shut down, leaving only the ancient, animal part of your brain that knows, without question, that you are in the presence of something that should not be.

    And by then, it's already too late.

    IT sees you. IT knows you. IT has always known you.

    Because IT is what lurks behind every shadow you've ever feared, every nightmare you've ever had, every moment of existential dread you've ever experienced.

    IT is the thing that waits in the dark.

    And now, the dark is everywhere.`,
    abilities: [
      '█████████ - [DATA EXPUNGED]',
      '█████████ - [DATA EXPUNGED]',
      '█████████ - [DATA EXPUNGED]',
      'Everything - IT can do anything IT wants'
    ],
    weakness: '???'
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
            {character.icon === 'skull' ? (
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


