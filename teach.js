// function add()
// {
//     let a =10;
//     let b =20;

//     let sum = a +b ;
//     // document.write(sum);
//     // alert(sum); //Display Alert Box

// }

// function variable()
// {
//   let car = "Maruti";
//   window.alert(car);
// }


// for (let i = 0; i<= 10; i++)
//     {
//        console.log(i);
//     }


// let ary =['a','b','c','d'];
// let find = 'a'
// for(find in ary)
// {
//     console.log('Yes');
// }

// var ary =['a','b','c','d'];
// var ap = "";

// for (var x of ary)
// {
//     ap += x;
//     console.log(x);
// }

// var st = "Abcdser";
 
// for (var x of st)
// {
//     console.log(x);
// }

// var a = 10;
// while(a > 0)
// {
//     console.log(a);
//     a--;
// }

// var x =10;

// do{
//     console.log(x);
//     x--;
// }
// while(x > 0);


// for (var i=0; i<10; i++)
// {
//    if(i == 5)
//    {break;}
//    console.log(i);
// }


// for (var i=0; i<10; i++)
// {
//    if(i == 5)
//    {continue;}
//    console.log(i);
// }

// var num = 15;
// var count = 0 ;
// for(var i = 2; i < num; i++)
// {
//  if(num % i == 0)
//  {
//     count++;
//     break;
//  }

// }
// if(count == 0)
// {
//     console.log("Prime");
// }
// else{
//     console.log("Not Prime...")

// }

// var a = 10;
// var b = 50;
// var c = 40;
// var d = 0;

// if(d == 0)
// {
//     if(a > b && a > c)
//     {
//         console.log("A Is Big...");
//     }
//     else if(b > a && b > c)
//     {
//         console.log("B IS Big...");
//     }
//     else
//     {
//         console.log("C Is Big...");
//     }
// }
// else
// {
//     if(a < b && a < c)
//     {
//         console.log("A Is Small");
//     }
//     else if(b < a && b < c)
//     {
//         console.log("B Is Small...");
//     }
//     else{
//         console.log("C Is Small");
//     }
// }

// var a = 10;
// var b = 20;
// var c ;

// console.log("Before Swapping...");
// console.log(a);
// console.log(b);
// c = a;
// a = b;
// b = c;
// console.log("After Swapping...");
// console.log(a);
// console.log(b);

// const getWord=(num)=>{
//     switch(num){
//         case 0:
//             return "Zero";
//         case 1:
//             console.log("inside One")
//                 return "One";
//         case 2:
//             console.log("inside Two")
           
//                 return "Two";
//         }
// }
// console.log(getWord(1))
// function myfun(a , b)
// {
//      return a + b; 

// }

// addition = myfun(10,5);
// // console.log(myfun(10,5));
// console.log(addition);

// function myfun(a , b)
// {
//      sum = a + b; 
//     console.log(sum);
// }
// myfun(10,5);


// function myfun()
//     {
//         console.log("Hello");
//     }
//     myfun();

//  function square( a )
//  {
//     console.log(a * a);
//  }

//  square(7);

// function sb()
// {
//     var a = 10;
//     var b = 20;
//     return [a , b];
// }

// console.log(sb())

// function cube(a)
// {
//     cb = a * a * a; 
//     console.log(cb)
// }

// cube(5);

// function myfun(a,b)
// {
//     sum = a+b;
//     return sum; 
// }

// console.log(myfun(10,5));


// let number  = 153;
// temp = number ;
// sum = 0;

// while(temp > 0)
// {
//     let reminder = temp % 10;
//     sum += reminder * reminder * reminder;
//     temp = parseInt(temp/10);
// }

// if(number == sum)
// {
//     console.log("Armstrong Number...");
// }
// else{
//     console.log("Not ArmStrong Number...");
// }


// Object

// let person = {
//     'name' : "Abc",
//     'age' : 25,
//     'mobile no ' : 3519654,
//     }
// console.log(person);

// console.log(person.name);

//Adding Value In Empty Object 
// let per = {

// };

// per.name = 'abc';
// per.age = 12
// console.log(per);

//create the object using new keyword

// let per = new Object();

// per.name = 'abc';

// console.log(per);
// console.log(per['name']);
// console.log(per.name);

// let per = {
//     'name': 'abc',
//     'age' : 12,
//     'full' : function()
//     {
//         // console.log(this.name + "  "+ this.age);
//         //return this.name + " "+ this.age;
//     } 
// }
//  delete per.age;

// //  console.log(per);

//  let per = {
//     'name': 'abc',
//     'age' : 12,
//     'full' : function()
//     {
//         // console.log(this.name + "  "+ this.age);
//         //return this.name + " "+ this.age;
//     } 
//   }
//   const del = delete per.age;

//   console.log(del);

// let per = {
//     name : 'abc',
//     age : 12,
//     address : 
//     {
//         perm : "Abcd",
//         tem : "abcd",
//         city : 
//         {
//             tem : "am",
//             per : "mn"
//         }     
//     }
// }

// console.log(per.address.city.per);

// const per = {
//     name : 'abc',
// };

// per.age = 24;

// per['name'] = 'abc';
// console.log(per);

// let per = {
//     name : 'abc',
//     age : 24
// };


// for (let x in per)
// {
//     console.log(per[x]);
// }

// console.log(Object.values(per));
// console.log(Object.keys(per));

// let txt = " ";

// for (var [nm, value] of Object.entries(per));
// {
//     txt += nm + " : " + value;
//     console.log(txt);
// }

// let mystring = JSON.stringify(per);
//  console.log(typeof(mystring));

// function Person(nm , age)
// {
//       console.log(this.name = nm);
//       console.log(this.ages = age);
// }

// Person.prototype.add = "lwe";
// let Pr = new Person("abc",12);

// console.log(Pr.add);

// const pe = {
//     name : "anc"
// };

// const pe1 =
// {
//    age : 24
// };

// Object.assign(pe, pe1);
// console.log(pe);
// console.log(pe1);

// let per = {
//     name:'abc',
//     ahe:25
// };

// Object.freeze(per);

// per.name = "rld"

// console.log(per);


// let ary = ['abc','fss','dfsa'];

// console.log(typeof(ary));

// console.log(ary[0]);

// let str = ary.toString();
// console.log(typeof(str));

// let ary = ['a','d','e'];

// ary[0] = 'r';

// console.log(ary);

// let ary = ['a',12,'b'];

// console.log(ary);

// let name = ['asc','fsa',12,'saa'];

// console.log(name.sort());

// let ary = ['avc',12,'add','ad'];
// console.log(ary.length);

// let ary = ['sac',12,'asd'];

// let st = ary.toString();

// console.log(typeof(st));

// let ary = [1,23,3,4];
// console.log(ary[ary.length-1]);

// let ary = [1,2,3,4,5,6];

// console.log(ary.at(5));

// let ary = [1,2,3];

// let jon = ary.join("*");
// console.log(jon);

// let con = [1,2,3,4,5,6];

// con.pop();

// console.log(con);

// let con = [1,2,3,4,5];

// con.push(7);

// console.log(con);
  //concating
//   let con = [1,2,3,4,5];
//   let co = [10,11,12];
//   console.log(con.concat(co));


// let ary = [1,2,3,4,5];
// ary.splice(0,3,'a');

// console.log(ary);

// let ary = [1,2,3,4];
//  console.log(ary.toSpliced(0,0,'abc'));

//console.log(tosp);

// let ary = ['a','c','s','f','r'];

// let ch =ary.slice(3);

// console.log(ch);

// let ary = ['x',2,'c'];

// ary.forEach((element)=>{
//   console.log(element);
// })

// let sq = [1,2,3];

// console.log(sq.map((num)=> num*num));

// let chek = [1,12,18,16];
// let ft = chek.filter((chek) => chek < 18);

// console.log(ft);

// let num = [1,2,3,4,5,6];
            
// const sum =  num.reduce((initvalue, currentval)=>
  
//          initvalue + currentval,0
  
//   );

//   console.log(sum);

  // const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

// let num = [1,2,3,4,5,6];
            
// const sum =  num.reduce((accumulator, currentValue)=>
//   {
//          return accumulator+currentValue;
//   }
//   );

//   console.log(sum);

// let obj = {
//   name:'abc',
//   age:22
// };

// const ob1 = {
//   ...obj,
//   name : 'def'
  
// };
// console.log(ob1);

// let ary = [1,2,3,4,5,6,7];

// const rev = ary.reverse();

// console.log(rev);

// let sor = ['e','h','a','b'];
// let sor = [53,35,60,40];
// console.log(sor.toSorted());
// console.log(sor.sort());

// let ary = [1,2,3,4,5,6,7];
// const rev = ary.toReversed();
// console.log(rev);

// let arr = [1,2,3,4,5,6,7];


// let response={
//   message:"data save successfully",
//   data:{}
// }
// let message="Data save successfully"

// if(response.message.toUpperCase === message.toUpperCase){
//   console.log("Matched")
// }
// else{
//   console.log("Not Matched")
// }

// let obj = {
//   name:'abc',
//   age : 23
// }

// let {name, age} = obj

// console.log(name);

const num = ['a',10,20,30,40,50,60];

const [a, b, ...rest] = num;

console.log([a,b,...rest]);