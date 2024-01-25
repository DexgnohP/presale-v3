import React, { useState } from "react";
import { Button, Input } from "antd";
import logo from "./images/logo.png";
import { List } from "antd";
import maple from "./images/maple.png";
import meme from "./images/meme.png";
import forsages from "./images/forsages.png";
import mastercat from "./images/mastercat.jpg";
import fifa from "./images/fifa.png";
import Card from "./components/card";
import { ArrowDownOutlined } from "@ant-design/icons";
import whitePlusIcon from "./images/icons/white-plus-icon-3.png";
import filterIcon from "./images/icons/filter-icon.png";
import liveIcon from "./images/icons/live-icon.png";
import endIcon from "./images/icons/end-icon.png";
import comingIcon from "./images/icons/coming-icon.png";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


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

const data = [
  {
    id: 2,
    table: "forsages",
    name: "Forsages",
    logo: forsages,
    tag: ["Safu", "Audit", "KYC", "Doxx"],
    marketing: [
      {
        name: "Memex9999",
        icon: meme,
        link: "https://t.me/memex9999call",
      },
      {
        name: "Master Cat",
        icon: mastercat,
        link: "https://t.me/Master_CatX",
      },
      {
        name: "Add more",
        icon: whitePlusIcon,
        link: "https://docs.idosol.me/2.-unique-features",
      },
    ],
    des: "Decentralized success, global empowerment! Join the revolution for financial freedom",
    min: 1,
    max: 5,
    time: "2024-01-23T13:20:00Z",
    totalRaised: 1000,
    tele: "https://t.me/Forsage_SOL",
    tw: "https://twitter.com/forsageofficial/",
    web: "https://forsages.io/",
    contractPresale: "2FuFYUJpPbmgN18CqUFKewn4yJQP4ZuYPLRbcbeimU63",
  },
  {
    id: 2,
    table: "maplestory",
    marketing: [
      {
        name: "Memex9999",
        icon: meme,
        link: "https://t.me/memex9999call",
      },
    ],
    name: "MapleStory Finance",
    tag: ["Safu", "Audit", "KYC", "Doxx"],
    logo: maple,
    des: "MapleStory Finance: Where Gaming Meets DeFi Magic – Unleashing Cuteness, Crafting Profits!",
    min: 1,
    max: 5,
    time: "2024-01-18T13:20:00Z",
    totalRaised: 500,
    tele: "https://t.me/MapleStoryX",
    tw: "https://twitter.com/MapleStory_X",
    web: "https://maplestoryfinance.me/",
    contractPresale: "75m95K4Jb1GbRfn4VX7NJ4X7jg2RCoAxudPFHdBgNTYt",
  },
  {
    id: 1,
    table: "fifa",
    marketing: [
      {
        name: "Memex9999",
        icon: meme,
        link: "https://t.me/memex9999call",
      },
    ],
    name: "ФИФА Заработай",
    tag: ["Safu", "Audit", "KYC", "Doxx"],
    logo: fifa,
    des: "Conquer the pitch with GameFi FIFA 2024: Where colors and passion collide!",
    min: 1,
    max: 5,
    time: "2024-01-15T13:20:00Z",
    totalRaised: 300,
    tele: "https://t.me/FifaEarnX",
    tw: "https://twitter.com/FifaEarnX",
    web: "https://fifaearn.pro/",
    contractPresale: "22ZNv9fUgY2uJTLt1Wkx8r8bNhJcrSzj89yjCVxanNR4",
  },
];

export default function MyComponent() {
  const [listPresale, setListPreSale] = useState(data);
  const [inputValue, setInputValue] = useState("");
  const [selectedTabIndex, setSelectedTabIndex] = useState(undefined);
  const handleChangeTab = (tabIndex) => {
    if (selectedTabIndex === tabIndex) {
      setSelectedTabIndex(undefined);
    } else {
      setSelectedTabIndex(tabIndex);
    }
  };

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
    let result = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
    setListPreSale(result);
  }, 1000);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);

    handleInputChange(value);
  };

  return (
    <div className='container bg-[url("/background.png")] bg-cover bg-no-repeat'>
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
          className="mt-8 h-[35px] w-full border-none bg-black text-center text-white placeholder-gray-400 shadow-sm shadow-cyan-presale-theme md:w-1/2 lg:h-[40px]"
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
                <Card data={item} />
              </List.Item>
            )}
          />
        ) : null}
      </div>
      {listPresale.length > 6 && (
        <div className="flex justify-center">
          <Button className="flex h-11 w-[192px] items-center justify-center rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme p-[1px]">
            <div className="flex w-full justify-between rounded-full bg-black p-[10px] font-medium text-white hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme">
              <span className="ml-2">View More Project</span>
              <ArrowDownOutlined className="mr-2" />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}
