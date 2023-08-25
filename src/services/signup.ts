import axios, { AxiosInstance, AxiosResponse } from 'axios';

const signUpInstance: AxiosInstance = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop',
    headers: {
      'Content-Type': 'application/json',
    },
  });

export async function signup(email:string, password:string) {
    try {
        const response: AxiosResponse = await signUpInstance.post('/signup', { email, password });
        if (response.status === 201) {
            return true
        }
    } catch (error) {
        console.error('Signup failed:', error);
        return false;
    }
}