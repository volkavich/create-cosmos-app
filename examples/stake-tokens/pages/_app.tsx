import type { AppProps } from 'next/app';
import { ChainProvider } from '@cosmos-kit/react';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation';
import { wallets as leapWallets } from '@cosmos-kit/leap';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { SignerOptions } from '@cosmos-kit/core';
import { chains, assets } from 'chain-registry';
import { GasPrice } from '@cosmjs/stargate';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  Box,
  Toaster,
  useTheme,
  useColorModeValue,
  ThemeProvider,
} from '@interchain-ui/react';

import '@interchain-ui/react/styles';
import '@interchain-ui/react/globalStyles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const { themeClass } = useTheme();

  const signerOptions: SignerOptions = {
    signingStargate: (chain) => {
      let gasPrice;
      try {
        const feeToken = chain.fees?.fee_tokens[0];
        const fee = `${feeToken?.average_gas_price || 0.025}${feeToken?.denom}`;
        gasPrice = GasPrice.fromString(fee);
      } catch (error) {
        gasPrice = GasPrice.fromString('0.025uosmo');
      }
      return { gasPrice };
    },
  };

  return (
    <ThemeProvider>
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={[...keplrWallets, ...cosmostationWallets, ...leapWallets]}
        walletConnectOptions={{
          signClient: {
            projectId: 'a8510432ebb71e6948cfd6cde54b70f7',
            relayUrl: 'wss://relay.walletconnect.org',
            metadata: {
              name: 'CosmosKit Template',
              description: 'CosmosKit dapp template',
              url: 'https://docs.cosmoskit.com/',
              icons: [],
            },
          },
        }}
        signerOptions={signerOptions}
      >
        <QueryClientProvider client={queryClient}>
          <Box
            className={themeClass}
            minHeight="100dvh"
            backgroundColor={useColorModeValue('$white', '$background')}
          >
            <Component {...pageProps} />
            <Toaster position="top-right" closeButton={true} />
          </Box>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChainProvider>
    </ThemeProvider>
  );
}

export default CreateCosmosApp;
