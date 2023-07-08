import NavBar from "@/scenes/navBar";
import Home from "@/scenes/home";
import { SelectedPage } from "./shared/types";
import {useState, useEffect} from 'react';
import Benefits from "./scenes/benefits";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

    const [isTopPage, setTopPage] = useState<boolean>(true);

    useEffect(()=> {
      const handleScroll = () => {
        if (window.scrollY === 0){
          setTopPage(true)
          setSelectedPage(SelectedPage.Home)
        }
        else {
          setTopPage(false);
        }
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
     
    <div className="app bg-gray-20">
      <NavBar
        isTopPage = {isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}      
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
