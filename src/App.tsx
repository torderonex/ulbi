import React, { Suspense, useContext, useState } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AboutPageAsync } from './pages/about-page/AboutPage.async'
import { MainPageAsync } from './pages/main-page/MainPage.async'
import { ThemeContext } from './styles/theme/ThemeContext'
import { Theme } from './styles/theme/ThemeContext'
import { useTheme } from './styles/theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

type Props = {}



export default function App({}: Props) {
 
  const {theme, toggleTheme} = useTheme();  

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
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