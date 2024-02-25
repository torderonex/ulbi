import { classNames } from 'shared/lib/classNames/classNames';
import styles from './navbar.module.scss';

interface NavbarProps{
  className? : string, 
}

export default function NavBar({className} : NavbarProps) {
	return (
		<div className={classNames(styles.navbar,{},[className])}>
			<div className={classNames(styles.links)}>
				{'/'}
			</div>
		</div>
	);
}
