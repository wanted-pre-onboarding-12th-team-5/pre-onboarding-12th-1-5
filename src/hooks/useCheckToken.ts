import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useCheckToken() {
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      const allowedPaths = ['/signin', '/signup', '/'];
      if (allowedPaths.includes(pathname)) {
        navigate('/todo');
      }
    } else {
      const restrictedPaths = ['/todo'];
      if (restrictedPaths.includes(pathname)) {
        navigate('/signin');
      }
    }
  }, [pathname, navigate]);
}
