import { classNames } from 'shared/lib/classNames/classNames'
import styles from './navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/app-link/AppLink'
import { ThemeSwitcher } from 'widgets/theme-switcher';

interface NavbarProps{
  className? : string, 
}

export default function NavBar({className} : NavbarProps) {
  return (
    <div className={classNames(styles.navbar,{},[className])}>
      <ThemeSwitcher/>
      <div className={classNames(styles.links)}>
        <AppLink to={'/'} className={styles.mainLink}>main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>about</AppLink>
      </div>
      
    </div>
  )
}
