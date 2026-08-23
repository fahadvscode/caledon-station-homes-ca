import { ADDRESS_LINE, MAPS_EMBED_SRC, PROJECT_NAME } from "@/lib/content";

export function LocationMap() {
  return (
    <div className="overflow-hidden rounded-sm border border-border">
      <iframe
        title={`${PROJECT_NAME} map — ${ADDRESS_LINE}`}
        src={MAPS_EMBED_SRC}
        className="h-[360px] w-full md:h-[480px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
