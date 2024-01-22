import React, { useState, useEffect } from "react";
import * as solanaWeb3 from "@solana/web3.js";
import tele from "../images/tele.png";
import linkIcon from "../images/link-icon.png";
import tw from "../images/tw.png";
import safuIcon from "../images/icons/safu-icon.png";
import auditIcon from "../images/icons/audit-icon.png";
import kycIcon from "../images/icons/kyc-icon.png";
import doxxIcon from "../images/icons/doxx-icon.png";
import liveIcon from "../images/icons/live-icon.png";
import endIcon from "../images/icons/end-icon.png";
import comingIcon from "../images/icons/coming-icon.png";
import { ArrowRightOutlined, DownOutlined } from "@ant-design/icons";
import { ref, set, push, child, get } from "firebase/database";
import web from "../images/web.png";
import { Button, Modal, InputNumber, notification } from "antd";
import * as buffer from "buffer";
import { database } from "../firebase";
import { useWallet } from "@solana/wallet-adapter-react";

window.Buffer = buffer.Buffer;

export default function Card({ data }) {
  const referral = window.location.pathname.replace(/\//g, "");
  const wallet = useWallet();
  const lamports_per_sol = solanaWeb3.LAMPORTS_PER_SOL;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState();
  const [isBuyFinally, setIsBuyFinally] = useState(false);
  const [valueSol, setValueSol] = useState("");
  const [status, setStatus] = useState();
  const [totalRaised, setTotalRaised] = useState(0);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (Object.keys(data).length) {
      const databaseRef = ref(database);
      get(child(databaseRef, data.table)).then((snapshot) => {
        if (snapshot.exists()) {
          let total = 0;
          let end = snapshot.val().end || false;
          let listTX = snapshot.val().tx
            ? Object.values(snapshot.val().tx)
            : [];
          listTX.forEach((item) => {
            if (Object.keys(item).length) total += item.sol;
          });
          setTotalRaised(total);
          if (end || total > data.totalRaised) {
            setStatus("End");
          } else {
            mapStatus();
          }
        } else {
          mapStatus();
        }
      });
    }
  }, [data]);

  const mapStatus = () => {
    const intervalId = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(newTimeRemaining);
      if (
        newTimeRemaining.hours === 0 &&
        newTimeRemaining.minutes === 0 &&
        newTimeRemaining.seconds === 0
      ) {
        setStatus("Live");
        clearInterval(intervalId);
      } else {
        if (status !== "Comming") setStatus("Coming");
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  };

  useEffect(() => {
    if (status === "Live") {
      const intervalIdEnd = setInterval(() => {
        const databaseRef = ref(database);
        get(child(databaseRef, data.table))
          .then((snapshot) => {
            if (snapshot.exists()) {
              let end = snapshot.val().end || false;
              let total = 0;
              let listTX = snapshot.val().tx
                ? Object.values(snapshot.val().tx)
                : [];
              listTX.forEach((item) => {
                if (Object.keys(item).length) total += item.sol;
              });
              setTotalRaised(total);
              if (end || total > data.totalRaised) {
                clearInterval(intervalIdEnd);
                setStatus("End");
              }
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }, 10000);
      return () => {
        clearInterval(intervalIdEnd);
      };
    }
  }, [status]);

  function formatTimeUnit(value) {
    return value < 10 ? `0${value}` : value;
  }

  function calculateTimeRemaining() {
    const currentLocalDate = new Date();
    const targetUtcDate = new Date(data.time);

    const timeDiff = targetUtcDate.getTime() - currentLocalDate.getTime();

    if (timeDiff <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const hours = formatTimeUnit(Math.floor(timeDiff / (1000 * 60 * 60)));
    const minutes = formatTimeUnit(
      Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const seconds = formatTimeUnit(Math.floor((timeDiff % (1000 * 60)) / 1000));

    return {
      hours,
      minutes,
      seconds,
    };
  }

  const projectStatus = [
    { name: "Safu", icon: safuIcon },
    { name: "Audit", icon: auditIcon },
    { name: "Doxx", icon: doxxIcon },
    { name: "KYC", icon: kycIcon },
    { name: "Live", icon: liveIcon },
    { name: "End", icon: endIcon },
    { name: "Coming", icon: comingIcon },
  ];

  async function sendButtonClick() {
    const receiverAddress = data.contractPresale;
    await signInTransactionAndSendMoney(receiverAddress);
  }

  function writeUserData(address, sol) {
    const databaseRef = ref(database, `${data.table}/tx`);
    const newObjectRef = push(databaseRef);
    const currentDate = new Date();
    const timezoneOffsetMinutes = currentDate.getTimezoneOffset();
    const timezoneOffsetHours = timezoneOffsetMinutes / 60;
    const timezoneOffsetString =
      (timezoneOffsetHours >= 0 ? "+" : "") +
      Math.abs(timezoneOffsetHours).toString().padStart(2, "0") +
      ":00";
    const fullTimestamp =
      currentDate.toLocaleString() + " UTC" + timezoneOffsetString;
    set(newObjectRef, {
      address: address,
      sol: sol,
      time: fullTimestamp,
    });
  }

  const send = () => {
    if (!wallet.connected) {
      notification.error({
        message: `Error`,
        description: `Please Conenct Phantom Wallet`,
        placement: "topRight",
      });
    } else {
      const databaseRef = ref(database);
      get(child(databaseRef, data.table))
        .then((snapshot) => {
          let listTX = snapshot.val()?.tx
            ? Object.values(snapshot.val().tx)
            : [];
          if (
            listTX.findIndex(
              (item) => item.address === wallet.publicKey.toString(),
            ) >= 0
          ) {
            notification.error({
              message: `Error`,
              description: `This wallet has already participated in the Presale`,
              placement: "topRight",
            });
          } else if (!valueSol) {
            notification.error({
              message: `Error`,
              description: `Please Enter Quantity Solana`,
              placement: "topRight",
            });
          } else {
            sendButtonClick();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  function isSolanaWalletAddress(address) {
    try {
      const _ = new solanaWeb3.PublicKey(address);
      return true;
    } catch (error) {
      return false;
    }
  }

  async function signInTransactionAndSendMoney(destPubkeyStr) {
    setIsBuyFinally(true);
    const network = import.meta.env.VITE_RPC_ENDPOINT;
    const connection = new solanaWeb3.Connection(network);
    try {
      const lamports = valueSol * lamports_per_sol;

      const destPubkey = new solanaWeb3.PublicKey(destPubkeyStr);
      const fromPubkey = new solanaWeb3.PublicKey(
        window.solana.publicKey.toString(),
      );
      let listInstruction = [];
      const instruction = solanaWeb3.SystemProgram.transfer({
        fromPubkey: fromPubkey,
        toPubkey: destPubkey,
        lamports: (lamports * 97) / 100,
      });
      listInstruction.push(instruction);
      if (isSolanaWalletAddress(referral)) {
        let txRef = solanaWeb3.SystemProgram.transfer({
          fromPubkey: fromPubkey,
          toPubkey: new solanaWeb3.PublicKey(referral),
          lamports: (lamports * 2) / 100,
        });
        let txIDO = solanaWeb3.SystemProgram.transfer({
          fromPubkey: fromPubkey,
          toPubkey: new solanaWeb3.PublicKey(
            "7NPnmKpgsBrHu9U6T38pwYqe9HCZ4NzmrGBsZZ2Ebt2c",
          ),
          lamports: lamports / 100,
        });
        listInstruction.push(txRef, txIDO);
      } else {
        let txIDO = solanaWeb3.SystemProgram.transfer({
          fromPubkey: fromPubkey,
          toPubkey: new solanaWeb3.PublicKey(
            "7NPnmKpgsBrHu9U6T38pwYqe9HCZ4NzmrGBsZZ2Ebt2c",
          ),
          lamports: (lamports * 3) / 100,
        });
        listInstruction.push(txIDO);
      }

      let trans = await setWalletTransaction(listInstruction, connection);
      let sign = await signAndSendTransaction(trans);

      let timeOutStatus = setInterval(async () => {
        let result = await getConfirmation(connection, sign);
        if (result) {
          if (result === "confirmed") {
            writeUserData(window.solana.publicKey.toString(), valueSol);
            notification.success({
              message: `Successful`,
              description: `Transaction successful!`,
              placement: "topRight",
            });
            clearInterval(timeOutStatus);
          } else {
            notification.error({
              message: `Error`,
              description: `Transaction failed!`,
              placement: "topRight",
            });
          }
          setIsBuyFinally(false);
        }
      }, 5000);
    } catch (e) {
      notification.error({
        message: `Error`,
        description: `Transaction failed!`,
        placement: "topRight",
      });
      setIsBuyFinally(false);
    }
  }

  async function setWalletTransaction(instruction, connection) {
    const transaction = new solanaWeb3.Transaction();
    instruction.forEach((item) => {
      transaction.add(item);
    });
    transaction.feePayer = window.solana.publicKey;
    const blockhash = await connection.getRecentBlockhash("finalized");
    transaction.recentBlockhash = blockhash.blockhash;
    return transaction;
  }

  async function signAndSendTransaction(transaction) {
    // Sign transaction, broadcast, and confirm
    const { signature } =
      await window.solana.signAndSendTransaction(transaction);
    return signature;
  }

  const getConfirmation = async (connection, tx) => {
    const result = await connection.getSignatureStatus(tx, {
      searchTransactionHistory: true,
    });
    return result.value?.confirmationStatus;
  };

  const changeSol = (e) => {
    if (e > data.max) {
      setValueSol(data.max);
    } else if (e < data.min) {
      setValueSol(data.min);
    } else {
      setValueSol(e);
    }
  };

  return (
    <>
      <div className="card-item">
        <div className="card-logo h-full justify-between gap-2">
          <div className="h-full flex-col items-center gap-2 md:flex md:flex-row">
            {status && (
              <div className="absolute right-4 top-2 mt-0 flex h-7 w-[76px] items-center justify-center gap-1 rounded-[20px] border border-[#0CEEAC] px-3 py-1">
                <img src={liveIcon} alt="img" />
                <span>Live</span>
              </div>
            )}
            <img src={data.logo} alt="img" />

            {/* project status buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-2 md:mt-0">
              <div className="flex h-7 w-[76px] items-center justify-center gap-1 rounded-[20px] border border-[#88FF7D] px-3 py-1">
                <img src={safuIcon} alt="img" />
                <span>Safu</span>
              </div>
              <div className="flex h-7 w-[76px] items-center justify-center gap-1 rounded-[20px] border border-[#5CE2FF] px-3 py-1">
                <img src={auditIcon} alt="img" />
                <span>Audit</span>
              </div>
              <div className="flex h-7 w-[76px] items-center justify-center gap-1 rounded-[20px] border border-[#F9E212] px-3 py-1">
                <img src={doxxIcon} alt="img" />
                <span>Doxx</span>
              </div>
            </div>
          </div>
        </div>
        <Button className="mt-4 flex h-7 items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme p-[1px] font-medium lg:hidden">
          <span className="ml-2">Marketing By</span>
          <DownOutlined className="mr-2" />
        </Button>
        <div className="card-title">{data.name}</div>
        <div className="card-content">{data.des}</div>
        <div className="mt-8 flex items-center lg:justify-between justify-center">
          <Button className="hidden lg:flex h-7 items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme p-[1px] font-medium">
            <span className="ml-2">Marketing By</span>
            <DownOutlined className="mr-2" />
          </Button>
          <Button
            className="flex h-11 items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme p-[1px]"
            onClick={showModal}
          >
            <div className="flex w-full justify-between rounded-full bg-gray-900 p-[10px] font-medium text-white">
              <span className="ml-2">View Detail</span>
              <ArrowRightOutlined className="mx-2" />
            </div>
          </Button>
        </div>
      </div>
      <Modal
        title={""}
        className="modal-card rounded border border-purple-presale-theme pb-0"
        forceRender
        open={isModalOpen}
        footer={false}
        width={1000}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="container-modal">
          <div className="modal-left">
            <img src={data.logo} alt="img" className="w-1/4"/>
            <div className="text-2xl lg:text-4xl mt-2 font-bold">{data.name}</div>
            {/* project icons */}
            <div className="mt-2 flex justify-center gap-2">
              <div className="flex h-7 w-[76px] items-center justify-center gap-1 rounded-[20px] border border-[#88FF7D] px-3 py-1">
                <img src={safuIcon} alt="img" />
                <span>Safu</span>
              </div>
              <div className="flex h-7 w-[76px] items-center justify-center gap-1 rounded-[20px] border border-[#5CE2FF] px-3 py-1">
                <img src={auditIcon} alt="img" />
                <span>Audit</span>
              </div>
              <div className="flex h-7 w-[76px] items-center justify-center gap-1 rounded-[20px] border border-[#F9E212] px-3 py-1">
                <img src={doxxIcon} alt="img" />
                <span>Doxx</span>
              </div>
            </div>
            {/* social network icons */}
            <div className="social">
              <a href={data.tw} target="_blank" rel="noopener noreferrer">
                <img src={tw} alt="img" />
              </a>
              <a href={data.tele} target="_blank" rel="noopener noreferrer">
                <img src={tele} alt="img" />
              </a>
              <a href={data.web} target="_blank" rel="noopener noreferrer">
                <img src={web} alt="img" />
              </a>
              <a href={data.tele} target="_blank" rel="noopener noreferrer">
                <img src={linkIcon} alt="img" />
              </a>
            </div>
          </div>
          <div className="border-b-2 my-8 lg:hidden"></div>
          <div className="modal-right flex-col justify-between gap-2 text-center lg:text-start">
            <div className="description">
              <strong className="text-[#60FF97]">Description:</strong>
              <br></br> {data.des}
            </div>
            <div className="status flex-col flex lg:flex-row gap-2 lg:gap-4 items-center">
              <span className="text-[#60FF97]">Status Project:</span>
              <div className="mt-0 flex h-7 w-[76px] items-center justify-center gap-1 rounded-[20px] border border-[#0CEEAC] px-3 py-1">
                <img src={liveIcon} alt="img" />
                <span>Live</span>
              </div>
            </div>
            <div className="limit">
              <strong className="text-[#60FF97]">Min:</strong> {data.min} SOL |{" "}
              <strong className="text-[#60FF97]">Max:</strong> {data.max} SOL
            </div>
            <div className="limit">
              <strong className="text-[#60FF97]">Total Raised:</strong>{" "}
              {Number(totalRaised.toFixed(2))} SOL
            </div>
            <div className="inline-flex h-12 items-center justify-between rounded-md border border-zinc-800 bg-neutral-900 px-4 py-3">
              <div className="font-['Inter'] text-base font-normal leading-normal text-zinc-600">
                Ex: 1 SOL
              </div>
              <div className="inline-flex flex-col items-start justify-start rounded-[20px] bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme px-2 py-0.5">
                <div className="font-['Inter'] text-xs font-semibold leading-[18px] text-black">
                  Buy Presale
                </div>
              </div>
            </div>
            {status === "Coming" && (
              <div className="clock-container">
                <div className="clock-col">
                  <p className="clock-hours clock-timer">
                    {timeRemaining?.hours}
                  </p>
                  <p className="clock-label">Hours</p>
                </div>
                <div className="clock-col">
                  <p className="clock-minutes clock-timer">
                    {timeRemaining?.minutes}
                  </p>
                  <p className="clock-label">Minutes</p>
                </div>
                <div className="clock-col">
                  <p className="clock-seconds clock-timer">
                    {timeRemaining?.seconds}
                  </p>
                  <p className="clock-label">Seconds</p>
                </div>
              </div>
            )}
            {/* force to return false since the figma design doesn't include these buttons */}
            {status === "Live" && false && (
              <>
                <div className="buy-presale">
                  <InputNumber
                    className="input-sol"
                    min={data.min}
                    max={data.max}
                    value={valueSol}
                    onChange={changeSol}
                  />
                  <Button
                    className="button-detail"
                    style={{ marginLeft: "10px" }}
                    onClick={send}
                    loading={isBuyFinally}
                  >
                    Buy Presale
                  </Button>
                </div>
                <p className="limit" style={{ marginTop: "2rem" }}>
                  <Button
                    className="button-detail"
                    onClick={() => {
                      if (wallet.connected) {
                        navigator.clipboard.writeText(
                          `https://idosol.me/${wallet.publicKey.toString()}`,
                        );
                        notification.success({
                          message: `Successful`,
                          description: `Coppied successful!`,
                          placement: "topRight",
                        });
                      } else {
                        notification.error({
                          message: `Error`,
                          description: `Please Connect Wallet!`,
                          placement: "topRight",
                        });
                      }
                    }}
                  >
                    Invite Link
                  </Button>
                </p>
              </>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
