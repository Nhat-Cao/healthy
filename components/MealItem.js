export default function MealItem({ meal }) {
  return (
    <div className="relative border-4 border-transparent hover:border-orange-400">
      <img src={meal.src} alt={meal.title} className="w-full h-48 object-cover" />
      <div className="absolute left-2 bottom-2 bg-yellow-300 text-sm px-2 py-1">{meal.title}</div>
    </div>
  );
}