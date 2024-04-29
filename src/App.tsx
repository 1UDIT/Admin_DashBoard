import CardScreen from '@/Pages/CardScreen'
import SignIn from '@/Pages/Auth/signin';
import { Route, Routes } from 'react-router-dom'; 
import NoMatch from '@/Pages/noMatch';
import Loader from '@/Loader';
import { useEffect, useState } from 'react';
import TableData from './Pages/TableData/page';


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    loading ? (
      <Loader />
    ) :
      <>
        <Routes>
          <Route
            index
            element={
              <>
                <TableData />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <CardScreen />
              </>
            }
          />
          <Route
            path="/auth/signin"
            element={
              <>
                <SignIn />
              </>
            }
          />
          <Route path="*"
            element={
              <NoMatch />
            }
          />
        </Routes>
      </>
  )
}

export default App
