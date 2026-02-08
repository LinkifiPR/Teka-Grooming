import { readdir } from "node:fs/promises";
import { join } from "node:path";

export type GalleryPhoto = {
  alt: {
    en: string;
    th: string;
  };
  id: number;
  src: string;
};

export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  const directory = join(process.cwd(), "public/brand/gallery/photos");
  const files = await readdir(directory);

  const imageFiles = files
    .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
    .sort((first, second) => first.localeCompare(second, undefined, { numeric: true }));

  return imageFiles.map((file, index) => ({
    alt: {
      en: `Dog grooming gallery photo ${index + 1}`,
      th: `ภาพผลงานกรูมมิ่งสุนัข ${index + 1}`
    },
    id: index + 1,
    src: `/brand/gallery/photos/${file}`
  }));
}
