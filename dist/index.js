"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = __importStar(require("crypto-js"));
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
//만약 제약 없이 class 밖에서 메소드를 사용하고자 한다면 해당 메소드 앞에 static를 반드시 붙여야함
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
Block.validateStructure = (blocks) => typeof blocks.index === 'number' &&
    typeof blocks.hash === 'string' &&
    typeof blocks.previousHash === 'string' &&
    typeof blocks.timestamp === 'number' &&
    typeof blocks.data === 'string';
//이렇게 가져다 쓸 수 있음
//Block.calculateBlockHash();
const genesisBlock = new Block(0, '112312312321', '', 'Target', 123456);
let block_chain = [genesisBlock];
// 타입 설정으로 오른쪽과같이 아무런 내용이나 들어가는 자바스크립트와는 다르게 사전에 예방해준다. block_chain.push('stuff');
const getBlockChain = () => block_chain;
const getLatestBlock = () => block_chain[block_chain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const nextTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, nextTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, nextTimestamp);
    addBlock(newBlock);
    return newBlock;
};
const getHashforBlock = (blocks) => Block.calculateBlockHash(blocks.index, blocks.previousHash, blocks.timestamp, blocks.data);
//블록의 해쉬 검증
//이전의 블록과 새로운 블록의 검증 함수
const isValidBlock = (candidatedBlock, previousBlock) => {
    if (!Block.validateStructure(candidatedBlock)) {
        return false;
        //이전 블록의 인덱스 +1이 candidate block의 index와 같지않다면 FASLE
    }
    else if (previousBlock.index + 1 !== candidatedBlock.index) {
        return false;
        //이전 블록의 hash가 candidate block의 previous hash 와 같지 않다면,
    }
    else if (previousBlock.hash !== candidatedBlock.previousHash) {
        return false;
        //해쉬를 계산했는데 다른 해쉬를 갖고있다면,
    }
    else if (getHashforBlock(candidatedBlock) !== candidatedBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
//아무것도 RETURN하지 않을 경우 void
const addBlock = (candidateBlock) => {
    if (isValidBlock(candidateBlock, getLatestBlock())) {
        block_chain.push(candidateBlock);
    }
};
createNewBlock('두번 째');
createNewBlock('세번 째');
createNewBlock('네번 쨰');
console.log(block_chain);
//# sourceMappingURL=index.js.map