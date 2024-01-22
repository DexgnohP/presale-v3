import React from "react";
import { Button, Input } from "antd";
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

const projectIcon = [
  { name: "Safu", icon: safuIcon, borderColor: "#88FF7D" },
  { name: "Audit", icon: auditIcon, borderColor: "#5CE2FF" },
  { name: "Doxx", icon: doxxIcon, borderColor: "#F9E212" },
  { name: "KYC", icon: kycIcon, borderColor: "#FFABFC" },
];

const projectStatus = [
  { name: "Live", icon: liveIcon, borderColor: "#0CEEAC" },
  { name: "End", icon: endIcon, borderColor: "#F91228" },
  { name: "Coming", icon: comingIcon, borderColor: "#F9E212" },
];

export default function MyComponent() {
  const data = [
    {
      id: 2,
      table: "maplestorytest",
      name: "MapleStory Finance",
      logo: maple,
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
      name: "MapleStory Finance",
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
      name: "ФИФА Заработай",
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
    {
      id: 2,
      table: "maplestorytest",
      name: "MapleStory Finance",
      logo: maple,
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
      name: "MapleStory Finance",
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
      name: "ФИФА Заработай",
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
    //     id: 1,
    //     table: "yasuo",
    //     name: "亚索",
    //     logo: yasuo,
    //     des: "Welcome to Yasuo Finance - where financial winds blow in your favor!",
    //     min: 1,
    //     max: 5,
    //     time: "2024-01-11T13:20:00Z",
    //     totalRaised: 500,
    //     tele: "https://t.me/Yasuo_Finance",
    //     tw: "https://twitter.com/Yasuo_Finance",
    //     web: "https://yasuofinance.xyz/",
    //     contractPresale: "7NPnmKpgsBrHu9U6T38pwYqe9HCZ4NzmrGBsZZ2Ebt2c",
    // },
  ];

  return (
    <div className='container bg-[url("/background.svg")] bg-cover bg-no-repeat'>
      <div className="header">
        <div className="nav-left">
          <img className="logo" src={logo} alt="img" />
          <span>IDOSOL</span>
        </div>
        <div className="flex items-center gap-16">
          {/* <Button className='' onClick={() => {}}>Connect Wallet</Button> */}
          <div className="hidden items-center gap-16 lg:flex">
            <a href="" className="text-lg">
              Document
            </a>
            <a href="" className="text-lg">
              Twitter
            </a>
            <a href="" className="text-lg">
              Telegram
            </a>
          </div>
          <Button className="flex h-11 w-[148px] items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme text-white">
            Select Wallet
          </Button>
          {/* <WalletMultiButton className='button-connect' /> */}
        </div>
      </div>
      <div className="content">
        <div className="mb-8 flex items-center justify-center gap-8 lg:hidden">
          <a href="" className="text-lg">
            Document
          </a>
          <a href="" className="text-lg">
            Twitter
          </a>
          <a href="" className="text-lg">
            Telegram
          </a>
        </div>
        <div className="text-center font-syne text-2xl font-extrabold uppercase text-white md:text-[50px]">
          <span className="shadow-cyan-presale-theme drop-shadow-[2px_2px_var(--tw-shadow-color)]">
            LIST TOKEN{" "}
          </span>
          <span className="shadow-purple-presale-theme drop-shadow-[2px_2px_var(--tw-shadow-color)]">
            LAUCHAPAD
          </span>
        </div>
        <Input
          placeholder="Search Project"
          className="mt-8 w-full border-none bg-black text-center text-white placeholder-gray-400 shadow-sm shadow-cyan-presale-theme md:w-1/2"
        />
        <div className="mt-8 flex-col justify-center gap-2 md:flex md:flex-row">
          <div className="flex justify-center gap-2">
            {projectIcon.map((item, index) => (
              <div
                key={index}
                className={`flex items-center rounded-[20px] border border-[${item.borderColor}] h-7 justify-center gap-1 px-3 py-1`}
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
                className={`flex items-center rounded-[20px] border border-[${item.borderColor}] h-7 justify-center gap-1 px-3 py-1`}
              >
                <img src={item.icon} alt="img" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        {data.length ? (
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
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Card data={item} />
              </List.Item>
            )}
          />
        ) : null}
      </div>
      {data.length >= 6 && (
        <div className="flex justify-center">
          <Button className="flex h-11 w-[192px] items-center justify-center rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme p-[1px]">
            <div className="flex w-full justify-between rounded-full bg-gray-900 p-[10px] font-medium text-white">
              <span className="ml-2">View More Project</span>
              <ArrowDownOutlined className="mr-2" />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}
