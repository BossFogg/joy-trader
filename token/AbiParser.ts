import { AbiType, StateMutabilityType, AbiItem, AbiInput, AbiOutput } from 'web3-utils';

interface RawAbiItem {
    anonymous?: boolean;
    constant?: boolean;
    inputs?: AbiInput[];
    name?: string;
    outputs?: AbiOutput[];
    payable?: boolean;
    stateMutability?: string | StateMutabilityType;
    type: string | AbiType;
    gas?: number;
}

export class AbiParser {

	abiList: AbiItem[] = [];

	constructor(abi: RawAbiItem[] | RawAbiItem) {
		if (Array.isArray(abi)) {
			for (let a of abi) {
				this.abiList.push(this.parseItem(a));
			}
		}
		else this.abiList.push(this.parseItem(abi));
	}

	parseItem(item: RawAbiItem) {
		let type: AbiType = this.convertItemType(item.type);
		let abiItem: AbiItem = { type };
		if (item.stateMutability) {
			abiItem.stateMutability = this.convertMutabilityType(item.stateMutability);
		}
		if (item.anonymous !== undefined) abiItem.anonymous = item.anonymous;
		if (item.constant !== undefined) abiItem.constant = item.constant;
		if (item.payable !== undefined) abiItem.payable = item.payable;
		if (item.name) abiItem.name = item.name;
		if (item.gas !== undefined) abiItem.gas = item.gas;
		if (item.inputs) abiItem.inputs = item.inputs;
		if (item.outputs) abiItem.outputs = item.outputs;
		return abiItem;
	}

	convertItemType(itemType: string | AbiType) {
		// use switch statement
		let type: AbiType;
		switch (itemType) {
			case 'function':
				type = 'function';
				break;
			case 'constructor':
				type = 'constructor';
				break;
			case 'event':
				type = 'event';
				break;
			default:
				type = 'fallback';
				break;
		}
		return type;
	}

	convertMutabilityType(mutability: string | StateMutabilityType) {
		let stateMutability: StateMutabilityType;
		switch (mutability) {
			case 'pure':
				stateMutability = 'pure';
				break;
			case 'view':
				stateMutability = 'view';
				break;
			case 'nonpayable':
				stateMutability = 'nonpayable';
				break;
			default:
				stateMutability = 'payable';
				break;
		}
		return stateMutability;
	}
}