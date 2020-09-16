export enum IBlockType {
  text = 'p',
  uList = 'ul',
  oList = 'ol',
  listItem = 'li',
  Header = 'h',
}

export type IBaseBlock = {
  id: string;
  createBy: string;
  updateBy: string;
  createAt: number;
  updateAt: number;
}

export type IBlock = IBaseBlock & {
  type: IBlockType,
  value: any,
  style: {
    width: string,
    color: string,
    backgroundColor: string,
  },
  children: string[]; // ids
  inline?: Boolean;
  isAppBlock?: Boolean;
}

export type IBasicBlock = IBlock & {
  isAppBlock: false;
}