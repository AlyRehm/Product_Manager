
import './App.css';
// import ProductForm from './components/ProductForm';
// import ProductList from './components/ProductList';
import OneProduct from './components/OneProduct';
import Main from './views/Main';

import {BrowserRouter, Routes,Route} from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            {/* you cant have two routes with the same path on this page. This is where View/Main.js comes in  */}
            {/* <Route path="/" element={<ProductForm/>} />
            <Route path="/" element={<ProductList/>}/> */}
            <Route path="/" element={<Main/>}/>
            <Route path="/product/:id" element={<OneProduct/>}/>
        </Routes>

      </div>
    </BrowserRouter>  
  );
}

export default App;
