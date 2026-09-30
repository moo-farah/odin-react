import { useState } from "react"

const Count = () => {
  const [name, setName] = useState('');
  const [person, setPerson] = useState({name: "Mohamed", age: 100});

  const handleIncreaseAge = () => {
    console.log('In handleIncreaseAge (before setPerson call):', person);
    setPerson({...person, age: person.age + 1});
    // We've called setPerson, surely person has updated?
    console.log('In handleIncreaseAge (after setPerson call):', person);
  };

  console.log('during render:', person);
  return (
    <>
    <div className="max-w-7xl mx-auto px-16 py-6">
    <div style={{ margin: "10px" }}>
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
    <h1>{person.name}</h1>
    <h2>{person.age}</h2>
      <button className="bg-gray-700 text-white px-3 py-1.5" 
        onClick={handleIncreaseAge}>
        Increase age
      </button>
      </div>
    </>
  )
}

export default Count