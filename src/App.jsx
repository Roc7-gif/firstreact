import {Home} from './pages/Home.jsx'
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom"

import { Contact } from './pages/Contact.jsx'
import { Events } from './pages/events.jsx'
import { Login } from './pages/login..jsx'
import { Register } from './pages/Register.jsx'
import { AproposPage } from './pages/Apropos.jsx'
import { Details } from './pages/Details.jsx'
import { Admin } from './pages/admin/admin.jsx'
function App() {

  
  return (
    <>
      <Router>
        <Routes>
          <Route path = '/' element =  {<Home/>} />
          <Route path = '/contact' element =  {<Contact/>} />
          <Route path = '/evenements' element =  {<Events/>} />
          <Route path = '/connexion' element =  {<Login/>} />
          <Route path = '/inscription' element =  {<Register/>} />
          <Route path = '/apropos' element =  {<AproposPage />} />
          <Route path = '/details/:id' element =  {<Details />} />
          <Route path = '/my-admin' element =  {<Admin />} />
        </Routes>
      </Router>
        
    </>
  )
}

export default App
