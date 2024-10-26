import React, { useEffect, useState } from "react";
import { Button, Carousel, Input } from "antd";
import { List } from "antd";

import Card from "./components/card";
import { ArrowRightOutlined } from "@ant-design/icons";

import filterIcon from "./images/icons/filter-icon.png";
import iconSubmit from "./images/icons/iconSubmit.svg";
import liveIcon from "./images/icons/live-icon.svg";
import diamond from "./images/icons/diamond.svg";
import xIcon from "./images/icons/xIcon.svg";
import teleIcon from "./images/icons/teleIcon.svg";
import webIcon from "./images/icons/webIcon.svg";

import safuIcon from "./images/icons/safu-icon.svg";
import auditIcon from "./images/icons/audit-icon.svg";
import kycIcon from "./images/icons/kyc-icon.svg";
import doxxIcon from "./images/icons/doxx-icon.svg";
import dexPart from "./images/iconsPartners/dex.svg";
import cmcPart from "./images/iconsPartners/cmc.svg";
import vsbPart from "./images/iconsPartners/vsb.svg";
import wifTradePart from "./images/iconsPartners/wiftrade.svg";
import totalcal from "./images/iconsPartners/totalcal.svg";
import dextoolsPart from "./images/iconsPartners/dextools.svg";
import endIcon from "./images/icons/end-icon.svg";
import comingIcon from "./images/icons/coming-icon.svg";
import ads1 from "./images/ads1.jpg";
import adsWif from "./images/adsWif.png";
import adsBigcoming from "./images/adsBigcoming.gif";
import { useDataContext } from "./dataContext";
import { sha512 } from "js-sha512";

import { useWallet } from "@solana/wallet-adapter-react";
import { Link } from "react-router-dom";

export const projectIcon = [
  { name: "Safu", icon: safuIcon, borderColor: "#88FF7D" },
  { name: "Audit", icon: auditIcon, borderColor: "#5CE2FF" },
  { name: "Doxx", icon: doxxIcon, borderColor: "#F9E212" },
  { name: "KYC", icon: kycIcon, borderColor: "#FFABFC" },
];

export const projectStatus = [
  {
    name: "Live",
    icon: liveIcon,
    borderColor: "#0CEEAC",
    backgroundColor: "rgba(13, 225, 164, 0.40)",
  },
  {
    name: "End",
    icon: endIcon,
    borderColor: "#F91228",
    backgroundColor: "rgba(249, 18, 40, 0.30)",
  },
  {
    name: "Coming",
    icon: comingIcon,
    borderColor: "#F9E212",
    backgroundColor: "rgba(249, 226, 18, 0.40)",
  },
];

export default function MyComponent() {
  const wallet = useWallet();
  const { dataTemp } = useDataContext();
  const [inputValue, setInputValue] = useState("");
  const [proxy, setProxy] = useState(false);
  const [listPresale, setListPreSale] = useState(dataTemp.listPresale);
  const [selectedTabIndex, setSelectedTabIndex] = useState(undefined);
  const handleChangeTab = (tabIndex) => {
    if (selectedTabIndex === tabIndex) {
      setSelectedTabIndex(undefined);
    } else {
      setSelectedTabIndex(tabIndex);
    }
  };
  useEffect(() => {
    if (wallet.connected) {
      getProxy().then((res) => {
        if (res?.data) {
          setProxy(res.data);
        }
      });
    }
  }, [wallet]);

  const getProxy = async () => {
    let str = wallet.publicKey.toString();
    let secretKey = "PROXY_TOKEN";
    let hash = sha512.hmac(secretKey, str);
    return await fetch(`https://host-server.store/api/proxy/${hash}`).then(
      (res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      },
    );
  };

  useEffect(() => {
    let list = [...dataTemp.listPresale];
    list = list.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase()),
    );
    switch (selectedTabIndex) {
      case 0:
        list = list.filter((item) => item.status === "Live");
        break;
      case 1:
        list = list.filter((item) => item.status === "End");
        break;
      case 2:
        list = list.filter((item) => item.status === "Coming");
        break;
      default:
        break;
    }
    setListPreSale(list);
  }, [selectedTabIndex]);

  const debounce = (func, delay) => {
    let timeoutId;

    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleInputChange = debounce((value) => {
    let result = dataTemp.listPresale.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
    setListPreSale(result);
  }, 1000);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);

    handleInputChange(value);
  };

  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  // useEffect(() => {
  //   searchRef();
  // }, []);
  // const searchRef = async () => {
  //   await fetch(
  //     `https://host-server.store/api/white-list/page?ref=${113}&page=1&size=100000`,
  //   )
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     })
  //     .then((dt) => {})
  //     .catch(() => {})
  //     .finally(() => {});
  // };
  return (
    // <div className="relativ container">
    //   <img src={background} className="background-fixed" />
    <>
      <div className="content">
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

        <div className="middle">
          <Carousel
            arrows
            className="carousel-ads"
            autoplaySpeed={5000}
            autoplay
            style={{ height: "100%" }}
          >
            <div className="card-ads">
              <div className="card-ads-content">
                <div className="title-big-coming">
                  BIG ALPHA IS COMING ... !
                </div>
                <div style={{ textAlign: "center", fontSize: "20px" }}>
                  ⚡️ No Presale
                  <br />
                  ⚡️ No Airdrop
                  <br />
                  ⚡️ No DEV
                  <br />
                  ⚡️ Slerfy = Slerf
                </div>
                <div className="socials-bigc">
                  <a
                    className="socials-bigc-item"
                    href="https://slerfy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={webIcon} />
                  </a>
                  <a
                    className="socials-bigc-item"
                    style={{
                      marginLeft: "40px",
                    }}
                    href="https://x.com/Slerfy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={xIcon} />
                  </a>
                  <a
                    className="socials-bigc-item"
                    style={{
                      marginLeft: "40px",
                    }}
                    href="https://t.me/SlerfyPortal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={teleIcon} />
                  </a>
                </div>
              </div>

              <div className="card-ads-img">
                <img src={adsBigcoming} />
              </div>
            </div>
            <div className="card-ads">
              <div className="card-ads-content">
                <Button
                  style={{ width: "fit-content", pointerEvents: "none" }}
                  className="ad-support-pc hover:bg-transparent!important flex h-11 items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme p-[1px] "
                >
                  <div className="flex  justify-between rounded-full bg-black p-[10px] font-medium text-white">
                    <span>SPONSORED</span>
                  </div>
                </Button>

                <div
                  className="ad-title"
                  style={{
                    marginBottom: "30px",
                    marginTop: "15px",
                    fontSize: "24px",
                    fontWeight: "600",
                  }}
                >
                  Top Reasons to Use WIFtrade Bot for Trading 👑
                </div>
                <div
                  style={{
                    marginBottom: "20px",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  + Fastest Price Feed & New Pair Fetch on Solana
                  <br />
                  <br />+ Instant Swap Execution – Enjoy lightning-fast trades
                  with no delays. ⚡️⚡️⚡️ <br />
                  <br />+ Multi-Pool & DEX Support on Solana
                  <br />
                  <br />+ User-Friendly Interface – Simple and suitable for all
                  traders. 👍👍👍
                  <br />
                  <br />
                  Try it for free here!
                </div>
                <a
                  href="https://t.me/wiftrade_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    border: "0",
                    width: "25%",
                    padding: "10px",
                    flexDirection: "row",
                  }}
                  className="btn-visit inline-flex  flex-col items-center justify-center rounded-[20px] !bg-gradient-to-r !from-cyan-presale-theme !to-purple-presale-theme  text-xs font-semibold leading-[18px] !text-white hover:!text-white"
                >
                  <div style={{ width: "auto" }}> Access BOT </div>

                  <ArrowRightOutlined
                    style={{ display: "inline", marginLeft: "5px" }}
                  />
                </a>
              </div>
              <div className="card-ads-img">
                <Button
                  style={{ width: "fit-content", pointerEvents: "none" }}
                  className="ad-support-mobile hover:bg-transparent!important flex h-11 items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme p-[1px] "
                >
                  <div className="flex  justify-between rounded-full bg-black p-[10px] font-medium text-white">
                    <span className="ml-2">SPONSORED</span>
                  </div>
                </Button>
                <img src={adsWif} />
              </div>
            </div>
            <div className="card-ads">
              <div className="card-ads-content">
                <Button
                  style={{ width: "fit-content", pointerEvents: "none" }}
                  className="ad-support-pc hover:bg-transparent!important flex h-11 items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme p-[1px] "
                >
                  <div className="flex  justify-between rounded-full bg-black p-[10px] font-medium text-white">
                    <span>SPONSORED</span>
                  </div>
                </Button>

                <div
                  className="ad-title"
                  style={{
                    marginBottom: "30px",
                    marginTop: "15px",
                    fontSize: "24px",
                    fontWeight: "600",
                  }}
                >
                  Solana Volume Bot: Boost Your Token's Visibility & Attract
                  Investors! 🤖
                </div>
                <div
                  style={{
                    marginBottom: "20px",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Increase your Solana token's visibility and trading volume on
                  popular DEXs, attracting investors with organic-looking
                  trades. <br />
                  <br />+ Mimics real human trading behavior.
                  <br />+ TOP 1 Volume bot on the market. <br />+ Easiest to
                  use. <br />+ Lowest fees. <br />
                  <br />
                  Try it for free here!
                </div>
                <a
                  href="https://t.me/VolumeSolana_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    border: "0",
                    width: "25%",
                    padding: "10px",
                    flexDirection: "row",
                  }}
                  className="btn-visit inline-flex  flex-col items-center justify-center rounded-[20px] !bg-gradient-to-r !from-cyan-presale-theme !to-purple-presale-theme  text-xs font-semibold leading-[18px] !text-white hover:!text-white"
                >
                  <div style={{ width: "auto" }}> Access BOT </div>

                  <ArrowRightOutlined
                    style={{ display: "inline", marginLeft: "5px" }}
                  />
                </a>
              </div>
              <div className="card-ads-img">
                <Button
                  style={{ width: "fit-content", pointerEvents: "none" }}
                  className="ad-support-mobile hover:bg-transparent!important flex h-11 items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme p-[1px] "
                >
                  <div className="flex  justify-between rounded-full bg-black p-[10px] font-medium text-white">
                    <span className="ml-2">SPONSORED</span>
                  </div>
                </Button>
                <img src={ads1} />
              </div>
            </div>
          </Carousel>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
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

        <section className="scroll-container">
          <div className="scroll-wrapper">
            <div className="scroll-content">
              <a
                className="scroll-item"
                href="https://dexscreener.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={dexPart} />
              </a>
              <a
                className="scroll-item"
                href="https://coinmarketcap.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={cmcPart} />
              </a>
              <a
                className="scroll-item"
                href="https://www.dextools.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={dextoolsPart} />
              </a>
              <a
                className="scroll-item"
                href="https://t.me/wiftrade_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={wifTradePart} />
              </a>
              <a
                className="scroll-item"
                href="https://t.me/VolumeSolana_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={vsbPart} />
              </a>
              <a
                className="scroll-item"
                href="https://t.me/totalcaller"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={totalcal} style={{ height: "55px" }} />
              </a>
            </div>
            <div className="scroll-content">
              <a
                className="scroll-item"
                href="https://dexscreener.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={dexPart} />
              </a>
              <a
                className="scroll-item"
                href="https://coinmarketcap.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={cmcPart} />
              </a>
              <a
                className="scroll-item"
                href="https://www.dextools.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={dextoolsPart} />
              </a>
              <a
                className="scroll-item"
                href="https://t.me/wiftrade_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={wifTradePart} />
              </a>
              <a
                className="scroll-item"
                href="https://t.me/VolumeSolana_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={vsbPart} />
              </a>
              <a
                className="scroll-item"
                href="https://t.me/totalcaller"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={totalcal} style={{ height: "55px" }} />
              </a>
            </div>
          </div>
        </section>
        <div className="text-center font-syne text-2xl font-extrabold uppercase text-white md:text-[72px]">
          <span className="shadow-cyan-presale-theme drop-shadow-[2px_2px_var(--tw-shadow-color)]">
            LIST TOKEN{" "}
          </span>
          <span className="shadow-purple-presale-theme drop-shadow-[2px_2px_var(--tw-shadow-color)]">
            LAUNCHPAD
          </span>
        </div>
        <Input
          placeholder="Search Project"
          value={inputValue}
          onChange={handleChange}
          className="mt-8 h-[35px] w-full border-none bg-black text-center text-white placeholder-gray-400 shadow-sm shadow-cyan-presale-theme hover:bg-black focus:bg-black focus:shadow-cyan-presale-theme md:w-1/2 lg:h-[40px]"
        />
        <div className="mt-8 flex-col justify-center gap-2 md:flex md:flex-row">
          <div className="mt-4 flex justify-center gap-2 md:mt-0">
            <img src={filterIcon} alt="img" />
            {projectStatus.map((item, index) => (
              <button
                key={index}
                className={`flex h-7 items-center justify-center  gap-1 rounded-[20px] border px-3 py-1`}
                style={{
                  borderColor: item.borderColor,
                  backgroundColor:
                    selectedTabIndex === index && item.backgroundColor,
                }}
                onClick={() => handleChangeTab(index)}
              >
                <img src={item.icon} alt="img" />
                <span style={{ fontSize: "14px" }}>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
        {listPresale.length ? (
          <List
            rowKey={"table"}
            style={{ marginTop: "30px" }}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 3,
              xxl: 3,
            }}
            dataSource={listPresale}
            renderItem={(item) => (
              <List.Item>
                <Card data={item} checkTime={proxy} />
              </List.Item>
            )}
          />
        ) : null}
      </div>
      {/* {listPresale.length > 6 && (
        <div className="flex justify-center">
          <Button className="flex h-11 w-[192px] items-center justify-center rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme p-[1px]">
            <div className="flex w-full justify-between rounded-full bg-black p-[10px] font-medium text-white hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme">
              <span className="ml-2">View More Project</span>
              <ArrowDownOutlined className="mr-2" />
            </div>
          </Button>
        </div>
      )} */}
      <a
        href="https://forms.gle/Np4whS1WrHgAWqAdA"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 flex cursor-pointer items-center justify-center gap-2 rounded-full border-none  bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme px-[16px] py-[14px] text-[16px] font-semibold text-white  hover:!text-white"
      >
        <img src={iconSubmit} className="w-[25px] object-contain" /> Submit
        Project
      </a>
    </>

    // </div>
  );
}
