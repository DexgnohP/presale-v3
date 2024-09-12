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

import brazil from "./images/brazil.png";
import ana from "./images/ana.png";
import wukong from "./images/wukong.png";
import gepe from "./images/gepe.png";
import redditfrog from "./images/redditfrog.png";
import pupu from "./images/pupu.png";
import fwug from "./images/fwug.png";
import ceek from "./images/ceek.png";
import luna from "./images/luna.png";
import harris from "./images/harris.png";
import ppproject16 from "./images/ppproject16.png";
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
      table: "ppproject16",
      name: "Project #16",
      logo: ppproject16,
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
      des: "Ride the wave of innovation with Memecoin, part of the exciting Project #16.",
      ido: 1,
      time: "2024-09-12T15:00:00Z",
      totalRaised: 10000,
      tele: "",
      tw: "",
      web: "",
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
    {
      id: 13123331232,
      table: "ppproject6",
      name: "Brazil",
      logo: brazil,
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
      des: "Brazil: Your Voice, Your Power, Your Freedom.",
      ido: 1,
      time: "2024-09-02T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/BrazilPortal",
      tw: "https://x.com/BrazilProjectX",
      web: "https://braziltoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject5",
      name: "Ana",
      logo: ana,
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
      des: "Ana is the loyal and loving wife of Frog.",
      ido: 1,
      time: "2024-09-01T12:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/AnaonsolChannel",
      tw: "",
      web: "https://anatoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject4",
      name: "WUKONG",
      logo: wukong,
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
      des: "Mythic Wukong is the best game rightnow and the most viral game at the moment!!!",
      ido: 1,
      time: "2024-08-20T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/WukongTheMyth",
      tw: "https://x.com/WukongTheMyth",
      web: "https://wukongtoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject3",
      name: "GEPE",
      logo: gepe,
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
      des: "$GEPE Pepe the Alien. He came from the space and wanna create a Gepe's boys club like Pepe did. Let's help him!",
      ido: 1,
      time: "2024-08-19T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/GEPEPORTAL",
      tw: "https://x.com/GEPEProject",
      web: "https://gepetoken.fun/",
    },
    {
      id: 13123331232,
      table: "ppproject2",
      name: "reddit frog",
      logo: redditfrog,
      whitelistsShow: true,
      whitelists: [
        "2fxdVmsDjxoeza46y1NovcR9gm73CgbRixwUF86FUHxw",
        "5gpXYHhMg3mFcy1ioFKuH1Q32Dtuz9nrs9cctdz6a5AJ",
        "HbyL86UgNEZYJTm4Be1Tos9YCap7ffa9RjZow419Jw19",
        "EpscTEhcMwfeDeEMAX3xBwwFWioVibysqyxTSr1Lfdcn",
        "6ARDhdqTpU6cVhwrT8bxqA1SqBncFw1tNtAUa2EVvsDg",
        "GtAMuBx4WjZquWqVhbyZz5PxSzybtJVM7GFamvS9KvkY",
        "4KYgDg1mg3YBGq5DMYJe2rDQ21fe6FXMCapp3JyRmbeV",
        "C1mckWb3Nwthy3z2KXf2ShnJ7i1Yf9kyc63R5Ptwq75T",
        "HbhLv8cUditCkUFmYT7Wk91jHy4A7StYpi43KLJ4XrhQ",
        "CswgBQv2emPqRajkszrFWD8ciKjiwaV3tyUXSsUP6fbY",
        "3Y7uaJGM5ViqNNgAUyXTetNph8G6sK5gfBssoWC7h6t6",
        "7msXCoogutsVXhorwGjxViTi6rdxDn9Mk54RmCc5sr5W",
        "CKBc8S4mMTe8ke5SeTvbjEACg1A4pjeEzbE9tuaZHAHT",
        "8mNQwWB4yyg3YPSBtnjugAjSN5L2cr4A9a8YmmLxe8Ks",
        "GjemQFb4D9h6bSgo41vj6Gx3bVmRZeKzKugPcYHBZfs8",
        "CHEbYjneu5HDrFxHTiz8zLqfbcN3JgtebTCFAie7KGSJ",
        "B7GZDmEESiNjWNfDeQ7Qnc8LTEKH2e2ir6P8RVViE9iS",
        "52k63KdeC5zTEXCQvaLARhKMrK1pFHKgU3sDyJMUTXj6",
        "DCXYVX8YX9sgT8si5QPud6pR2FfXf1nMjALA3CKTdV5B",
        "biLtHUE7qRaRis1S8eAexK2g9BuFpDPuF2Am8VwAXxh",
        "CetSr2CaLSa49AWQwUB8dM6UHBi66FMCcjK2ab19dwZ3",
        "F5sRt617EfRfDQMYrW4AWYaAKFi7uHH4DpfvQ4d11tJ6",
        "2xZBDgrbx9g41xDiHHvUbneEpvo2Nh9A9RKqSDLNi7rt",
        "645w4hkkGe6e5moB5QRPzckk5ujcAijuMS1kKS9KEuBv",
        "AG8uGi7djE6WSntWPdaqQR7xxcjW8HD1tFt6Bjqi8oHA",
        "A1wBCwjHNG4g9atQ2Ai7DLerzB8UxxTGqk25Lxrw6qwE",
        "EKPRx7qzYFVmT3HRNfMByMfE7sDA9KTZRrmzDGYTLjdF",
        "CrKzTT5PUAXPEeCjY8gFTHSxYp1wdF6vzmoAbFiDHRFX",
        "7L5q31otn55jiVEYGbasG6wdRnFx6ax6icTumdZxbXhy",
        "6QXyvnrSuj2kbfMm3omaYSVr8Hr9hURddi5irALo3x4s",
      ],
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Wulfden",
          icon: wulf,
          link: "https://t.me/WulfdenX",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "stumbled my way from the blockchain to reddit with reddit frog",
      ido: 1,
      time: "2024-08-17T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/redditfrogportal",
      tw: "https://x.com/Reddit_FrogX",
      web: "",
    },
    {
      id: 13123331232,
      table: "ppproject1",
      name: "PUPU",
      logo: pupu,
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
      des: "$Pupu is the child of Pepe and Mumu.",
      ido: 1,
      time: "2024-08-16T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/PUPUPROJECTX",
      tw: "https://x.com/PUPUProjectX",
      web: "https://puputoken.fun/",
    },
    {
      id: 13123331232,
      table: "pproject30",
      name: "FWUG",
      logo: fwug,
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
      des: "FWUG is the next FWOG. He is creating a new gangs! Join him!",
      ido: 1,
      time: "2024-08-15T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/FWUGONSOL",
      tw: "https://x.com/FWUGProject",
      web: "https://fwug.fun/",
    },
    {
      id: 13123331232,
      table: "pproject29",
      name: "CEEK",
      logo: ceek,
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
      des: "I'm new in Pepe's gangs. $CEEK the newbie!",
      ido: 1,
      time: "2024-08-14T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/CEEKPROJECT",
      tw: "ttps://x.com/CEEKProject",
      web: "https://ceektoken.fun/",
    },
    {
      id: 13123331232,
      table: "pproject28",
      name: "Luna",
      logo: luna,
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
      des: "Luna is a fun and community-driven memecoin inspired by the character Luna !!!",
      ido: 1,
      time: "2024-08-13T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/LunaOnSolxPortal",
      tw: "https://x.com/LunaOnSolx",
      web: "https://luna-solana.fun/",
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
