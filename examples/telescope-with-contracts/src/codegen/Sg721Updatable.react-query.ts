/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { Expiration, Timestamp, Uint64, AllNftInfoResponse, OwnerOfResponse, Approval, NftInfoResponseForEmpty, Empty, AllOperatorsResponse, AllTokensResponse, ApprovalResponse, ApprovalsResponse, Decimal, CollectionInfoResponse, RoyaltyInfoResponse, ContractInfoResponse, ExecuteMsgForNullable_EmptyAndEmpty, Binary, UpdateCollectionInfoMsgForRoyaltyInfoResponse, InstantiateMsg, CollectionInfoForRoyaltyInfoResponse, MinterResponse, NftInfoResponse, NumTokensResponse, QueryMsg, TokensResponse } from "./Sg721Updatable.types";
import { Sg721UpdatableQueryClient, Sg721UpdatableClient } from "./Sg721Updatable.client";
export interface Sg721UpdatableReactQuery<TResponse, TData = TResponse> {
  client: Sg721UpdatableQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface Sg721UpdatableOwnershipQuery<TData> extends Sg721UpdatableReactQuery<OwnershipResponse, TData> {}
export function useSg721UpdatableOwnershipQuery<TData = OwnershipResponse>({
  client,
  options
}: Sg721UpdatableOwnershipQuery<TData>) {
  return useQuery<OwnershipResponse, Error, TData>(["sg721UpdatableOwnership", client.contractAddress], () => client.ownership(), options);
}
export interface Sg721UpdatableCollectionInfoQuery<TData> extends Sg721UpdatableReactQuery<CollectionInfoResponse, TData> {}
export function useSg721UpdatableCollectionInfoQuery<TData = CollectionInfoResponse>({
  client,
  options
}: Sg721UpdatableCollectionInfoQuery<TData>) {
  return useQuery<CollectionInfoResponse, Error, TData>(["sg721UpdatableCollectionInfo", client.contractAddress], () => client.collectionInfo(), options);
}
export interface Sg721UpdatableMinterQuery<TData> extends Sg721UpdatableReactQuery<MinterResponse, TData> {}
export function useSg721UpdatableMinterQuery<TData = MinterResponse>({
  client,
  options
}: Sg721UpdatableMinterQuery<TData>) {
  return useQuery<MinterResponse, Error, TData>(["sg721UpdatableMinter", client.contractAddress], () => client.minter(), options);
}
export interface Sg721UpdatableAllTokensQuery<TData> extends Sg721UpdatableReactQuery<AllTokensResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useSg721UpdatableAllTokensQuery<TData = AllTokensResponse>({
  client,
  args,
  options
}: Sg721UpdatableAllTokensQuery<TData>) {
  return useQuery<AllTokensResponse, Error, TData>(["sg721UpdatableAllTokens", client.contractAddress, JSON.stringify(args)], () => client.allTokens({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface Sg721UpdatableTokensQuery<TData> extends Sg721UpdatableReactQuery<TokensResponse, TData> {
  args: {
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function useSg721UpdatableTokensQuery<TData = TokensResponse>({
  client,
  args,
  options
}: Sg721UpdatableTokensQuery<TData>) {
  return useQuery<TokensResponse, Error, TData>(["sg721UpdatableTokens", client.contractAddress, JSON.stringify(args)], () => client.tokens({
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }), options);
}
export interface Sg721UpdatableAllNftInfoQuery<TData> extends Sg721UpdatableReactQuery<AllNftInfoResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function useSg721UpdatableAllNftInfoQuery<TData = AllNftInfoResponse>({
  client,
  args,
  options
}: Sg721UpdatableAllNftInfoQuery<TData>) {
  return useQuery<AllNftInfoResponse, Error, TData>(["sg721UpdatableAllNftInfo", client.contractAddress, JSON.stringify(args)], () => client.allNftInfo({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}
export interface Sg721UpdatableNftInfoQuery<TData> extends Sg721UpdatableReactQuery<NftInfoResponse, TData> {
  args: {
    tokenId: string;
  };
}
export function useSg721UpdatableNftInfoQuery<TData = NftInfoResponse>({
  client,
  args,
  options
}: Sg721UpdatableNftInfoQuery<TData>) {
  return useQuery<NftInfoResponse, Error, TData>(["sg721UpdatableNftInfo", client.contractAddress, JSON.stringify(args)], () => client.nftInfo({
    tokenId: args.tokenId
  }), options);
}
export interface Sg721UpdatableContractInfoQuery<TData> extends Sg721UpdatableReactQuery<ContractInfoResponse, TData> {}
export function useSg721UpdatableContractInfoQuery<TData = ContractInfoResponse>({
  client,
  options
}: Sg721UpdatableContractInfoQuery<TData>) {
  return useQuery<ContractInfoResponse, Error, TData>(["sg721UpdatableContractInfo", client.contractAddress], () => client.contractInfo(), options);
}
export interface Sg721UpdatableNumTokensQuery<TData> extends Sg721UpdatableReactQuery<NumTokensResponse, TData> {}
export function useSg721UpdatableNumTokensQuery<TData = NumTokensResponse>({
  client,
  options
}: Sg721UpdatableNumTokensQuery<TData>) {
  return useQuery<NumTokensResponse, Error, TData>(["sg721UpdatableNumTokens", client.contractAddress], () => client.numTokens(), options);
}
export interface Sg721UpdatableAllOperatorsQuery<TData> extends Sg721UpdatableReactQuery<AllOperatorsResponse, TData> {
  args: {
    includeExpired?: boolean;
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function useSg721UpdatableAllOperatorsQuery<TData = AllOperatorsResponse>({
  client,
  args,
  options
}: Sg721UpdatableAllOperatorsQuery<TData>) {
  return useQuery<AllOperatorsResponse, Error, TData>(["sg721UpdatableAllOperators", client.contractAddress, JSON.stringify(args)], () => client.allOperators({
    includeExpired: args.includeExpired,
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }), options);
}
export interface Sg721UpdatableApprovalsQuery<TData> extends Sg721UpdatableReactQuery<ApprovalsResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function useSg721UpdatableApprovalsQuery<TData = ApprovalsResponse>({
  client,
  args,
  options
}: Sg721UpdatableApprovalsQuery<TData>) {
  return useQuery<ApprovalsResponse, Error, TData>(["sg721UpdatableApprovals", client.contractAddress, JSON.stringify(args)], () => client.approvals({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}
export interface Sg721UpdatableApprovalQuery<TData> extends Sg721UpdatableReactQuery<ApprovalResponse, TData> {
  args: {
    includeExpired?: boolean;
    spender: string;
    tokenId: string;
  };
}
export function useSg721UpdatableApprovalQuery<TData = ApprovalResponse>({
  client,
  args,
  options
}: Sg721UpdatableApprovalQuery<TData>) {
  return useQuery<ApprovalResponse, Error, TData>(["sg721UpdatableApproval", client.contractAddress, JSON.stringify(args)], () => client.approval({
    includeExpired: args.includeExpired,
    spender: args.spender,
    tokenId: args.tokenId
  }), options);
}
export interface Sg721UpdatableOwnerOfQuery<TData> extends Sg721UpdatableReactQuery<OwnerOfResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function useSg721UpdatableOwnerOfQuery<TData = OwnerOfResponse>({
  client,
  args,
  options
}: Sg721UpdatableOwnerOfQuery<TData>) {
  return useQuery<OwnerOfResponse, Error, TData>(["sg721UpdatableOwnerOf", client.contractAddress, JSON.stringify(args)], () => client.ownerOf({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}
export interface Sg721UpdatableExtensionMutation {
  client: Sg721UpdatableClient;
  msg: {
    msg: Empty;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableExtensionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableExtensionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableExtensionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.extension(msg, fee, memo, funds), options);
}
export interface Sg721UpdatableMintMutation {
  client: Sg721UpdatableClient;
  msg: {
    extension?: Empty;
    owner: string;
    tokenId: string;
    tokenUri?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableMintMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableMintMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableMintMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.mint(msg, fee, memo, funds), options);
}
export interface Sg721UpdatableFreezeCollectionInfoMutation {
  client: Sg721UpdatableClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableFreezeCollectionInfoMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableFreezeCollectionInfoMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableFreezeCollectionInfoMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.freezeCollectionInfo(fee, memo, funds), options);
}
export interface Sg721UpdatableUpdateTradingStartTimeMutation {
  client: Sg721UpdatableClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableUpdateTradingStartTimeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableUpdateTradingStartTimeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableUpdateTradingStartTimeMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateTradingStartTime(fee, memo, funds), options);
}
export interface Sg721UpdatableUpdateCollectionInfoMutation {
  client: Sg721UpdatableClient;
  msg: {
    collectionInfo: UpdateCollectionInfoMsgForRoyaltyInfoResponse;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableUpdateCollectionInfoMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableUpdateCollectionInfoMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableUpdateCollectionInfoMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateCollectionInfo(msg, fee, memo, funds), options);
}
export interface Sg721UpdatableBurnMutation {
  client: Sg721UpdatableClient;
  msg: {
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableBurnMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableBurnMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableBurnMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.burn(msg, fee, memo, funds), options);
}
export interface Sg721UpdatableRevokeAllMutation {
  client: Sg721UpdatableClient;
  msg: {
    operator: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableRevokeAllMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableRevokeAllMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableRevokeAllMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.revokeAll(msg, fee, memo, funds), options);
}
export interface Sg721UpdatableApproveAllMutation {
  client: Sg721UpdatableClient;
  msg: {
    expires?: Expiration;
    operator: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableApproveAllMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableApproveAllMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableApproveAllMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.approveAll(msg, fee, memo, funds), options);
}
export interface Sg721UpdatableRevokeMutation {
  client: Sg721UpdatableClient;
  msg: {
    spender: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableRevokeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableRevokeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableRevokeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.revoke(msg, fee, memo, funds), options);
}
export interface Sg721UpdatableApproveMutation {
  client: Sg721UpdatableClient;
  msg: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableApproveMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableApproveMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableApproveMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.approve(msg, fee, memo, funds), options);
}
export interface Sg721UpdatableSendNftMutation {
  client: Sg721UpdatableClient;
  msg: {
    contract: string;
    msg: Binary;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableSendNftMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableSendNftMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableSendNftMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.sendNft(msg, fee, memo, funds), options);
}
export interface Sg721UpdatableTransferNftMutation {
  client: Sg721UpdatableClient;
  msg: {
    recipient: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableTransferNftMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableTransferNftMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableTransferNftMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.transferNft(msg, fee, memo, funds), options);
}
export interface Sg721UpdatableEnableUpdatableMutation {
  client: Sg721UpdatableClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableEnableUpdatableMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableEnableUpdatableMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableEnableUpdatableMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.enableUpdatable(fee, memo, funds), options);
}
export interface Sg721UpdatableUpdateTokenMetadataMutation {
  client: Sg721UpdatableClient;
  msg: {
    tokenId: string;
    tokenUri?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableUpdateTokenMetadataMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableUpdateTokenMetadataMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableUpdateTokenMetadataMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateTokenMetadata(msg, fee, memo, funds), options);
}
export interface Sg721UpdatableFreezeTokenMetadataMutation {
  client: Sg721UpdatableClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useSg721UpdatableFreezeTokenMetadataMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Sg721UpdatableFreezeTokenMetadataMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Sg721UpdatableFreezeTokenMetadataMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.freezeTokenMetadata(fee, memo, funds), options);
}