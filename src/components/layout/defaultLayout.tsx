import React, { useState, ReactNode } from 'react';
import Sidebar from '../sliderBar';
import Navbar from '../Navbar';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children })=> {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark ">
            <div className="flex  overflow-x-hidden">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="relative flex-1 flex-col  w-full">
                    <Navbar />
                    <main>
                        {children}
                    </main>
                </div>
            </div>
             {/* <div className="flex  overflow-x-hidden">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="relative flex flex-col   w-full">
                    <div className="relative flex-1 flex-col   w-full">
                        <Navbar />
                    </div>
                    <div className="relative flex-1 flex-col  w-full">
                        {children}
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default DefaultLayout;