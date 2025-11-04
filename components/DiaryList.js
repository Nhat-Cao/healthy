'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button/Button';
import { fetchDiaries } from '../store/slices/diarySlice';

export default function DiaryList() {
  const dispatch = useDispatch();
  const { items: allEntries, status } = useSelector((state) => state.diaries);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDiaries(1));
    }
  }, [dispatch, status]);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, allEntries.length));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h3 className="text-lg font-semibold mb-4">MY DIARY</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {allEntries.slice(0, visibleCount).map(entry => (
          <div key={entry.id} className="border p-4 aspect-square overflow-hidden flex flex-col">
            {/* Date and Time */}
            <div className="text-xs text-gray-500 mb-2 flex flex-col">
              <span>{entry.date}</span>
              <span>{entry.time}</span>
            </div>
            {/* Text */}
            <div className="text-sm text-gray-700 overflow-hidden">{entry.text}</div>
          </div>
        ))}
      </div>
      {visibleCount < allEntries.length && (
        <div className="flex justify-center mt-6">
          <Button onClick={loadMore}>自分の日記をもっと見る</Button>
        </div>
      )}
    </div>
  )
}