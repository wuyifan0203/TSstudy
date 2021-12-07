import { type } from "os";

function generic<T,U>(a:T,b:U): T & U{
    return a as T & U
}

let result=generic('cccc',2)
console.log(result);

// 头像接口类型
export interface DataAvator {
    avator?: string
    time?: number | string
    name?: string
  }
  
// 提问数据接口类型
export interface Qs {
  quesitons: {
    title: string
    picture: string[]
  }
}
  
// 问题接口数据类型
export interface As {
  answers: {
    text: string
    audio?: {
      url: string
      total: number
    }
  }
}
type Mixin<T, X> = T & X;
  
type MixWithDataAvator<T> = Mixin<DataAvator, T>;

// 组装Qs和As 拼接成想要的复杂数据类型
export interface AskConfig {
  asker: MixWithDataAvator<Qs>
  answer?: MixWithDataAvator<As>
}

// 最终输出列表数组类型
export type AskConfigList = AskConfig[];

interface A {
    name: string
    age: number
  }
  
interface B {
  name: number
  id: string
}
  
type Union = A | B;
type Union2 = A & B;

const c: Union
