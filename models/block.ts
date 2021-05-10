import { SHA256 } from 'crypto-js';

export default class Block {
  private timestamp: number;
  private nonce: number;

  constructor() {
    this.timestamp = Date.now();
    this.nonce = 0;
  }

  public hash(): string {
    return SHA256(this.timestamp + '' + this.nonce).toString();
  }
}
