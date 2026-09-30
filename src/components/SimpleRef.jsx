import { useRef, useState } from "react"

const SimpleRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handle = () => {
        setCount(count + 1);
        countRef.current++;

        console.log('State:', count);
        console.log('Ref:', countRef.current);
    }
  return (
   <div className="px-12 py-6">
     <p>Count: {count}</p>
     <button className="bg-gray-900 text-white px-4 py-2" onClick={handle}>Increment</button>
   </div>
  )
}

export default SimpleRef