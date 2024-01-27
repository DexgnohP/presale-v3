import React, { createContext, useContext, useReducer } from 'react';
import maple from "./images/maple.png";
import meme from "./images/meme.png";
import forsages from "./images/forsages.png";
import mastercat from "./images/mastercat.jpg"
import whitePlusIcon from "./images/icons/white-plus-icon-3.png";
import fifa from "./images/fifa.png";
import { dataReducer } from './reducers';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialDataTemp = [
    {
      
      id: 2,
      table: "forsagesb",
      name: "Forsagesb",
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
      totalRaised: 10000,
      tele: "https://t.me/Forsage_SOL",
      tw: "https://twitter.com/forsageofficial/",
      web: "https://forsages.io/",
      contractPresale: "2FuFYUJpPbmgN18CqUFKewn4yJQP4ZuYPLRbcbeimU63",
    },
    {
      
      id: 2,
      table: "forsagesa",
      name: "Forsagesa",
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
      time: "2024-01-28T13:20:00Z",
      totalRaised: 1000,
      tele: "https://t.me/Forsage_SOL",
      tw: "https://twitter.com/forsageofficial/",
      web: "https://forsages.io/",
      contractPresale: "2FuFYUJpPbmgN18CqUFKewn4yJQP4ZuYPLRbcbeimU63",
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
  ];; 
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
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};