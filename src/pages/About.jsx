import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import photo1 from "../assets/1.png";
import photo2 from "../assets/2.png";
import photo3 from "../assets/3.png";
import photo4 from "../assets/4.png";
import photo5 from "../assets/5.png";

const SKY =
  "bg-[linear-gradient(to_bottom,#03225a_0%,#0c3f86_24%,#2f74c4_46%,#7fb6e4_66%,#cfe4f3_82%,#ffffff_100%)]";

const values = [
  {
    title: "Plan first",
    body: "We show the cost and the limit before a dollar moves.",
  },
  {
    title: "Ship with care",
    body: "Transfers are real money. Accuracy beats speed when they conflict.",
  },
  {
    title: "Hire builders",
    body: "We look for people who own a problem and finish it.",
  },
];

const gallery = [
  { src: photo1, alt: "LionPlan team collaborating" },
  { src: photo2, alt: "LionPlan workspace" },
  { src: photo3, alt: "Team at work" },
  { src: photo4, alt: "Office culture" },
  { src: photo5, alt: "Builders at LionPlan" },
];

const About = () => {
  return (
    <main>
      <section
        className={`${SKY} min-h-[70vh] pt-24 flex flex-col items-center justify-center px-6`}
      >
        <img
          src={logo}
          alt=""
          className="w-14 h-14 rounded-full mb-6"
        />
        <p className="text-white/70 text-sm tracking-wide uppercase">About</p>
        <h1 className="mt-4 max-w-3xl text-center text-white text-4xl sm:text-6xl font-semibold">
          We build the plan before the send
        </h1>
        <p className="mt-4 max-w-2xl text-center text-white/80 text-lg">
          LionPlan helps teams set limits, pick a plan, and send money with a
          clear cost up front. No guesswork. No surprise fees.
        </p>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#03225a]">Who we are</h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            We are a small product team building transfer tools that stay simple
            under pressure. Home is the pitch. Pricing is how you pay. Careers is
            how you join us.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <img
                key={item.alt}
                src={item.src}
                alt={item.alt}
                className="h-56 w-full object-cover rounded-2xl sm:h-64"
              />
            ))}
          </div>

          <ul className="mt-16 grid gap-10 md:grid-cols-3">
            {values.map((value) => (
              <li key={value.title}>
                <h3 className="text-xl font-medium text-[#03225a]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{value.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-wrap gap-4">
            <Link
              to="/pricing"
              className="inline-flex h-11 items-center rounded-full bg-[#03225a] px-6 text-sm font-medium text-white hover:bg-[#03225a]/90 transition-colors"
            >
              See plans
            </Link>
            <Link
              to="/careers"
              className="inline-flex h-11 items-center rounded-full border border-[#03225a] px-6 text-sm font-medium text-[#03225a] hover:bg-gray-50 transition-colors"
            >
              Work with us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
