export default function Button({ children, className = '', onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`bg-gradient-to-tr from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  )
}