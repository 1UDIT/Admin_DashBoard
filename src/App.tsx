import { useState } from 'react';
import CardScreen from './components/CardScreen'
import Navbar from './components/Navbar'
import Sidebar from './components/sliderBar'


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    // <main className='bg-black h-dvh flex-col items-center w-screen justify-between'>
    //   <Navbar/>
    //   <CardScreen/> 
    // </main >
    // <div className="bg-black  grid-cols-2 grid-flow-col md:grid-cols-2 md:h-dvh " >
    //   <div className="row-span-1 w-1/2">
    //     <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    //   </div>
    //   <div className="bg-black  grid-rows-1 grid-flow-col md:grid-rows-2 md:h-dvh " >
    //     <div className="row-span-1 h-16"><Navbar /></div>
    //     <div className="col-span-1 p-4 gap-4 "><CardScreen /> </div>
    //   </div>
    // </div>
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-black">
          {/* <!-- ===== Header Start ===== --> */}
          <Navbar />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-black">
              <CardScreen />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  )
}

export default App
