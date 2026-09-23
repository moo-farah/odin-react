import { useMemo, useState } from "react"
import data from '../data.json'

const Search = () => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase();
    if (!q) return data;
    return data.filter((product) => 
      product.title.toLocaleLowerCase().includes(q)
    );
  }, [query])
  return (
    <div>
      <input 
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search products..."
       />

        {query && (
          <ul>
        {results.map((product) => (
          <li key={product.id}>{product.title} - ${product.salary}</li>
        ))}
       </ul>
        )}
       
    </div>
    
    
  )
}

export default Search