import React, { createContext, useContext, useReducer } from "react";
import meme from "./images/meme.png";
import babycaller from "./images/babycaller.jpg";

import mastercat from "./images/mastercat.jpg";
import theone from "./images/theone.jpg";
import dracula from "./images/dracula.jpg";
import mumu from "./images/mumu.jpg";
import wulf from "./images/wulf.jpg";
import weibo from "./images/weibo.jpg";
import MM from "./images/MM.jpg";
import whitePlusIcon from "./images/icons/white-plus-icon-3.png";

import peilong from "./images/peilong.png";
import chacha from "./images/chacha.png";
import pproject22 from "./images/pproject22.png";
import fweal from "./images/fweal.png";
import wpepe from "./images/wpepe.png";
import bitcoin from "./images/bitcoin.png";
import grace from "./images/grace.png";
import pechu from "./images/pechu.png";
import dogs from "./images/dogs.png";
import fwilly from "./images/fwilly.png";
import yawn from "./images/yawn.png";
import harris from "./images/harris.png";
import miro from "./images/miro.png";
import scwif from "./images/scwif.png";

import panda from "./images/panda.jpg";
import kingkong from "./images/kingkong.jpg";
import travel from "./images/travel.jpg";
import { dataReducer } from "./reducers";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialDataTemp = [
    {
      id: 13123331232,
      table: "pproject22",
      name: "Project #22",
      logo: pproject22,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "The One Signal",
          icon: theone,
          link: "https://t.me/theone_signal",
        },
        {
          name: "Kong on Chain 🦍",
          icon: kingkong,
          link: "https://t.me/Kong_on_chain",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Panda Caller 🐼",
          icon: panda,
          link: "https://t.me/Panda_X1000",
        },
        {
          name: "MUMU THE BULL",
          icon: mumu,
          link: "https://t.me/MumuCaller",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Ride the wave of innovation with Memecoin, part of the exciting Project #22.",
      ido: 1,
      time: "2024-08-07T15:30:00Z",
      totalRaised: 10000,
      tele: "",
      tw: "",
      web: "",
    },
    {
      id: 13123331232,
      table: "pproject21",
      name: "FWEAL",
      logo: fweal,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Memex9999",
          icon: meme,
          link: "https://t.me/memex9999call",
        },
        {
          name: "💸 Money Maker 💸",
          icon: MM,
          link: "https://t.me/Money_MakerMM",
        },
        {
          name: "Master Cat",
          icon: mastercat,
          link: "https://t.me/MasterCat_X",
        },
        {
          name: "Dracula Gamble",
          icon: dracula,
          link: "https://t.me/DraculaGamble",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Ride the wave of innovation with Memecoin, part of the exciting Project #21.",
      ido: 1,
      time: "2024-08-06T15:00:00Z",
      totalRaised: 10000,
      tele: "",
      tw: "",
      web: "",
    },
    {
      id: 13123331232,
      table: "pproject20",
      name: "wrapped pepe",
      logo: wpepe,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Wulfden",
          icon: wulf,
          link: "https://t.me/WulfdenX",
        },
        {
          name: "BABY CALLER 👑",
          icon: babycaller,
          link: "https://t.me/BabieCaller",
        },
        {
          name: "Weibo Gambles",
          icon: weibo,
          link: "https://t.me/WeiboGambles",
        },
        {
          name: "Travel Caller",
          icon: travel,
          link: "https://t.me/TV_CALLS",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Wrapped Pepe: The Meme Revolution, Wrapped for Maximum Impact!",
      ido: 1,
      time: "2024-08-05T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/wpepeonsolportal",
      tw: "https://x.com/Wrapped_PepeX",
      web: "https://wrappedpepe.fun/",
    },
    {
      id: 13123331232,
      table: "pproject19",
      name: "Bitcoin is the meme god",
      logo: bitcoin,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "The One Signal",
          icon: theone,
          link: "https://t.me/theone_signal",
        },
        {
          name: "Kong on Chain 🦍",
          icon: kingkong,
          link: "https://t.me/Kong_on_chain",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Panda Caller 🐼",
          icon: panda,
          link: "https://t.me/Panda_X1000",
        },
        {
          name: "MUMU THE BULL",
          icon: mumu,
          link: "https://t.me/MumuCaller",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Bitcoin: The Meme God—Fast Rise, Faster Fall!",
      ido: 1,
      time: "2024-08-04T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/BitcoinOnSolPortal",
      tw: "https://x.com/BitcoinMeMeGodx",
      web: "https://meme-god.fun/",
    },
    {
      id: 13123331232,
      table: "pproject18",
      name: "Behind Ronald",
      logo: grace,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Memex9999",
          icon: meme,
          link: "https://t.me/memex9999call",
        },
        {
          name: "💸 Money Maker 💸",
          icon: MM,
          link: "https://t.me/Money_MakerMM",
        },
        {
          name: "Master Cat",
          icon: mastercat,
          link: "https://t.me/MasterCat_X",
        },
        {
          name: "Dracula Gamble",
          icon: dracula,
          link: "https://t.me/DraculaGamble",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Grace is Ronald's wife.",
      ido: 1,
      time: "2024-08-03T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/GracePortal",
      tw: "https://x.com/BehindRonald",
      web: "https://landlord-grace.fun/",
    },
    {
      id: 13123331232,
      table: "pproject17",
      name: "CHACHA",
      logo: chacha,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Wulfden",
          icon: wulf,
          link: "https://t.me/WulfdenX",
        },
        {
          name: "BABY CALLER 👑",
          icon: babycaller,
          link: "https://t.me/BabieCaller",
        },
        {
          name: "Weibo Gambles",
          icon: weibo,
          link: "https://t.me/WeiboGambles",
        },
        {
          name: "Travel Caller",
          icon: travel,
          link: "https://t.me/TV_CALLS",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Kabosu's girlfriend on Solana !!!",
      ido: 1,
      time: "2024-08-02T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/CHACHAONSOLANA",
      tw: "https://x.com/CHACHAOnSolx",
      web: "https://chachatoken.fun/",
    },
    {
      id: 13123331232,
      table: "pproject16",
      name: "Pekachu",
      logo: pechu,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "The One Signal",
          icon: theone,
          link: "https://t.me/theone_signal",
        },
        {
          name: "Kong on Chain 🦍",
          icon: kingkong,
          link: "https://t.me/Kong_on_chain",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Panda Caller 🐼",
          icon: panda,
          link: "https://t.me/Panda_X1000",
        },
        {
          name: "MUMU THE BULL",
          icon: mumu,
          link: "https://t.me/MumuCaller",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Pekachu! I got chu!",
      ido: 1,
      time: "2024-08-01T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/PekachuPortals",
      tw: "https://x.com/PekaOnSolana",
      web: "https://pechutoken.fun/",
    },
    {
      id: 13123331232,
      table: "pproject15",
      name: "Dogs",
      logo: dogs,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Memex9999",
          icon: meme,
          link: "https://t.me/memex9999call",
        },
        {
          name: "💸 Money Maker 💸",
          icon: MM,
          link: "https://t.me/Money_MakerMM",
        },
        {
          name: "Master Cat",
          icon: mastercat,
          link: "https://t.me/MasterCat_X",
        },
        {
          name: "Dracula Gamble",
          icon: dracula,
          link: "https://t.me/DraculaGamble",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "hey, my name is $Dogs.",
      ido: 1,
      time: "2024-07-31T15:30:00Z",
      totalRaised: 10000,
      tele: "https://t.me/DogsOnSolPortal",
      tw: "https://x.com/DogsOnSolanaX",
      web: "",
    },
    {
      id: 13123331232,
      table: "pproject14",
      name: "YAWN",
      logo: yawn,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Wulfden",
          icon: wulf,
          link: "https://t.me/WulfdenX",
        },
        {
          name: "BABY CALLER 👑",
          icon: babycaller,
          link: "https://t.me/BabieCaller",
        },
        {
          name: "Weibo Gambles",
          icon: weibo,
          link: "https://t.me/WeiboGambles",
        },
        {
          name: "Travel Caller",
          icon: travel,
          link: "https://t.me/TV_CALLS",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Yawn is a frog in Pepe's gangs. Let him chill and get rich with his money.",
      ido: 1,
      time: "2024-07-30T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/YAWNPORTAL",
      tw: "https://x.com/ChillYawnFrog",
      web: "https://yawntoken.fun/",
    },
    {
      id: 13123331232,
      table: "pproject13",
      name: "FWILLY",
      logo: fwilly,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "The One Signal",
          icon: theone,
          link: "https://t.me/theone_signal",
        },
        {
          name: "Kong on Chain 🦍",
          icon: kingkong,
          link: "https://t.me/Kong_on_chain",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Panda Caller 🐼",
          icon: panda,
          link: "https://t.me/Panda_X1000",
        },
        {
          name: "MUMU THE BULL",
          icon: mumu,
          link: "https://t.me/MumuCaller",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Ride the wave of innovation with Memecoin, part of the exciting Project #13.",
      ido: 1,
      time: "2024-07-29T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/FWILLYONSOL",
      tw: "https://x.com/FlogtheWilly",
      web: "https://fwilly.fun/",
    },
    {
      id: 13123331232,
      table: "pproject12",
      name: "Miro",
      logo: miro,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Memex9999",
          icon: meme,
          link: "https://t.me/memex9999call",
        },
        {
          name: "💸 Money Maker 💸",
          icon: MM,
          link: "https://t.me/Money_MakerMM",
        },
        {
          name: "Master Cat",
          icon: mastercat,
          link: "https://t.me/MasterCat_X",
        },
        {
          name: "Dracula Gamble",
          icon: dracula,
          link: "https://t.me/DraculaGamble",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Neiro brings dog meta back and Miro is one of them.",
      ido: 1,
      time: "2024-07-27T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/MiroonsolPortal",
      tw: "https://x.com/Miro__Project",
      web: "https://mirotoken.fun/",
    },
    {
      id: 13123331232,
      table: "pproject11",
      name: "Smoking Chicken Dogwifhat",
      logo: scwif,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Wulfden",
          icon: wulf,
          link: "https://t.me/WulfdenX",
        },
        {
          name: "BABY CALLER 👑",
          icon: babycaller,
          link: "https://t.me/BabieCaller",
        },
        {
          name: "Weibo Gambles",
          icon: weibo,
          link: "https://t.me/WeiboGambles",
        },
        {
          name: "Travel Caller",
          icon: travel,
          link: "https://t.me/TV_CALLS",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Legal Religion & Non Profit Church",
      ido: 1,
      time: "2024-07-26T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/SmokingChickenDogwifhat",
      tw: "https://x.com/SCWIF_Project",
      web: "https://smokingchickenwif.fun/",
    },
    {
      id: 13123331232,
      table: "pproject10",
      name: "KAMALA HARRIS",
      logo: harris,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "The One Signal",
          icon: theone,
          link: "https://t.me/theone_signal",
        },
        {
          name: "Kong on Chain 🦍",
          icon: kingkong,
          link: "https://t.me/Kong_on_chain",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Panda Caller 🐼",
          icon: panda,
          link: "https://t.me/Panda_X1000",
        },
        {
          name: "MUMU THE BULL",
          icon: mumu,
          link: "https://t.me/MumuCaller",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Ready for my debate and I could be the first black woman that won this run for president",
      ido: 1,
      time: "2024-07-25T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/KAMALAHARRISSCHANNEL",
      tw: "https://x.com/KAMALAHARRIS_X",
      web: "https://kamalaharrissol.fun/",
    },
    {
      id: 13123331232,
      table: "pproject9",
      name: "Pei Long",
      logo: peilong,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Memex9999",
          icon: meme,
          link: "https://t.me/memex9999call",
        },
        {
          name: "💸 Money Maker 💸",
          icon: MM,
          link: "https://t.me/Money_MakerMM",
        },
        {
          name: "Master Cat",
          icon: mastercat,
          link: "https://t.me/MasterCat_X",
        },
        {
          name: "Dracula Gamble",
          icon: dracula,
          link: "https://t.me/DraculaGamble",
        },
        {
          name: "MemeX9999 | Gamble 🎲",
          icon: meme,
          link: "https://t.me/memex9999gamble",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Year of the Dragon and Peipei on Solana chain. Lets bring it back when the year is about to end.",
      ido: 1,
      time: "2024-07-24T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/PeiLongPortal",
      tw: "https://x.com/PeiLongProject",
      web: "https://peilong.fun/",
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
