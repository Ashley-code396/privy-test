'use client';

import {PrivyProvider} from '@privy-io/react-auth';

const suiTestnet = {
  id: 10001, // Arbitrary unique number for Sui testnet
  name: 'Sui Testnet',
  network: 'testnet',
  nativeCurrency: { name: 'SUI', symbol: 'SUI', decimals: 9 },
  rpcUrls: {
    default: { http: ['https://fullnode.testnet.sui.io:443'] },
    public: { http: ['https://fullnode.testnet.sui.io:443'] },
  },
};

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || 'your-privy-app-id'}
      config={{
        embeddedWallets: {
          createOnLogin: 'all-users',
          requireUserPasswordOnCreate: false,
        },
        supportedChains: [suiTestnet],
      }}
    >
      {children}
    </PrivyProvider>
  );
}
