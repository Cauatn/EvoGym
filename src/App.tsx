import NavBar from "@/scenes/navBar";
import {useState} from 'react';

/* 
enum SelectedPage {
  Home= "home",
  Beneficios = "beneficios",
  NossasAulas = "nossasAulas",
  entreEmContato = "entreEmContato"

}
*/

function App() {
  const [selectedPage, setSelectedPage] = useState<string>('home');

  return (
     
    <div className="app bg-gray-20  ">
      <NavBar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}      
      />
    </div>
  )
}

export default App
