import './styles/index.scss'
import { Link } from 'react-router-dom'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from './providers/routes/ui/AppRouter'

type Props = {}

export default function App({}: Props) {
 
  const {theme, toggleTheme} = useTheme();  

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to={'/main'}>main</Link>
      <Link to={'/about'}>about</Link>
      <AppRouter/>
    </div>
  )
}