import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { AbiParser } from './AbiParser';
import * as JSVC from './JoyCredit.json';

export class JoyToken {

	web3: Web3;
	contract: Contract;
	abiParser: AbiParser;

	constructor() {
		this.web3 = new Web3("http://127.0.0.1:9545");
	 	this.abiParser = new AbiParser(JSVC.abi);
	 	this.contract = new this.web3.eth.Contract(
	 		this.abiParser.abiList, 
	 		"0x415e7A284744F4016dD31aBBCB712f3B675fFd96"
	 	);
	}

	mintToAddress(address: string, amount: number) {
		this.contract.methods.mint(address, amount).send({from: address})
		.on('receipt', (receipt:any) => {
			console.log(receipt);
			alert("transaction complete");
		})
	}

}