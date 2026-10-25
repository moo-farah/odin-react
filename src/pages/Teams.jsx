import { Link } from "react-router-dom";
import nadia from "../assets/5.png";
import jonas from "../assets/2.png";
import priya from "../assets/4.png";
import elena from "../assets/team/elena-moreau.jpg";
import mateo from "../assets/team/mateo-ruiz.jpg";
import leila from "../assets/team/leila-haddad.jpg";
import samir from "../assets/team/samir-adeyemi.jpg";
import hana from "../assets/team/hana-sato.jpg";
import owen from "../assets/team/owen-clarke.jpg";

const SKY =
  "bg-[linear-gradient(to_bottom,#03225a_0%,#0c3f86_24%,#2f74c4_46%,#7fb6e4_66%,#cfe4f3_82%,#ffffff_100%)]";

const teams = [
  {
    name: "Engineering",
    focus: "Build the app, the APIs, and the screens people use to plan and send.",
    members: [
      {
        name: "Nadia Okonkwo",
        role: "Software engineer",
        does: "Builds the send flow, plan limits, and the cost shown before a transfer.",
        company: "LionPlan",
        image: nadia,
      },
      {
        name: "Jonas Berg",
        role: "Backend engineer",
        does: "Designs the APIs that track a transfer from the moment it starts until it arrives.",
        company: "LionPlan",
        image: jonas,
      },
      {
        name: "Priya Shah",
        role: "Frontend engineer",
        does: "Keeps the React screens fast, accessible, and consistent across plans and billing.",
        company: "LionPlan",
        image: priya,
      },
    ],
  },
  {
    name: "Design",
    focus: "Make plans, pricing, and sending feel simple when the amount matters.",
    members: [
      {
        name: "Elena Moreau",
        role: "Product designer",
        does: "Designs the plan picker, pricing cards, and the confirm-before-you-send step.",
        company: "LionPlan",
        image: elena,
      },
      {
        name: "Mateo Ruiz",
        role: "Brand designer",
        does: "Shapes LionPlan’s look across the site, the product, and customer email.",
        company: "LionPlan",
        image: mateo,
      },
    ],
  },
  {
    name: "Product",
    focus: "Decide what ships next so limits and fees stay clear.",
    members: [
      {
        name: "Leila Haddad",
        role: "Product manager",
        does: "Sets the roadmap for transfers, plan caps, and the public pricing page.",
        company: "LionPlan",
        image: leila,
      },
      {
        name: "Samir Adeyemi",
        role: "Product manager",
        does: "Turns support questions into clearer rules for Basic, Plus, and Pro.",
        company: "LionPlan",
        image: samir,
      },
    ],
  },
  {
    name: "Operations",
    focus: "Watch volume, answer people, and keep sends moving.",
    members: [
      {
        name: "Hana Sato",
        role: "Data analyst",
        does: "Reads transfer volume and plan usage so limits match how teams actually send.",
        company: "LionPlan",
        image: hana,
      },
      {
        name: "Owen Clarke",
        role: "Support lead",
        does: "Helps customers when a send is stuck, a limit is hit, or a fee looks wrong.",
        company: "LionPlan",
        image: owen,
      },
    ],
  },
];

const Teams = () => {
  return (
    <main>
      <section
        className={`${SKY} min-h-[70vh] pt-24 flex flex-col items-center justify-center px-6`}
      >
        <p className="text-white/70 text-sm tracking-wide uppercase">Teams</p>
        <h1 className="mt-4 max-w-3xl text-center text-white text-4xl sm:text-6xl font-semibold">
          The people who plan the send
        </h1>
        <p className="mt-4 max-w-2xl text-center text-white/80 text-lg">
          Engineering, design, product, and operations. Each person below shows
          what they do and the company they work for.
        </p>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {teams.map((team) => (
            <div key={team.name}>
              <h2 className="text-3xl font-semibold text-[#03225a]">
                {team.name}
              </h2>
              <p className="mt-3 max-w-2xl text-gray-600">{team.focus}</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {team.members.map((member) => (
                  <li
                    key={member.name}
                    className="overflow-hidden rounded-3xl border border-gray-200"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="aspect-3/4 w-full object-cover object-top"
                    />
                    <div className="p-6">
                      <p className="text-xs font-medium uppercase tracking-wide text-[#2f74c4]">
                        {member.company}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-[#03225a]">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#03225a]/80">
                        {member.role}
                      </p>
                      <p className="mt-3 text-sm text-gray-600">{member.does}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-wrap gap-4">
            <Link
              to="/careers"
              className="inline-flex h-11 items-center rounded-full bg-[#03225a] px-6 text-sm font-medium text-white hover:bg-[#03225a]/90 transition-colors"
            >
              Work with us
            </Link>
            <Link
              to="/about"
              className="inline-flex h-11 items-center rounded-full border border-[#03225a] px-6 text-sm font-medium text-[#03225a] hover:bg-gray-50 transition-colors"
            >
              About LionPlan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Teams;
