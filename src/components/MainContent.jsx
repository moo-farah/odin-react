const SKY =
  "bg-[linear-gradient(to_bottom,#03225a_0%,#0c3f86_24%,#2f74c4_46%,#7fb6e4_66%,#cfe4f3_82%,#ffffff_100%)]";

const MainContent = () => {
  return (
    <section className={`${SKY} min-h-screen pt-24`}>
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-white text-4xl font-semibold">
          Send money globally for less
        </h1>
      </div>
    </section>
  );
};

export default MainContent;