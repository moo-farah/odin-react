import { useEffect, useRef } from "react"

const MainContent = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
    buttonRef.current.textContent = "Hey, I'm different!";
    let timeout = setTimeout(() => {
      buttonRef.current.textContent = "Click Me!";
    }, 2000);

    return () => {
      clearTimeout(timeout)
    };
  }, [])

  return (
    <main className="max-w-7xl mx-auto p-12">
        <div className="">
            <h1 className="text-2xl">Send money globally for less</h1>
        </div>

        <button className="bg-gray-900 text-white px-4 py-2 mt-4 rounded-lg" ref={buttonRef}>Click me</button>
    </main>
  )
}

export default MainContent
