'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotifications } from '../store/slices/notificationSlice';
import Indicator from './Indicator';

export default function NotificationIndicator() {
  const dispatch = useDispatch();
  const { unreadCount, status } = useSelector((state) => state.notifications);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNotifications());
    }
  }, [dispatch, status]);

  return unreadCount > 0 ? <Indicator count={unreadCount} /> : null;
}