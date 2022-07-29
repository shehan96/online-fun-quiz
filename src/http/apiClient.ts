export const apiClient = {
  getCategories: async () => {
    const responce = await fetch('https://the-trivia-api.com/api/categories');
    const result = await responce.json();
    return result;
  }
};
