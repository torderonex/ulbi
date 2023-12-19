import React, { Suspense } from 'react'
import Counter from './components/Counter'
import './index.scss'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main-page/MainPage'
import AboutPage from './pages/about-page/AboutPage'
import { Link } from 'react-router-dom'
import { AboutPageAsync } from './pages/about-page/AboutPage.async'
import { MainPageAsync } from './pages/main-page/MainPage.async'
type Props = {}

export default function App({}: Props) {
  return (
    <div className='App'>
      <Link to={'/main'}>main</Link>
      <br/>
      <Link to={'/about'}>about</Link>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path='/main' Component={MainPageAsync}/>
          <Route path='/about' Component={AboutPageAsync}/>
        </Routes>
      </Suspense>
    </div>
  )
}