import { createContext } from 'react';

export enum Theme{
    LIGHT = 'normal',
    DARK = 'dark'
}

export interface ThemeContextProps{
    theme: Theme;
    setTheme : (theme : Theme) => void;
} 

export const ThemeContext = createContext<ThemeContextProps>({
	theme : Theme.LIGHT,
	setTheme : () => {},
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';