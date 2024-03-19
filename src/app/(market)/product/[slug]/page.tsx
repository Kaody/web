import { Skeleton } from "@mantine/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { query } from "@/actions";
import { NetworkError } from "@/components/error";
import {
  BuyBox,
  HeaderBox,
  ImageBoxSkeleton,
  ImagesBox,
  OverviewBox,
  ReviewsBox,
  Wrapper,
} from "@/components/product";
import { Recommended } from "@/components/products/recommended";
import { Similar } from "@/components/products/similar";
import {
  GetSingleProductDocument,
  GetSingleProductQuery,
  GetSingleProductQueryVariables,
} from "@/generated/graphql";

export const dynamic = "force-dynamic";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data, error } = await query<
    GetSingleProductQuery,
    GetSingleProductQueryVariables
  >({
    query: GetSingleProductDocument,
    variables: {
      input: {
        _id: params.slug,
      },
    },
    fetchPolicy: "no-cache",
  });

  return {
    title: {
      absolute:
        error && error.networkError
          ? "Erreur de chargement"
          : data
          ? data.getProduct.name
          : "Produit non trouvé",
    },
  };
}

export default async function Page({ params }: Props) {
  const { data, error } = await query<
    GetSingleProductQuery,
    GetSingleProductQueryVariables
  >({
    query: GetSingleProductDocument,
    variables: {
      input: {
        _id: params.slug,
      },
    },
    fetchPolicy: "no-cache",
  });

  if (error && error.networkError)
    return <NetworkError message={error.message} />;

  if (!data) notFound();

  return (
    <main>
      <Wrapper>
        <Suspense key={data.getProduct.name} fallback={<ImageBoxSkeleton />}>
          <ImagesBox images={data.getProduct.images} />
        </Suspense>
        <HeaderBox data={data} />
        <OverviewBox data={data} />
        <BuyBox data={data} />
      </Wrapper>
      <Suspense fallback={<Skeleton height={50} width="100%" />}>
        <Similar category={data.getProduct.name} />
      </Suspense>
      <Suspense fallback={<Skeleton mt="xl" height={50} width="100%" />}>
        <Recommended />
      </Suspense>
      <ReviewsBox />
    </main>
  );
}
