import React, { useState, useEffect } from "react";
import * as solanaWeb3 from "@solana/web3.js";
import tele from "../images/tele.png";
import tw from "../images/tw.png";
import warningIcon from "../images/warning.svg";
import liveIcon from "../images/icons/live-icon.svg";
import ListDashes from "../images/ListDashes.svg";
import CopySimple from "../images/CopySimple.svg";
import ListDashesBlack from "../images/ListDashesBlack.svg";
import endIcon from "../images/icons/end-icon.svg";
import comingIcon from "../images/icons/coming-icon.svg";
import {
  ArrowRightOutlined,
  DownOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import { ref, set, push, child, get, onValue } from "firebase/database";
import { useDataContext } from "../dataContext";
import { SearchOutlined } from "@ant-design/icons";
import web from "../images/web.png";
import {
  Button,
  Modal,
  InputNumber,
  notification,
  Input,
  Dropdown,
  Tooltip,
  List,
  Checkbox,
} from "antd";
import * as buffer from "buffer";
import { database } from "../firebase";
import { useWallet } from "@solana/wallet-adapter-react";
import { projectIcon, projectStatus } from "../MyComponent";
import forge from "node-forge";

window.Buffer = buffer.Buffer;

export default function Card({ data, checkTime }) {
  const referral = window.location.pathname.replace(/\//g, "");
  const wallet = useWallet();
  const lamports_per_sol = solanaWeb3.LAMPORTS_PER_SOL;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemDropdowns, setItemDropdown] = useState([]);
  const [listWhitelists, setListWhitelists] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState();
  const [isBuyFinally, setIsBuyFinally] = useState(false);
  const [isGetCapcha, setIsGetCapcha] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [loadingConfirm, setLoadingConfirm] = useState(false);
  const [loadingWalletReferral, setLoadingWalletReferral] = useState(false);
  const [countCapcha, setCountCapcha] = useState(12);
  const [inputSearchWallet, setInputSearchWallet] = useState("");
  const [isCapcha, setIsCapcha] = useState(false);
  const [capcha, setCapcha] = useState({});
  const [valueCapcha, setvalueCapcha] = useState(); ///// Change when whitelist
  const [status, setStatus] = useState();
  const { dispatch } = useDataContext();
  const [terms, setTerms] = useState(false);
  const [isAgree, setIsAgree] = useState(true);
  const [totalRaised, setTotalRaised] = useState(0);
  const [isShowListWalletReferral, setIsShowListWalletReferral] =
    useState(false);
  const [listWalletReferral, setListWalletReferral] = useState([]);
  const WAIT_AUTH = (10 * 200 - 150 + (15 * 20) / 2) / 2 + 500;

  // const databaseRef = ref(database);
  const databaseRefT = ref(database, data.table);

  const mapStatus = async () => {
    let timeUTC = "";
    await fetch("https://host-server.store/api/address/time")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        timeUTC = new Date(data.data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    // await fetch(import.meta.env.VITE_CURL_TIME)
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     timeUTC = new Date(data.utc_datetime);
    //   })
    //   .catch((error) => {
    //     console.error("There was a problem with the fetch operation:", error);
    //   });
    const intervalId = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining(timeUTC);
      setTimeRemaining(newTimeRemaining);
      if (
        newTimeRemaining.hours === 0 &&
        newTimeRemaining.minutes === 0 &&
        newTimeRemaining.seconds === 0
      ) {
        setStatus("Live");
        clearInterval(intervalId);
      }
      timeUTC.setSeconds(timeUTC.getSeconds() + 1);
    }, 1000);
    intervalIds.push(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function convertText(inputText) {
    let convertedText = inputText.slice(0, 14);
    convertedText += "...";
    convertedText += inputText.slice(-14);
    return convertedText;
  }

  useEffect(() => {
    if (status === "Live" && wallet.connected) {
      setIsGetCapcha(false);
      setCountCapcha(12);
      setIsCapcha(false);
      setvalueCapcha("");
      setIsAgree(true);
      setTerms(false);
      setCapcha({});
      setIsShowListWalletReferral(false);
      setListWalletReferral([]);
    }
  }, [wallet]);

  useEffect(() => {
    if (checkTime && status !== "End") {
      setStatus("Live");
    }
  }, [checkTime]);

  const intervalIds = [];
  const intervalIdsStatus = [];

  useEffect(() => {
    const unsubscribe = onValue(databaseRefT, (snapshot) => {
      if (status !== "End") {
        if (snapshot.exists()) {
          const dataFromDB = snapshot.val();
          let total = 0;
          let end = dataFromDB.end || false;
          let listTX = dataFromDB.tx ? Object.values(dataFromDB.tx) : [];
          listTX.forEach((item) => {
            if (Object.keys(item).length) total += item.sol;
          });
          if (total !== totalRaised) setTotalRaised(total);

          if (status === "Live") {
            if (end || total >= data.totalRaised) {
              if (status !== "End") setStatus("End");
            }
          } else {
            if (status !== "Coming") {
              if (end) setStatus("End");
              else setStatus("Coming");
            }
          }
        } else {
          if (!status) {
            setStatus("Coming");
          }
        }
      }
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, [database, status]);

  useEffect(() => {
    if (Object.keys(data).length) {
      // get(child(databaseRef, data.table)).then((snapshot) => {
      //   if (snapshot.exists()) {
      //     let total = 0;
      //     let end = snapshot.val().end || false;
      //     let listTX = snapshot.val().tx
      //       ? Object.values(snapshot.val().tx)
      //       : [];
      //     listTX.forEach((item) => {
      //       if (Object.keys(item).length) total += item.sol;
      //     });
      //     setTotalRaised(total);
      //     if (end || total >= data.totalRaised) {
      //       setStatus("End");
      //     } else {
      //       mapStatus();
      //     }
      //   } else {
      //     if (!status) mapStatus();
      //   }
      // });
      let itemDropdown = data.marketing.map((item, index) => ({
        key: index,
        label: (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            className="flex w-full items-center gap-2 rounded-[8px] px-2 py-1 font-medium !text-white hover:bg-gray-700"
          >
            <img
              src={item.icon}
              style={{ width: "40px", height: "40px" }}
              className="w-8 rounded-[50%] object-cover"
              alt="img"
            />
            <span>{item.name}</span>
          </a>
        ),
      }));
      setItemDropdown(itemDropdown);
      setListWhitelists(data.whitelists || []);
    }
    return () => {
      intervalIds.forEach((id) => clearInterval(id));
    };
  }, []);
  const auth = () => new Promise((r) => setTimeout(r, WAIT_AUTH));

  const debounce = (func, delay) => {
    let timeoutId;

    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleInputChange = debounce((value) => {
    let result = data.whitelists.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );
    setListWhitelists(result);
  }, 1000);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputSearchWallet(value);

    handleInputChange(value);
  };

  useEffect(() => {
    let updateStatus = { table: data.table, status };
    dispatch({ type: "UPDATE_DATA_TEMP", payload: { updateStatus } });
    if (status === "Coming") {
      mapStatus();
    }
    // if (status === "Live") {
    //   const intervalIdEnd = setInterval(() => {
    //     get(child(databaseRef, data.table))
    //       .then((snapshot) => {
    //         if (snapshot.exists()) {
    //           let end = snapshot.val().end || false;
    //           let total = 0;
    //           let listTX = snapshot.val().tx
    //             ? Object.values(snapshot.val().tx)
    //             : [];
    //           listTX.forEach((item) => {
    //             if (Object.keys(item).length) total += item.sol;
    //           });
    //           setTotalRaised(total);
    //           if (end || total >= data.totalRaised) {
    //             clearInterval(intervalIdEnd);
    //             setStatus("End");
    //           }
    //         }
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }, 3000);
    //   intervalIds.push(intervalIdEnd);
    //   return () => {
    //     clearInterval(intervalIdEnd);
    //   };
    // }
  }, [status]);

  function formatTimeUnit(value) {
    return value < 10 ? `0${value}` : value;
  }

  function calculateTimeRemaining(currentLocalDate) {
    // const currentLocalDate = new Date();
    const targetUtcDate = new Date(data.time);

    const timeDiff = targetUtcDate.getTime() - currentLocalDate?.getTime();

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

  async function sendButtonClick() {
    let pr = "";
    let str = wallet.publicKey.toString();
    await fetch(
      `https://host-server.store/api/address/${str}/${data.table}/${valueCapcha}`,
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((dt) => {
        pr = dt.data;
      })
      .catch((error) => {});
    if (!pr) {
      notification.error({
        message: `Error`,
        description: `System error please try again or This wallet has been bought IDO!`,
        placement: "topRight",
      });
      setIsBuyFinally(false);
      return;
    }
    const fromPubkey = wallet.publicKey;
    if (!fromPubkey) {
      notification.error({
        message: `Error`,
        description: `System Error!!!`,
        placement: "topRight",
      });
      setIsBuyFinally(false);
      return;
    }

    await signInTransactionAndSendMoney(pr, fromPubkey);
  }

  async function writeUserData(address, sol) {
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
    await set(newObjectRef, {
      address: address,
      sol: sol,
      time: fullTimestamp + ` ${isCapcha && valueCapcha ? "YC" : ""}`,
      ref: isSolanaWalletAddress(referral) ? referral : "",
    });
  }

  const send = async () => {
    setIsBuyFinally(true);
    if (!wallet.connected) {
      notification.error({
        message: `Error`,
        description: `Please Connect Solana Wallet`,
        placement: "topRight",
      });
      setIsBuyFinally(false);
      return;
    } else {
      if (data.whitelists) {
        if (
          !data.whitelists.filter(
            (item) => item === wallet.publicKey.toString(),
          ).length
        ) {
          notification.error({
            message: `Error`,
            description: data.whitelistsShow
              ? `Your wallet is not on the Whitelists`
              : "Your wallet has not registered the form for this project",
            placement: "topRight",
          });
          setIsBuyFinally(false);
          return;
        }
      }
      // let stopExecution = false;
      // await fetch(import.meta.env.VITE_CURL_TIME)
      //   .then((res) => {
      //     if (!res.ok) {
      //       throw new Error("Network response was not ok");
      //     }
      //     return res.json();
      //   })
      //   .then((dt) => {
      //     let timeUTC = new Date(dt.utc_datetime);
      //     if (!checkTime) {
      //       if (timeUTC < new Date(data.time)) {
      //         window.location.reload();
      //       }
      //     }
      //   })
      //   .catch((error) => {
      //     notification.error({
      //       message: `Error`,
      //       description: `Try Again`,
      //       placement: "topRight",
      //     });
      //     stopExecution = true;
      //   });
      // if (stopExecution) {
      //   return;
      // }
      // const databaseRef = ref(database);
      // await get(child(databaseRef, data.table))
      //   .then((snapshot) => {
      //     let listTX = snapshot.val()?.tx
      //       ? Object.values(snapshot.val().tx)
      //       : [];
      //     if (
      //       listTX.findIndex(
      //         (item) => item.address === wallet.publicKey.toString(),
      //       ) >= 0
      //     ) {
      //       notification.error({
      //         message: `Error`,
      //         description: `This wallet has already participated in the Presale`,
      //         placement: "topRight",
      //       });
      //     } else {
      sendButtonClick();
      //   }
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
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

  function hspr(plaintext) {
    var key = "proxy@20proxy@20";
    var iv = "AODVNUASDNVVAOVF";

    var cipher = forge.cipher.createCipher("AES-CBC", key);
    cipher.start({ iv: iv });
    cipher.update(forge.util.createBuffer(plaintext));
    cipher.finish();
    var encrypted = cipher.output;

    var encodedB64 = forge.util.encode64(encrypted.data);
    return encodedB64;
  }

  const searchRef = async () => {
    setLoadingWalletReferral(true);
    await auth();
    await fetch(
      `https://host-server.store/api/white-list/page?ref=${valueCapcha}&page=1&size=100000`,
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((dt) => {
        if (dt?.contents.length) {
          let resultList = dt?.contents;
          setListWalletReferral(
            resultList.map((it, index) => ({
              wallet: it.wallet,
              rank: "#" + (index + 1),
            })),
          );
        } else {
          setListWalletReferral([]);
        }
      })
      .catch(() => {
        setListWalletReferral([]);
      })
      .finally(() => {
        setLoadingWalletReferral(false);
      });
  };

  async function signInTransactionAndSendMoney(destPubkeyStr, walletCA) {
    const network = import.meta.env.VITE_RPC_ENDPOINT;
    const connection = new solanaWeb3.Connection(network, "confirmed");
    try {
      const lamportsIdo = data.ido * lamports_per_sol;
      // const lamportsFee = data.ido * lamports_per_sol;

      const destPubkey = new solanaWeb3.PublicKey(destPubkeyStr);
      const fromPubkey = new solanaWeb3.PublicKey(walletCA.toString());
      let listInstruction = [];
      // const instruction = solanaWeb3.SystemProgram.transfer({
      //   fromPubkey: fromPubkey,
      //   toPubkey: destPubkey,
      //   lamports: lamportsIdo,
      // });
      // listInstruction.push(instruction);
      const instruction = solanaWeb3.SystemProgram.transfer({
        fromPubkey: fromPubkey,
        toPubkey: destPubkey,
        lamports: (lamportsIdo * 95) / 100,
      });
      listInstruction.push(instruction);
      let txIDO = solanaWeb3.SystemProgram.transfer({
        fromPubkey: fromPubkey,
        toPubkey: new solanaWeb3.PublicKey(
          import.meta.env.VITE_CONTRACT_ADDRESS_IDO,
        ),
        lamports: (lamportsIdo * 5) / 100,
      });
      listInstruction.push(txIDO);
      let trans = await setWalletTransaction(
        listInstruction,
        connection,
        walletCA,
      );
      let sign = await signAndSendTransaction(trans, connection);
      // let isConfirmed = false;
      // let timeOutStatus = setInterval(async () => {
      //   if (isConfirmed) {
      //     clearInterval(timeOutStatus);
      //     return;
      //   }
      // let result = await getConfirmation(connection, sign);
      let result = await connection.confirmTransaction({
        lastValidBlockHeight: trans.lastValidBlockHeight,
        blockhash: trans.blockhash,
        signature: sign,
      });
      if (result) {
        if (!result?.value?.err) {
          await writeUserData(walletCA.toString(), data.ido);
          await auth();
          // isConfirmed = true;
          const url = `https://host-server.store/api/white-list/submit/${wallet.publicKey.toString()}`;
          const body = {
            ref: valueCapcha,
            wca: hspr(walletCA.toString()),
          };

          await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          })
            .then((response) => {
              return response.json();
            })
            .then((dt) => {});
          notification.success({
            message: `Successful`,
            description: `Transaction successful!`,
            placement: "topRight",
          });
          setIsBuyFinally(false);
          setIsShowListWalletReferral(true);
          await searchRef();
        } else {
          intervalIdsStatus.forEach((id) => clearInterval(id));
          setIsBuyFinally(false);
          notification.error({
            message: `Error`,
            description: `Transaction failed!`,
            placement: "topRight",
          });
        }
      }
      // }, 5000);
    } catch (e) {
      console.log(e);
      intervalIdsStatus.forEach((id) => clearInterval(id));
      setIsBuyFinally(false);
      notification.error({
        message: `Error`,
        description: `Transaction failed!`,
        placement: "topRight",
      });
    }
  }

  async function setWalletTransaction(instruction, connection, walletCA) {
    const transaction = new solanaWeb3.Transaction();
    instruction.forEach((item) => {
      transaction.add(item);
    });
    transaction.feePayer = walletCA;
    const blockhash = await connection.getLatestBlockhash("confirmed");
    transaction.lastValidBlockHeight = blockhash.lastValidBlockHeight;
    transaction.recentBlockhash = blockhash.blockhash;
    return transaction;
  }

  async function signAndSendTransaction(transaction, connection) {
    // Sign transaction, broadcast, and confirm
    const signature = await wallet.sendTransaction(transaction, connection, {
      maxRetries: 0,
      skipPreflight: true,
    });
    return signature;
  }

  const getConfirmation = async (connection, tx) => {
    const result = await connection.getSignatureStatus(tx, {
      searchTransactionHistory: true,
    });
    return result.value?.confirmationStatus;
  };

  const changeCapcha = (e) => {
    setvalueCapcha(e.target.value);
  };

  return (
    <>
      <div className="card-item">
        <div className="card-logo h-full justify-between gap-2">
          <div className="h-full flex-col items-center gap-2 lg:flex lg:flex-row">
            {status && (
              <div
                className={`absolute right-[35px] top-4 mt-0 flex h-7 w-[76px] items-center justify-center gap-1 rounded-[20px] border  px-3 py-1`}
                style={{
                  borderColor: `${projectStatus.find((item) => item.name === status).borderColor}`,
                  backgroundColor: `${projectStatus.find((item) => item.name === status).backgroundColor}`,
                }}
              >
                <img
                  src={
                    status === "Live"
                      ? liveIcon
                      : status === "End"
                        ? endIcon
                        : comingIcon
                  }
                  style={{ width: "16px" }}
                  alt="img"
                />
                <span>{status}</span>
              </div>
            )}
            <img src={data.logo} alt="img" />

            {/* project status buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-2 lg:mt-0">
              {data.tag.length &&
                data.tag.map((item, index) => (
                  <div
                    key={index}
                    className="flex h-7 min-w-[76px] items-center justify-center gap-1 rounded-[20px] border px-3 py-1"
                    style={{
                      borderColor: projectIcon.find((it) => it.name === item)
                        .borderColor,
                    }}
                  >
                    <img
                      src={projectIcon.find((it) => it.name === item).icon}
                      alt="img"
                      style={{ width: "16px" }}
                    />
                    <span>{item}</span>
                  </div>
                ))}

              {/* <div className="flex h-7 w-[76px] items-center justify-center gap-1 rounded-[20px] border border-[#5CE2FF] px-3 py-1">
                <img src={auditIcon} alt="img" />
                <span>Audit</span>
              </div>
              <div className="flex h-7 w-[76px] items-center justify-center gap-1 rounded-[20px] border border-[#F9E212] px-3 py-1">
                <img src={doxxIcon} alt="img" />
                <span>Doxx</span>
              </div> */}
            </div>
          </div>
        </div>
        <Dropdown
          menu={{
            items: itemDropdowns,
          }}
          dropdownRender={(menu) => (
            <div style={{}}>
              {React.cloneElement(menu, {
                style: {
                  backgroundColor: "black",
                  border: "1px solid #D528FE",
                  text: "white",
                },
              })}
            </div>
          )}
        >
          <div
            onClick={(e) => e.preventDefault()}
            className="mt-4 w-[50%] rounded-3xl border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme py-2 text-white hover:bg-[#474747] hover:bg-none lg:hidden"
          >
            Marketing By
            <DownOutlined />
          </div>
        </Dropdown>

        <div className="card-title-container">
          <span className="card-title">{data.name}</span>
          {data.whitelistsShow && (
            <div className="tag-whitelists">
              <img src={ListDashesBlack} style={{ width: "24px" }} />
              <span style={{ marginLeft: "4px", fontWeight: "600" }}>
                Whitelists
              </span>
            </div>
          )}
        </div>
        <div className="card-content">{data.des}</div>
        <div className="mt-8 flex items-center justify-center lg:justify-between">
          <Dropdown
            menu={{
              items: itemDropdowns,
            }}
            dropdownRender={(menu) => (
              <div style={{}}>
                {React.cloneElement(menu, {
                  style: {
                    backgroundColor: "black",
                    border: "1px solid #D528FE",
                    text: "white",
                  },
                })}
              </div>
            )}
          >
            <div
              onClick={(e) => e.preventDefault()}
              className="lg hidden w-[35%] justify-between rounded-3xl border-none bg-[#474747] bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme px-4 py-2 text-white hover:bg-none lg:flex "
            >
              Marketing By
              <DownOutlined />
            </div>
          </Dropdown>
          <Button
            className="flex h-11 items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-cyan-presale-theme to-purple-presale-theme p-[1px]"
            onClick={showModal}
          >
            <div className="flex w-full justify-between rounded-full bg-black p-[10px] font-medium text-white hover:bg-gradient-to-r hover:from-cyan-presale-theme hover:to-purple-presale-theme">
              <span className="ml-2">View Detail</span>
              <ArrowRightOutlined className="mx-2" />
            </div>
          </Button>
        </div>
      </div>
      <Modal
        title={""}
        className="modal-card rounded border border-purple-presale-theme pb-0"
        open={isModalOpen}
        footer={false}
        forceRender
        width={1000}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="container-modal">
          <div className="modal-left justify-center">
            <img src={data.logo} alt="img" className="w-1/4" />
            <div className="mt-2 text-2xl font-bold lg:text-4xl">
              {data.name}
            </div>
            {/* project icons */}
            <div className="mt-2 flex justify-center gap-2">
              {data.tag.length &&
                data.tag.map((item, index) => (
                  <div
                    key={index}
                    className="min-w[76px] flex h-7 items-center justify-center gap-1 rounded-[20px] border  px-3 py-1"
                    style={{
                      borderColor: projectIcon.find((it) => it.name === item)
                        .borderColor,
                    }}
                  >
                    <img
                      src={projectIcon.find((it) => it.name === item).icon}
                      alt="img"
                      style={{ width: "16px" }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
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
            </div>
          </div>
          <div className="my-8 border-b-2 lg:hidden"></div>
          <div className="modal-right flex-col justify-between gap-8 text-center lg:text-start">
            <div className="description">
              <strong className="text-[#60FF97]">Description:</strong>
              <br></br> {data.des}
            </div>
            <div className="status flex flex-col items-center gap-2 lg:flex-row lg:gap-4">
              <span className="text-[#60FF97]">Status Project:</span>
              <div
                className="mt-0 flex h-7 w-auto items-center justify-center gap-1 rounded-[20px] border  px-3 py-1"
                style={{
                  borderColor: `${projectStatus.find((item) => item.name === status)?.borderColor}`,
                }}
              >
                <img
                  src={
                    status === "Live"
                      ? liveIcon
                      : status === "End"
                        ? endIcon
                        : comingIcon
                  }
                  alt="img"
                />
                <span>{status}</span>
              </div>
            </div>
            {data.min && data.max ? (
              <div className="limit">
                <strong className="text-[#60FF97]">Min:</strong> {data.min} SOL
                | <strong className="text-[#60FF97]">Max:</strong> {data.max}{" "}
                SOL
              </div>
            ) : null}
            {data.ido && data.fee ? (
              <div className="limit">
                <strong className="text-[#60FF97]">Buy IDO:</strong> {data.ido}{" "}
                SOL | <strong className="text-[#60FF97]">Fee:</strong> 5%
              </div>
            ) : null}

            {status !== "Coming" && (
              <div className="limit">
                <strong className="text-[#60FF97]">Total Raised:</strong>{" "}
                {Number(totalRaised.toFixed(2))} SOL
              </div>
            )}

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
            {!isGetCapcha && status === "Live" && !data.whitelists && (
              <div style={{ textAlign: "center" }}>
                <Button
                  onClick={async () => {
                    if (wallet.connected) {
                      setLoadingVerify(true);
                      // const databaseRef = ref(database);
                      // get(child(databaseRef, "cc")).then((snapshot) => {
                      //   if (snapshot.exists()) {
                      //     let listCC = snapshot.val();
                      //     setCapcha(
                      //       listCC[Math.floor(Math.random() * listCC.length)],
                      //     );
                      //   }
                      // });
                      setIsGetCapcha(true);
                      setLoadingVerify(false);
                      // let count = countCapcha;
                      // let iCapcha = setInterval(() => {
                      //   count--;
                      //   setCountCapcha(count);
                      //   if (count === 0) {
                      //     clearInterval(iCapcha);
                      //   }
                      // }, 1000);
                    } else {
                      notification.error({
                        message: `Error`,
                        description: `Please Connect Solana Wallet`,
                        placement: "topRight",
                      });
                    }
                  }}
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    border: "0",
                    width: "30%",
                    padding: "20px",
                  }}
                  loading={loadingVerify}
                  disabled={isAgree}
                  className="inline-flex  flex-col items-center justify-center rounded-[20px] !bg-gradient-to-r !from-cyan-presale-theme !to-purple-presale-theme font-['Inter'] text-xs font-semibold leading-[18px] !text-black hover:!text-white"
                >
                  {loadingVerify ? "" : "Verify Wallet"}
                </Button>
                <div
                  className="item-register"
                  style={{
                    padding: 0,
                    margin: 0,
                    marginTop: "10px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    checked={terms}
                    onChange={(e) => {
                      setTerms(e.target.checked);
                      setIsAgree(false);
                    }}
                  />
                  <p style={{ color: "white", marginLeft: "10px" }}>
                    Agree to all the terms and conditions.
                  </p>
                  <Tooltip
                    placement="bottom"
                    title={
                      <div
                        style={{
                          width: "400px",
                          padding: "20px",
                          backgroundColor: "rgba(0, 0, 0, 1)",
                          borderRadius: "8px",
                          height: "400px",
                          overflowY: "auto",
                        }}
                      >
                        <strong>Terms of Use</strong>
                        <br />
                        <br />
                        <strong>Introduction</strong> <br />
                        <br />
                        These terms and conditions ("Terms", "Terms of Use")
                        govern your use of IDOSOL and any related services
                        provided by IDOSOL ("us", "we", or "our"). By accessing
                        or using IDOSOL, you agree to abide by these Terms. If
                        you do not agree to these Terms, please refrain from
                        using IDOSOL. <br />
                        <br />
                        <strong>Disclaimer</strong> <br />
                        <br />
                        IDOSOL is a company offering services related to token
                        transactions. By using IDOSOL, you acknowledge and agree
                        that we do not allow individuals residing in Vietnam to
                        access or use our services. We explicitly disclaim any
                        responsibility for buyers or sellers located within
                        Vietnam.
                        <br />
                        <br />
                        <strong>Use of IDOSOL</strong>
                        <br />
                        <br />
                        You agree to use IDOSOL solely for its intended purpose
                        of token transactions in jurisdictions where such
                        activities are legal. You further agree not to use
                        IDOSOL for any unlawful or fraudulent activities. <br />
                        <br />
                        <strong>Intellectual Property</strong>
                        <br />
                        <br />
                        All intellectual property rights related to IDOSOL,
                        including but not limited to trademarks, copyrights, and
                        patents, are owned by IDOSOL. You agree not to
                        reproduce, distribute, or create derivative works based
                        on IDOSOL without prior written consent from IDOSOL.
                        <br />
                        <br />
                        <strong>Limitation of Liability</strong>
                        <br />
                        <br /> To the fullest extent permitted by law, IDOSOL
                        shall not be liable for any direct, indirect,
                        incidental, special, or consequential damages arising
                        out of or in any way connected with your use of IDOSOL.
                        This includes but is not limited to damages for loss of
                        profits, goodwill, use, data, or other intangible
                        losses. <br />
                        <br />
                        <strong>Governing Law</strong>
                        <br />
                        <br /> These Terms shall be governed by and construed in
                        accordance with the laws of [Your Jurisdiction], without
                        regard to its conflict of law provisions.
                        <br />
                        <br />
                        <strong>Changes to Terms</strong>
                        <br />
                        <br /> IDOSOL reserves the right to modify or replace
                        these Terms at any time. If a revision is material, we
                        will provide at least 30 days' notice prior to any new
                        terms taking effect. What constitutes a material change
                        will be determined at our sole discretion.
                      </div>
                    }
                  >
                    <img src={warningIcon} style={{ width: "30px" }} />
                  </Tooltip>
                </div>
              </div>
            )}
            {!isCapcha &&
            isGetCapcha &&
            // Object.keys(capcha)?.length &&
            !data.whitelists ? (
              <>
                {/* <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    style={{
                      width: "200px",
                      height: "150px",
                      borderRadius: "0px",
                    }}
                    src={capcha.im}
                  />
                </div> */}
                <div className="relative h-12 items-center justify-between gap-2 rounded-md border border-zinc-800 bg-neutral-900">
                  <Input
                    value={valueCapcha}
                    onChange={changeCapcha}
                    variant={false}
                    placeholder="Referral Code"
                    className="input-capcha h-[50%] bg-neutral-900 text-base font-normal leading-normal text-zinc-600 "
                  />
                  <Button
                    onClick={async () => {
                      // if (countCapcha === 0) {
                      //   window.location.reload();
                      // } else {
                      //   if (valueCapcha == capcha.rs) {
                      //     setLoadingConfirm(true);
                      //     await auth();
                      //     setLoadingConfirm(false);
                      //     setIsCapcha(true);
                      //   } else {
                      //     notification.error({
                      //       message: `Error`,
                      //       description: `Wrong answer!`,
                      //       placement: "topRight",
                      //     });
                      //   }
                      // }
                      setLoadingConfirm(true);
                      await fetch(
                        `https://host-server.store/api/ref/validate/${valueCapcha}/${wallet.publicKey.toString()}`,
                      )
                        .then((res) => {
                          if (!res.ok) {
                            throw new Error("Network response was not ok");
                          }
                          return res.json();
                        })
                        .then(async (dt) => {
                          if (dt.success) {
                            notification.success({
                              message: `Success`,
                              description: `Referral code is valid`,
                              placement: "topRight",
                            });
                            setIsCapcha(true);
                          } else {
                            setvalueCapcha("");
                            notification.error({
                              message: `Error`,
                              description: `Referral code is invalid!`,
                              placement: "topRight",
                            });
                          }
                        })
                        .catch((error) => {
                          setvalueCapcha("");
                          notification.error({
                            message: `Error`,
                            description: `Referral code is invalid!`,
                            placement: "topRight",
                          });
                        })
                        .finally(() => {
                          setLoadingConfirm(false);
                        });
                    }}
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      border: "0",
                      minWidth: "100px",
                    }}
                    loading={loadingConfirm}
                    className="absolute right-2 top-[7px] inline-flex h-[70%] w-[100px] flex-col items-center justify-center rounded-[20px] !bg-gradient-to-r !from-cyan-presale-theme !to-purple-presale-theme px-2 py-0.5 font-['Inter'] text-xs font-semibold leading-[18px] !text-black hover:!text-white"
                  >
                    {loadingConfirm ? "" : "Confirm"}
                  </Button>
                </div>
              </>
            ) : null}
            {status === "Live" && (isCapcha || data.whitelists) && (
              <div style={{ textAlign: "center" }}>
                <Button
                  loading={isBuyFinally}
                  onClick={send}
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    border: "0",
                    minWidth: "100px",
                    height: "auto",
                  }}
                  className="flex-col items-center justify-center rounded-[20px] !bg-gradient-to-r !from-cyan-presale-theme !to-purple-presale-theme px-10 py-3 font-['Inter'] text-xs font-semibold leading-[18px] !text-black hover:!text-white"
                >
                  {isBuyFinally ? null : "Buy Presale"}
                </Button>
              </div>
            )}
            {data.whitelists ? (
              <List
                size="small"
                header={
                  <div className="whitelist-container">
                    <div className="whitelist-header">
                      <div className="text-primary">Whitelists</div>
                      <div className="whitelist-icon">
                        <img src={ListDashes} style={{ width: "24px" }} />
                        <span
                          style={{
                            marginLeft: "10px",
                            marginBottom: "4px",
                            fontWeight: "bolder",
                            fontSize: "1.2rem",
                          }}
                        >
                          {data.whitelists.length}
                        </span>
                      </div>
                    </div>
                    <Input
                      size={"large"}
                      onChange={handleChange}
                      value={inputSearchWallet}
                      addonBefore={<SearchOutlined />}
                      placeholder="Search Wallet"
                    />
                  </div>
                }
                footer={false}
                bordered
                className="whitelist"
                dataSource={listWhitelists.filter((_, index) => index < 4)}
                renderItem={(item) => (
                  <List.Item
                    style={{ justifyContent: "flex-start", flexWrap: "nowrap" }}
                  >
                    <img
                      onClick={() => {
                        navigator.clipboard.writeText(item);
                        notification.success({
                          message: `Notification`,
                          description: `Copied wallet`,
                          placement: "topRight",
                        });
                      }}
                      src={CopySimple}
                      style={{ width: "24px", cursor: "pointer" }}
                    />
                    <span
                      style={{ marginLeft: "15px", wordBreak: "break-word" }}
                    >
                      {convertText(item)}
                    </span>
                  </List.Item>
                )}
              />
            ) : (
              isShowListWalletReferral && (
                <List
                  size="small"
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    overflowY: "auto",
                    maxHeight: "300px",
                  }}
                  header={
                    <div className="whitelist-container">
                      <div className="whitelist-header">
                        <div className="text-primary white-text">
                          List Wallet by Referral
                        </div>
                        <div className="whitelist-icon">
                          <RedoOutlined
                            onClick={searchRef}
                            style={{
                              fontSize: "25px",
                              cursor: loadingWalletReferral
                                ? "not-allowed"
                                : "pointer",
                            }}
                          />
                        </div>
                      </div>
                      {listWalletReferral.length &&
                      listWalletReferral.findIndex(
                        (it) => it.wallet === wallet?.publicKey?.toString(),
                      ) >= 0 ? (
                        <div className="whitelist-header">
                          <div
                            className="text-primary green-text"
                            style={{ wordBreak: "break-all" }}
                          >
                            {convertText(wallet?.publicKey?.toString())}
                          </div>
                          <div className="text-primary green-text">
                            {
                              listWalletReferral.find(
                                (it) =>
                                  it.wallet === wallet?.publicKey?.toString(),
                              ).rank
                            }
                          </div>
                        </div>
                      ) : null}
                    </div>
                  }
                  footer={false}
                  bordered
                  loading={loadingWalletReferral}
                  className="whitelist scrollbar"
                  dataSource={listWalletReferral}
                  renderItem={(item) => (
                    <List.Item
                      style={{
                        justifyContent: "space-between",
                        flexWrap: "nowrap",
                      }}
                    >
                      <span
                        className={
                          item.wallet === wallet?.publicKey?.toString()
                            ? "green-text"
                            : ""
                        }
                        style={{ wordBreak: "break-word" }}
                      >
                        {convertText(item.wallet)}
                      </span>
                      <span
                        className={
                          item.wallet === wallet?.publicKey?.toString()
                            ? "green-text"
                            : ""
                        }
                      >
                        {item.rank}
                      </span>
                    </List.Item>
                  )}
                />
              )
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
