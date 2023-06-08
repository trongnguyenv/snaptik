import { useEffect } from 'react';
import { useThemeStore } from '@/stores/useThemeStore';

// This component runs only on the client side and synchronizes the theme
// after initial render to avoid hydration mismatches
export const ThemeInitializer = () => {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    // Load theme preference from localStorage after mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' && !isDarkMode) {
      useThemeStore.setState({ isDarkMode: true });
    }
    // Don't need to handle light mode case since it matches SSR state
  }, [isDarkMode]);

  return null; // This component doesn't render anything
};