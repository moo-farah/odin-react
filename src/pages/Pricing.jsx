import { useState } from "react";


// Background color
const SKY =
  "bg-[linear-gradient(to_bottom,#03225a_0%,#0c3f86_24%,#2f74c4_46%,#7fb6e4_66%,#cfe4f3_82%,#ffffff_100%)]";


const pricingPlans = [
 {name: "Basic",
  price: "19",
  description: "For getting started with a simple plan.",
  features: ["1 plan a time", "Up to $1,000 per send", "Email support"],
 },

 {
  name: "Plus",
  price: "49",
  description: "For businesses that need more features.",
  features: ["5 active plans", "Up to $1,000 per send", "Priority support"],
  featured: true,
 },

 {
  name: "Pro",
  price: "99",
  description: "For teams that sends often.",
  features: ["Unlimited active plans", "Up to $1,000 per send", "Priority support"],
 },
];


const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("Basic");
  const current =
    pricingPlans.find((plan) => plan.name === selectedPlan) ?? pricingPlans[0];

  return (
    <>
    <main className={`${SKY} min-h-screen pt-24`}>
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold text-[#ffffff]">
        Choose a plan
      </h1>
      <p className="mt-3 text-white/90">
        Pick a LionPlan tier. Your selection is shown below the cards.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pricingPlans.map((plan) => {
          const isSelected = selectedPlan === plan.name;
          return (
            <article
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                isSelected
                  ? "border-[#03225a] bg-[#03225a] text-white"
                  : "border-gray-200 bg-white text-[#03225a]"
              }`}
            >
              {plan.featured && (
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-sky-300">
                  Most popular
                </p>
              )}
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="mt-2 text-3xl font-semibold">
                ${plan.price}
                <span className="text-base font-normal opacity-70">
                  /mo
                </span>
              </p>
              <p
                className={`mt-3 text-sm ${
                  isSelected ? "text-white/80" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setSelectedPlan(plan.name)}
                className={`mt-8 w-full rounded-full px-4 py-2 text-sm font-medium ${
                  isSelected
                    ? "bg-white text-[#03225a]"
                    : "bg-[#03225a] text-white"
                }`}
              >
                {isSelected ? "Selected" : "Choose plan"}
              </button>
            </article>
          );
        })}
      </div>
      <p className="mt-10 text-sm text-gray-700">
        Current plan:{" "}
        <span className="font-medium text-[#03225a]">
          {current.name} (${current.price}/mo)
        </span>
      </p>
    </div>
  </main>
</>
  )
}

export default Pricing;