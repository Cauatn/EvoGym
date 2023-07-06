import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const Navbar = ({isTopPage ,selectedPage, setSelectedPage }: Props) => {
  const isAboveMedimScreens = useMediaQuery("(min-width: 1120px)")
  const [isMenuToggled, setMenuToggled] = useState<boolean>(false);

  const navBarBackGround = isTopPage ? "" : "bg-primary-100 drop-shadow";

  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div
        className={`${navBarBackGround} ${flexBetween} fixed top-0 z-30 w-full py-6`}
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

      {/* Mobile Menu Pop Up */}
      {isMenuToggled && !isAboveMedimScreens && (
        <div className="fixed right-0 bottom-0 z-40 h-full bg-primary-100 w-[300px] frop-shadow-xl">
          <div className="flex justify-end p-12">
            <button
              onClick={() => {setMenuToggled(!isMenuToggled)}}
              >
                <XMarkIcon
                  className="h-8 w-8 text-gray-400"
                />
            </button>
          </div>
          {/*div whit links*/}
          <div className="ml-[21%] flex flex-col gap-10 text-2xl">
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
              page="Entre em contato"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
         </div>
         
        </div>
      )}

    </nav>
  );
};

export default Navbar;