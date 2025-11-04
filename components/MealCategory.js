import HexButton from './Button/HexButton';

export default function MealCategory() {
  const items = [
    { key: 'morning', label: 'Morning' },
    { key: 'lunch', label: 'Lunch' },
    { key: 'dinner', label: 'Dinner' },
    { key: 'snack', label: 'Snack' },
  ];
  return (
    <div className="max-w-6xl mx-auto flex justify-center gap-8 py-8">
      {items.map(i => (
        <div key={i.key} className="flex flex-col items-center">
          <HexButton label={i.label} />
        </div>
      ))}
    </div>
  )
}
