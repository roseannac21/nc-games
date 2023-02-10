import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import ReviewsList from './components/ReviewsList';
import ReviewExtraInfo from './components/ReviewExtraInfo';
import Categories from './components/Categories';
import ErrorHandler from './components/ErrorHandler';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [loggedInUser, setLoggedInUser] = useState("jessjelly")
  const [errState, setErrState] = useState(false)

  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <section className='app-container'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home errState={errState} setErrState={setErrState}/>}/>
          <Route path="/reviews" element={<ReviewsList errState={errState} setErrState={setErrState}/>}/>
          <Route path="/reviews/:review_id" element={<ReviewExtraInfo loggedInUser={loggedInUser} errState={errState} setErrState={setErrState}/>}/>
          <Route path='/categories' element={<Categories errState={errState} setErrState={setErrState}/>}/>
          <Route path='*' element={<ErrorHandler errState= {errState} setErrState={setErrState}/>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
