import PFTImage from "../../imports/PFTImage.png";
import PFT_Hallway from "../../imports/PFT_Hallway.jpg";
import VEXU from "../../imports/VEXU2026.png";
import Combat from "../../imports/Combat2026.jpg";
import RND from "../../imports/RND2025.jpg";
import Marine from "../../imports/Marine2026.jpg";
import { Link } from "react-router";

type Division = {
  title: string;
  description: string;
  image: string;
};

export default function Divisions() {
  const divisions: Division[] = [
    {
      title: "Research & Development",
      description:
        "The Bengal Bot Research & Development Division is dedicated to advancing innovation through research, engineering, and hands-on project development across a variety of fields. The division provides members with opportunities to explore and develop individual and collaborative projects involving robotics, artificial intelligence, embedded systems, automation, software development, and emerging technologies.",
      image: RND,
    },
    {
      title: "Combat Robotics",
      description:
        "Design and build 30lb sumo robots for Bengal Bot Brawl.",
      image: Combat,
    },
    {
      title: "Marine Robotics",
      description:
        "The maritime robotics division consists of a team designing an underwater remotely operated vehicle (ROV) for the MATE ROV engineering competition in summer of 2027.",
      image: Marine,
    },
    {
      title: "VEX U",
      description:
        "VEXU is the collegiate version of VEX V5, where teams compete in a yearly changing game involving shooting, stacking, and more. Unlike high school competitions, VEXU includes advanced fabrication tools and a two-robot requirement, encouraging adaptability in a fast-paced environment.",
      image: VEXU,
    },
  ];

  return (
    <div className="w-full">

      {/* HERO BANNER */}
      <section
        className="relative h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${PFTImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">Our Divisions</h1>
        </div>
      </section>

      {/* DIVISIONS LIST */}
      <section className="space-y-16 py-16">

        {divisions.map((d, i) => (
          <div
            key={i}
            className={`max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* IMAGE */}
            <div className="w-full md:w-1/2">
              <img
                src={d.image}
                alt={d.title}
                className="w-full h-80 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900">
                {d.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {d.description}
              </p>
            </div>

          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Team
          </h2>

          <p className="text-xl mb-8">
            Interested in robotics? We’re always looking for new members.
          </p>

          <Link
                to="/involvement"
                className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Us!
              </Link>
        </div>
      </section>

    </div>
  );
}