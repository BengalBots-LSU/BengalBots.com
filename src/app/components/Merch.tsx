import poster13 from "../../../imports/poster13.png";

export default function Merch() {
  // 1. Paste your third-party shop link right here!
  const shopUrl = "https://www.redbubble.com/people/BengalBots/shop";

  return (
    <div>
      {/* HERO BANNER */}
      <section
        className="relative h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${poster13})` }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold tracking-tight">Merch</h1>
          <p className="text-xl mt-4 max-w-md mx-auto font-light text-gray-200">
            Support BengalBots by representing our team in style.
          </p>
        </div>
      </section>

      {/* INTRO & MAIN CTA */}
      {/* Increased padding-top (pt-32) to push everything further down from the hero banner */}
      <section className="max-w-4xl mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-gray-900">Official BengalBots Store</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          We partner with a secure third-party provider to print and ship our official gear. 
          All proceeds directly support our robotics competitions, tools, and travel budgets.
        </p>
        
        {/* Big Aesthetic Button - Increased margin-top (mt-12) to drop it lower from the paragraph */}
        <div className="mt-12 w-full flex justify-center">
          <a
            href={shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 duration-200 text-center"
          >
            Visit Our Live Merch Shop →
          </a>
        </div>
      </section>
    </div>
  );
}