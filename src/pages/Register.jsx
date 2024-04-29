import React, { useState } from 'react';

import background from "../images/background.png";
import { Button, Form, Input, notification } from 'antd';
import { CountrySelect } from '@atlaskit/select';
import { Table } from 'antd';
import * as solanaWeb3 from "@solana/web3.js";

function Register() {
    const [page, setPage] = useState(0)
    const [total, setTotal] = useState(3)
    const [loadingSubmit, setLoadingSubmit] = useState(false)
    const [loadingTable, setLoadingTable] = useState(false)
    const [loadingSearch, setLoadingSearch] = useState(false)
    const [listData, setListData] = useState([])
    const [inputRef, setInputRef] = useState("")
    const [form] = Form.useForm();
    const columns = [
        {
            title: 'No',
            dataIndex: 'key',
            key: 'key',
            render: (text) => <a>{page * 10 + text}</a>,
        },
        {
            title: 'Wallet',
            dataIndex: 'wallet',
            key: 'wallet',
        },
        {
            title: 'Refferal Code',
            dataIndex: 'ref',
            key: 'ref',
        },
        {
            title: 'Time Submit',
            dataIndex: 'time',
            key: 'time',
        },
    ];

    function isSolanaWalletAddress(address) {
        try {
            const _ = new solanaWeb3.PublicKey(address);
            return true;
        } catch (error) {
            return false;
        }
    }

    const seacrhRef = async (ref, pg, sz) => {

        setLoadingTable(true)


        await fetch(
            `https://zofrlhlhqd.execute-api.ap-southeast-1.amazonaws.com/api/white-list/page?ref=${ref}&page=${pg + 1}&size=${sz}`,
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((dt) => {
                if (dt?.contents.length) {
                    setTotal(dt.totalItem)
                    setListData(dt.contents.map((item, index) => ({
                        key: index + 1,
                        wallet: item.wallet,
                        ref: item.ref,
                        time: item.timeSubmitStr
                    })))
                } else {
                    setListData([])
                    setTotal(0)
                }
            })
            .catch(() => {
                setListData([])
                setTotal(0)
            }).finally(() => {
                setLoadingTable(false)
            });
    }

    const submitForm = async (value) => {
        if (!isSolanaWalletAddress(value.wallet)) {
            notification.error({
                message: `Error`,
                description: "This is not Solana wallet!!!",
                placement: "topRight",
            });
            return;
        }
        if (!isSolanaWalletAddress(value.country.name === "Vietnam")) {
            notification.error({
                message: `Error`,
                description: "This registration form is not valid for use in Vietnam and does not accept users from Vietnam!!!",
                placement: "topRight",
            });
            return;
        }
        setLoadingSubmit(true)
        const url = "https://zofrlhlhqd.execute-api.ap-southeast-1.amazonaws.com/api/white-list/submit";
        const data = {
            ref: value.ref,
            wallet: value.wallet,
            firstName: value.firstName,
            lastName: value.lastName,
            telegram: value.telegram,
            country: value.country.name
        };

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    setInputRef(value.ref)
                    seacrhRef(value.ref, 0, 10)
                    setPage(0)
                    form.resetFields()
                    notification.success({
                        message: `Successful`,
                        description: `Submitted`,
                        placement: "topRight",
                    });
                } else {
                    notification.error({
                        message: `Error`,
                        description: data.message,
                        placement: "topRight",
                    });
                }
            })
            .catch((error) => {
                notification.error({
                    message: `Error`,
                    description: error,
                    placement: "topRight",
                });
            })
            .finally(() => {
                setLoadingSubmit(false)
            });
    }


    return (
        <div className='container-register'>
            <img className='bg-register' src={background} />
            <div className="text-center font-syne text-2xl font-extrabold uppercase text-white md:text-[50px]" style={{ marginTop: "40px" }}>
                <span className="shadow-cyan-presale-theme drop-shadow-[2px_2px_var(--tw-shadow-color)]">
                    REGISTER{" "}
                </span>
                <span className="shadow-purple-presale-theme drop-shadow-[2px_2px_var(--tw-shadow-color)]">
                    FORM
                </span>
            </div>
            <Form form={form} style={{ marginTop: "30px" }} onFinish={submitForm}>
                <Form.Item >
                    <span style={{ zIndex: "12312", color: "white", margin: "0 20%" }}>Note: This registration form is not valid for use in Vietnam and does not accept users from Vietnam</span>
                </Form.Item>
                <Form.Item className='item-register' name={"firstName"} rules={[
                    {
                        required: true,
                        message: 'Please input your first name!',
                    },
                ]}>
                    <Input
                        placeholder="What is your first name?"
                        className="mt-8 h-[35px] w-full border-none bg-black text-center text-white placeholder-gray-400 shadow-sm shadow-cyan-presale-theme hover:bg-black focus:bg-black focus:shadow-cyan-presale-theme md:w-1/2 lg:h-[40px]"
                    />
                </Form.Item>
                <Form.Item className='item-register' name={"lastName"} rules={[
                    {
                        required: true,
                        message: 'Please input your last name!',
                    },
                ]}>
                    <Input
                        placeholder="What is your last name?"
                        className="mt-8 h-[35px] w-full border-none bg-black text-center text-white placeholder-gray-400 shadow-sm shadow-cyan-presale-theme hover:bg-black focus:bg-black focus:shadow-cyan-presale-theme md:w-1/2 lg:h-[40px]"
                    />
                </Form.Item>
                <Form.Item className='item-register' name={"telegram"} rules={[
                    {
                        required: true,
                        message: 'Please input your telegram username!',
                    },
                ]}>
                    <Input
                        placeholder="What is your telegram username?"
                        className="mt-8 h-[35px] w-full border-none bg-black text-center text-white placeholder-gray-400 shadow-sm shadow-cyan-presale-theme hover:bg-black focus:bg-black focus:shadow-cyan-presale-theme md:w-1/2 lg:h-[40px]"
                    />
                </Form.Item>
                <Form.Item className='item-register' name={"country"} rules={[
                    {
                        required: true,
                        message: 'Please input your country!',
                    },
                ]}>
                    <CountrySelect
                        appearance="default"
                        className='country-select w-[100%] md:w-[50%]'
                        testId="name"
                        formatOptionLabel={"name"}
                        placeholder="Which country do you come from?"
                    />

                </Form.Item>

                <Form.Item className='item-register' name={"wallet"} rules={[
                    {
                        required: true,
                        message: 'Please input your Solana wallet address!',
                    },
                ]}>
                    <Input
                        placeholder="What is your Solana wallet address?"
                        className="mt-8 h-[35px] w-full border-none bg-black text-center text-white placeholder-gray-400 shadow-sm shadow-cyan-presale-theme hover:bg-black focus:bg-black focus:shadow-cyan-presale-theme md:w-1/2 lg:h-[40px]"
                    />
                </Form.Item>
                <Form.Item className='item-register' name={"ref"} rules={[
                    {
                        required: true,
                        message: 'Please input your Referral code!',
                    },
                ]}>
                    <Input
                        placeholder="Referral code"
                        className="mt-8 h-[35px] w-full border-none bg-black text-center text-white placeholder-gray-400 shadow-sm shadow-cyan-presale-theme hover:bg-black focus:bg-black focus:shadow-cyan-presale-theme md:w-1/2 "
                    />
                </Form.Item>
                <Button
                    htmlType="submit"
                    style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        border: "0",
                        minWidth: "100px",
                        padding: "20px 60px",
                        marginBottom: "50px"
                    }}
                    loading={loadingSubmit}
                    className="top-[2rem] flex-col items-center justify-center rounded-[20px] !bg-gradient-to-r !from-cyan-presale-theme !to-purple-presale-theme  font-['Inter'] text-xs font-semibold leading-[18px] !text-black hover:!text-white"
                >
                    {loadingSubmit ? "" : "Submit"}
                </Button>
            </Form>
            <div className="text-center font-syne  font-extrabold uppercase text-white md:text-[40px]" >
                <span className="shadow-cyan-presale-theme drop-shadow-[2px_2px_var(--tw-shadow-color)]">
                    TABLE{" "}
                </span>
                <span className="shadow-purple-presale-theme drop-shadow-[2px_2px_var(--tw-shadow-color)]">
                    REFFERAL
                </span>
            </div>
            <div style={{ marginTop: "20px", marginBottom: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Input
                    value={inputRef}
                    onChange={(e) => {
                        setInputRef(e.target.value)
                    }}
                    placeholder="Referral code"
                    className=" w-[200px] border-none bg-black text-center text-white placeholder-gray-400 shadow-sm shadow-cyan-presale-theme hover:bg-black focus:bg-black focus:shadow-cyan-presale-theme"
                />
                <Button
                    onClick={() => {
                        seacrhRef(inputRef, 0, 10)
                        setPage(0)
                    }}
                    style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        border: "0",
                        minWidth: "100px",
                        marginLeft: "10px",
                        padding: "15px 30px",
                    }}
                    loading={loadingSearch}
                    className="flex-col items-center justify-center rounded-[20px] !bg-gradient-to-r !from-cyan-presale-theme !to-purple-presale-theme  font-['Inter'] text-xs font-semibold leading-[18px] !text-black hover:!text-white"
                >
                    {loadingSearch ? "" : "Search"}
                </Button>
            </div>
            <Table style={{ margin: "0 50px", overflow: "scroll" }} pagination={{
                pageSize: 10,
                current: page + 1,
                total: total,
                onChange: (e) => {
                    seacrhRef(inputRef, e - 1, 10)
                    setPage(e - 1)
                },
                position: ["bottomCenter"],
            }} columns={columns} dataSource={listData} loading={loadingTable} rowKey={"key"} />
        </div>
    );
}

export default Register;