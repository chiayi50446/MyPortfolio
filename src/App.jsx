// Name: Chiayi Lin
// StudentID: 301448962
// Date: 09.27.24
// File name: App.jsx
// Section: COMP229 SEC 010

// Default App page

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
