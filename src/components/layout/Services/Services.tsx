import services from "../../../data/services.json";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { ServiceCard } from "../../ui/ServiceCard";
import { Container } from "../Container";

export function Services() {
  return (
    <Container>
      <div className="space-y-6" id="services">
        <SectionTitle title="Serviços" subtitle="Escolha seu estilo" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services &&
            services.map((service) => (
              <ServiceCard
                img={service.imgUrl}
                title={service.service}
                description={service.description}
                price={service.price}
                key={service.id}
              />
            ))}
        </div>
      </div>
    </Container>
  );
}
