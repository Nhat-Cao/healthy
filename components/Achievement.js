'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { fetchAchievement } from '../store/slices/achievementSlice';

export default function Achievement() {
  const dispatch = useDispatch();
  const { data: { percentage = 0, date = '' }, status } = useSelector((state) => state.achievement);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAchievement());
    }
  }, [dispatch, status]);
  
  // Calculate the circle's circumference and offset based on percentage
  const radius = 56; // diameter of 112px (28 * 4)
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-full h-64 md:h-full">
      <Image
        src="/asset/image/d01.jpg"
        alt="achievement background"
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-28 h-28">
          {/* SVG Circle Progress */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 overflow-visible">
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke="white"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-lg pr-2">{date}</div>
            <div className="text-lg">{percentage}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}