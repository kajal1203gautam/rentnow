import logo from './logo.svg';
import './App.css';
// import { useContext, createContext } from 'react';
// import ComA from './components/ComA';
// import UseReducer from './components/UseReducer';



import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Cars from './pages/Cars';
import CarSearch from './pages/CarSearch';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';
import Faq from './pages/Faq';

// const FirstName = createContext()
// const LastName = createContext()

function App() {
  return (
    <>
    {/* <UseReducer /> */}
      {/* <FirstName.Provider value={"Aditya"}>
        <LastName.Provider value={"Gautam"}>
        <ComA />
        </LastName.Provider>
      </FirstName.Provider> */}
      


      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Cars' element={<Cars />} />
        <Route path='/CarSearch' element={<CarSearch />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/single-post' element={<SinglePost />} />
        <Route path='/Faq' element={<Faq />} />
      </Routes>
      <Footer />

    </>


  );
}

export default App;
// export { FirstName, LastName };
