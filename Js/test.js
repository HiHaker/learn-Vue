// console.log("\u2620");
// console.log("1111" < 5);
// var a = 10;
// console.log(a == 4);
// console.log("1" == 1);
// var b = NaN;
// console.log(isNaN(b));

// var obj = new Object();
// console.log(typeof obj);
// obj.name = "老孙";
// obj.gender = "男";
// obj.age = 18;
// console.log(obj.age);

// var obj = {name:"猪八戒",age:8,size:"max"};
// console.log(obj);

// var obj = {
//     name:"shadiao",
//     age:22,
//     nickname:"hanbao"
// };

// console.log(obj);

// var fun = new Function("console.log('这是我的第一个js函数');");

// function myFunc(){
//     console.log('我的第二个函数');
// }

// function sum(a,b){
//     console.log(a+b);
// }

// sum(true,false);

// function sum(a,b,c){
//     return (a+b+c);
// }

// var result = sum(1,2,3);
// console.log(result);

// 

function fun(){
    console.log(this);
}

// fun();

var obj = {
    name:"lala",
    sayName:fun
}

obj.sayName();