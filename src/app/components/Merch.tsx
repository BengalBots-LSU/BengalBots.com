import poster13 from "../../imports/poster13.png";

export default function Merch() {
  return (
    <div>

      {/* HERO BANNER */}
      <section
        className="relative h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${poster13})` }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold">Merch</h1>
          <p className="text-xl mt-4">
            Support BengalBots by representing our team
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold">Official BengalBots Merchandise</h2>
        <p className="text-gray-600 mt-3">
          All proceeds go toward supporting robotics competitions, tools, and travel.
        </p>
        <p className="text-gray-600 mt-3">
          Policy: Please pay first before placing an order. Failure to do so will result in order being voided.
        </p>
      </section>

      {/* MERCH GRID (4 COLUMNS) */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* ITEM 1 */}
          <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
            <div className="h-56 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Coming Soon</span>
            </div>

            <div className="p-5 text-center">
              <h3 className="text-xl font-bold">Coming Soon</h3>
              <p className="text-gray-600 mt-2">
                Coming Soon
              </p>

              <button className="mt-4 px-5 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
            <div className="h-56 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Coming Soon</span>
            </div>

            <div className="p-5 text-center">
              <h3 className="text-xl font-bold">Coming Soon</h3>
              <p className="text-gray-600 mt-2">
                Coming Soon
              </p>

              <button className="mt-4 px-5 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
            <div className="h-56 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Coming Soon</span>
            </div>

            <div className="p-5 text-center">
              <h3 className="text-xl font-bold">Coming Soon</h3>
              <p className="text-gray-600 mt-2">
                Coming Soon
              </p>

              <button className="mt-4 px-5 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed">
                Coming soon
              </button>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
            <div className="h-56 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Coming Soon</span>
            </div>

            <div className="p-5 text-center">
              <h3 className="text-xl font-bold">Coming Soon</h3>
              <p className="text-gray-600 mt-2">
                Coming Soon
              </p>

              <button className="mt-4 px-5 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}