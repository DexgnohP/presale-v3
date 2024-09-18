import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../images/icons/profile.svg";
import copy from "../images/icons/copy.svg";
import point from "../images/icons/point.svg";
import ranking from "../images/icons/ranking.svg";
import leaderIcon from "../images/icons/leader-icon.svg";
import adsRef from "../images/adsRef.png";
import toprank1 from "../images/icons/toprank1.svg";
import toprank2 from "../images/icons/toprank2.svg";
import toprank3 from "../images/icons/toprank3.svg";
import { Button, Spin, Table, notification } from "antd";
import diamond from "../images/icons/diamond.svg";
import { useWallet } from "@solana/wallet-adapter-react";
import { ReloadOutlined } from "@ant-design/icons";
import dexPart from "../images/iconsPartners/dex.svg";
import cmcPart from "../images/iconsPartners/cmc.svg";
import vsbPart from "../images/iconsPartners/vsb.svg";
import wifTradePart from "../images/iconsPartners/wiftrade.svg";
import cgPart from "../images/iconsPartners/cg.svg";
import dextoolsPart from "../images/iconsPartners/dextools.svg";

function ReferralPage() {
  const wallet = useWallet();
  const { connected } = useWallet();
  const [yourRank, setYourRank] = useState("N/A");
  const [yourPoint, setYourPoint] = useState("N/A");
  const [loadingTable, setLoadingTable] = useState(false);
  const [listTop, setListTop] = useState([]);

  function convertText(inputText) {
    let convertedText = inputText.slice(0, 14);
    convertedText += "...";
    convertedText += inputText.slice(-14);
    return convertedText;
  }

  useEffect(() => {
    if (connected) {
      getProfileRef(wallet.publicKey.toString());
    } else {
      getProfileRef();
    }
  }, [connected]);

  const getProfileRef = async (inputWallet) => {
    setLoadingTable(true);
    await fetch(
      `https://host-server.store/api/refer-point/current?refer=${inputWallet}`,
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        let result = data.data;
        setYourPoint(result.point ? result.point : "N/A");
        setYourRank(result.currentRank ? result.currentRank : "N/A");
        setListTop(
          result.top.map((item) => ({
            rank: item.currentRank,
            wallet: item.refer,
            point: item.point,
          })),
        );
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      })
      .finally(() => {
        setLoadingTable(false);
      });
  };

  const columns = [
    {
      title: "RANK",
      dataIndex: "rank",
      key: "rank",
      render: (_, __, index) => {
        switch (index) {
          case 0:
            return (
              <div className="rank-1">
                <span>{index + 1}</span>
                <img src={toprank1} />
              </div>
            );
          case 1:
            return (
              <div className="rank-1">
                <span>{index + 1}</span>
                <img src={toprank2} />
              </div>
            );
          case 2:
            return (
              <div className="rank-1">
                <span>{index + 1}</span>
                <img src={toprank3} />
              </div>
            );
          default:
            return index + 1;
        }
      },
    },
    {
      title: "WALLET",
      dataIndex: "wallet",
      key: "wallet",
      render: (e) => {
        return convertText(e);
      },
    },
    {
      title: "TOTAL POINTS",
      dataIndex: "point",
      key: "point",
      align: "center",
    },
    {
      title: "REWARD DAILY (TOKEN)",
      dataIndex: "reward",
      key: "reward",
      align: "center",
      render: (_, __, index) => {
        switch (index) {
          case 0:
            return "1M";
          case 1:
            return "700K";
          case 2:
            return "500K";
          default:
            return "400K";
        }
      },
    },
  ];

  return (
    <div className="content" style={{ paddingTop: 0 }}>
      <div className="mb-8 flex items-center justify-center gap-8 lg:hidden">
        <Link to="/" className="text-lg">
          <span className="gradient-text text-white hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme">
            Home
          </span>
        </Link>
        <Link to="/referral" className="text-lg">
          <span
            style={{ display: "flex", alignItems: "center" }}
            className="gradient-text text-white hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme"
          >
            <img src={diamond} style={{ width: "25px", marginRight: "10px" }} />
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
      <img
        src={adsRef}
        className="img-ads-ref"
        style={{ borderRadius: "16px" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "80px",
        }}
      >
        <Button
          style={{ width: "fit-content", pointerEvents: "none" }}
          className=" hover:bg-transparent!important flex h-11 items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme p-[1px] "
        >
          <div
            style={{ padding: "10px 20px" }}
            className="flex  justify-between rounded-full bg-black p-[10px] font-medium text-white"
          >
            <span>PARTNERS</span>
          </div>
        </Button>
      </div>

      <section class="scroll-container">
        <div class="scroll-wrapper">
          <div class="scroll-content">
            <a
              class="scroll-item"
              href="https://dexscreener.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={dexPart} />
            </a>
            <a
              class="scroll-item"
              href="https://coinmarketcap.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cmcPart} />
            </a>
            <a
              class="scroll-item"
              href="https://www.dextools.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={dextoolsPart} />
            </a>
            <a
              class="scroll-item"
              href="https://t.me/wiftrade_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={wifTradePart} />
            </a>
            <a
              class="scroll-item"
              href="https://t.me/VolumeSolana_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={vsbPart} />
            </a>
            <a
              class="scroll-item"
              href="https://www.coingecko.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cgPart} />
            </a>
          </div>
          <div class="scroll-content">
            <a
              class="scroll-item"
              href="https://dexscreener.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={dexPart} />
            </a>
            <a
              class="scroll-item"
              href="https://coinmarketcap.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cmcPart} />
            </a>
            <a
              class="scroll-item"
              href="https://www.dextools.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={dextoolsPart} />
            </a>
            <a
              class="scroll-item"
              href="https://t.me/wiftrade_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={wifTradePart} />
            </a>
            <a
              class="scroll-item"
              href="https://t.me/VolumeSolana_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={vsbPart} />
            </a>
            <a
              class="scroll-item"
              href="https://www.coingecko.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cgPart} />
            </a>
          </div>
        </div>
      </section>
      <div className="mt-10 text-center font-syne text-6xl font-extrabold uppercase text-white md:text-[72px]">
        <span className="shadow-cyan-presale-theme drop-shadow-[2px_2px_var(--tw-shadow-color)]">
          REFE
        </span>
        <span className="shadow-purple-presale-theme drop-shadow-[2px_2px_var(--tw-shadow-color)]">
          RRAL
        </span>
      </div>
      {/* <div style={{ marginTop: "30px" }}>
        🏆 The reward tokens will be distributed after the launch 🏆
        <br />
        ⭐️ The leaderboard will be reset at the beginning of each month ⭐️
      </div> */}
      <Spin style={{ borderRadius: "16px" }} spinning={loadingTable}>
        <div className="info-leaderboard">
          <div className="info-leaderboard-left">
            <div className="profile-referral">
              <div className="profile-referral-left">
                <img src={profile} />
                <span>My Profile Referral</span>
              </div>
              <ReloadOutlined
                className="profile-referral-icon"
                onClick={() => {
                  getProfileRef(
                    connected ? wallet.publicKey.toString() : undefined,
                  );
                }}
              />
            </div>

            <div
              style={{ display: "flex", flexWrap: "wrap", padding: "20px 0" }}
            >
              <div
                className="info-leaderboard-item"
                style={{ marginRight: "30%" }}
              >
                <img src={leaderIcon} />
                <span>
                  Rank: <span style={{ color: "#0CEEAC" }}>{yourRank}</span>
                </span>
              </div>
              <div className="info-leaderboard-item">
                <img src={point} />
                <span>
                  Point: <span style={{ color: "#0CEEAC" }}>{yourPoint}</span>
                </span>
              </div>
            </div>
            <div className="info-leaderboard-item">
              <span>Referral Link:</span>
            </div>
            <div className="input-ref-save">
              <div className="link">
                {wallet.connected
                  ? `https://idosol.me/${wallet.publicKey.toString()}`
                  : "Please connect your wallet to get the referral link."}
              </div>
              <img
                src={copy}
                onClick={() => {
                  if (connected) {
                    navigator.clipboard.writeText(
                      `https://idosol.me/${wallet.publicKey.toString()}`,
                    );
                    notification.success({
                      message: `Notification`,
                      description: `Copied !!!`,
                      placement: "topRight",
                    });
                  } else {
                    notification.error({
                      message: `Notification`,
                      description: `Please connect your wallet to get the referral link !!!`,
                      placement: "topRight",
                    });
                  }
                }}
              />
            </div>
          </div>
          <div className="info-leaderboard-right">
            <div className="leaderboard-title">
              <img src={ranking} />
              <span>Leaderboard</span>
            </div>
            <Table
              rowClassName={(_, index) =>
                index === 0
                  ? "table-rank-1"
                  : index === 1
                    ? "table-rank-2"
                    : index === 2
                      ? "table-rank-3"
                      : ""
              }
              pagination={false}
              dataSource={listTop}
              columns={columns}
              rowKey={"wallet"}
            />
          </div>
        </div>
      </Spin>
    </div>
  );
}

export default ReferralPage;
