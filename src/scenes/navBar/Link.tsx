import AnchorLink from "react-anchor-link-smooth-scroll"

type props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

export default function Link({page, selectedPage, setSelectedPage}: props) {
    const lowerCasePage = page.toLowerCase().replace("/ /g", "");

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage} ? "text-primary-500" : ""`}
            href ={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}