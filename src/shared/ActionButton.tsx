import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
};

export default function ActionButton({children}: props) {
    return (
       <AnchorLink
        className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
        onClick={()=> (SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
       >
        {children}
       </AnchorLink>
    )
}