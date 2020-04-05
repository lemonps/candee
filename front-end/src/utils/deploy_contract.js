const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');

// Connect to local Ethereum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8501"));

// Get initialize account

// const coinbase = web3.eth.getCoinbase().then((data) => console.log(data))

// Compile the source code
const input = fs.readFileSync('../../contracts/CCC.sol');
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts[':CCC'].bytecode;
const abi = JSON.parse(output.contracts[':CCC'].interface);
const myContract = new web3.eth.Contract(abi)
const ccc_centract = ""

myContract.deploy({
    data: '0x' + bytecode,
    arguments: [1000000]
})
    .send({
        from: "0xb40d72e9743c11d502fa99b5a09d49108dbf2517",
        gas: 1500000,
    })
    .then(function (newContractInstance) {
        ccc_contract = newContractInstance.options.address
        console.log("Contract Addrress:", ccc_contract) // instance with the new contract address
        testContract(newContractInstance.options.address)
    });

/* const contract = myContract.deploy({
    data: '0x' + bytecode,
    arguments: [1000000]
})
    .send({
        from: web3.eth.coinbase,
        gas: 1500000,
    }, function (error, transactionHash) { })
    .on('error', function (error) { console.log(error) })
    .on('transactionHash', function (transactionHash) { console.log(error) })
    .on('receipt', function (receipt) {
        console.log("Contract Address:", receipt.contractAddress) // contains the new contract address
    })
    .on('confirmation', function (confirmationNumber, receipt) { })
    .then(function (newContractInstance) {
        console.log(newContractInstance.options.address) // instance with the new contract address
    });
 */
// Contract object
/* const contract = new web3.eth.Contract(abi, {
    data: '0x' + bytecode,
    from: web3.eth.coinbase,
    gas: 90000 * 2
}, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }

    // Log the tx, you can explore status with eth.getTransaction()
    console.log("Tx Hash:", res.transactionHash);

    // If we have an address property, the contract was deployed
    if (res.address) {
        console.log('Contract address: ' + res.address);
        // Let's test the deployed contract
        testContract(res.address);
    }
}); */

// Quick test the contract

function testContract(address) {
    // Reference to the deployed contract
    const token = new web3.eth.Contract(abi, address)
    // Destination account for test
    const dest_account = '0xdE3964023d4a3aC166C77A5f5a55c3b06FCb8B69';

    // Assert initial account balance, should be 100000
    const balance1 = 0
    token.methods.balanceOf("0xb40d72e9743c11d502fa99b5a09d49108dbf2517").call()
        .then(function (bal) {
            console.log(bal)
            balance1 = bal
        })

    console.log("Balance:", balance1, "| Enough ?:", balance1 == 1000000);

    // Call the transfer function
    token.methods.transfer(dest_account, 100).send({ from: "0xb40d72e9743c11d502fa99b5a09d49108dbf2517" }, (err, res) => {
        // Log transaction, in case you want to explore
        console.log('tx: ' + res);
        // Assert destination account balance, should be 100 
        const balance2 = token.methods.balanceOf(dest_account).call();
        console.log(balance2 == 100);
    });
}