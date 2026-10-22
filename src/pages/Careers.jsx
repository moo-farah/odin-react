import { Link } from 'react-router-dom'
const Careers = () => {
  const SKY =
  "bg-[linear-gradient(to_bottom,#03225a_0%,#0c3f86_24%,#2f74c4_46%,#7fb6e4_66%,#cfe4f3_82%,#ffffff_100%)]";

  return (
    <>
    <div className={`${SKY}  pt-24 w-full flex flex-col items-center justify-center`}
    >
      <div className="max-w-7xl mx-auto p-12 flex flex-col items-center justify-center">
        <h5 className='text-white/70 text-2xl'>Company</h5>
        <div className="mt-4">
          <h3 className="text-white text-5xl mb-2 text-center">We only hire builders</h3>
          <p className="text-white/70 mb-4 text-center">Come here to solve hard problems, build without permission, and ship work you’re proud of. Sounds intense? It is.</p>
        </div>

        <Link
         to={"/careers/roles"}
         className="bg-white/70 hover:bg-white/90 text-[#03225a] px-4 py-2 rounded-full text-sm transition-colors"
        >
        View open roles
        </Link>
      </div>
    </div>
    </>
  )
}

export default Careers