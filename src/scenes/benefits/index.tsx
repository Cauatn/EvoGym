import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
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

                    {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <div
                >
                  <HText>
                    MILHARES DE PESSOAS ENTRANDO NO MUNDO{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </div>
              </div>
            </div>

            {/* DESCRIPT */}
            <div
            >
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Entre Agora
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
        </section>
    )
}