import React from 'react'
import { Button } from 'antd';
import background from "./images/background.jpg"
import logo from "./images/logo.png"
import { List } from 'antd';
import Card from './components/card';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function MyComponent() {
    const data = [
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
        //     contractPresale: "GJK3vtLifwNNHwcsrnGXfN6CiyswVZh2u9nzQvuGZYba",
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
