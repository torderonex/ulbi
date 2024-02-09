import { classNames } from 'shared/lib/classNames/classNames';
import styles from './navbar.module.scss';
import  { AppLink, AppLinkTheme } from 'shared/ui/';
import { useTranslation } from 'react-i18next';

interface NavbarProps{
  className? : string, 
}

export default function NavBar({className} : NavbarProps) {
	const {t} = useTranslation();
	return (
		<div className={classNames(styles.navbar,{},[className])}>
			<div className={classNames(styles.links)}>
				<AppLink to={'/'} className={styles.mainLink}>{t('Main')}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('About')}</AppLink>
			</div>
      
		</div>
	);
}
