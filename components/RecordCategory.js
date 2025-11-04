'use client'
import ImageButton from './Button/ImageButton';

export default function RecordCategory() {
  const items = [
    { 
      key: 'body', 
      title: 'BODY RECORD', 
      subtitle: '自分のカラダの記録',
      image: '/asset/image/MyRecommend-1.jpg',
      onClick: () => { console.log('Navigate to Body Record') } // Mock navigation function
    },
    { 
      key: 'exercise', 
      title: 'MY EXERCISE', 
      subtitle: '自分の運動の記録',
      image: '/asset/image/MyRecommend-2.jpg',
      onClick: () => { console.log('Navigate to My Exercise') } // Mock navigation function
    },
    { 
      key: 'diary', 
      title: 'MY DIARY', 
      subtitle: '自分の日記',
      image: '/asset/image/MyRecommend-3.jpg',
      onClick: () => { console.log('Navigate to Diary') } // Mock navigation function
    },
  ];

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-4">
      {items.map(item => (
        <ImageButton
          key={item.key}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          onClick={item.onClick}
        />
      ))}
    </div>
  )
}