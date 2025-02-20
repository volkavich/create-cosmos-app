import { useChainWallet, useAccount } from '@interchain-kit/react';
import {
  Box,
  Center,
  Grid,
  GridItem,
  Icon,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import {
  Astronaut,
  Error,
  Connected,
  ConnectedShowAddress,
  ConnectedUserInfo,
  Connecting,
  ConnectStatusWarn,
  CopyAddressBtn,
  Disconnected,
  NotExist,
  Rejected,
  RejectedWarn,
  WalletConnectComponent,
  ChainCard,
} from '../components';
import { chainName } from '../config';
import { useWalletManager, useWalletModal } from '@interchain-kit/react'
import { WalletStatus } from 'cosmos-kit';

export const WalletSection = () => {
  const walletManager = useWalletManager()
  const chainIds = walletManager.chains.map(c => c.chainId)
  // const { open, close, modalIsOpen } = useWalletModal()
  const wallet = walletManager.wallets.find(item => item.option?.name === 'keplr-extension')

  const account = useAccount(chainName, wallet?.option?.name as string)
  const username = account?.username

  const { address } = useChainWallet(chainName, wallet?.option?.name as string)

  const chain = {
    chainName,
    label: wallet?.option?.prettyName,
    value: chainName,
    // icon: // logoUrl,
  };

  // Events
  const onClickConnect: MouseEventHandler = async (e) => {
    console.log('onClickConnect', wallet?.option?.name)
    // return
    e.preventDefault();
    // await connect();
    walletManager.connect(wallet?.option?.name as string, () => {
      console.log('onApprove')
    }, (uri: string) => {
      console.log({ uri })
    })
  };

  const onDisconnect: MouseEventHandler = async (e) => {
    console.log('onDisconnect', chainIds)
    wallet?.disconnect(chainIds)
  }

  // const onClickOpenView: MouseEventHandler = (e) => {
  //   e.preventDefault();
  //   openView();
  // };

  // Components
  const connectWalletButton = (
    <WalletConnectComponent
      walletStatus={!!address?.length ? WalletStatus.Connected : WalletStatus.Disconnected}
      disconnect={
        <Disconnected buttonText="Connect Wallet" onClick={onClickConnect} />
      }
      connecting={<Connecting />}
      connected={<>
        <Connected buttonText={'Disconnect'} onClick={onDisconnect} />
      </>}
      rejected={<>
        <Rejected buttonText="Reconnect" onClick={onClickConnect} />
      </>}
      error={<>
        {/* <Error buttonText="Change Wallet" onClick={onClickOpenView} /> */}
      </>}
      notExist={<>
        {/* <NotExist buttonText="Install Wallet" onClick={onClickOpenView} /> */}
      </>}
    />
  );

  const connectWalletWarn = (
    <ConnectStatusWarn
      walletStatus={!!address?.length ? WalletStatus.Connected : WalletStatus.Disconnected}
      rejected={
        <RejectedWarn
          icon={<Icon as={FiAlertTriangle} mt={1} />}
          wordOfWarning={`${wallet?.option?.prettyName}`}
        />
      }
      error={
        <RejectedWarn
          icon={<Icon as={FiAlertTriangle} mt={1} />}
          wordOfWarning={`${wallet?.option?.prettyName}`}
        />
      }
    />
  );

  const userInfo = username && (
    <ConnectedUserInfo username={username} icon={<Astronaut />} />
  );
  const addressBtn = (
    <CopyAddressBtn
      walletStatus={address ? WalletStatus.Connected : WalletStatus.Disconnected}
      connected={<ConnectedShowAddress address={address} isLoading={false} />}
    />
  );

  return (
    <Center py={16}>
      <Grid
        w="full"
        maxW="sm"
        templateColumns="1fr"
        rowGap={4}
        alignItems="center"
        justifyContent="center"
      >
        <GridItem marginBottom={'20px'}>
          <ChainCard
            prettyName={chain?.label || chainName}
          // icon={chain?.icon}
          />
        </GridItem>
        <GridItem px={6}>
          <Stack
            justifyContent="center"
            alignItems="center"
            borderRadius="lg"
            bg={useColorModeValue('white', 'blackAlpha.400')}
            boxShadow={useColorModeValue(
              '0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3',
              '0 0 2px #363636, 0 0 8px -2px #4f4f4f'
            )}
            spacing={4}
            px={4}
            py={{ base: 6, md: 12 }}
          >
            {userInfo}
            {addressBtn}
            <Box w="full" maxW={{ base: 52, md: 64 }}>
              {connectWalletButton}
            </Box>
            {connectWalletWarn && <GridItem>{connectWalletWarn}</GridItem>}
          </Stack>
        </GridItem>
      </Grid>
    </Center>
  );
};
