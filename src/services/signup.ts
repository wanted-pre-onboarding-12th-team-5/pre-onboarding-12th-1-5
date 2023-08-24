import axios from 'axios';

const signUpInstance = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  