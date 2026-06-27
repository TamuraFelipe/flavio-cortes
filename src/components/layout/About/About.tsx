import { GemIcon, StarIcon, ClockIcon } from "lucide-react";
import imgAbout from "../../../assets/about.png";
import { Container } from "../Container";

export default function About() {
  return (
    <section id="about">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={imgAbout}
            alt="Imagem de um cadeira de barbeiro no meio de um salão"
            className="w-full lg:w-[50%]"
          />
          <div className="space-y-6">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <span className="text-xs lg:text-base uppercase tracking-[0.35em] text-[#b89b5e]">
                  Sobre
                </span>

                <div className="h-px flex-1 bg-[#5c4b2c]"></div>
              </div>

              <h3
                className="
                mt-4 
                text-white 
                text-xl
                lg:text-4xl 
                uppercase 
                font-black 
                tracking-[0.08em]
                "
              >
                Atendimento de qualidade <br />
                para homens que exigem mais.
              </h3>
            </div>
            <p>
              Aqui, cada detalhe importa. Do corte ao acabamento, o foco é o seu
              estilo e sua personalidade.
              <br />
              Ambiente moderno, descontraído e feito para você se sentir à
              vontade.
            </p>
            <div className="flex items-center justify-between lg:justify-start lg:gap-10">
              <div className="flex flex-col gap-2 items-center">
                <StarIcon className="text-brand w-6 h-6 lg:w-10 lg:h-10" />
                <span className="text-center text-xs lg:text-base">
                  Atendimento <br /> Personalizado
                </span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <ClockIcon
                  size={40}
                  className="text-brand w-6 h-6 lg:w-10 lg:h-10"
                />
                <span className="text-center">
                  Pontualidade e <br /> Compromisso
                </span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <GemIcon
                  size={40}
                  className="text-brand w-6 h-6 lg:w-10 lg:h-10"
                />
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
