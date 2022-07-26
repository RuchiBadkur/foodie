import './App.css';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Shared/Header';
import Footer from './components/Shared/footer'

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import List from './components/List/List';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <BrowserRouter>
   
    <Header/>
   
      <Routes>
        <Route path='/homepage' element = {<HomePage/>}/>
        <Route path='/list/:city' element = {<List/>}/>
        <Route path='/restaurant/:id' element = {<Restaurant/>}/>
        <Route path='/' element = {<HomePage/>}/>
      </Routes>
    
    <Footer/>
 
    </BrowserRouter>
  );
}
    

export default App;
