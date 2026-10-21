import { Send, Shield, BarChart3, Globe, Clock, Headphones } from "lucide-react";
import Button from "./Button";
const SKY =
  "bg-[linear-gradient(to_bottom,#03225a_0%,#0c3f86_24%,#2f74c4_46%,#7fb6e4_66%,#cfe4f3_82%,#ffffff_100%)]";

// button click handler
const handleStart = () => {
  console.log("Start for free button clicked");
}

const handleLearnMore = () => {
  console.log("Learn more button clicked");
}


const services = [
  {
    title: "Global transfers",
    description: "Send money with a clear cost before you confirm.",
    icon: Send,
  },
  {
    title: "Plan limits",
    description: "Basic, Plus, and Pro caps that match how often you send.",
    icon: Shield,
  },
  {
    title: "Live tracking",
    description: "See every transfer from start to delivery in one place.",
    icon: BarChart3,
  },
  {
    title: "Team access",
    description: "Give teammates their own plans without sharing logins.",
    icon: Globe,
  },
  {
    title: "Same-day sends",
    description: "Priority lanes when a transfer cannot wait until tomorrow.",
    icon: Clock,
  },
  {
    title: "Human support",
    description: "Email on Basic, priority help on Plus and Pro.",
    icon: Headphones,
  },
];


const MainContent = () => {
  return (
    <section className={`${SKY} min-h-screen pt-24`}>
      <div className="max-w-7xl mx-auto px-6 mt-4 tracking-wide flex flex-col items-center">
        <h1 className="text-white/90 text-6xl sm:text-7xl">
         Build robuust messaging <span className='block'>capabilities in minutes</span>
        </h1>
        <p className='text-white/80 text-center mt-2 text-sm'>We're a team of engineers, designers, and developers who are passionate about building products that help people communicate better.</p>
        <div className='mt-6 flex flex-col gap-4 sm:gap-6 sm:flex-row items-center justify-center'>
          <Button onClick={handleStart} variant='primary'>Get my list</Button>
          <Button onClick={handleLearnMore} variant='secondary'>Browse examples</Button>
        </div>

        {/* services goes here */}
        <div className='w-full mt-20 mb-16'>
          <h2 className='text-white text-2xl font-semibold text-center'>Services we provide</h2>
          <p className='mt-2 text-white/80 text-center'>Everything you need to plan a transfer, then send it.</p>
           
           <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className='rounded-3xl border border-white/20 bg-white/10 p-6 text-left backdrop-blur-sm'>
                  <Icon className='h-6 w-6 text-white' />
                  <h3 className='mt-4 text-lg font-semibold text-[#121212]'>{service.title}</h3>
                  <p className='mt-2 text-sm text-[#121212]/75'>{service.description}</p>
                </article>
              );
            })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;