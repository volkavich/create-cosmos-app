/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { IQueryClientProvider, ISigningClientProvider, IMessageComposerProvider } from "./contractContextBase";
import { Sg721UpdatableQueryClient } from "./Sg721Updatable.client";
import { Sg721UpdatableClient } from "./Sg721Updatable.client";
import { Sg721UpdatableMessageComposer } from "./Sg721Updatable.message-composer";
import { Sg721Updatable } from "./Sg721Updatable.provider";
import { WhitelistQueryClient } from "./Whitelist.client";
import { WhitelistClient } from "./Whitelist.client";
import { WhitelistMessageComposer } from "./Whitelist.message-composer";
import { Whitelist } from "./Whitelist.provider";
import { MarketplaceQueryClient } from "./Marketplace.client";
import { MarketplaceClient } from "./Marketplace.client";
import { MarketplaceMessageComposer } from "./Marketplace.message-composer";
import { Marketplace } from "./Marketplace.provider";
export interface IContractsContext {
  sg721Updatable: IQueryClientProvider<Sg721UpdatableQueryClient> & ISigningClientProvider<Sg721UpdatableClient> & IMessageComposerProvider<Sg721UpdatableMessageComposer>;
  whitelist: IQueryClientProvider<WhitelistQueryClient> & ISigningClientProvider<WhitelistClient> & IMessageComposerProvider<WhitelistMessageComposer>;
  marketplace: IQueryClientProvider<MarketplaceQueryClient> & ISigningClientProvider<MarketplaceClient> & IMessageComposerProvider<MarketplaceMessageComposer>;
}
export const getProviders = (address?: string, cosmWasmClient?: CosmWasmClient, signingCosmWasmClient?: SigningCosmWasmClient) => ({
  sg721Updatable: new Sg721Updatable({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }),
  whitelist: new Whitelist({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }),
  marketplace: new Marketplace({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  })
});