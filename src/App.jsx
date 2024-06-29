import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import "./App.css";
import MyComponent from "./MyComponent";
import { useMemo } from "react";
import "@solana/wallet-adapter-react-ui/styles.css";
import { DataProvider } from "./dataContext";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import the styles
// require('@solana/wallet-adapter-react-ui/styles.css');

function App() {
  // you can use Mainnet, Devnet or Testnet here
  const solNetwork = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
  // initialise all the wallets you want to use
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    [solNetwork],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <div className="App bg-black">
            <DataProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="*" element={<MyComponent />} />
                  {/* <Route path="register-form" element={<Register />} /> */}
                </Routes>
              </BrowserRouter>
            </DataProvider>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
