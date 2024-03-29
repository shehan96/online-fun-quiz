import axios from 'axios';

export const apiClient = {
  getCategories: async () => {
    const responce = await axios.get('https://the-trivia-api.com/api/categories');
    const result = await responce.data;
    return result;
  },
  getQuetstions: async () => {
    const responce = await fetch('https://the-trivia-api.com/api/questions?limit=5');
    const result = await responce.json();
    return result;
  },
  getLevel: async () => {
    const responce = await fetch('https://the-trivia-api.com/api/categories');
    const result = await responce.json();
    return result;
  },
  getLevelTest: async () => {
    const responce = await fetch('https://the-trivia-api.com/api/categories');
    const result = await responce.json();
    return result;
  }
};
