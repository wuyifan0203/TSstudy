var One = /** @class */ (function () {
    function One(_a) {
        var name = _a.name, age = _a.age, sex = _a.sex, country = _a.country;
        this.name = name;
        this.age = age;
        this.country = country;
        this.sex = sex;
    }
    One.prototype.drink = function (water) {
        return this.name + ' drink ' + water;
    };
    One.prototype.sleep = function () {
        console.log(this.name + " is sleeping");
    };
    One.prototype.eat = function (food) {
        return this.name + ' eat ' + food;
    };
    One.prototype.setID = function (idNumber) {
        this.idNumber = idNumber;
    };
    One.prototype.getID = function () {
        return this.idNumber;
    };
    return One;
}());
var wyf = new One({
    name: 'wyf',
    age: 22,
    sex: 'man',
    country: 'China'
});
wyf.eat('rice');
