import Card from "@/lib/components/Card";

export default ({
  src,
  alt,
  caption = undefined,
}: {
  src: string;
  alt: string;
  caption?: string;
}) => (
  <div className="flex flex-col items-center">
    <div className="max-w-5xl">
      <Card backgroundClass="bg-accent" compact={window.innerWidth < 1024}>
        <img src={src} alt={alt} />
        {caption && <span className="mt-2 text-sm text-white">{caption}</span>}
      </Card>
    </div>
  </div>
);
