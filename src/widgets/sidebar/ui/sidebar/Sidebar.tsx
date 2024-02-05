import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { useState } from 'react'

interface SidebarProps{
  className? : string,
}

export default function Sidebar({className} : SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    function collapseHandle(){
        setCollapsed(prev => !prev)
    }

    return(
    <div className={classNames(styles.Sidebar,{[styles.collapsed] : collapsed},[className])}>
        <button onClick={collapseHandle}>
            Toggle
        </button>
    </div>
  )
}