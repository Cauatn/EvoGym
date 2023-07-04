//import { useState } from "react";
//import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png'

function navBar(){
    const FlexBetwenn = "flex items-center justify-between";

    return (
        <nav>
            <div
                className={`${FlexBetwenn} fixed top-0 z-30 w-full py-6`}
            >
                <div className={`${FlexBetwenn} mx-auto w-5/6 `} >
                    <div className={`${FlexBetwenn}`}>
                        <img src={Logo} alt="Logo" />

                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default navBar;