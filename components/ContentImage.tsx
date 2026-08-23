import Image from "next/image";

export function ContentImage({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
}) {
  const svg = src.endsWith(".svg");
  return (
    <figure className="overflow-hidden rounded-sm border border-border bg-surface-alt">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1200px) 1200px, 100vw"
        unoptimized={svg}
        className="h-auto w-full"
      />
      {caption ? (
        <figcaption className="px-4 py-3 text-sm text-text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
