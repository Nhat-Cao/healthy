'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Article from './Article';
import Button from './Button/Button';
import { fetchColumns } from '../store/slices/columnSlice';

export default function ColumnList() {
  const dispatch = useDispatch();
  const { items: allArticles, status } = useSelector((state) => state.columns);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchColumns(1));
    }
  }, [dispatch, status]);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, allArticles.length));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4">
        {allArticles.slice(0, visibleCount).map(article => (
          <Article
            key={article.id}
            date={article.date}
            time={article.time}
            title={article.title}
            imgSrc={article.imgSrc}
            tags={article.tags}
          />
        ))}
      </div>
      {visibleCount < allArticles.length && (
        <div className="flex justify-center mt-6">
          <Button onClick={loadMore}>コラムをもっと見る</Button>
        </div>
      )}
    </div>
  )
}
