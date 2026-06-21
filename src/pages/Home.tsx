import { Trophy, Users, Lightbulb, Award } from "lucide-react";
import headerBg from "../../imports/poster13.png";
import { Link } from "react-router";
import Team from "../../imports/Team.png";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white py-20 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to BengalBots
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering students through robotics, innovation,
            and teamwork
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Who We Are
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Bengal Bots is LSU's robotics organization
                connecting students to hands-on projects and
                developing skills beneficial for coursework and
                future careers.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our organization is comprised of multiple
                divisions each with a different focus in
                robotics. Check them out below!
              </p>

              <Link
                to="/divisions"
                className="inline-block px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                Explore Divisions
              </Link>
            </div>
            <img
              src={Team}
              alt="BengalBots Team"
              className="rounded-lg h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Recent Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border-2 border-purple-600 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                2026
              </div>
              <h3 className="font-bold text-xl mb-2">
                2nd place Bengal Bot Brawl
              </h3>
            </div>
            <div className="border-2 border-purple-600 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                2026
              </div>
              <h3 className="font-bold text-xl mb-2">
                VEXU Regionals
              </h3>
              <p className="text-gray-600">
                Competed in VEXU Regionals.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* Updates Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
      Updates & Announcements
    </h2>

    <div className="max-w-4xl mx-auto space-y-6">

      {/* Update Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <p className="text-sm text-purple-600 font-semibold mb-2">
          Upcoming Event
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Fall Schedule
        </h3>

        <p className="text-gray-600 mb-6">
          Coming soon
        </p>

        <Link
          to="/involvement"
          className="inline-block px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors"
        >
          Learn More
        </Link>
      </div>

      {/* Optional Second Update */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <p className="text-sm text-purple-600 font-semibold mb-2">
          Upcoming Event
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Coming Soon
        </h3>

        <p className="text-gray-600">
          Coming Soon
        </p>
      </div>

    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-16 bg-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Join Our Team */}
            <div className="text-center p-6">
              <h2 className="text-4xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl mb-8">
                Interested in robotics? We're always looking for
                passionate students to join our team and make a
                difference.
              </p>
              <Link
                to="/involvement"
                className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Involved
              </Link>
            </div>

            {/* Sponsorship */}
            <div className="text-center p-6">
              <h2 className="text-4xl font-bold mb-6">
                Interested in Sponsoring?
              </h2>
              <p className="text-xl mb-8">
                Support our team's mission and help us compete
                at the highest level. Your sponsorship makes a
                real difference.
              </p>
              <Link
                to="/sponsors"
                className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                Sponsor Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
