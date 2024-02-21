import React, { createContext, useContext, useReducer } from "react";
import maple from "./images/maple.png";
import meme from "./images/meme.png";
import forsages from "./images/forsages.png";
import mastercat from "./images/mastercat.jpg";
import battle from "./images/battle.png";
import whitePlusIcon from "./images/icons/white-plus-icon-3.png";
import fifa from "./images/fifa.png";
import yellow from "./images/yellow.jpg";
import panda from "./images/panda.jpg";
import { dataReducer } from "./reducers";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialDataTemp = [
    {
      id: 100,
      table: "yellowsol",
      name: "Yellow",
      logo: yellow,
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
          link: "https://t.me/MasterCat_X",
        },
        {
          name: "Panda Caller 🐼",
          icon: panda,
          link: "https://t.me/Panda_X1000",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "In the spectrum of colors, there exists a hue that embodies the essence of triumph and success - the vibrant shade of yellow.",
      min: 1,
      max: 5,
      time: "2024-02-19T12:00:00Z",
      totalRaised: 100000,
      tele: "https://t.me/yellow_solana",
      tw: "https://twitter.com/YellowSolana",
      web: "http://yellowsolana.xyz/",
      contractPresale: "BPZFajcCQ1FUUWfNzcTgP9RZYHdXvAmx3aasWGbVn7Yq",
    },
    {
      id: 2,
      table: "battlefight",
      name: "Battle Fight",
      logo: battle,
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
          link: "https://t.me/MasterCat_X",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Unleash Your Inner Warrior: Battle Fight - Where Every Solo Duel Defines Legends!",
      min: 1,
      max: 5,
      time: "2024-02-01T12:20:00Z",
      totalRaised: 400,
      tele: "https://t.me/BattleFightCoin",
      tw: "https://twitter.com/BattleFightCoin",
      web: "https://battlefight.xyz/",
      contractPresale: "F3y5rR7xAUV8aEs2QkEsL1sGCYcFueNT7BHJJZq6zEcB",
    },
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
          link: "https://t.me/MasterCat_X",
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
  const [dataTemp, dispatch] = useReducer(dataReducer, initialDataTemp);

  return (
    <DataContext.Provider value={{ dataTemp, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
