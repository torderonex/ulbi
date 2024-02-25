import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { useState,  } from 'react';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/button/Button';
import { AppLink } from 'shared/ui';
import AboutSvg from 'shared/assets/icons/about.svg';
import HomeSvg from 'shared/assets/icons/home.svg';
import { routePath } from 'shared/config/route-config/routeConfig';

interface SidebarProps{
  className? : string,
}

export default function Sidebar({ className } : SidebarProps) {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation();
	function collapseHandle(){
		setCollapsed(prev => !prev);
	}


	return(
		<div data-testid="sidebar" className={classNames(styles.Sidebar,{ [styles.collapsed] : collapsed },[className])}>
			<Button 
				className={styles.collapseBtn}
				data-testid="collapse-btn"
				onClick={collapseHandle}
				square={true}
				theme={ButtonTheme.BACKGROUND_INVERTERD}
				size={ButtonSize.SIZE_L}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={styles.items}>
				<AppLink to={routePath.main} className={styles.item}>
					<HomeSvg className={styles.ico} width={'30px'} height={'30px'}/>
					<span className={styles.link}>{t('Main')}</span>
				</AppLink>
				<AppLink className={styles.item}  to={routePath.about}>
					<AboutSvg className={styles.ico} width={'30px'} height={'30px'}/>
					<span className={styles.link}>{t('About')}</span>
				</AppLink>
			</div>
			<div className={styles.switches}>
				<ThemeSwitcher/>
				<LangSwitcher 
					className={styles.lang}
					collapsed={collapsed}/>
			</div>
		</div>
	);
}