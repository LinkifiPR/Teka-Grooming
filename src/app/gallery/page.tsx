import GalleryView from "./gallery-view";
import { getGalleryPhotos } from "@/lib/gallery";

export const dynamic = "force-static";

export default async function GalleryPage() {
  const photos = await getGalleryPhotos();

  return <GalleryView photos={photos} />;
}
