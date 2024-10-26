import React from "react";
import logo from "../images/logo.png";
import diamond from "../images/icons/diamond.svg";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link } from "react-router-dom";
import { Popconfirm, Select } from "antd";
import settingIcon from "../images/icons/setting-2.svg";
import { useDataContext } from "../dataContext";

function Header() {
  const { dispatch, dataTemp } = useDataContext();
  return (
    <React.Fragment>
      <div className="header">
        <div className="nav-left">
          <Link to="/">
            <img className="logo" src={logo} alt="img" />
          </Link>
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
              href="https://link3.to/XzeogrmF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <span className="gradient-text text-white hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme">
                Media
              </span>
            </a>
          </div>
          {/* <Button className="flex h-11 w-[148px] items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme text-white hover:!text-black">
        Select Wallet
      </Button> */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <WalletMultiButton />
            <Popconfirm
              placement="bottomRight"
              title={""}
              description={
                <div className="setting-modal">
                  <div className="title-setting">
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      Settings
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>RPC</span>
                    <Select
                      className="select-rpc"
                      value={dataTemp.rpc}
                      onChange={(e) => {
                        dispatch({ type: "UPDATE_RPC", payload: { rpc: e } });
                      }}
                      options={[
                        {
                          value:
                            "https://rpc.ironforge.network/mainnet?apiKey=01J218BG40T275QV1QW9KJSSK9",
                          label: "Triton RPC",
                        },
                        {
                          value:
                            "https://mainnet.helius-rpc.com/?api-key=a7b67dd8-dd8f-4a9e-8278-87cb8dc4230a",
                          label: "Helius RPC",
                        },
                      ]}
                    />
                  </div>
                </div>
              }
              showCancel={false}
            >
              <div className="popup-setting">
                <img src={settingIcon} style={{ width: "18px" }} />
              </div>
            </Popconfirm>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
