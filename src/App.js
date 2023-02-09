import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import ReviewsList from './components/ReviewsList';
import ReviewExtraInfo from './components/ReviewExtraInfo';
import Categories from './components/Categories';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <section className='app-container'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/reviews" element={<ReviewsList/>}/>
          <Route path="/reviews/:review_id" element={<ReviewExtraInfo/>}/>
          <Route path='/categories' element={<Categories/>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
