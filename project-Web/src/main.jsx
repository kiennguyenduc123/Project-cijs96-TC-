import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import Women from './components/Women.jsx'
import Men from './componentss/Men.jsx'
import Children from './component-s/Children.jsx'
import ChildrenMen from './componentas/ChildrenMen.jsx'
import More from './SeeMore/More.jsx'
import Introduce from './introduce/Introduce.jsx'
import Contactinfo from './contact/contactinfo.jsx'
import Google from './addgooglemap/google.jsx'
import LoginSignUp from './register/LoginSignUp.jsx'
import LoginSignIn from './register/LoginSignIn.jsx'
import Cart from './Cart/Cart.jsx'
import { StoreContextProvider } from './context/StoreContext.jsx'
import Placeholder from './Order/placeholder.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <StoreContextProvider>
   <Routes>
      <Route path="" element={<App />} />
      <Route path='/men' element = {<Men />}/>
      <Route path="/women" element={<Women />}/>
      <Route path='/children' element = {<Children />} />
      <Route path='/childrenmen' element = {<ChildrenMen />} />
      <Route path='/seemore' element = {<More />}/> 
      <Route path='/introduce' element = {<Introduce />} />
      <Route path='/contactinfor' element = {<Contactinfo />} />
      <Route path='/google.html' element = {<Google />}/>
      <Route path='/login' element = {<LoginSignIn/>}/>
      <Route path='register' element = {<LoginSignUp />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path = '/order' element={<Placeholder />} />
    </Routes>
    </StoreContextProvider>
  </BrowserRouter>
)

