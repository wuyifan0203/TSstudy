type Sex='man'|'woman'
interface Person{
    name:string;
    age:number;
    sex:Sex;
    // idNumber:string; // 只读属性
    // country?:string; // 可选属性
    [params:string]:any // 任意属性

    eat(food:string):string
    drink(water:string):string
    sleep():void
}
class One implements Person{
    static className:string='One'
    public name:string
    public age:number
    public sex:Sex
    readonly  idNumber:string
    private country:string
    constructor(name:string,age:number,sex:Sex,country:string,id:string){
        this.name=name;
        this.age=age;
        this.country=country;
        this.sex=sex;
        this.idNumber=id;
    }
    drink(water: string): string {
        return this.name+' drink '+water;
    }
    sleep(): void {
        console.log(`${this.name} is sleeping`);
    }
    eat(food:string):string{
        return this.name+' eat '+food;
    }
    getID():string{
        return this.idNumber
    }
    static log(){
        return console.log('输出些什么...');   
    }

    static print(o:One){
        return console.log(One.className+' '+o.name +' '+ o.age);
    }
}
let wyf=new One(
    'wyf',
    22,
    'man',
    'China',
    '9527'
)
console.log(wyf.eat('rice'));
const id=wyf.getID();
console.log(id);
One.log()
One.print(wyf)


