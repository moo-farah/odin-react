import { useEffect, useState } from "react"

const Clock = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const key = setInterval(() => {
            setCounter(count => count + 1);
        }, 1000);

        return () => {
            clearInterval(key);
        }
    }, [])
   
  return (
    <div>{counter} seconds have passed.</div>
  )
}

export default Clock