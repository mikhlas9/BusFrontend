
import './App.css';
import Lists from './components/Lists.js';
import Home from './components/home/home';
import SearchDate from './components//searchSection/SearchDate';
import SearchResultsPage from './components/resultPageSection/SearchResultsPage';
import Register from './components/register/register';
import Login from './components/login/login';
import BookASeat from './components/BookASeat.js';
import PayFee from './components/feeSection/payFee.js';
import Navbar from './components/navbar/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';





function App() {
  return (
    <Router>
      <div className='app'>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Lists" element={<Lists />}></Route>
          <Route path='/payfee' element={<PayFee />}></Route>
          <Route path='/SearchDate/:id' element={<SearchDate />}></Route>
          <Route path="/students/:date" element={<SearchResultsPage />}></Route>
          <Route  path="/register" element={<Register />}></Route>
      <Route  path="/login" element={<Login />} ></Route>
      <Route path='/BookASeat' element={<BookASeat />}></Route>
  

      

        </Routes>
      </div>
    </Router>

  );
}

export default App;
