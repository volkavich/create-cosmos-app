"use strict";
/**
* This file and any referenced files were automatically generated by @cosmology/telescope@1.3.2
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRpcClient = exports.getRpcEndpointKey = void 0;
const stargate_1 = require("@cosmjs/stargate");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const _rpcClients = {};
const getRpcEndpointKey = (rpcEndpoint) => {
    if (typeof rpcEndpoint === 'string') {
        return rpcEndpoint;
    }
    else if (!!rpcEndpoint) {
        //@ts-ignore
        return rpcEndpoint.url;
    }
};
exports.getRpcEndpointKey = getRpcEndpointKey;
const getRpcClient = async (rpcEndpoint) => {
    const key = (0, exports.getRpcEndpointKey)(rpcEndpoint);
    if (!key)
        return;
    if (_rpcClients.hasOwnProperty(key)) {
        return _rpcClients[key];
    }
    const tmClient = await tendermint_rpc_1.Tendermint34Client.connect(rpcEndpoint);
    //@ts-ignore
    const client = new stargate_1.QueryClient(tmClient);
    const rpc = (0, stargate_1.createProtobufRpcClient)(client);
    _rpcClients[key] = rpc;
    return rpc;
};
exports.getRpcClient = getRpcClient;
