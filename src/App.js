import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from "react";
import {
  BrowserRouter, Routes,
  Route, useParams, useLocation
} from "react-router-dom";

import Navbar from './Components/Navbar';
import Counter from './Components/Counter';
import FormDetails from './Components/c-form/FormDetails';
import CheckoutFrom from './Components/CheckoutFrom';
import PoForm from './Components/Posh-Form/PoForm';
import FormModal from './Components/FormModal';
import Blog from './Components/dynamic-routing/Blog'
import Error from './Components/Error';
import Blogs from './Components/dynamic-routing/Blogs';




function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<CheckoutFrom />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/formDetails' element={<FormDetails />} />
        <Route path='/formModal' element={<FormModal />} />
        <Route path='/poForm' element={<PoForm />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog' >
          <Route path=':title' element={<Blogs />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
