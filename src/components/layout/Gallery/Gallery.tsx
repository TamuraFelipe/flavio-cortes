import { Container } from "../Container";
import gallery from "../../../data/gallery.json";
import { SectionTitle } from "../../ui/SectionTitle";
import { GalleryCard } from "../../ui/GalleryCard";

export function Gallery() {
  return (
    <Container>
      <div className="space-y-6" id="gallery">
        <SectionTitle title="Galeria" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {gallery &&
            gallery.map((gallery) => (
              <GalleryCard
                src={gallery.imgUrl}
                alt={gallery.alt}
                key={gallery.id}
              />
            ))}
        </div>
      </div>
    </Container>
  );
}
