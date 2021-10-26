import * as CryptoJS from 'crypto-js';

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  //만약 제약 없이 class 밖에서 메소드를 사용하고자 한다면 해당 메소드 앞에 static를 반드시 붙여야함
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string,
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number,
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

//이렇게 가져다 쓸 수 있음
//Block.calculateBlockHash();

const genesisBlock: Block = new Block(0, '112312312321', '', 'Target', 123);
let block_chain: [Block] = [genesisBlock];
console.log(block_chain);

// 타입 설정으로 오른쪽과같이 아무런 내용이나 들어가는 자바스크립트와는 다르게 사전에 예방해준다. block_chain.push('stuff');

const getBlockChain = (): Block[] => block_chain;

const getLatestBlock = (): Block => block_chain[block_chain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);
export {};
