import React, { Component } from "react";
import Web3 from "web3";
import { handleTransfer } from "../../back-end/api/transaction"
import "./App.css";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    window.ethereum.enable()

    // web3.eth.Contract.call(contractInstance)

    const web3 = new Web3(Web3.givenProvider);

    // get contract 
    /* const CCC = new web3.eth.Contract(CCC_ABI, CCC_CONTRACT)
    this.setState({ ccc_contract: CCC });
    const ECC = new web3.eth.Contract(ECC_ABI, ECC_CONTRACT)
    const SCC = new web3.eth.Contract(SCC_ABI, SCC_CONTRACT)
    const SRCC = new web3.eth.Contract(SRCC_ABI, SRCC_CONTRACT) */

    // get CCC Token Data
    /* const CCC_symbol = await CCC.methods.symbol().call();
    const CCC_name = await CCC.methods.name().call();
    console.log("Symbol:", CCC_symbol, "Name:", CCC_name)
 */
    // get ECC Token Data
    /* const ECC_symbol = await ECC.methods.symbol().call();
    const ECC_name = await ECC.methods.name().call();
    console.log("Symbol:", ECC_symbol, "Name:", ECC_name)
 */
    // get SCC Token Data
    /* const SCC_symbol = await SCC.methods.symbol().call();
    const SCC_name = await SCC.methods.name().call();
    console.log("Symbol:", SCC_symbol, "Name:", SCC_name) */

    // get SRCC Token Data
    /* const SRCC_symbol = await SRCC.methods.symbol().call();
    const SRCC_name = await SRCC.methods.name().call();
    const SRCC_totalSupply = await SRCC.methods.totalSupply().call()
    console.log("Symbol:", SRCC_symbol, "Name:", SRCC_name, "Total Supply:", SRCC_totalSupply) */


    // get accounts
    /* const accounts = await web3.eth.getAccounts();
    this.setState({ accounts: accounts }); */

    // Try to send CCC Token
    // this.sendCCCToken("0xdE3964023d4a3aC166C77A5f5a55c3b06FCb8B69", 99)

    // Get CCC Balance
    // this.getCCCBalance("0xb40d72e9743c11d502fa99b5a09d49108dbf2517")
  }

  constructor(props) {
    super(props);
    this.state = {
      accounts: "",
      ccc_contract: null
    };
    this.sendCCCToken = this.sendCCCToken.bind(this)
  }

  async getCCCBalance(address) {
    console.log("Address:", address)
    this.state.ccc_contract.methods.balanceOf(address).call().then(res => {
      console.log("Bal:", res)
    })
  }

  async handleTransferToken(symbol, to_address, amount) {
    console.log("Symbol:", symbol, "To:", to_address, "Amount:", amount)
    handleTransfer(symbol, to_address, amount).then(res => {
      console.log("tx:", res)
    })
    /* this.state.ccc_contract.methods.transfer(to_address, amount).send({ from:  this.state.accounts[0]})
      .on('transactionHash', function (hash) {
        console.log(hash)
      }); */
  }

  render() {
    return (
      <div className="container">
        <h1>Candee</h1>
        <p>Your account: {this.state.accounts[0]}</p>
        <button onClick={(e) => this.handleTransferToken("CCC", "0xeF733e3639c33905E91F9801fEF76F5788024aF9", 1000)}> Send </button>
      </div>
    );
  }
}

export default App;
