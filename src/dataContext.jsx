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
import bidenwifhat from "./images/bidenwifhat.png";
import mimi from "./images/mimi.png";
import sheishei from "./images/sheishei.png";
import goji from "./images/goji.png";
import nihao from "./images/nihao.png";
import snekky from "./images/snekky.png";
import floky from "./images/floky.png";
import skull from "./images/skull.png";
import rope from "./images/rope.png";
import bunny from "./images/bunny.png";
import andei from "./images/andei.png";
import project30 from "./images/project30.png";
import bolly from "./images/bolly.png";
import olympe from "./images/olympe.png";
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
      table: "project30",
      name: "Project #30",
      logo: project30,
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
      des: "Ride the wave of innovation with Memecoin, part of the exciting Project #30.",
      ido: 1,
      time: "2024-07-15T15:00:00Z",
      totalRaised: 10000,
      tele: "",
      tw: "",
      web: "",
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
    {
      id: 13123331232,
      table: "project26",
      name: "Wolf Skull",
      logo: skull,
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
      des: "Wolf Skull ?????????????",
      ido: 1,
      time: "2024-07-08T15:30:00Z",
      totalRaised: 10000,
      tele: "https://t.me/WolfSkullPortal",
      tw: "https://x.com/WolfSkullX",
      web: "https://wolfskullsol.fun/",
    },
    {
      id: 13123331232,
      table: "project25",
      name: "Rope",
      logo: rope,
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
      des: "Rope: Tying Together Memes and Finance!",
      ido: 1,
      time: "2024-07-07T15:30:00Z",
      totalRaised: 10000,
      tele: "https://t.me/RopePortall",
      tw: "",
      web: "https://ropetoken.fun/",
    },
    {
      id: 13123331232,
      table: "project24",
      name: "Ronald's Dog",
      logo: bunny,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
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
      des: "Welcome to Ronald's Dog, where loyalty meets blockchain innovation!",
      ido: 1,
      time: "2024-07-06T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/RonaldsDoggg",
      tw: "https://x.com/RonaldsDog",
      web: "http://bunny-ronald.fun/",
    },
    {
      id: 13123331232,
      table: "project23",
      name: "FLOKY",
      logo: floky,
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
      des: "Welcome to FLOKY, where legendary strength meets blockchain innovation!",
      ido: 1,
      time: "2024-07-05T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/FLOKYYPORTAL",
      tw: "https://x.com/FLOKYProject",
      web: "https://flokyonsol.fun/",
    },
    {
      id: 13123331232,
      table: "project22",
      name: "Snekky by Matt Furie",
      logo: snekky,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
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
      des: "Meet Snekky, the vibrant and adventurous snake from Matt Furie's Night Riders.",
      ido: 1,
      time: "2024-07-04T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/SnekkybyMattFurie",
      tw: "https://x.com/SnekkyProject",
      web: "https://snekkyonsol.fun/",
    },
    {
      id: 13123331232,
      table: "project21",
      name: "Nihao on SOL",
      logo: nihao,
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
      des: "Welcome to Nihao, where connection meets blockchain innovation!",
      ido: 1,
      time: "2024-07-03T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/NihaoonSOLChannel",
      tw: "https://x.com/Nihao_Project",
      web: "https://nihaoonsol.fun/",
    },
    {
      id: 13123331232,
      table: "project20",
      name: "ANDEI on SOL",
      logo: andei,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
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
      des: "Welcome to ANDEI, where strength meets blockchain innovation! ",
      ido: 1,
      time: "2024-07-01T15:00:00Z",
      totalRaised: 10000,
      tele: "",
      tw: "",
      web: "",
    },
    {
      id: 13123332,
      table: "project19",
      name: "SheiShei",
      logo: sheishei,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Kong on Chain 🦍",
          icon: kingkong,
          link: "https://t.me/Kong_on_chain",
        },
        {
          name: "The One Signal",
          icon: theone,
          link: "https://t.me/theone_signal",
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
      des: "Welcome to SheiShei, where gratitude meets blockchain innovation!",
      ido: 1,
      time: "2024-06-30T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/SheiSheiPortal",
      tw: "https://x.com/SheiSheX",
      web: "https://sheisheionsol.fun/",
    },
    {
      id: 13123332,
      table: "project18",
      name: "MIMI",
      logo: mimi,
      whitelistsShow: false,
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
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
      des: "Welcome to MIMI, where elegance meets blockchain innovation! Join us to harmonize beauty and technology for a brighter future.",
      ido: 1,
      time: "2024-06-29T15:00:00Z",
      totalRaised: 10000,
      tele: "https://t.me/mimionsolanaportal",
      tw: "https://x.com/MIMI_ProjectX",
      web: "https://mimionsolana.fun/",
    },
    {
      id: 13123332,
      table: "project17",
      name: "Goji",
      logo: goji,
      whitelistsShow: false,
      whitelists: [
        "5X4zWPaaKLLsvrw7k2quoL1aAdUivvMr5hqMjM4Knr9F",
        "Eh9YvfJeqBdpAn3GGcyfnGSd6DgyA6dLe6zH3pY8KZ9B",
        "8o2N2FVPYKuweeFBp1finGqc37m3ydpmYHAxJFEzxCka",
        "vVNHCHzo9oJamMudkSmKgBQQ3D5bXE6Pu66QrXKsP6z",
        "5reGZFdFwLkw7Y9mkHzPiyrDEH8z4bwaetB8ZdTpphcg",
        "7xFP6sYE8vtgfsmtTeRm7E45vQFQtxawrLo1NJ8cXaHF",
        "BgxZW4AB9Z6UfYt2rnq3cJD915qy3U6vLeSBtbRe6DNP",
        "8TnF2RhgEqHEMfTxZW1DjqAWNNZtRpAd23KGokrCyKEB",
        "DRrLsTLqTgAohP653gNJ646rqGPQyro8DZN55s3jjppx",
        "7pUsisHd4zGRj2FQE5iuUu7ARcnvNxTdffJ6yKQn3HB9",
        "4oMiRBeC4vEPnsDCkTotxRTYCCe5jraGzhpGyGs38b99",
        "9KHNyxevz6AdJPVPXKEprdDbDZJjTJ7RMV4nFT1THkCi",
        "HooV13Dz77ZtVcitd8T3wajSDw5dUi8WG3tNShxVWNGG",
        "GkW5r7r4BqdDmRUf9Kmwc652Ga5KBoNofb6jnTWi9hDT",
        "CnCQ4cCotai1nQHAmajpvQwdNEeRFYMYndrfCisKgeQD",
        "9zk6e6Qd4UcDobjieC2LgDBNHHCx4TtdnJKw37Kax2nP",
        "6fftTkPL1tVzYnpdLauy7PeFFyg87t8jrdYYHY9UdSWi",
        "AhK3QkFZbi7rhwSVYLVKw8cojwV5FauHuQxn4SvcD2m",
        "7Ko5bLoeVXDUJf4LTe4CnwSGWSnsbuCJZdDUTv3zAqrZ",
        "BUrVfDVWQVud1mAmyAHRBA75a3pgp4ZLui81XLN731cn",
        "BJGZvnhh9mmbsgR1F7ue6y2HtEKoRb4py98eizrwV4i1",
        "6VRyr9DJzXrrBnm3dZc2un2JZGat13x2geKxq3YVv6Kx",
        "E1vgC6SAzYqXwP4eUCTLTqmmz7vmqbnf8a6fvaKC9GcM",
        "6yF1g4SKLLjQnAcu9XzUCRA3nspzg9wQof8QUhotWLpb",
        "GY3ewUQfQ3aAExGSyfFdoFiBdnEKpJNmN8c4To4z5sRB",
        "CVCRGGbmen5L4NadjbqcSfq3izQNYkzvAr4p2bBavkS",
        "HZ715nrUHMTLCX3tRkXcPY9QaiM1kwKRaJWAjWWf6Lyw",
        "GpCYs7UxJMqx1jeS92w1TJDTnMCGt2kyAoKoANkCpCNy",
        "9p5HKS7p3fpd7yvw2zZkuWTXmUuwsMxJuYC6jq8tpDU4",
        "HuWkdt6bDLnLDgsUYkkx3fB3JzK8qWCRduR4UraYefik",
        "Af9zUKLDSiQxzYzqzJ7iKcd7rr4RY7tfq2LUybF7fvqf",
      ],
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
      des: "I'm Goji, the monstrous memecoin shaking up the crypto world with a roar of humor!",
      ido: 1,
      time: "2024-06-24T15:00:00Z",
      totalRaised: 200,
      tele: "https://t.me/GojiPortal",
      tw: "https://x.com/Goji_ProjectX",
      web: "https://gojionsol.fun/",
    },
    {
      id: 13123332,
      table: "bidenwifhat",
      name: "BIDENWIFHAT",
      logo: bidenwifhat,
      whitelistsShow: false,
      whitelists: [
        "4YdjHVd1HihAMcm2cNf6qXdXpqrhhWbTvpSyasJntsJr",
        "8xHVochNgAX1uQQixtwPeh5DHfnvC554ngXXb4g5bG3v",
        "5vKSdAU4KziVG32QWQSToEJHDXjtsp9TSAHNqzsMdqyF",
        "G7gR8tWawFPRvWtk4tY1CQwzBVDYaxRjaaPLHg5JRSsv",
        "8pb4FMzRj8iiVGYKg8k7jPbVxwdJGvbTz7svCij25MeA",
        "6UwtqLMZtLyHqiRFyVhrpNVKWR4NvWM9wCZ1jLbUAbVf",
        "Bk9ApF5NBmCmK5boRy4fjo61N6oPZ68xyHZ2x4DLWaDR",
        "DZXdGtqwNtDqr7zA9NAMXLJMcwBc7LSJTjqQ19uvtxs8",
        "4HiurTbiXLmjjv4qRyagSTTUC5k3bPzRvbjju4J3LpP1",
        "GTXHexXgET8g57XMJcTfRN7HmLWmBq6R72B9uP24dY3j",
        "F661LNoVuG4Q9ze1JMCCYtuUJ5vA7QXGbdCftABeh1rz",
        "8xBWXJd1eHdm994Mr82E8fVseLWT4iU3S9JERPn2Z78K",
        "AbVxzPmyjQWnVfLw5nZmqaZ4P6ww21FY8LsPScDqP5Dz",
        "7CWfAYfdmT7gEWCHHpZUyfQTeaCsTbt1fvpsa3RxUQKf",
        "HooV13Dz77ZtVcitd8T3wajSDw5dUi8WG3tNShxVWNGG",
        "3CVnqtbtDXnabFRLDBGiBu8V8HhFf1peGpv4YSyA3Je1",
        "3YUfvN6tZjkcQnsHW2q5rndgqXVQYexitEPzUyj7pdzT",
        "Hdi3E8muTxJ6VWrBepW9KcRDfwxtkqb3QK62wRyCSctJ",
        "kb9LyV7Z1QU7nZLJhRixcYtD7nfRrPEQ1Fwz4MKhLPX",
        "G4vvBFXwtQji9ypb1VYhddsWpbv3FWESeJ1KyxMbwPWK",
        "Ri1H63QksTBF6yQanKN1trTphBypfH52apP8p7WiFCr",
        "DuUkzhPfKs3Ujb3UXmxBT7mvNX56tTdrtsaGczwnA1Gr",
        "48nDF1WkQu89PT1zVQv6jx4zHFCRbWDK5MW6oz6gu1mL",
        "2JHQdGrCEUK1YTkGtNKKoA2sCtNvxv8XJaTeiGsGKDXd",
        "56LE1znz1NPs8G3PBfyRHmLBk9VKiangoKrBBL8cAHQ7",
        "3nLnadpz2fH1QsjwNpbyAh6yDLsjQ9e5WJ5oeeoxVJ4d",
        "9F1ynQn1fmGNBeCXjZ2vM9rNyzTa15cZUx3FeeqTy8hW",
        "GB5UBgwB8wy43GkeiwoVRnaFU6nnewLQ7UYJ66Bpdwyn",
        "99siKbFn4Qez9dwn3eMctrztaneNBon5TiEUMZNEmsoG",
        "Hi57TuDpkHZ9hphYXYRjDoxV9bSWjgBTchS8rq79DxMt",
        "HDaJX1RQn7xhbXHWM8S9MgmqWZMVfysdqdHGxwE9oRRc",
        "B6Jgyp2sgKr5md1ftV34hZKFBb6CnV7YNz9fn16H6jb6",
        "9b51VN46aj6ymaSDNkFrut9xDiF4nY44GnvnwuW6H554",
        "AhRGGVNQxtPX5kCdDH3Y72Akj3WrTD5agfd32DbCMPjG",
        "DkaR1ic2hpTRgFdqdJNvBFYmSKTVjMhNX38TpKufAGYv",
        "3HzHswX2EqNdFmJggqGWPvMEtzY2htiymgVX7Viawu2X",
        "4bFPmfVUYt4oaw38joMgd5qxSSRMQNJRgzHCcfSuXBRK",
        "6xvby7Et2jExawG3fnP8P4EBpcNgRgKqxU3C7YpiWu91",
        "3v6sWJfh4C2iV1Y7PxCrtVj88oPfWFV3kpcvrn8AwypS",
        "4PSNNuAzCSyuPcGouYwLKmAJpthb3uZzJJPU3VtRHuHN",
        "9QSSRNGknVyRy1C32MqVASrtsLVgScqoz9k7SNC8EF5B",
        "Hc6bf9kKj6gFHnhKqLnd8o8dYB6RqqWVk3kuecH9cnFc",
        "84MsEjgYvA1NpgbVqMYfEUsUTe31gXZ267z3wM6HztBi",
        "5HrdD5MpwLzZH6K3dQSrN1vr4cmS1cPDg8EzK1K4Etxo",
        "5Vopbv6oe5sfNhmGhaB813fFDcnsTVqVYeApfySQje3L",
        "H1HUGXPGyRGivxLUFcdDqna25nAwtsTppKtmM4FYAjPw",
        "BAsVxJQb9w4qebGiptJG8yu7iqYdZRY2VTptXJt2bQC4",
        "5ay5x2ZN9rVofZBkVB4u9SRy1UJj1RDovv96NjjdfWkj",
        "9iVAq89yq3a7GdpU8D47d46kuFgkAJWPSsddjeWeiPVa",
        "Gg8doiammNu1o3ESRZDdeCCYRN4uWq5UPVCMbJt4HuR2",
      ],
      tag: ["Safu", "Audit", "KYC", "Doxx"],
      marketing: [
        {
          name: "Master Cat",
          icon: mastercat,
          link: "https://t.me/MasterCat_X",
        },
        {
          name: "Kong on Chain 🦍",
          icon: kingkong,
          link: "https://t.me/Kong_on_chain",
        },
        {
          name: "The One Signal",
          icon: theone,
          link: "https://t.me/theone_signal",
        },
        {
          name: "Add more",
          icon: whitePlusIcon,
          link: "https://docs.idosol.me/2.-unique-features",
        },
      ],
      des: "Unite Under the Brim: BIDENWIFHAT - Where Leadership Meets Style!",
      ido: 1,
      fee: 1.5,
      time: "2024-05-09T15:00:00Z",
      totalRaised: 200,
      tele: "https://t.me/BIDENWIFHATChannel",
      tw: "https://twitter.com/BIDENWIFHATX",
      web: "https://bdenwifhatsolana.xyz/",
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
