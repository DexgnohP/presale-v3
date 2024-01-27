import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import "./App.css";
import MyComponent from "./MyComponent";
import { useMemo } from "react";
import "@solana/wallet-adapter-react-ui/styles.css";
import { DataProvider } from './dataContext';

// import the styles
// require('@solana/wallet-adapter-react-ui/styles.css');

function App() {
  // you can use Mainnet, Devnet or Testnet here
  const solNetwork = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
  // initialise all the wallets you want to use
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [solNetwork]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <div className="App bg-black">
          <DataProvider>
          <MyComponent />
          </DataProvider>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
