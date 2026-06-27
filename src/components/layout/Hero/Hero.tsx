import { Calendar1Icon } from "lucide-react";
import { Container } from "../Container";

import tesouraIcon from "../../../assets/tesoura-icon.png";
import barbaIcon from "../../../assets/barba-icon.png";
import borrifadorIcon from "../../../assets/borrifador-icon.png";

export default function Hero() {
  return (
    <div
      id="hero"
      className="
            relative
            bg-black

            md:bg-[url('/src/assets/hero.png')]
            md:bg-contain
            md:bg-right
            lg:bg-position-[50vw]
            md:bg-no-repeat

            py-6
            md:py-8
        "
    >
      {/* Overlay degradê */}
      <div
        className="
        hidden
        md:absolute
        md:inset-0
        md:block

        md:bg-[linear-gradient(to_right,#000_0%,rgba(0,0,0,0.9)_45%,transparent_70%)]
        lg:bg-[linear-gradient(to_right,#000_0%,rgba(0,0,0,0.9)_50%,transparent_70%)]
      "
      />
      <Container>
        <div className="space-y-8">
          <ul className="flex items-center gap-2">
            <li className="text-brand">CORTE MASCULINO</li>

            {["BARBA", "CONFIANÇA"].map((item) => (
              <li
                key={item}
                className="
                        flex
                        items-center
                        gap-2
                        before:content-['']
                        before:w-1.5
                        before:h-1.5
                        before:bg-brand
                        before:rounded-full
                        text-brand
                    "
              >
                {item}
              </li>
            ))}
          </ul>
          <h2 className="text-4xl lg:text-6xl font-bold">
            SEU ESTILO, <br />
            SUA IDENTIDADE.
          </h2>
          <p className="max-w-87.5">
            Cortes modernos, acabamentos impecáveis e um atendimento feito pra
            você.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 uppercase text-xs lg:text-base">
              <img src={tesouraIcon} alt="Tesoura" className="h-6 lg:h-8" />
              <span>
                Cortes
                <br />
                Modernos
              </span>
            </div>
            <div className="flex items-center gap-2 uppercase text-xs lg:text-base">
              <img src={barbaIcon} alt="Barba" className="h-6 lg:h-8" />
              <span>
                Barba
                <br />
                Alinhada
              </span>
            </div>
            <div className="flex items-center gap-2 uppercase text-xs lg:text-base">
              <img
                src={borrifadorIcon}
                alt="Borrifador"
                className="h-6 lg:h-8"
              />
              <span>
                Produtos
                <br />
                de Qualidade
              </span>
            </div>
          </div>
          <button
            className="
              mt-4
              w-full
              md:w-fit
              flex
              justify-center  
              items-center
              gap-2
              bg-brand
              text-white
              py-3
              px-4
              rounded-md
              "
          >
            <Calendar1Icon />
            AGENDAR HORÁRIO
          </button>
        </div>
      </Container>
    </div>
  );
}
