import React from 'react'
import DarkModeSwitcher from './darkModeSwitcher'

export default function Navbar() {
    return (
        <header className='sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none'>
            <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <div className="col-span-1 w-80"> <h4>DashBord</h4></div>
                <div className="flex items-center gap-3 2xsm:gap-7"><DarkModeSwitcher /></div>
            </div>
        </header>
    )
}
