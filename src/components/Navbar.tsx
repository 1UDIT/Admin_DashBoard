import React from 'react'
import DarkModeSwitcher from './darkModeSwitcher'

export default function Navbar() {
    return (
        <div className='bg-[#1f2937] h-12'>
            <div className='p-3 text-white'>
                <h4>DashBord</h4>
                <DarkModeSwitcher/>
            </div>
        </div>
    )
}
