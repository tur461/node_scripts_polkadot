import Web3 from "web3";
import {
  BICONOMY_API_KEY,
  POLYGON_URL,
  PAZZA_ADDRESS,
  USDT_ADDRESS,
  LOAN_NFT_ADDRESS,
  CHAIN_ID,
} from "../../Constant";
import PazaAbi from "../../../src/assets/abi/Paza.json";
import UsdtAbi from "../../../src/assets/abi/USDT.json";
import { toBuffer } from "ethereumjs-util";
import loanNftAbi from "../../assets/abi/LoanNFT.json";
import { Address } from "cluster";
import { Web3Provider } from "@ethersproject/providers";
const { Biconomy } = require("@biconomy/mexa");
const sigUtil = require("eth-sig-util");
let abi = require("ethereumjs-abi");

const providerUrl: any = POLYGON_URL;
let biconomyApiKey: any = BICONOMY_API_KEY;
let web3: any = Web3;
let contract: any = {};
let usdtContract: any = {};
let loanNftContract: any = {};
let biconomy: any = {};
let pazzaAddress: any = PAZZA_ADDRESS;
let usdtAddress: any = USDT_ADDRESS;
let contractBiconomy: any;

export const connectBiconomy = async () => {
  const provider = new Web3.providers.HttpProvider(providerUrl) as any;

  biconomy = (await new Biconomy(provider, {
    walletProvider: provider,
    apiKey: biconomyApiKey,
    debug: false,
    strictMode: false,
  })) as any;

  console.log("biconomy", biconomy);
  web3 = new Web3(biconomy);
  contract = new web3.eth.Contract(PazaAbi, PAZZA_ADDRESS);
  usdtContract = new web3.eth.Contract(UsdtAbi, USDT_ADDRESS);
  loanNftContract = new web3.eth.Contract(loanNftAbi, LOAN_NFT_ADDRESS);
  isBiconomyConnected();
};
connectBiconomy();
export const isBiconomyConnected = async () => {
  return biconomy
    .onEvent(biconomy.READY, () => {
      console.log("Biconomy is connected..!!");
      // initContract();
    })
    .onEvent(biconomy.ERROR, (error: any) => {
      console.log("Biconomy is disconnected", error);
    });
};

export const getSignatureParameters = async (signature: any): Promise<any> => {
  console.log("signature", signature);
  if (!web3.utils.isHexStrict(signature)) {
    throw new Error(
      'Given value "'.concat(signature, '" is not a valid hex string.')
    );
  }
  var r: any = signature.slice(0, 66);
  var s: any = "0x".concat(signature.slice(66, 130));
  var v: any = "0x".concat(signature.slice(130, 132));
  v = await web3.utils.hexToNumber(v);

  if (![27, 28].includes(v)) v += 27;
  return {
    r: r,
    s: s,
    v: v,
  };
};

export const constructMetaTransactionMessage = async (
  nonce: any,
  chainId: any,
  functionSignature: any,
  contractAddress: any
) => {
  return abi.soliditySHA3(
    ["uint256", "address", "uint256", "bytes"],
    [nonce, contractAddress, chainId, toBuffer(functionSignature)]
  );
};

export const transferAmount = async (
  walletData: any,
  toAddress: string,
  amount: any
) => {
  try {
    let sig = await contract.methods.transfer(toAddress, amount).encodeABI();
    const getvalue = await biconomyMethod(walletData, sig);
    return getvalue;
  } catch (err: any) {
    throw err;
  }
};

export const approvalForAll = async (
  ownerAddress: any,
  spenderAddress: any
) => {
  return new Promise((r, j) => {
    loanNftContract?.methods
      ?.isApprovedForAll(ownerAddress, spenderAddress)
      .call()
      .then(async (approved: any) => {
        r(approved);
      })
      .catch((err: any) => {
        console.error("### ERROR:", err);
        j("rejected");
      });
  });
};

export const approvalForAllDone = async (
  walletData: any,
  factoryAdd: string,
  bool: boolean
) => {
  try {
    let sig = await loanNftContract.methods
      .setApprovalForAll(factoryAdd, bool)
      .encodeABI();
    const getvalue = await biconomyLoanNftMethod(walletData, sig);
    return getvalue;
  } catch (err: any) {
    throw err;
  }
};

export const userBalancePazza = async (userAddress: string) => {
  return new Promise((r, j) => {
    contract?.methods
      ?.balanceOf(userAddress)
      .call()
      .then(async (bal: any) => {
        r(web3.utils.fromWei(await web3.utils.toBN(bal), "ether"));
      })
      .catch((err: any) => {
        console.error("### ERROR:", err);
        j("rejected");
      });
  });
};

export const userBalanceUsdt = async (userAddress: any) => {
  return new Promise((r, j) => {
    usdtContract?.methods
      ?.balanceOf(userAddress)
      .call()
      .then(async (bal: any) => {
        // r(this.web3.utils.fromWei(await this.web3.utils.toBN(bal), 'ether'));
        r(bal);
      })
      .catch((err: any) => {
        console.error("### ERROR:", err);
        j("rejected");
      });
  });
};

export const buyPazzaApproval = async (
  walletData: any,
  toAddress: string,
  amount: any
) => {
  try {
    console.log("buyPazzaApproval", walletData, toAddress, amount);
    let functionSig = await usdtContract.methods
      .approve(toAddress, amount)
      .encodeABI();
    console.log("functionSig", functionSig);
    return await biconomyUsdtMethod(walletData, functionSig);
  } catch (err: any) {
    console.log("error", err);
    return err;
  }
};

export const buyPazzaAllowance = async (
  ownerAddress: any,
  spenderAddress: any
) => {
  return new Promise((r, j) => {
    usdtContract?.methods
      ?.allowance(ownerAddress, spenderAddress)
      .call()
      .then(async (allowance: any) => {
        r(web3.utils.fromWei(await web3.utils.toBN(allowance), "ether"));
      })
      .catch((err: any) => {
        console.error("### ERROR:", err);
        j("rejected");
      });
  });
};

export const buyPazzaToken = async (walletData: any, amount: any) => {
  try {
    let sig = await contract.methods.buy(amount).encodeABI();
    return await biconomyMethod(walletData, sig);
  } catch (err: any) {
    console.log("error", err);
    return err;
  }
};

export const sellPazzaApproval = async (
  walletData: any,
  toAddress: string,
  amount: any
) => {
  try {
    let sig = await contract.methods.approve(toAddress, amount).encodeABI();
    return await biconomyMethod(walletData, sig);
  } catch (err: any) {
    console.log("error", err);
    return err;
  }
};

export const sellPazzaAllowance = async (
  ownerAddress: any,
  spenderAddress: any
) => {
  return new Promise((r, j) => {
    usdtContract?.methods
      ?.allowance(ownerAddress, spenderAddress)
      .call()
      .then(async (allowance: any) => {
        r(web3.utils.fromWei(await web3.utils.toBN(allowance), "ether"));
      })
      .catch((err: any) => {
        console.error("### ERROR:", err);
        j("rejected");
      });
  });
};

export const totalAllowance = async (
  ownerAddress: any,
  spenderAddress: any
) => {
  console.log("ownerAddress", ownerAddress, spenderAddress, contract);
  await connectBiconomy();
  // return new Promise((r, j) => {
  //   contract?.methods
  //     ?.allowance(ownerAddress, spenderAddress)
  //     .call()
  //     .then(async (allowance: any) => {
  //       r(web3.utils.fromWei(await web3.utils.toBN(allowance), "ether"));
  //     })
  //     .catch((err: any) => {
  //       console.error("### ERROR:", err);
  //       j("rejected");
  //     });
  // });
};

export const sellPazzaToken = async (walletData: any, amount: any) => {
  try {
    let sig = await contract.methods.sell(amount).encodeABI();
    return await biconomyMethod(walletData, sig);
  } catch (err: any) {
    console.log("error", err);
    return err;
  }
};

export const biconomyMethod = async (walletData: any, sig: any) => {
  try {
    let nonce: any = await contract.methods
      .getNonce(walletData?.address)
      .call();

    let messageToSign = constructMetaTransactionMessage(
      nonce,
      CHAIN_ID,
      sig,
      PAZZA_ADDRESS
    );

    const signature: any = await web3.eth.accounts.sign(
      "0x" + messageToSign.toString(),
      walletData?.privateKey
    );

    let { r, s, v }: any = await getSignatureParameters(signature?.signature);

    const tx = await contract.methods
      .executeMetaTransaction(walletData.address, sig, r, s, v)
      .encodeABI();

    if (!tx) {
      return console.log("Something went Wrong in tx");
    }

    let estimatedGas = await contract.methods
      .executeMetaTransaction(walletData.address, sig, r, s, v)
      .estimateGas({ from: walletData.address, value: 0 });

    if (!estimatedGas) {
      return console.log("Something went Wrong in estimatedGas");
    }

    const txParams = {
      from: walletData.address,
      to: PAZZA_ADDRESS,
      gas: await web3.utils.toHex(estimatedGas),
      gasPrice: await web3.eth.getGasPrice(),
      value: "0x0",
      gasLimit: web3.utils.toHex(Number(estimatedGas).toFixed()),
      data: tx,
    };

    const signedTx: any = await web3.eth.accounts.signTransaction(
      txParams,
      walletData.privateKey
    );

    const receipt: any = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction,
      (error: any, txHash: string) => {
        if (error) {
          return {
            error: true,
            message:
              "Something  in signTransactionBiconomy sendSignedTransaction",
          };
        }
        console.log("txHash", txHash);
        return { transactionHash: txHash, error: false };
      }
    );
    return { transactionHash: receipt.transactionHash, error: false };
  } catch (error: any) {
    throw error;
  }
};

export const biconomyUsdtMethod = async (walletData: any, functionSig: any) => {
  try {
    const __USDT = "0x2131Ba49780a67B86a8a9957BDa080579a6f9526";
    let nonce: any = await usdtContract.methods
      .nonces(walletData?.address)
      .call();
    const domainType = [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "verifyingContract", type: "address" },
      // { name: "chainId", type: "uint256" },
      { name: "salt", type: "bytes32" },
    ];
    const metaTransactionType = [
      { name: "nonce", type: "uint256" },
      { name: "from", type: "address" },
      { name: "functionSignature", type: "bytes" },
    ];
    let domainData = {
      name: "USDC",
      version: "1",
      verifyingContract: __USDT,
      // chainId: "0",
      salt: "0x" + (42).toString(16).padStart(64, "0"),
    };

    console.log("usdt add -----", __USDT);

    let message = {
      nonce: parseInt(nonce),
      from: walletData?.address,
      functionSignature: functionSig,
    };

    const dataToSign = JSON.stringify({
      types: {
        EIP712Domain: domainType,
        MetaTransaction: metaTransactionType,
      },
      domain: domainData,
      primaryType: "MetaTransaction",
      message: message,
    });

    // const contractInstance = new web3.eth.Contract(abi, usdtAddress);
    // await web3.eth.currentProvider.send(
    //   {
    //     jsonrpc: "2.0",
    //     id: 999999999999,
    //     method: "eth_signTypedData_v4",
    //     params: [walletData?.address, dataToSign],
    //   },

    //   async (error: any, response: any) => {
    //     console.log("response", response);
    //     let { r, s, v }: any = await getSignatureParameters(response.result);

    //     const recovered = sigUtil.recoverTypedSignature_v4({
    //       data: JSON.parse(dataToSign),
    //       sig: response.result,
    //     });
    //     let tx = await usdtContract.methods
    //       .executeMetaTransaction(walletData?.address, functionSig, r, s, v)
    //       .send({
    //         from: walletData?.address,
    //       });
    //   }
    // );

    const signature: any = await web3.eth.accounts.sign(
      "0x" + dataToSign.toString(),
      walletData?.privateKey
    );

    let { r, s, v }: any = await getSignatureParameters(signature?.signature);

    const tx = await usdtContract.methods
      .executeMetaTransaction(walletData?.address, functionSig, r, s, v)
      .encodeABI();

    if (!tx) {
      return console.log("Something went Wrong in tx");
    }

    let estimatedGas = await usdtContract.methods
      .executeMetaTransaction(walletData.address, functionSig, r, s, v)
      .estimateGas({ from: walletData.address, value: 0 });

    if (!estimatedGas) {
      return console.log("Something went Wrong in estimatedGas");
    }

    const txParams = {
      from: walletData.address,
      to: usdtAddress,
      gas: await web3.utils.toHex(estimatedGas),
      gasPrice: await web3.eth.getGasPrice(),
      value: "0x0",
      gasLimit: web3.utils.toHex(Number(estimatedGas).toFixed()),
      data: tx,
    };

    const signedTx: any = await web3.eth.accounts.signTransaction(
      txParams,
      walletData.privateKey
    );

    const receipt: any = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction,
      (error: any, txHash: string) => {
        if (error) {
          return {
            error: true,
            message:
              "Something  in signTransactionBiconomy sendSignedTransaction",
          };
        }
        console.log("txHash", txHash);
        return { transactionHash: txHash, error: false };
      }
    );

    return { transactionHash: receipt.transactionHash, error: false };
  } catch (error: any) {
    console.log("error", error);
    throw error;
  }
};

export const biconomyLoanNftMethod = async (walletData: any, sig: any) => {
  try {
    let nonce: any = await loanNftContract.methods
      .getNonce(walletData?.address)
      .call();

    let messageToSign = constructMetaTransactionMessage(
      nonce,
      CHAIN_ID,
      sig,
      LOAN_NFT_ADDRESS
    );

    const signature: any = await web3.eth.accounts.sign(
      "0x" + messageToSign.toString(),
      walletData?.privateKey
    );

    let { r, s, v }: any = await getSignatureParameters(signature?.signature);

    const tx = await loanNftContract.methods
      .executeMetaTransaction(walletData.address, sig, r, s, v)
      .encodeABI();

    if (!tx) {
      return console.log("Something went Wrong in tx");
    }

    let estimatedGas = await loanNftContract.methods
      .executeMetaTransaction(walletData.address, sig, r, s, v)
      .estimateGas({ from: walletData.address, value: 0 });

    if (!estimatedGas) {
      return console.log("Something went Wrong in estimatedGas");
    }

    const txParams = {
      from: walletData.address,
      to: LOAN_NFT_ADDRESS,
      gas: await web3.utils.toHex(estimatedGas),
      gasPrice: await web3.eth.getGasPrice(),
      value: "0x0",
      gasLimit: web3.utils.toHex(Number(estimatedGas).toFixed()),
      data: tx,
    };

    const signedTx: any = await web3.eth.accounts.signTransaction(
      txParams,
      walletData.privateKey
    );

    const receipt: any = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction,
      (error: any, txHash: string) => {
        if (error) {
          return {
            error: true,
            message:
              "Something  in signTransactionBiconomy sendSignedTransaction",
          };
        }
        console.log("txHash", txHash);
        return { transactionHash: txHash, error: false };
      }
    );
    return { transactionHash: receipt.transactionHash, error: false };
  } catch (error: any) {
    console.log("error", error);
    throw error;
  }
};

export const web3Amount = async (amount: any) => {
  return await web3.utils.toWei(amount, "ether");
};

export const initContract = async () => {
  try {
    contract = new web3.eth.Contract(PazaAbi, PAZZA_ADDRESS);

    usdtContract = new web3.eth.Contract(UsdtAbi, USDT_ADDRESS);
    loanNftContract = new web3.eth.Contract(loanNftAbi, LOAN_NFT_ADDRESS);
  } catch (error) {
    console.log("error", error);
  }
};
