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



const MainContent = () => {
  return (
    <section className={`${SKY} min-h-screen pt-24`}>
      <div className="max-w-7xl mx-auto px-6 mt-4 tracking-wide flex flex-col items-center">
        <h1 className="text-white/90 text-6xl">
         Build robuust messaging <span className='block'>capabilities in minutes</span>
        </h1>
        <div className='mt-6 flex flex-col gap-4 sm:gap-6 sm:flex-row items-center justify-center'>
          <Button onClick={handleStart} variant='primary'>Get my list</Button>
          <Button onClick={handleLearnMore} variant='secondary'>Browse examples</Button>
        </div>
       
      </div>
    </section>
  );
};

export default MainContent;