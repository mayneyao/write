import { IBasicBlock, IBlockType } from "./block";

export enum ITextDecoratorType {
  bold = 'b',
  underline = 'u',
  italicize = 'i',
  hue = 'h',
  strikeThrough = 's',
  code = 'c',
}

export type ITextSegment = {
  text: string;
  decorator?: ITextDecoratorType[];
}

export interface ITextBlock extends IBasicBlock {
  type: IBlockType.text,
  inline: false;
  value: ITextSegment[];
}
