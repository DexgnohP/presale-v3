import React from 'react'
import { Button } from 'antd';
import background from "./images/background.jpg"
import logo from "./images/logo.png"
import { List } from 'antd';
import maple from "./images/maple.png"
import fifa from "./images/fifa.png"
import Card from './components/card';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

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
        <div className='container'>
            <img src={background} className='background' alt='img' />
            <div className='header'>
                <div className='nav-left'>
                    <img className='logo' src={logo} alt='img' />
                    <span>IDOSOL</span>
                </div>
                {/* <Button id='connectButton' className='button-connect' onClick={connect}>Connect Wallet</Button> */}
                <WalletMultiButton  className='button-connect'/>
            </div>
            <div className='content'>
                <div className='title'>List token Lauchpad</div>
                {data.length?
                 <List style={{ marginTop: "30px" }}
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
             />:null}
               
            </div>
            {data.length > 6 && <div className='section-see'>
                <Button className='button-see'>See More ...</Button>
            </div>}

        </div>
    )
}
