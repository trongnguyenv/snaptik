import { create } from 'zustand';

type State = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

// Create store with initial state matching SSR state (light mode)
export const useThemeStore = create<State>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => {
    set((state) => {
      const newMode = !state.isDarkMode;
      // Update localStorage after initial client-side render
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
      }
      return { isDarkMode: newMode };
    });
  },
}));
