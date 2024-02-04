import './styles/index.scss'
import { Link } from 'react-router-dom'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import {AppRouter} from './providers/routes'
import { NavBar } from 'widgets/nav-bar';
type Props = {}

export default function App({}: Props) {
 
  const {theme, toggleTheme} = useTheme();  

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <NavBar/>
      <AppRouter/>
    </div>
  )
}