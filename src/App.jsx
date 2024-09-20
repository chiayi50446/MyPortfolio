import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter.jsx'
import './App.css'
import UserInfo from '../components/UserInfo.jsx';

function App() {

  return (
    <Router>
      <UserInfo></UserInfo>
        <MainRouter />
     
    </Router>
  )
}

export default App
