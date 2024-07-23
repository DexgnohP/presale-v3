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
import commer from "./images/commer.png";
import bolly from "./images/bolly.png";
import olympe from "./images/olympe.png";
import niggap from "./images/niggap.png";
import catson from "./images/catson.png";
import dpepe from "./images/dpepe.png";
import pproject8 from "./images/pproject8.png";
import telangpu from "./images/telangpu.png";
import boden from "./images/boden.png";
import head from "./images/head.png";
import girls from "./images/girls.png";
import beast from "./images/beast.png";
import panda from "./images/panda.jpg";
import kingkong from "./images/kingkong.jpg";
import travel from "./images/travel.jpg";
import { dataReducer } from "./reducers";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialDataTemp = [
    {
      id: 13123331232,
      table: "pproject8",
      name: "Project #8",
      logo: pproject8,
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
      des: "Ride the wave of innovation with Memecoin, part of the exciting Project #8.",
      ido: 1,
      time: "2024-07-23T15:00:00Z",
      totalRaised: 10000,
      tele: "",
      tw: "",
      web: "",
    },
    {
      id: 13123331232,
      table: "pproject7",
      name: "Boden is not on the ground",
      logo: boden,
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
          name: "Dracula Gamble",
          icon: dracula,
          link: "https://t.me/DraculaGamble",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Boden still alive and we will ride this very high!!!",
      ido: 1,
      time: "2024-07-22T15:30:00Z",
      totalRaised: 10000,
      tele: "https://t.me/Bodenisnotontheground",
      tw: "https://x.com/BodenProject",
      web: "https://bodennotground.fun/",
    },
    {
      id: 13123331232,
      table: "pproject6",
      name: "Dark Pepe",
      logo: dpepe,
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
          name: "MUMU THE BULL",
          icon: mumu,
          link: "https://t.me/MumuCaller",
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
      des: "Dark Elon and Dark Maga did well. They all like $Pepe and now its Dark Pepe time",
      ido: 1,
      time: "2024-07-13T15:30:00Z",
      totalRaised: 10000,
      tele: "https://t.me/DarkPepePortall",
      tw: "https://x.com/DarkPepeX",
      web: "https://darkpepesol.fun",
    },
    {
      id: 13123331232,
      table: "pproject5",
      name: "Catson",
      logo: catson,
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
      des: "Popcat will hit 1$ in a few days and get cat meta on Solana back. You know what it means with $catson",
      ido: 1,
      time: "2024-07-13T15:30:00Z",
      totalRaised: 10000,
      tele: "https://t.me/CatsonPortal",
      tw: "https://x.com/CatsonOnSol",
      web: "https://catsontoken.fun/",
    },
    {
      id: 13123331232,
      table: "pproject4",
      name: "Nigga Pepe",
      logo: niggap,
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
          name: "Dracula Gamble",
          icon: dracula,
          link: "https://t.me/DraculaGamble",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Ya know $Pepe is green but we're all nigga bro. Come and join Nigga Pepe gangs.",
      ido: 1,
      time: "2024-07-13T15:30:00Z",
      totalRaised: 10000,
      tele: "https://t.me/NiggaPepeePortal",
      tw: "https://x.com/NiggaPepeX100",
      web: "https://niggapepesol.fun/",
    },
    {
      id: 13123331232,
      table: "pproject3",
      name: "Te Lang Pu",
      logo: telangpu,
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
          name: "MUMU THE BULL",
          icon: mumu,
          link: "https://t.me/MumuCaller",
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
      des: "Welcome to Te Lang Pu Revolution!",
      ido: 1,
      time: "2024-07-13T15:30:00Z",
      totalRaised: 10000,
      tele: "https://t.me/TeLangPuPortal",
      tw: "https://x.com/TeLangPuX",
      web: "https://telangpusol.fun/",
    },
    {
      id: 13123331232,
      table: "pproject2",
      name: "Head tilt",
      logo: head,
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
      des: "$HEADSTILL on. Tilt your head or get a headshoot!!!",
      ido: 1,
      time: "2024-07-13T15:30:00Z",
      totalRaised: 10000,
      tele: "https://t.me/Headtiltportal",
      tw: "https://x.com/HeadtiltX",
      web: "https://headtilt.fun/",
    },
    {
      id: 13123331232,
      table: "pproject1",
      name: "Girls Club",
      logo: girls,
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
          name: "Dracula Gamble",
          icon: dracula,
          link: "https://t.me/DraculaGamble",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Ya know the Boy's Club has girl friend. So they create a Girl's Club on Solana.",
      ido: 1,
      time: "2024-07-13T15:30:00Z",
      totalRaised: 10000,
      tele: "https://t.me/GirlsClubOnSol",
      tw: "https://x.com/GirlsClubSolana",
      web: "https://girlsclubsolana.fun/",
    },
    {
      id: 13123331232,
      table: "project30",
      name: "COOMER",
      logo: commer,
      whitelistsShow: true,
      whitelists: [
        "AEJd1H8JV9YiVNr7bqA9a5iaCGGVEKreMcdSLV8EWUxa",
        "GAXYN7WqoTfXJ5NPjypBSAMRkDsdRMJQswWS6CF8232A",
        "G2yEtLM8euNAYhAdKcyH1gv3uCdbHGyjAttM6LQ772wS",
        "58LMiJ9utmowsDFx1nXQ7HpRcfEHiMBzPAG58yQ13Uva",
        "AxRSfP6rrMErPHFHF7kwqsJ5krYGcGPHwiEDtY9E4LYs",
        "EYpvTTgsqZ76zs1iLCmWJL7trX11upAPUNoUjckV3yMC",
        "AJueeEnbNdzUDjBEGUSEUV522bLuLgsNW1VRBB8rwunc",
        "9VLUjZueTCfL3XVnLwEhmyuk366PPRn7dPJmCi4DPngF",
        "4vt66zNH9dh8EJ5mPXfQWHBKcfH2GBt8baHU6aevnVTd",
        "8VyxgpMzzQ9vrNepTa1UqTpDuR8Q56CwTGhszWSLZ6t4",
        "2Mfq4xwW9rCoKgdpProiZFpUQKa737vNuC2Duw1SwQ3u",
        "4MipwDeR9KYEYsMRN664mw2GWguwCcvXn2tro2DvsT4h",
        "29pNLUro9WZKui9yUFU4nzdHL85WcvujjWRuu3o7tExX",
        "83drTak41f7PJhF857HVpyFpZYDTH8ey5fS4d6QsfWNW",
        "Gei93EhFT1uZo55Tf1ACMY7SUDRUfMFN5FX3VDBd1vcL",
        "BVqWbCPEPh1t1Ga9e7Yown2mNozCnGha9Vp2hPENJB1U",
        "2PjmG51FdZpTUNYvB6ZkxgLcnuGYkqRNv9TYwYkgyRGA",
        "HgSWwQwLFDKBe8s7AYmh5ZeSRkr2fTJgNh4YnDjbjuNo",
        "8kBADKCpb9P47MnPei5TQKQSwZvrKHHfCukL7y6DkqWP",
        "9B7ivj9CM3z3P3CS2fJ58DKtoR92214WHKqkP2pioEXb",
        "GfNZ1ULbYUkx16p2m3A7kwkpZKdhP61Wr2vyRiyKZpMD",
        "Czthqy325NHbomFFuMSRjDWUx5h47j7X1hbhoLoGRZa1",
        "DJTP9qYq3Xei77VwUxeb433xjeV2j1TpsVaXYEnFCP5o",
        "HwPG6do8E3TFKrb2y2UyZCwybicuQHuaxPX8VjGeTbqt",
        "FiWWumEQs7RKMA8BnwFY2ZuHDj9ERaYCq8VhCvTmf4Tm",
        "6Pab5CkZ8TEKY4qPhXTFvoerxu5YpPdzceqUHHrj9BbV",
        "DXRkgnHKPEatVx3WJUiMrq6FryEjSj8vjEDgqhRn7wMf",
        "HRWtKMP1npbUjbV8Dj7cog3FcdDQYW18FnmrrQ9dpFg4",
        "5JX3vF8ykeqNKNwJv7o3c5ajSaXDQJgytLiFpoFF1Ly4",
        "EFtps7ACRP8tHrS54Br5QPoA49DBA5TeozbNreLr5Nzd",
      ],
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Memex9999",
          icon: meme,
          link: "https://t.me/memex9999call",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "I am the muscular man on the right side on @Solana",
      ido: 1,
      time: "2024-07-15T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/COOMERSOLANA",
      tw: "https://x.com/COOMERX9999",
      web: "https://coomersol.fun/",
    },
    {
      id: 13123331232,
      table: "project29",
      name: "BOLLY",
      logo: bolly,
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
      des: "Hello everyone. I'm $Bolly, Billy's brother and I was born on this day!!!",
      ido: 1,
      time: "2024-07-13T15:30:00Z",
      totalRaised: 10000,
      tele: "https://t.me/BOLLYPORTALL",
      tw: "https://x.com/BOLLYSOLFUN",
      web: "https://bollysol.fun",
    },
    {
      id: 13123331232,
      table: "project28",
      name: "Olympe",
      logo: olympe,
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
          name: "Dracula Gamble",
          icon: dracula,
          link: "https://t.me/DraculaGamble",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "当区块链遇见奥林匹，胜利无限。",
      ido: 1,
      time: "2024-07-12T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/OlympePortal",
      tw: "https://x.com/OlympeOnSol100",
      web: "https://olympesolana.fun",
    },
    {
      id: 13123331232,
      table: "project27",
      name: "MrBeast",
      logo: beast,
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
          name: "MUMU THE BULL",
          icon: mumu,
          link: "https://t.me/MumuCaller",
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
      des: "Empower Generosity with MrBeast Coin: Transforming Crypto for Good!",
      ido: 1,
      time: "2024-07-09T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/MrBeastPortall",
      tw: "https://x.com/BEAST_X100",
      web: "https://beastcsolana.fun",
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
