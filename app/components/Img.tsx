import NextImage, { ImageProps } from "next/image";
import { IMAGES, ImageKey } from "@/lib/images";

/**
 * Drop-in replacement for next/image that resolves images through
 * the central IMAGES registry in lib/images.ts.
 *
 * Usage:
 *   <Img id="heroPhone" alt="Hero" width={600} height={800} />
 *
 * To swap an image sitewide: update lib/images.ts — no component changes needed.
 */
type ImgProps = Omit<ImageProps, "src"> & {
  id: ImageKey;
};

export default function Img({ id, ...props }: ImgProps) {
  return <NextImage src={IMAGES[id]} unoptimized {...props} />;
}
