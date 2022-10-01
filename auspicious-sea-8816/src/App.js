
import './App.css';
import FileUpload from './ApplyJob/FileUpload';
import LandingPage from './Organisms/LandingPage';
import { Navbar } from './Organisms/Navbar';
import AllRoutes from './Pages/AllRoutes';
import ContinueLogin from './Login/LoginViaPhoneNumber';
import Login from './Login/Login';

function App() {

  return (
    <div >
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
