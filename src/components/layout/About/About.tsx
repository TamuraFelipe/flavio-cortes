import { GemIcon, StarIcon, ClockIcon } from "lucide-react";
import imgAbout from "../../../assets/about.png";
import { Container } from "../Container";
import { SectionTitle } from "../../ui/SectionTitle";

export default function About() {
  return (
    <section id="about">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={imgAbout}
            alt="Imagem de um cadeira de barbeiro no meio de um salão"
            className="w-full"
          />
          <div className="space-y-6">
            <SectionTitle
              title="Sobre"
              subtitle="Atendimento de qualidade para homens que exigem mais."
            />
            <p>
              Aqui, cada detalhe importa. Do corte ao acabamento, o foco é o seu
              estilo e sua personalidade.
              <br />
              Ambiente moderno, descontraído e feito para você se sentir à
              vontade.
            </p>
            <div className="flex items-center justify-between lg:justify-start lg:gap-10">
              <div className="flex flex-col gap-2 items-center">
                <StarIcon className="text-brand w-10 h-10 stroke-1" />
                <span className="text-center">
                  Atendimento <br /> Personalizado
                </span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <ClockIcon
                  size={40}
                  className="text-brand w-10 h-10 stroke-1"
                />
                <span className="text-center">
                  Pontualidade e <br /> Compromisso
                </span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <GemIcon size={40} className="text-brand w-10 h-10 stroke-1" />
                <span className="text-center">
                  Foco em <br /> Qualidade
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
