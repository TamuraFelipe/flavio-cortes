interface GalleryCardProps {
  src: string;
  alt: string;
}
export function GalleryCard({ src, alt }: GalleryCardProps) {
  return (
    <div className="rounded-sm overflow-hidden">
      <img src={src} alt={alt} className="block overflow-hidden" />
    </div>
  );
}
