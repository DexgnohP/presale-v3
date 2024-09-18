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

import harris from "./images/harris.png";
import ppproject21 from "./images/ppproject21.png";
import fwoon from "./images/fwoon.png";
import gmai from "./images/gmai.png";
import taylor from "./images/taylor.png";
import fwel from "./images/fwel.png";
import fwien from "./images/fwien.png";
import fwon from "./images/fwon.png";
import cwif from "./images/cwif.png";
import popdog from "./images/popdog.png";
import gapcat from "./images/gapcat.png";
import fwei from "./images/fwei.png";
import snape from "./images/snape.png";
import kamala from "./images/kamala.png";
import endy from "./images/endy.png";

import panda from "./images/panda.jpg";
import kingkong from "./images/kingkong.jpg";
import vsb from "./images/vsb.jpg";
import travel from "./images/travel.jpg";
import { dataReducer } from "./reducers";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialDataTemp = [
    {
      id: 13123331232,
      table: "ppproject21",
      name: "Project #21",
      logo: ppproject21,
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
      des: "Ride the wave of innovation with Memecoin, part of the exciting Project #21.",
      ido: 1,
      time: "2024-09-17T15:00:00Z",
      totalRaised: 10000,
      tele: "",
      tw: "",
      web: "",
    },
    {
      id: 13123331232,
      table: "ppproject20",
      name: "FWOON",
      logo: fwoon,
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
      des: "$FWOON Celebrate the Moon Festival with a New Memecoin Twist!",
      ido: 1,
      time: "2024-09-16T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/FWOONPORTAL",
      tw: "https://x.com/FWOON_Project",
      web: "https://fwoontoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject19",
      name: "gm.AI",
      logo: gmai,
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
      des: "The operating layer of solana AI.",
      ido: 1,
      time: "2024-09-15T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/gmAIOnSolana_Ann",
      tw: "https://x.com/gmAI_Project",
      web: "https://gmai.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject18",
      name: "Taylor",
      logo: taylor,
      whitelistsShow: true,
      whitelists: [
        "Fim8Z6aTJfDKMmzSGkKMogMJjAiCbmDtEkcmY5S8tCbn",
        "H38MB1y5P3NvTkkcns3jqK4LoVLAtGS4F3mboz1RygHR",
        "Cii6MqSyKn2egh11a6BVrX7D3inb64VzUu4247x4U1XM",
        "6oGKrwweGdaddWWbgxSxxPaYL2t77kvLCvGMFB3RdgXD",
        "hCE682VhyB581BHXuAZmMBUUzYo2Hbec1hpyDKTMwnL",
        "BzEtZ5RdXsd7Ez3Vo8APhqvmJ9D38X8EQfjHyLVDhbhS",
        "BGnhYRzaaQNaAMUSCXoF2cVwrkujDSYux4kGMgS73m9X",
        "6oNEENj4oWEyDWqyMefy6hAG9eqNKv5FGRsrSqAVhvKJ",
        "5UUrNhgvjYoc5xTM6H9VCEDimurDxDFQCAvzpf33TpFW",
        "5Z2XoBrdDsQs2iTbiE1T3BE4xd1JJtgZ9bRzxTGE8tK4",
        "Fx7RSoJs6MS5Prjv6cGpcD4t7LjsbttwFwjq5Y7Tn7xN",
        "5rzcM1w2woRuEkPbXCruDHaxBMNVxYPw9QomsT6FSXm1",
        "7s7kn4bJ4j4THaPtjBU3giZEMj7pZ7ESM9vVFWN2JN3j",
        "BpCj3c81pwcv5b6FKQQhiWknSCSXMtKfpSiUJHQc2rFJ",
        "Efc6bgRU5W4cdRZrWLTAeyR9A167EfmGqdKhHBRXd7x5",
        "Dwe6d8rEMaMZLGZu8YGRpkuG2nnbeoNk6UwLNXxGriVe",
        "Hr3KJJWp2Xziknefbs9Zt6LtGGBEtiN6J8peatEEPBYx",
        "EATQqfC4QBxTNpJMho554TRfjZyhVksQ9meaVZhtg1Fm",
        "BqqMvBsUGUsR9REgUAXwQYi7f6RUdbUB9Auhvgp67ni2",
        "3TRVYj4LZvamazZ5NoyeYuRiAzVHb3YS76KsvuSLJKYL",
        "BJiVAc4gyZUovGEXv9aTGzLGADy2ZfBmcfL4e1fMmKmq",
        "FTqfMtmX9GGbQh7eHPoG6ZYKtTTzgnihfHEetX1EpnC2",
        "7iEJ6tdHaFRTfxJAM27pVmA9WWvcrFYcE8mRXbYZxpzJ",
        "J1Vcr9ZxsM6xZCPexxzvExN4WDVZZNZFSCWnNgXSBx5R",
        "GJ2uU511VpdK2Sh1Vii2tXSc645sa6fhg1uQbHE3Pq9K",
        "DBpo4ryCUBi6xzbuWdM5aE9KXsdhzm3xEGcRrsduRoMW",
        "ahgzRAvcCUP7uxe58f8HvHjAMAWSiwmnhoK3xcDfqif",
        "6N2PuZcWojkL884tKEhd2E8tZgbEuJCQHwYsEM2DRFNe",
        "9KEryP9GCfn1bc7P4YdQGi4zHhBcV9WTcPKKEefgCkpD",
        "9BvREQVjKRtxQtSn4Xzgr353WtgPCAWsQcWKRSXJYe94",
      ],
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Travel Caller",
          icon: travel,
          link: "https://t.me/TV_CALLS",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Taylor: Where Feline Flair Meets Crypto Cool!",
      ido: 1,
      time: "2024-09-14T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/TaylorOnSolana",
      tw: "https://x.com/TaylorOnSolanaX",
      web: "https://taylortoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject17",
      name: "FWEL",
      logo: fwel,
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
      des: "FWEL: Soar Higher with the Angelic FWOG Spirit!",
      ido: 1,
      time: "2024-09-13T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/FWELPORTAL",
      tw: "https://x.com/FWEL_Project",
      web: "https://fweltoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject16",
      name: "FWIEN",
      logo: fwien,
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
      des: "FWOG from Beyond the Stars!",
      ido: 1,
      time: "2024-09-12T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/FWIENCHANNEL",
      tw: "https://x.com/FWIEN_Project",
      web: "https://fwientoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject15",
      name: "FWON",
      logo: fwon,
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
      des: "FWON: The Demon of Memecoins!",
      ido: 1,
      time: "2024-09-11T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/FWONPORTAL",
      tw: "https://x.com/FWON_Project",
      web: "https://fwontoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject14",
      name: "CWIF",
      logo: cwif,
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
      des: "CWIF: The New Gang in Memecoin!",
      ido: 1,
      time: "2024-09-10T12:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/CWIFCHANNEL",
      tw: "https://x.com/CWIF_Project",
      web: "https://cwiftoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject13",
      name: "Popdog",
      logo: popdog,
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
      des: "Popdog is popping with his cat!!!",
      ido: 1,
      time: "2024-09-09T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/PopdogProject",
      tw: "https://x.com/PopdogProject",
      web: "https://popdogtoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject12",
      name: "Gapcat",
      logo: gapcat,
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
      des: "Open Wide, Unleash the Purr!",
      ido: 1,
      time: "2024-09-08T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/GapcatPortal",
      tw: "https://x.com/GapcatProject",
      web: "https://gapcatsol.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject11",
      name: "FWEI",
      logo: fwei,
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
      des: "The Spirit of FWOG with a Bold Chinese Twist.",
      ido: 1,
      time: "2024-09-07T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/FWEIPORTAL",
      tw: "https://x.com/FWEI_Project",
      web: "https://fweitoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject10",
      name: "SNAPE",
      logo: snape,
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
      des: "Snape the crocodile create a new gangs. He kicked Pepe out and become the leader of this gangs till now.",
      ido: 1,
      time: "2024-09-06T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/SNAPECHANNEL",
      tw: "https://x.com/SNAPE_Project",
      web: "https://snapetoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject9",
      name: "Kamala",
      logo: kamala,
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
      des: "The Fiery Companion of Fwog, Sparking a New Memevolution!",
      ido: 1,
      time: "2024-09-05T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/KamalaProjectPortal",
      tw: "https://x.com/Kamala_ProjectX",
      web: "https://kamalatoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject8",
      name: "Harris",
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
      des: "Harris: The Strength Behind the Meme, The Heart of the Hype.",
      ido: 1,
      time: "2024-09-04T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/HarrisPorjectPortal",
      tw: "https://x.com/HarrisProjectX",
      web: "https://harristoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject7",
      name: "Endy",
      logo: endy,
      whitelistsShow: true,
      whitelistsShowTotal: 15,
      whitelists: [
        "8tdBaeX1PkJy7Tf46A2hmWCLFpMvVWMWQL9JC9LnEVgQ",
        "DhkQEYnqKMLjFwPDqXH4xHUt4vbGT2DQWt6QEUa2US3q",
        "38FcHy4LVBpjqPXLGuzLc3G4oE1pUdeB481Av1PHrDLC",
        "FL2TY39r4YyPwVmfmfQF4T7ihXufwD6QfySvzQs9QG4U",
        "5u84tXfrY2UNp8djHVehCf5Y4EVX1QVbRbsLGsAEtfRz",
        "85MwqWGEK3atMqLVHToXaS6Y35tKCGV9Q9JoR8mPhAEV",
        "EszKEbJKDHVenKdPp4rmp1eAi93BYFnTn9xhCa9FkRDQ",
        "H73EEFQVdJyyA2yZ69UvSZEgVcnD6eSXDmEW3wAAjTUb",
        "DCKDGepn3KYSQNZn7EgwjhiAqQSYEQMaVHT4Z2uJS1Qn",
        "DaF3oAroALqzf7ZGwWyXzbM1KhSqr1v9RWFEPwxj1umo",
        "35k8pmnntexJ4MgWE1HxmAw61fZxckatX3YRVbYBZAbj",
        "BQBV492pDPqUAj7jpUt7D4MbaxyLmV9tznyhptu9edWZ",
        "3kLu7Wn7FsugBYgCy56qehyXqYZbYH2WJD5RetgLBg9C",
        "6pEy5R6o1CotQvudNTxTNReUaeZF1cGmfCgpGT6B91UY",
        "25DbNHKYmqNx1KvnU3xstqMX9KvnJEyAAExdMRxUX4j3",
        "7RUBVAgRwnRNdYTDsgb9pTpLLaGsxjNfjJ9PYRgaDKqS",
        "GFjQdyz134rVRUvQ2Xcp116qryKvtTxJEyk7SCK8VHc4",
        "DdXLjv6Visd2dFr89rbGdsWFwA4yST427VvuUriftQhf",
        "GNrjjTDwYHekmg5JtPGmaTttDLo2hJmiFzu8E3jbcfWR",
        "BiiQfVUPhMtMG6LjbkEMMGoFFyF9q2fW7PTX9gzaEo6s",
        "DjMbJdqu3h2ChaZPq24p6WTVvtjCjxjNAA4Kd2qBiAW",
        "5gw2Y96HEb5WR6PXFaq5C5doe2eC1kLd6atZm6WFbNdD",
        "2BjfzieSFf74CC5e56p5hXS135qwtyD5beUYK4PpYDak",
        "Gzdhp1MFhkM88XXqktwDspzL4HZckPJnCxyw6Z11ki4s",
        "3NVpnEpz4mLhTV58gWydqBDzHRo2bENW47A3B438h9ZK",
        "6BwQMGuhH5z6TAAkcVw2nzR2yJEH1Z8keagAbWjaZnzo",
      ],
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Volume Solana Bot",
          icon: vsb,
          link: "https://t.me/volumesolana",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Endy: Continuing the Legacy, Igniting a New Era!",
      ido: 1,
      time: "2024-09-03T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/EndyPortal",
      tw: "https://x.com/EndyProjectX",
      web: "https://endytoken.fun/",
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
