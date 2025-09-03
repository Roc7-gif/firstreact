import { faBars, faCode, faSign, faTimes, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import { Link } from "react-router-dom";

export function AppNav() {
    const OnMdScreen = window.screen.width >  1000 
    const [collapse, setCollapse ]= useState(true && OnMdScreen)
    const toogleNav = () => {
        setCollapse(!collapse)
    }
    console.log(window.screen.width)
    

    return <>
      <nav className=" left-0 bg-white py-1 shadow-lg fixed w-screen z-200 " >
        <div className=" px-3 flex  justify-between w-[100%] ">
                <Link className="text-blue-600  text-2xl  font-medium  no-underline mt-5 min-w-max " to="/">
                <FontAwesomeIcon icon = {faCode}  />              
                Coders4Africa
                <small className="d-none d-md-inline text-green-700"> by  Bénilab Services</small>
            </Link>
            
                <div onClick={toogleNav} className="lg:hidden absolute text-right right-5 top-5 z-110 text-blue-600 cursor-pointer " >
                    {!collapse && <FontAwesomeIcon icon = {faBars} className=' text-2xl ' />}
                    {collapse && <FontAwesomeIcon icon = {faTimes} className=' text-2xl ' />}
                </div>            
            <div className={
  collapse
    ? "fixed   nav-toogle lg:top-auto top-15 lg:relative lg:justify-right  lg:h-auto lg:w-screen max-w-screen bg-white p-2 left-0  h-[90vh] w-[100vw]   lg:bg-transparent z-10 transform  transition-transform duration-300 ease-in-out"
    : "fixed  active nav-toogle lg:top-auto lg:relative lg:justify-right  lg:h-auto lg:w-auto  left-0 top-20 h-[90vh] w-[100vw] bg-white lg:bg-transparent  z-50 transform  transition-transform duration-300 ease-in-out"
} >
                <ul className="flex  w-[100%] lg:w-auto lg:justify-end  bg-white lg:bg-transparent lg:gap-1 gap-2 mx-auto  md:flex-col  lg:flex-row flex-col  absolute top-20 left-0 h-auto z-100  lg:relative lg:top-auto  ">
                    <li className="text-lg lg-py-0 py-4 lg:bg-transparent bg-gray-50  text-center p-1 my-1 lg:my-auto inline-block   min-w-max ">
                        <Link to="/" className="  text-gray-600 nav-link no-underline  "  >Accueil</Link>
                    </li>
                   
                   
                    {/* <li className="text-lg lg-py-0 py-4 lg:bg-transparent bg-gray-50  text-center p-1 mB-1 lg:my-auto inline-block   min-w-max">
                        <Link to="#" className="  text-gray-600 nav-link no-underline  " > Activités</Link>
                    </li> */}
                    <li className="text-lg lg-py-0 py-4 lg:bg-transparent bg-gray-50  text-center p-1 mB-1 lg:my-auto inline-block   min-w-max">
                        <Link  to="/evenements" className="  text-gray-600 nav-link no-underline  " > Événements</Link>
                    </li>
                    <li className="text-lg lg-py-0 py-4 lg:bg-transparent bg-gray-50  text-center p-1 mB-1 lg:my-auto inline-block   min-w-max">
                    <Link  to="/apropos" className="  text-gray-600 nav-link no-underline  " > À propos</Link>
                    </li>
                    <li className="text-lg lg-py-0 py-4 lg:bg-transparent bg-gray-50  text-center p-1 my-1 lg:my-auto inline-block   min-w-max ">
                        <Link  to="/contact" className="  text-gray-600 nav-link no-underline  "  >Contact</Link>
                    </li>
                        
                       
                    <button className=" inline-block min-w-max  border-2 mx-2  hover:bg-green-600 px-3  my-1     rounded-lg border-green-600 text-green-600 hover:text-white cursor-pointer">
                    <Link  to='/connexion' >Connexion</Link>
                    </button>
                        <button className="  bg-gradient-to-r from-blue-600 to-green-500 text-white   inline-block p-3 py-4 text-white shadow-xl cursor-pointer bg-blue-400 btn-join  min-w-max">
                    <Link  to='/inscription'>  <FontAwesomeIcon icon={faUserPlus}/> Nous Rejoindre</Link>
                           
                    </button>
                </ul>
                
               
            </div>
        </div>
        </nav>
        <br />
        <br />

         </>
}