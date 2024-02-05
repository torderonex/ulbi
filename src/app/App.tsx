import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import {AppRouter} from './providers/routes'
import { NavBar } from 'widgets/nav-bar';
import { Sidebar } from 'widgets/sidebar';
type Props = {}

export default function App({}: Props) {
 
  const {theme} = useTheme();  

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar/>
      <div className='page-content'>
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  )
}