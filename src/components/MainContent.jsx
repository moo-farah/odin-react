import reactLogo from '../assets/react.svg'
const MainContent = () => {
  return (
    <main className="max-w-7xl mx-auto px-6">
        <div className="">
            <h1 className="text-6xl">Send money globally for less</h1>
        </div>

        <div className="grid grid-cols-1">
            <div className="py-6 px-3 bg-red-300">
                <img className='bg-amber-300' src={reactLogo} alt="react-logo" width={120} height={120} />
            </div>
            <div>2</div>
            <div>3</div>
        </div>
    </main>
  )
}

export default MainContent