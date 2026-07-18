import helios from "@/assets/work/helios-banking.jpg";
import meridian from "@/assets/work/meridian-health.jpg";
import atlas from "@/assets/work/atlas-commerce.jpg";
import orbit from "@/assets/work/orbit-saas.jpg";
import verdant from "@/assets/work/verdant-mobile.jpg";
import kestrel from "@/assets/work/kestrel-hotels.jpg";

export const workImages: Record<string, string> = {
  "helios-banking": helios,
  "meridian-health": meridian,
  "atlas-commerce": atlas,
  "orbit-saas": orbit,
  "verdant-mobile": verdant,
  "kestrel-hotels": kestrel,
};

export function getWorkImage(slug: string): string | undefined {
  return workImages[slug];
}
