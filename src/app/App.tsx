import React, { Suspense, useContext, useState } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames } from 'helpers/classNames/classNames'
import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';

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
          <Route path='/main' Component={MainPage}/>
          <Route path='/about' Component={AboutPage}/>
        </Routes>
      </Suspense>
    </div>
  )
}