import poster13 from "../../imports/poster13.png";

export default function Sponsors() {
  return (
    <div>

      {/* HERO */}
      <section
        className="relative h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${poster13})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold">Sponsors</h1>
          <p className="text-xl mt-4">
            Partner with BengalBots and support student innovation
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">No sponsors yet</h2>
        <p className="text-gray-600">
          We are currently seeking partnerships for upcoming seasons. Interested in sponsoring? Send us an email at Bengalbots@lsu.edu!
        </p>
      </section>

    </div>
  );
}