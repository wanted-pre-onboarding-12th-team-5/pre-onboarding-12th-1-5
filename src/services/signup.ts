import axios, { AxiosInstance, AxiosResponse } from 'axios';

const signUpInstance: AxiosInstance = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop',
    headers: {
      'Content-Type': 'application/json',
    },
  });

export async function signup(email:string, password:string) {
    return await signUpInstance.post('/auth/signup', { email, password });
}