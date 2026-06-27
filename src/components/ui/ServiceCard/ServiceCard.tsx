interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
  price: string;
}
export function ServiceCard({
  img,
  title,
  description,
  price,
}: ServiceCardProps): React.JSX.Element {
  return (
    <div className="relative rounded-sm border border-brand">
      <img src={img} alt="Imagem serviços 1" className="h-55" />
      <div className="flex flex-col justify-center p-6 space-y-2 absolute top-0 bottom-0 right-0 w-[60%] bg-dark">
        <h4 className="text-xl uppercase">{title}</h4>
        <p className="text-xs">{description}</p>
        <p className="text-2xl text-brand font-bold">{price}</p>
      </div>
    </div>
  );
}
