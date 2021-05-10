import Block from './block';

export default class Blockchain {
  private blocks: Array<Block> = [];

  public addBlock(block: Block): void {
    this.blocks.push(block);
  }

  blockHeight(): number {
    return this.blocks.length;
  }
}
