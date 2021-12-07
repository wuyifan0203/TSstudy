"use strict";
exports.__esModule = true;
function main() {
    function genter(user) {
        return 'Hello !' + user;
    }
    var user = 'wuyifan';
    var user2 = 513;
    var person = genter(user);
    console.log(person);
    var person2 = genter(user2);
    console.log(person2);
}
main();
