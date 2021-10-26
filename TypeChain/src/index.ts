class Block {
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

const genesisBlock: Block = new Block(0, '112312312321', '', 'Target', 123);
let block_chain: [Block] = [genesisBlock];
console.log(block_chain);

// 타입 설정으로 오른쪽과같이 아무런 내용이나 들어가는 자바스크립트와는 다르게 사전에 예방해준다. block_chain.push('stuff');
export {};
