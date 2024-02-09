import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ThemeSwitcher.module.scss';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import ThemeDark from 'shared/assets/icons/theme-dark.svg';
import ThemeLight from 'shared/assets/icons/theme-light.svg';
import Button from 'shared/ui/Button/Button';

interface ThemeSwitcherProps{
  className? : string,
}

export default function ThemeSwitcher({className} : ThemeSwitcherProps) {
	const {theme,toggleTheme} = useTheme();
	return (
		<Button 
			className={classNames(styles.ThemeSwitcher,{},[className])}
			onClick={toggleTheme}>
			{
				theme === Theme.DARK ? 
					<ThemeDark/> : 
					<ThemeLight/>
			}
		</Button>
	);
}