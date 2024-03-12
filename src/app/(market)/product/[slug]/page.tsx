import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { query } from "@/actions";
import {
  BuyBox,
  HeaderBox,
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

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await query<
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
      absolute: `${data?.getProduct.name}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { data, errors } = await query<
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

  if (!data || errors) return notFound();

  return (
    <main>
      <Wrapper>
        <ImagesBox />
        <HeaderBox data={data} />
        <OverviewBox data={data} />
        <BuyBox data={data} />
      </Wrapper>
      <Similar />
      <Recommended />
      <ReviewsBox />
    </main>
  );
}
