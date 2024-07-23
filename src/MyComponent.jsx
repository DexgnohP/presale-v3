import React, { useEffect, useState } from "react";
import { Button, Carousel, Input } from "antd";
import logo from "./images/logo.png";
import { List } from "antd";

import Card from "./components/card";
import { ArrowRightOutlined } from "@ant-design/icons";

import filterIcon from "./images/icons/filter-icon.png";
import iconSubmit from "./images/icons/iconSubmit.svg";
import liveIcon from "./images/icons/live-icon.png";
import safuIcon from "./images/icons/safu-icon.png";
import auditIcon from "./images/icons/audit-icon.png";
import kycIcon from "./images/icons/kyc-icon.png";
import doxxIcon from "./images/icons/doxx-icon.png";
import endIcon from "./images/icons/end-icon.png";
import comingIcon from "./images/icons/coming-icon.png";
import ads1 from "./images/ads1.jpg";
import { useDataContext } from "./dataContext";
import { sha512 } from "js-sha512";
import forge from "node-forge";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

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
  const [listPresale, setListPreSale] = useState(dataTemp);
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
    return await fetch(
      `https://zofrlhlhqd.execute-api.ap-southeast-1.amazonaws.com/api/proxy/${hash}`,
    ).then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    });
  };

  useEffect(() => {
    let list = [...dataTemp];
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
    let result = dataTemp.filter((item) =>
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
  //     `http://54.251.121.124/api/white-list/page?ref=${113}&page=1&size=100000`,
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
    <div className='container relative bg-[url("/background.png")] bg-cover bg-no-repeat'>
      <div className="header">
        <div className="nav-left">
          <img className="logo" src={logo} alt="img" />
        </div>
        <div className="flex items-center gap-16">
          {/* <Button className='' onClick={() => {}}>Connect Wallet</Button> */}
          <div className="hidden items-center gap-16 lg:flex">
            <a
              href="https://docs.idosol.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <span className="gradient-text bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme hover:text-white">
                Docs
              </span>
            </a>
            <a
              href="https://twitter.com/idosolme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <span className="gradient-text bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme hover:text-white">
                Twitter
              </span>
            </a>
            <a
              href="https://t.me/idosolme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <span className="gradient-text bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme hover:text-white">
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
      <div className="content">
        <div className="mb-8 flex items-center justify-center gap-8 lg:hidden">
          <a
            href="https://docs.idosol.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg"
          >
            <span className="gradient-text bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme hover:text-white">
              Docs
            </span>
          </a>
          <a
            href="https://twitter.com/idosolme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg"
          >
            <span className="gradient-text bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme hover:text-white">
              Twitter
            </span>
          </a>
          <a
            href="https://t.me/idosolme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg"
          >
            <span className="gradient-text bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme hover:text-white">
              Telegram
            </span>
          </a>
        </div>
        <div className="middle">
          <Carousel arrows infinite={false} className="carousel-ads">
            <div className="card-ads">
              <div className="card-ads-content">
                <Button
                  style={{ width: "fit-content", pointerEvents: "none" }}
                  className="ad-support-pc hover:bg-transparent!important flex h-11 items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme p-[1px] "
                >
                  <div className="flex  justify-between rounded-full bg-black p-[10px] font-medium text-white">
                    <span className="ml-2">SPONSORED</span>
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
                  Access BOT{" "}
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

        <div className="text-center font-syne text-2xl font-extrabold uppercase text-white md:text-[50px]">
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
                <span>{item.name}</span>
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
    </div>
  );
}
