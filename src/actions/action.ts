"use server";

const BASE_URL = process.env.API_BASE_URL;
const API_PATH = process.env.NEXT_PUBLIC_API_PATH;

interface IImage {
  key: string;
  url: string;
}

export const getProductImage = async (key: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}${API_PATH}/product/presigned-get-object-url`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key }),
        next: {
          revalidate: 300,
        },
      }
    );
    if (response.ok) {
      const responseData: IImage = await response.json();
      return responseData;
    } else {
      console.error(
        `Failed to fetch image for key: ${key}. Status: ${response.status}`
      );
    }
  } catch (error) {
    console.error(`Error fetching image for key: ${key}. Error: ${error}`);
  }
};

export const getProductImages = async (keys: string[]): Promise<IImage[]> => {
  const images: IImage[] = [];
  await Promise.all(
    keys.map(async (key) => {
      const image = await getProductImage(key);
      if (image) {
        images.push(image);
      }
    })
  );
  return images;
};
