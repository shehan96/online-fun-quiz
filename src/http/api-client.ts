export const apiClient = {
  getCategories: async () => {
    const responce = await fetch('https://the-trivia-api.com/api/categories');
    const result = await responce.json();
    return result;
  },
  getQuetstions: async () => {
    const responce = await fetch('https://the-trivia-api.com/api/categories');
    const result = await responce.json();
    return result;
  },
  getLevel: async () => {
    const responce = await fetch('https://the-trivia-api.com/api/categories');
    const result = await responce.json();
    return result;
  },
  getLevelTest: async () => {
    
  }
};
