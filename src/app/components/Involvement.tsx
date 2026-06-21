import poster13 from "../../imports/poster13.png";

export default function Involvement() {
  return (
    <div>

      {/* HERO */}
      <section
        className="relative h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${poster13})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold">Get Involved</h1>
          <p className="text-xl mt-4">
            Join meetings, events, and our Discord community
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center space-y-10">

        {/* Schedule Placeholder */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Semester Schedule</h2>
          <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500">
              Schedule Image Coming Soon
            </span>
          </div>
        </div>

        {/* Discord */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Join Our Discord</h2>

          <a
            href="https://discord.com/invite/f9rmbGcU4y"
            target="_blank"
            className="inline-block px-8 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
          >
            Join the Discord
          </a>
        </div>

      </section>

    </div>
  );
}