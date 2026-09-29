const Button = ({ onClick }) => {
  return (
    <div className="py-16 px-6">
        <button className="bg-gray-900 text-white py-3 px-2" onClick={onClick}>Click me</button>
    </div>
  
  )
}

export default Button