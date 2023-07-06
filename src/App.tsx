import NavBar from "@/scenes/navBar";
import { SelectedPage } from "./shared/types";
import {useState} from 'react';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
     
    <div className="app bg-gray-20">
      <NavBar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}      
      />
    </div>
  )
}

export default App
