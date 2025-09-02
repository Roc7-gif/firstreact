import { useEffect } from "react"
import { AppNav } from "../components/Nav.jsx"
import { AppFooter } from "../components/footer.jsx"
import { LoginForm } from "../components/loginForm.jsx"
export function Login() {
    useEffect(() => {
        const checkFade  =  ()=> {
          const fadeElements = document.querySelectorAll('.fade-in');
          
          fadeElements.forEach(element => {
              const elementTop = element.getBoundingClientRect().top;
              const elementVisible = 150;
              
              if (elementTop < window.innerHeight - elementVisible) {
                  element.classList.add('visible');
              }
          });
            
      }
      
          window.addEventListener('scroll', checkFade);
        checkFade(); // Vérifier au chargement initial
        return () => {
          window.removeEventListener('scroll', checkFade);
            
        }
       
    }, [])
    return <>
        <AppNav />
        <LoginForm />
        <AppFooter />
    
    </>
}