const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');

// Connect to local Ethereum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8501"));

// Deploy CCC Contract 
deployCCC = (totalSupply) => {
    let input = fs.readFileSync('../contracts/CCC.sol');
    let output = solc.compile(input.toString(), 1);
    let bytecode = output.contracts[':CCC'].bytecode;
    let abi = JSON.parse(output.contracts[':CCC'].interface);
    let myContract = new web3.eth.Contract(abi)
    let contractAddress = ""
    console.log("CCC total supply:", totalSupply)

    myContract.deploy({
        data: '0x' + bytecode,
        arguments: [totalSupply]
    })
        .send({
            from: "0xb40d72e9743c11d502fa99b5a09d49108dbf2517",
            gas: 1200000,
        })
        .then(function (newContractInstance) {
            contractAddress = newContractInstance.options.address
            console.log("CCC Contract Addrress:", contractAddress) // instance with the new contract address
            // testContract(contractAddress)
        });
}

deployECC = (totalSupply) => {
    let input = fs.readFileSync('../contracts/ECC.sol');
    let output = solc.compile(input.toString(), 1);
    let bytecode = output.contracts[':ECC'].bytecode;
    let abi = JSON.parse(output.contracts[':ECC'].interface);
    let myContract = new web3.eth.Contract(abi)
    let contractAddress = ""
    console.log("ECC total supply:", totalSupply)

    myContract.deploy({
        data: '0x' + bytecode,
        arguments: [totalSupply]
    })
        .send({
            from: "0xb40d72e9743c11d502fa99b5a09d49108dbf2517",
            gas: 1200000,
        })
        .then(function (newContractInstance) {
            contractAddress = newContractInstance.options.address
            console.log("ECC Contract Addrress:", contractAddress) // instance with the new contract address
            // testContract(contractAddress)
        });
},

    deploySCC = (totalSupply) => {
        let input = fs.readFileSync('../contracts/SCC.sol');
        let output = solc.compile(input.toString(), 1);
        let bytecode = output.contracts[':SCC'].bytecode;
        let abi = JSON.parse(output.contracts[':SCC'].interface);
        let myContract = new web3.eth.Contract(abi)
        let contractAddress = ""
        console.log("SCC total supply:", totalSupply)

        myContract.deploy({
            data: '0x' + bytecode,
            arguments: [totalSupply]
        })
            .send({
                from: "0xb40d72e9743c11d502fa99b5a09d49108dbf2517",
                gas: 1200000,
            })
            .then(function (newContractInstance) {
                contractAddress = newContractInstance.options.address
                console.log("SCC Contract Addrress:", contractAddress) // instance with the new contract address
                // testContract(contractAddress)
            });
    },

    deploySRCC = (totalSupply) => {
        let input = fs.readFileSync('../contracts/SRCC.sol');
        let output = solc.compile(input.toString(), 1);
        let bytecode = output.contracts[':SRCC'].bytecode;
        let abi = JSON.parse(output.contracts[':SRCC'].interface);
        let myContract = new web3.eth.Contract(abi)
        let contractAddress = ""
        console.log("SRCC total supply:", totalSupply)

        myContract.deploy({
            data: '0x' + bytecode,
            arguments: [totalSupply]
        })
            .send({
                from: "0xb40d72e9743c11d502fa99b5a09d49108dbf2517",
                gas: 1200000,
            })
            .then(function (newContractInstance) {
                contractAddress = newContractInstance.options.address
                console.log("SRCC Contract Addrress:", contractAddress) // instance with the new contract address
                // testContract(contractAddress)
            });
    }

deployCCC(999999)
deployECC(999999)
deploySCC(999999)
deploySRCC(999999)

//  Deploy contract code template

/* deployContract = () => {
    const input = fs.readFileSync('../contracts/CCC.sol');
    const output = solc.compile(input.toString(), 1);
    const bytecode = output.contracts[':CCC'].bytecode;
    const abi = JSON.parse(output.contracts[':CCC'].interface);
    const myContract = new web3.eth.Contract(abi)

    myContract.deploy({
        data: '0x' + bytecode,
        arguments: [1000000]
    })
        .send({
            from: "0xb40d72e9743c11d502fa99b5a09d49108dbf2517",
            gas: 1200000,
        })
        .then(function (newContractInstance) {
            let contractAddress = newContractInstance.options.address
            console.log("Contract Addrress:", contractAddress) // instance with the new contract address
            testContract(contractAddress)
        });
}

// Quick test the contract

/* function testContract(address) {
    // Reference to the deployed contract
    const token = new web3.eth.Contract(abi, address)
    // Destination account for test
    const dest_account = '0xdE3964023d4a3aC166C77A5f5a55c3b06FCb8B69';

    // Assert initial account balance, should be 100000
    let balance1 = 0
    token.methods.balanceOf("0xb40d72e9743c11d502fa99b5a09d49108dbf2517").call()
        .then((bal) => {
            console.log("Bal:", bal)
            balance1 = bal
            console.log("Balance:", balance1)
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
} */