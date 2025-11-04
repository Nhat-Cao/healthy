'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button/Button';
import { fetchMeals } from '../store/slices/mealSlice';

export default function MealGrid() {
  const dispatch = useDispatch();
  const { items: allMeals, status } = useSelector((state) => state.meals);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMeals(1));
    }
  }, [dispatch, status]);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, allMeals.length));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {allMeals.slice(0, visibleCount).map(item => (
          <div key={item.id} className="relative aspect-square border-2 border-transparent hover:border-orange-400">
            <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute left-2 bottom-2 bg-yellow-300 text-sm px-2 py-1">{item.date} - {item.title}</div>
          </div>
        ))}
      </div>
      {visibleCount < allMeals.length && (
        <div className="flex justify-center mt-6">
          <Button onClick={loadMore}>記録をもっと見る</Button>
        </div>
      )}
    </div>
  )
}
