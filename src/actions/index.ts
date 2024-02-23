"use server";

import {
  ApolloCache,
  ApolloError,
  DefaultContext,
  MutationOptions,
  OperationVariables,
  QueryOptions,
} from "@apollo/client";

import getClient from "@/libs/apollo/rsc-apollo-client";

export async function query<
  TQuery = any,
  TVariables extends OperationVariables = OperationVariables
>(options: QueryOptions<TVariables, TQuery>) {
  let res: {
    data?: TQuery;
    errors?: ApolloError;
  };
  try {
    const { data } = await getClient().query<TQuery, TVariables>(options);
    res = { data };
  } catch (error) {
    res = { errors: error as ApolloError };
  }
  return res;
}

export async function mutation<
  TData = any,
  TVariables extends OperationVariables = OperationVariables,
  TContext extends Record<string, any> = DefaultContext,
  TCache extends ApolloCache<any> = ApolloCache<any>
>(options: MutationOptions<TData, TVariables, TContext>) {
  let res: {
    data?: TData | null | undefined;
    errors?: ApolloError;
  };
  try {
    const { data } = await getClient().mutate<
      TData,
      TVariables,
      TContext,
      TCache
    >(options);
    res = { data };
  } catch (error) {
    res = { errors: error as ApolloError };
  }
  return res;
}
