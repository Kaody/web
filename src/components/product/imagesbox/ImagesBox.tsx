import { getProductImages } from "@/actions/action";
import { ImagesBoxDesktop } from "./ImagesBoxDesktop";
import { ImagesBoxMobile } from "./ImagesBoxMobile";

interface Props {
  images: string[] | any;
}

export async function ImagesBox({ images }: Props) {
  const data = await getProductImages(images);
  return (
    <>
      <ImagesBoxMobile images={data} />
      <ImagesBoxDesktop images={data} />
    </>
  );
}
