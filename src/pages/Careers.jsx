import Footer from "../components/Footer"

const Careers = () => {

  const handleClick = (e) => {
    e.preventDefault()
    console.log('Clicked view open roles')
  }
  return (
    <>
    <div className="max-w-7xl max-auto p-12 flex flex-col items-center justify-center">
      <h5>Company</h5>
      <div className="mt-4">
        <h3 className="text-5xl mb-2 text-center">Develop safe, beneficial AI systems</h3>
        <p className="mb-4 text-center">We're looking for curious minds from a wide range of disciplines and backgrounds.</p>
      </div>

      <button className="bg-gray-950 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm transition-colors" onClick={handleClick}>View open roles</button>
   
    </div>
    <Footer />
    </>
  )
}

export default Careers