import { Bars3Icon, /*XMarkIcon*/ } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const Navbar = ({selectedPage, setSelectedPage }: Props) => {
  const isAboveMedimScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggled, setMenuToggled] = useState<boolean>(false);

  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Lado Esquerdo*/}
            <img alt="logo" src={Logo} />

             {/* Lado Direito Desktop*/}
            {isAboveMedimScreens ? (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Beneficios"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Nossas Aulas"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Entre em Contato"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                <p>Cadastre-se !</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                Torne-se um Membro
                </ActionButton>
                </div>
             </div>
            ) : (
                <button 
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={()=> setMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white"/>
                </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;