import axios from 'axios';

// In a real app, this would be an environment variable
const BASE_URL = '/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getMeals = async () => {
  // Mock data for  11/2, 11/3, 11/4
  const mealsData = [
    { date: '2025.11.02', type: 'morning', title: 'Morning', imgSrc: '/asset/image/m01.jpg' },
    { date: '2025.11.02', type: 'lunch', title: 'Lunch', imgSrc: '/asset/image/l01.jpg' },
    { date: '2025.11.02', type: 'dinner', title: 'Dinner', imgSrc: '/asset/image/d01.jpg' },

    { date: '2025.11.03', type: 'morning', title: 'Morning', imgSrc: '/asset/image/m02.jpg' },
    { date: '2025.11.03', type: 'lunch', title: 'Lunch', imgSrc: '/asset/image/l02.jpg' },
    { date: '2025.11.03', type: 'dinner', title: 'Dinner', imgSrc: '/asset/image/d02.jpg' },

    { date: '2025.11.04', type: 'morning', title: 'Morning', imgSrc: '/asset/image/m03.jpg' },
    { date: '2025.11.04', type: 'lunch', title: 'Lunch', imgSrc: '/asset/image/l03.jpg' },
    { date: '2025.11.04', type: 'snack', title: 'Snack', imgSrc: '/asset/image/s01.jpg' },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mealsData });
    }, 500);
  });
};

export const getDiaries = async (page = 1) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const date = new Date();
      resolve({
        data: Array(9).fill(0).map((_, i) => {
          date.setDate(date.getDate() - ((page - 1) * 8 + i));
          return {
            id: (page - 1) * 8 + i + 1,
            date: date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
            time: `${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
            text: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキスト...'
          };
        })
      });
    }, 500);
  });
};

export const getColumns = async (page = 1) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Array(9).fill(0).map((_, i) => ({
          id: (page - 1) * 8 + i + 1,
          title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
          date: '2025.11.04',
          time: '23:25',
          tags: ['魚料理', '和食', 'DHA'],
          imgSrc: `/asset/image/column-${i + 1}.jpg`,
        }))
      });
    }, 500);
  });
};

export const getAchievement = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          percentage: 60,
          date: new Date().toLocaleDateString('ja-JP', { month: '2-digit', day: '2-digit' }).replace(/\//g, '/')
        }
      });
    }, 500);
  });
};

export const getChartData = async (period) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const today = new Date();
      const data = [];
      let count, step, formatFn;

      switch (period) {
        case 'day':
          count = 30;
          step = 'day';
          formatFn = (d) => `${d.getDate()}日`;
          break;
        case 'week':
          count = 12;
          step = 'week';
          formatFn = (d) => {
            const startOfWeek = new Date(d);
            startOfWeek.setDate(d.getDate() - d.getDay());
            return `${startOfWeek.getMonth() + 1}月${startOfWeek.getDate()}日`;
          };
          break;
        case 'month':
          count = 12;
          step = 'month';
          formatFn = (d) => `${d.getMonth() + 1}月`;
          break;
        case 'year':
          count = 5;
          step = 'year';
          formatFn = (d) => `${d.getFullYear()}年`;
          break;
        default:
          count = 12;
          step = 'month';
          formatFn = (d) => `${d.getMonth() + 1}月`;
      }

      for (let i = count - 1; i >= 0; i--) {
        const d = new Date(today);
        switch (step) {
          case 'day':
            d.setDate(today.getDate() - i);
            break;
          case 'week':
            d.setDate(today.getDate() - i * 7);
            break;
          case 'month':
            d.setMonth(today.getMonth() - i);
            break;
          case 'year':
            d.setFullYear(today.getFullYear() - i);
            break;
        }

        data.push({
          label: formatFn(d),
          bodyWeight: 55 + Math.random() * 5,
          bodyFat: 65 + Math.random() * 5,
        });
      }

      resolve({ data });
    }, 500);
  });
};

export const getNotifications = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, message: '新しいコラムが追加されました', date: '2025.11.04', read: false },
          { id: 2, message: '記録を達成しました', date: '2025.11.03', read: true },
          { id: 3, message: 'アップデートのお知らせ', date: '2025.11.02', read: true },
        ]
      });
    }, 500);
  });
};