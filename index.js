
const moment = require("moment");

const date = new Date()
const setdate = date.setDate(25);
// const setyear = date.setFullYear(2023);

//formate
//     console.log(moment(date).format('DD MMMM YYYY'));
//     console.log(moment(date).format('YYYY MMMM Do'));

//FromNow
//     console.log(moment(setdate).fromNow());
//     console.log(moment(setyear).fromNow());
//     console.log(moment().startOf('day').fromNow());
//     console.log(moment().endOf('days').fromNow());

//Calendar Time
    // console.log(moment().subtract(1,'month').format('DD MM YY'));
    // console.log(moment().calendar());

//Multi Local Supports
//    console.log(moment().locale());
//    console.log(moment().format('L'));
//    console.log(moment().format('LT'));
//    console.log(moment().format('LTS'));

//set the minute, seconds, hours ,  miliseconds etc.. 
// console.log(moment().minute('26'));
//Give the year of day
// console.log(moment().dayOfYear(2));

//give the weeks 
// console.log(moment().week(6));

// console.log(moment().isoWeek(6));

// console.log(moment().set('year',2020));
// console.log(moment().set('date',2));
// console.log(moment().set('minute',55));

//add
 // console.log(moment().add(2,'d'));
 // console.log(moment().subtract(2,'d'));

 //Query

console.log(moment('2010-10-20').isBefore('2010-10-20'));
console.log(moment('2010-11-10').isSame('2010-11-10'))
