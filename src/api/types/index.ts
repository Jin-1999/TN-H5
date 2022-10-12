// * 接口返回结构
export type Result<T> = {
  code: number;
  msg: string;
  data: T;
};
