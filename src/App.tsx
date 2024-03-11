import CardScreen from './Pages/CardScreen'
import SignIn from './Pages/Auth/signin';
import { Route, Routes } from 'react-router-dom';
import Tabledata from './Pages/TableData/table';
import NoMatch from './Pages/noMatch';


function App() {
  // const [loading, setLoading] = useState<boolean>(true); 
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);
  return (
    // loading ? (
    // <Loader />
    // ) :
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <Tabledata />
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
