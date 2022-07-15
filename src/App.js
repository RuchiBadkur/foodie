import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import List from './components/List/List';
import Restaurant from './components/Restaurant/Restaurant';
function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path='/dashboard' element = {<HomePage/>}/>
        <Route path='/list' element = {<List/>}/>
        <Route path='/Restaurant' element = {<Restaurant/>}/>
      </Routes>

    


    </BrowserRouter>
  );
}
    

export default App;
