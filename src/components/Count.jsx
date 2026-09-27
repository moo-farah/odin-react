import { useState } from "react"

const Count = () => {
  const [name, setName] = useState('');
  return (
    <div style={{ padding: '20px' }}>
      <h1>State Implementation</h1>
      <input
      type="text" 
      placeholder="Enter you name..."
      value={name}
      onChange={(e) => setName(e.target.value)} 
      className="bg-gray-700 px-6 py-3 text-white outline-none rounded"
      />
      <p>Hello, {name || 'Strange'}!</p>

    </div>
  )
}

export default Count