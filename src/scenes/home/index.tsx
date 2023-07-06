import {SelectedPage} from "@/shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

export default function Home({setSelectedPage}: Props){
    /* Apenas para Deploy da aplicação*/
    console.log(setSelectedPage)
    return (
        <div></div>
    )
}