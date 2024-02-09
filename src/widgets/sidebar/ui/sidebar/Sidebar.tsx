import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';

interface SidebarProps{
  className? : string,
}

export default function Sidebar({className} : SidebarProps) {
	const [collapsed, setCollapsed] = useState(false);

	function collapseHandle(){
		setCollapsed(prev => !prev);
	}

	return(
		<div className={classNames(styles.Sidebar,{[styles.collapsed] : collapsed},[className])}>
			<button onClick={collapseHandle}>
            Toggle
			</button>
			<div className={styles.switches}>
				<ThemeSwitcher/>
				<LangSwitcher className={styles.lang}/>
			</div>
		</div>
	);
}