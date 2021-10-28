import * as CryptoJS from 'crypto-js';

class Block {
  //만약 제약 없이 class 밖에서 메소드를 사용하고자 한다면 해당 메소드 앞에 static를 반드시 붙여야함
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string,
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  static validateStructure = (blocks: Block): boolean =>
    typeof blocks.index === 'number' &&
    typeof blocks.hash === 'string' &&
    typeof blocks.previousHash === 'string' &&
    typeof blocks.timestamp === 'number' &&
    typeof blocks.data === 'string';

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

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

const genesisBlock: Block = new Block(0, '112312312321', '', 'Target', 123456);

let block_chain: Block[] = [genesisBlock];

// 타입 설정으로 오른쪽과같이 아무런 내용이나 들어가는 자바스크립트와는 다르게 사전에 예방해준다. block_chain.push('stuff');

const getBlockChain = (): Block[] => block_chain;

const getLatestBlock = (): Block => block_chain[block_chain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const nextTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    nextTimestamp,
    data,
  );

  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    nextTimestamp,
  );

  addBlock(newBlock);
  return newBlock;
};

const getHashforBlock = (blocks: Block): string =>
  Block.calculateBlockHash(
    blocks.index,
    blocks.previousHash,
    blocks.timestamp,
    blocks.data,
  );

//블록의 해쉬 검증

//이전의 블록과 새로운 블록의 검증 함수
const isValidBlock = (
  candidatedBlock: Block,
  previousBlock: Block,
): boolean => {
  if (!Block.validateStructure(candidatedBlock)) {
    return false;

    //이전 블록의 인덱스 +1이 candidate block의 index와 같지않다면 FASLE
  } else if (previousBlock.index + 1 !== candidatedBlock.index) {
    return false;

    //이전 블록의 hash가 candidate block의 previous hash 와 같지 않다면,
  } else if (previousBlock.hash !== candidatedBlock.previousHash) {
    return false;

    //해쉬를 계산했는데 다른 해쉬를 갖고있다면,
  } else if (getHashforBlock(candidatedBlock) !== candidatedBlock.hash) {
    return false;
  } else {
    return true;
  }
};

//아무것도 RETURN하지 않을 경우 void
const addBlock = (candidateBlock: Block): void => {
  if (isValidBlock(candidateBlock, getLatestBlock())) {
    block_chain.push(candidateBlock);
  }
};
createNewBlock('두번 째');
createNewBlock('세번 째');
createNewBlock('네번 쨰');

console.log(block_chain);
export {};
