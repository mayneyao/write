import { IBlock } from './block';

export type IEditorState = {
  blocks: string[];
  blockMap: {
    [blockId: string]: IBlock;
  }
}