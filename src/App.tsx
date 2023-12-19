import React from 'react'
import Counter from './components/Counter'
import './index.scss'
type Props = {}

export default function App({}: Props) {
  return (
    <div className='App'><Counter/></div>
  )
}