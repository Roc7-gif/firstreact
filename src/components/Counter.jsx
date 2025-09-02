import { CounterCard } from "./Cards"
import { faCalendarCheck, faGlobeAfrica, faGraduationCap, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"
export function CounterImpact () {
  
  const counterinfos = [
    {
      label: 'Membres actifs',
      targetCount: '1500',
      sign: '+',
      icon : faUsers,
      Iconclass : 'text-blue-600 text-2xl'
    },
    {
      label: 'Pays représentés',
      targetCount: '24',
      sign: ' ',
      icon : faGlobeAfrica,
      Iconclass : 'text-green-600  text-2xl'
    },
    {
      label: 'Taux d\'insertion',
      targetCount: '85',
      sign: '%',
      icon : faGraduationCap,
      Iconclass : 'text-gray-700  text-2xl'
    },
    {
      label: 'Événements par an',
      targetCount: '100',
      sign: '+',
      icon : faCalendarCheck,
      Iconclass : 'text-purple-500 text-2xl'
    }
  ]  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target
        const target = parseInt(element.getAttribute('data-target'));
        let current = 0;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        const stepTime = duration / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            element.textContent = target + (element.getAttribute('data-target').includes('%') ? '%' : '');
            clearInterval(timer);
          } else {
            element.textContent = Math.floor(current) + (element.getAttribute('data-target').includes('%') ? '%' : '');
          }
        }, stepTime);
      }
    })
  })

  return <>
      <div className=" relative top-40 mb-12">
            <h3 className="text-3xl md:text-3xl font-bold text-center mb-2 text-gray-800">Notre <span className="text-blue-600">réseau</span> de membres</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10  mb-2 mx-4">
             
         
      {counterinfos.map(({ label, targetCount, sign, icon , Iconclass }) => (
        <CounterCard
          key={label}
            label={label}
            targetCount={targetCount}
            sign={sign}
            icon={icon}
            Iconclass={Iconclass}
            observer={observer}
          />
      ))}

        </div>
        </div>
  </>
}