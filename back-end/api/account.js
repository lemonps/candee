const Web3 = require('web3');

// Connect to local Ethereum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8501"));
let accounts

export const createNewAccount = async () => {
    /* await web3.eth.personal.newAccount().then(address => {
        console.log("Account:", address)
    }) */
    await web3.eth.accounts.create(web3.utils.randomHex(32))
    // return console.log(web3.eth.accounts.create(web3.utils.randomHex(32)))
}

export const getAccounts = async () => {
    /* await web3.eth.personal.getAccounts().then(res => {
        accounts = res
        // console.log(accounts)
    }) */
    accounts = await web3.eth.accounts
    console.log("Accounts:", accounts)
    // return accounts
}

createNewAccount()
getAccounts()

