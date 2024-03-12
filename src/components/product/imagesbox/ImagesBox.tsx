import { ImagesBoxDesktop } from "./ImagesBoxDesktop";
import { ImagesBoxMobile } from "./ImagesBoxMobile";

const productsImages = [
  { id: 0, src: "https://placehold.co/64x64" },
  { id: 1, src: "https://placehold.co/64x64" },
  { id: 2, src: "https://placehold.co/64x64" },
  { id: 3, src: "https://placehold.co/64x64" },
  { id: 4, src: "https://placehold.co/64x64" },
];

export function ImagesBox() {
  return (
    <>
      <ImagesBoxMobile images={productsImages} />
      <ImagesBoxDesktop images={productsImages} />
    </>
  );
}
