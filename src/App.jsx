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
import background from "./images/background.png";
import "@solana/wallet-adapter-react-ui/styles.css";
import { DataProvider } from "./dataContext";
// import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ReferralPage from "./components/ReferralPage";

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
          <BrowserRouter>
            <div className="App bg-black">
              <div className="relativ container">
                <img src={background} className="background-fixed" />
                <Header />
                <DataProvider>
                  <Routes>
                    <Route path="*" element={<MyComponent />} />
                    <Route path="referral" element={<ReferralPage />} />
                  </Routes>
                </DataProvider>
              </div>
            </div>
          </BrowserRouter>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
