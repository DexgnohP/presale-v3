import React, { useState } from "react";
import { Button, Input, Select } from "antd";
import logo from "./images/logo.png";
import { List } from "antd";
import maple from "./images/maple.png";
import fifa from "./images/fifa.png";
import Card from "./components/card";
import { ArrowDownOutlined } from "@ant-design/icons";
import safuIcon from "./images/icons/safu-icon.png";
import auditIcon from "./images/icons/audit-icon.png";
import kycIcon from "./images/icons/kyc-icon.png";
import doxxIcon from "./images/icons/doxx-icon.png";
import liveIcon from "./images/icons/live-icon.png";
import endIcon from "./images/icons/end-icon.png";
import comingIcon from "./images/icons/coming-icon.png";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const projectIcon = [
  { name: "Safu", icon: safuIcon, borderColor: "#88FF7D" },
  { name: "Audit", icon: auditIcon, borderColor: "#5CE2FF" },
  { name: "Doxx", icon: doxxIcon, borderColor: "#F9E212" },
  { name: "KYC", icon: kycIcon, borderColor: "#FFABFC" },
];

export const projectStatus = [
  { name: "Live", icon: liveIcon, borderColor: "#0CEEAC" },
  { name: "End", icon: endIcon, borderColor: "#F91228" },
  { name: "Coming", icon: comingIcon, borderColor: "#F9E212" },
];

const data = [
  {
    id: 2,
    table: "maplestorytest",
    name: "MapleStory Finance",
    logo: maple,
    tag: ["Safu", "Audit", "KYC", "Doxx"],
    marketing: [
      {
        name: "Memex999",
        icon: maple,
        link: "https://dexscreener.com/solana/dcjpqqdl1vjt7cwui6txtg3yrf6nd1jzbdaykjzikkk5",
      },
    ],
    des: "MapleStory Finance: Where Gaming Meets DeFi Magic – Unleashing Cuteness, Crafting Profits!",
    min: 0.01,
    max: 5,
    time: "2024-01-18T13:20:00Z",
    totalRaised: 10000,
    tele: "https://t.me/MapleStoryX",
    tw: "https://twitter.com/MapleStory_X",
    web: "https://maplestoryfinance.me/",
    contractPresale: "7NPnmKpgsBrHu9U6T38pwYqe9HCZ4NzmrGBsZZ2Ebt2c",
  },
  {
    id: 2,
    table: "maplestory",
    marketing: [],
    name: "MapleStory Finance",
    tag: ["Safu", "Audit"],
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
    marketing: [],
    name: "ФИФА Заработай",
    tag: ["Safu", "Audit", "KYC"],
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
  // {
  //   id: 2,
  //   table: "maplestorytest",
  //   name: "MapleStory Finance",
  //   logo: maple,
  //   des: "MapleStory Finance: Where Gaming Meets DeFi Magic – Unleashing Cuteness, Crafting Profits!",
  //   min: 0.01,
  //   max: 5,
  //   time: "2024-01-18T13:20:00Z",
  //   totalRaised: 10000,
  //   tele: "https://t.me/MapleStoryX",
  //   tw: "https://twitter.com/MapleStory_X",
  //   web: "https://maplestoryfinance.me/",
  //   contractPresale: "7NPnmKpgsBrHu9U6T38pwYqe9HCZ4NzmrGBsZZ2Ebt2c",
  // },
  // {
  //   id: 2,
  //   table: "maplestory",
  //   name: "MapleStory Finance",
  //   logo: maple,
  //   des: "MapleStory Finance: Where Gaming Meets DeFi Magic – Unleashing Cuteness, Crafting Profits!",
  //   min: 1,
  //   max: 5,
  //   time: "2024-01-18T13:20:00Z",
  //   totalRaised: 500,
  //   tele: "https://t.me/MapleStoryX",
  //   tw: "https://twitter.com/MapleStory_X",
  //   web: "https://maplestoryfinance.me/",
  //   contractPresale: "75m95K4Jb1GbRfn4VX7NJ4X7jg2RCoAxudPFHdBgNTYt",
  // },
  // {
  //   id: 1,
  //   table: "fifa",
  //   name: "ФИФА Заработай",
  //   logo: fifa,
  //   des: "Conquer the pitch with GameFi FIFA 2024: Where colors and passion collide!",
  //   min: 1,
  //   max: 5,
  //   time: "2024-01-15T13:20:00Z",
  //   totalRaised: 300,
  //   tele: "https://t.me/FifaEarnX",
  //   tw: "https://twitter.com/FifaEarnX",
  //   web: "https://fifaearn.pro/",
  //   contractPresale: "22ZNv9fUgY2uJTLt1Wkx8r8bNhJcrSzj89yjCVxanNR4",
  // },
  // {
  //   id: 1,
  //   table: "yasuo",
  //   name: "亚索",
  //   logo: yasuo,
  //   des: "Welcome to Yasuo Finance - where financial winds blow in your favor!",
  //   min: 1,
  //   max: 5,
  //   time: "2024-01-11T13:20:00Z",
  //   totalRaised: 500,
  //   tele: "https://t.me/Yasuo_Finance",
  //   tw: "https://twitter.com/Yasuo_Finance",
  //   web: "https://yasuofinance.xyz/",
  //   contractPresale: "7NPnmKpgsBrHu9U6T38pwYqe9HCZ4NzmrGBsZZ2Ebt2c",
  // },
];

export default function MyComponent() {
  const [listPresale, setListPreSale] = useState(data);

  const [inputValue, setInputValue] = useState("");

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
            <a href="" className="text-lg">
              <span className="gradient-text bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme hover:text-white">
                Document
              </span>
            </a>
            <a href="" className="text-lg">
              <span className="gradient-text bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme hover:text-white">
                Twitter
              </span>
            </a>
            <a href="" className="text-lg">
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
          <a href="" className="text-lg">
            <span className="gradient-text bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme hover:text-white">
              Document
            </span>
          </a>
          <a href="" className="text-lg">
            <span className="gradient-text bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme hover:text-white">
              Twitter
            </span>
          </a>
          <a href="" className="text-lg">
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
          <div className="flex justify-center gap-2">
            {projectIcon.map((item, index) => (
              <div
                key={index}
                className={`flex h-7 items-center justify-center  gap-1 rounded-[20px] border px-3 py-1`}
                style={{ borderColor: item.borderColor }}
              >
                <img src={item.icon} alt="img" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div className="border-r-2"></div>
          <div className="mt-4 flex justify-center gap-2 md:mt-0">
            {projectStatus.map((item, index) => (
              <div
                key={index}
                className={`flex h-7 items-center justify-center  gap-1 rounded-[20px] border px-3 py-1`}
                style={{ borderColor: item.borderColor }}
              >
                <img src={item.icon} alt="img" />
                <span>{item.name}</span>
              </div>
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
