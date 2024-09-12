import React from "react";
import logo from "../images/logo.png";
import diamond from "../images/icons/diamond.svg";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <div className="nav-left">
          <img className="logo" src={logo} alt="img" />
        </div>
        <div className="flex items-center gap-16">
          {/* <Button className='' onClick={() => {}}>Connect Wallet</Button> */}
          <div className="hidden items-center gap-16 lg:flex">
            <Link to="/" className="text-lg">
              <span className="gradient-text text-white hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme">
                Home
              </span>
            </Link>
            <Link to="/referral" className="text-lg">
              <span
                className="gradient-text text-white hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={diamond}
                  style={{ width: "25px", marginRight: "10px" }}
                />
                Referral
              </span>
            </Link>
            <a
              href="https://docs.idosol.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <span className="gradient-text text-white hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme">
                Docs
              </span>
            </a>
            <a
              href="https://twitter.com/idosolme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <span className="gradient-text text-white hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme">
                Twitter
              </span>
            </a>
            <a
              href="https://t.me/idosolme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <span className="gradient-text text-white hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme">
                Telegram
              </span>
            </a>
          </div>
          {/* <Button className="flex h-11 w-[148px] items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme text-white hover:!text-black">
        Select Wallet
      </Button> */}
          <WalletMultiButton />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
