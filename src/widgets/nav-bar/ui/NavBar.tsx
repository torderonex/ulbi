import { classNames } from 'shared/lib/classNames/classNames';
import styles from './navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, Modal } from 'shared/ui';
import { useState } from 'react';

interface NavbarProps{
  className? : string, 
}

export default function NavBar({ className } : NavbarProps) {
	const { t } = useTranslation();
	const [authModal, setAuthModal] = useState(false);
	return (
		<div className={classNames(styles.navbar,{},[className])}>
			<div className={classNames(styles.links)}>
				<Button theme={ButtonTheme.OUTLINED} onClick={() => setAuthModal(true)}>{t('Войти')}</Button>
				<Modal isOpen={authModal} onClose={() => setAuthModal(false)}>
					{'Auth form'}
				</Modal>
			</div>
		</div>
	);
}
