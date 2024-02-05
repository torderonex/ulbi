import { classNames } from 'shared/lib/classNames/classNames'
import Button from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps{
  className? : string,
}

export enum Languages{
    RU = 'ru',
    EN = 'en',
}

export default function LangSwitcher({className} : LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    function langHandle(){
        i18n.changeLanguage(i18n.language === Languages.EN ? Languages.RU : Languages.EN)
    }

    return (
    <Button 
      className={classNames('',{},[className])}
      onClick={langHandle}>
        {t('Language')}
    </Button>
  )
}