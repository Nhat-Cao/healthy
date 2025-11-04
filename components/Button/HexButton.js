import { MealIcon, SnackIcon } from "../Icon";

export default function HexButton({ label, className = '' }) {
  return (
    <div className={`hex bg-gradient-to-tr from-yellow-300 to-orange-400 shadow-lg ${className}`}>
      <div className="text-center">
        <div className="text-sm font-semibold text-white">
          {label === 'Snack' ? <SnackIcon /> : <MealIcon />}
          <span>{label}</span>
        </div>
      </div>
    </div>
  )
}