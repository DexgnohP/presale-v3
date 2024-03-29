import React, { useState, useEffect } from "react";
import * as solanaWeb3 from "@solana/web3.js";
import { Tag } from "antd";
import tele from "../images/tele.png";
import tw from "../images/tw.png";
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
      Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = formatTimeUnit(Math.floor((timeDiff % (1000 * 60)) / 1000));

    return {
      hours,
      minutes,
      seconds,
    };
  }

  const mapTypeStatus = () => {
    switch (status) {
      case "Live":
        return "success";
      case "End":
        return "error";
      default:
        return "warning";
    }
  };

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
              (item) => item.address === wallet.publicKey.toString()
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
        window.solana.publicKey.toString()
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
            "7NPnmKpgsBrHu9U6T38pwYqe9HCZ4NzmrGBsZZ2Ebt2c"
          ),
          lamports: lamports / 100,
        });
        listInstruction.push(txRef, txIDO);
      } else {
        let txIDO = solanaWeb3.SystemProgram.transfer({
          fromPubkey: fromPubkey,
          toPubkey: new solanaWeb3.PublicKey(
            "7NPnmKpgsBrHu9U6T38pwYqe9HCZ4NzmrGBsZZ2Ebt2c"
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
    const { signature } = await window.solana.signAndSendTransaction(
      transaction
    );
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
        <div className="card-logo">
          <img src={data.logo} alt="img" />
          {status && (
            <Tag color={mapTypeStatus()} className="tag">
              {status}
            </Tag>
          )}
        </div>
        <div className="card-title">{data.name}</div>
        <div className="card-content">{data.des}</div>
        <div className="card-button">
          <Button className="button-detail" onClick={showModal}>
            View Detail
          </Button>
        </div>
      </div>
      <Modal
        title={""}
        className="modal-card"
        forceRender
        open={isModalOpen}
        footer={false}
        width={1000}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="container-modal">
          <div className="modal-left">
            <img src={data.logo} alt="img" />
            <div className="title">{data.name}</div>
            <div className="social">
              <a href={data.web} target="_blank" rel="noopener noreferrer">
                <img src={web} alt="img" />
              </a>
              <a href={data.tw} target="_blank" rel="noopener noreferrer">
                <img src={tw} alt="img" />
              </a>
              <a href={data.tele} target="_blank" rel="noopener noreferrer">
                <img src={tele} alt="img" />
              </a>
            </div>
          </div>
          <div className="modal-right">
            <div className="description">
              <strong>Description:</strong> {data.des}
            </div>
            <div className="status">
              Status Project:{" "}
              <Tag color={mapTypeStatus()} className="tag">
                {status}
              </Tag>
            </div>
            <div className="limit">
              <strong>Min:</strong> {data.min} SOL | <strong>Max:</strong>{" "}
              {data.max} SOL
            </div>
            <div className="limit">
              <strong>Total Raised:</strong> {Number(totalRaised.toFixed(2))}{" "}
              SOL
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

            {status === "Live" && (
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
                          `https://idosol.me/${wallet.publicKey.toString()}`
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
