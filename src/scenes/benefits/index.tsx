//import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
//import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "Maquinas de última geração",
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
        
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "Mais de 100 opções diferentes",
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
        
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Instrutores experientes",
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
        
    }
]

export default function Benefits({setSelectedPage}:Props) {
    return (
        <section id="#benefits" className="mx-auto min-h-full w-5/6 py-20 ">
            <div className="md:my-5 md:w-3/5">
                <HText>MAIS QUE UMA ACADEMIA</HText>
                <p
                    className="my-5 text-sm"
                >
                    Nós fornecemos equipamentos de fitness de qualidade,
                    treinadores e aulas para levá-lo aos seus objetivos com facilidade.
                    Nós fornecemos cuidados verdadeiros para cada pessoa.
                </p>
            </div>

            <div className="md:flex items-center justify-between gap-8 mt-5">
            {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
            </div>
        </section>
    )
}