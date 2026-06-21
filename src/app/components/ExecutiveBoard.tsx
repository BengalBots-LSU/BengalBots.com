import bannerBg from "../../imports/poster13.png";
import Adolfo from "../../imports/Adolfo.png";
import Chaz from "../../imports/Chaz.png";
import Fronchetti from "../../imports/Fronchetti.jpeg";
import Jai from "../../imports/Jai.jpg";
import JP from "../../imports/JP.jpg";
import Remy from "../../imports/Remy.png";
import Thomas from "../../imports/Thomas.png";
import Will from "../../imports/Will.png";
import Yousuf from "../../imports/Yousuf.jpeg";
import Adan from "../../imports/Adan.jpg";
import Tri from "../../imports/Tri.jpeg";
import { Linkedin } from "lucide-react";

/* ---------------- EXEC BOARD DATA ---------------- */
const execBoard = [
  {
    name: "Thomas Leger",
    role: "President",
    img: Thomas,
    bio: "3rd year Mechanical Engineering Student",
    linkedin: "https://www.linkedin.com/in/thomas-leger-bb5599330/"
  },
  {
    name: "Jean Paul 'JP' Gonzalez",
    role: "Vice President",
    img: JP,
    bio: "6th year Cybersecurity, Computer Engineering, and Electrical Engineering Student",
    linkedin: "https://www.linkedin.com/in/maybe-jp-gonzalez/"
  },
  {
    name: "Yousuf Atteia",
    role: "Secretary",
    img: Yousuf,
    bio: "3rd year Mechanical Engineering Student",
    linkedin: "https://www.linkedin.com/in/yousuf-atteia-56672a27b/"
  },
  {
    name: "William Patrias",
    role: "Treasurer",
    img: Will,
    bio: "3rd year Mechanical Engineering Student",
    linkedin: "https://www.linkedin.com/in/william-patrias-568593344/"
  },
  {
    name: "Jai Bergeron",
    role: "Social Media / PR Chair",
    img: Jai,
    bio: "4th year Mechanical Engineering Student",
    linkedin: "https://www.linkedin.com/in/jai-bergeron-887294298/"
  },
  {
    name: "Chaz Chenevert",
    role: "Combat Lead",
    img: Chaz,
    bio: "2nd year Mechanical Engineering Student",
    linkedin: "https://www.linkedin.com/in/chaz-chenevert-456676403/"
  },
  {
    name: "Adolfo Mellado Suarez",
    role: "R&D Lead",
    img: Adolfo,
    bio: "3rd year Mechanical Engineering Student",
    linkedin: "https://www.linkedin.com/in/adolfo-mellado-suarez-100376360/"
  },
  {
    name: "Remy Angelle",
    role: "Marine Lead",
    img: Remy,
    bio: "4th year Mechanical Engineering Student",
    linkedin: "https://www.linkedin.com/in/remyangelle/"
  },
  {
    name: "Adan Betancourt",
    role: "VEXU Lead",
    img: Adan,
    bio: "2nd year Mechanical Engineering Student",
    linkedin: "https://www.linkedin.com/in/adan-betancourt-098400406/"
  },
  {
    name: "Tri Nguyen",
    role: "Webmaster",
    img: Tri,
    bio: "2nd year Electrical Engineering Student",
    linkedin: "https://www.linkedin.com/in/tri-nguyen-1a6817394/"
  }
];

/* ---------------- CARD COMPONENT ---------------- */
function ExecCard({ person }) {
  const cardClasses = "relative bg-white border border-gray-100 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:border-purple-100 flex flex-row items-center gap-4 text-left";
  const imgClasses = "rounded-xl object-cover shrink-0 border border-gray-50 w-16 h-16 sm:w-20 sm:h-20";

  return (
    <div className={cardClasses}>
      <img src={person.img} alt={person.name} className={imgClasses} />
      
      <div className="flex-1 min-w-0">
        <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 mb-1">
          {person.role}
        </span>
        <h3 className="text-gray-900 font-bold tracking-tight text-lg sm:text-xl truncate">
          {person.name}
        </h3>
        {/* Removed line-clamp-2 to allow full descriptions to display */}
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
          {person.bio}
        </p>

        {person.linkedin && (
          <a 
            href={person.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-3 inline-flex items-center text-gray-400 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={18} strokeWidth={2.2} />
          </a>
        )}
      </div>
    </div>
  );
}

/* ---------------- PAGE ---------------- */
export default function About() {
  const officers = [
    execBoard[0], // President
    execBoard[1], // Vice President
    execBoard[2], // Secretary
    execBoard[3], // Treasurer
    execBoard[4], // Social Media / PR Chair
    execBoard[9]  // Webmaster
  ];      
  
  const teamLeads = [
    execBoard[5], // Combat Lead
    execBoard[6], // R&D Lead
    execBoard[7], // Marine Lead
    execBoard[8]  // VEXU Lead
  ]; 

  return (
    <div className="min-h-screen bg-gray-50/50 pb-24">
      {/* HERO */}
      <section
        className="text-white py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            About BengalBots
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Meet the team driving engineering innovation at LSU.
          </p>
        </div>
      </section>

      {/* STAFF ADVISOR */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 tracking-tight">
          Faculty Advisor
        </h2>
        <div className="max-w-md mx-auto bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src={Fronchetti} alt="Felipe Fronchetti" className="w-16 h-16 rounded-xl object-cover border border-gray-100" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded">Faculty</span>
              <h3 className="font-bold text-gray-900 text-lg mt-0.5">Felipe Fronchetti</h3>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/fronchat/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 p-2 transition-colors">
            <Linkedin size={18} strokeWidth={2.2} />
          </a>
        </div>
      </section>

      {/* ADMINISTRATIVE & OPERATIONS OFFICERS TIER */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="border-b border-gray-200 pb-3 mb-8">
          <h2 className="text-xl font-bold text-gray-800 tracking-tight uppercase text-xs font-mono tracking-widest text-gray-400">
            Administrative Officers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officers.map(function (person, i) {
            return <ExecCard key={i} person={person} />;
          })}
        </div>
      </section>

      {/* DIVISIONAL TEAM LEADS TIER */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="border-b border-gray-200 pb-3 mb-8">
          <h2 className="text-xl font-bold text-gray-800 tracking-tight uppercase text-xs font-mono tracking-widest text-gray-400">
            Engineering Team Leads
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamLeads.map(function (person, i) {
            return <ExecCard key={i} person={person} />;
          })}
        </div>
      </section>
    </div>
  );
}