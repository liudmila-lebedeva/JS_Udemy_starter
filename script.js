//var firstName = 'John';
//console.log(firstName);
//
//var lastName = 'Smith';
//var age = 28;
//
//var fullAge = true;
//console.log(fullAge);
//
//var job;
//console.log(job);
//
//job = 'Teacher';
//console.log(job);


//Type coercion

// var firstName = 'John';
// var age = 28;

// console.log (firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + 'is a'+ job + 'year old' + job + '. Is he married? ' + isMarried);

// //Varisble mutation
// age = 'twenty eight';
// job = 'driver';
// alert (firstName + ' is a '+ age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);


//Math operators
/*var year, yearJohn, yearMark;
year = 2020;
ageJohn = 28;
ageMark = 33;
yearJohn = year - ageJohn;
yearMark = year - ageMark;

console.log(yearMark);
console.log(year + 2);

//Logical Operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older then John');
var x;
console.log(typeof x);*/

//Operator precedence

// var now = 2020;
// var yearJohn = 1989;
// var fullAge = 18;

// //Multiple operators

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// //Groupping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var avarage = (ageMark +ageJohn) / 2;
// console.log(avarage);

// //Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 
// console.log(x, y);

// //More operators
// //x = x * 2;
// x *= 2;
// console.log(x);

// //x = x + 10;
// x += 10;
// console.log(x);

// x++;
// console.log(x);


// var massMark, heightMark, massJohn, heightJohn;

// massMark = 75;
// heightMark = 1.80;

// massJohn = 80;
// heightJohn = 1.93;

// var bmiMark = massMark / (heightMark * heightMark);

// var bmiJohn = massJohn / (heightJohn * heightJohn);

// console.log(bmiMark, bmiJohn);

// var whoIsBigger = bmiJohn > bmiMark;

// console.log('Is John bigger than Mark? ' + whoIsBigger);


//if else statement

/*var firstName = 'John';
var sivilStatus = 'single';

if (sivilStatus === 'married') {
    console.log(firstName + ' is married');
} else  {
    console.log(firstName + ' is lucky because he is single');
}
    

var isMarried = true;
if (isMarried === true) {
    console.log(firstName + ' is married, poor guy');
} else {
    console.log(firstName + ' is lucky because he is single');
}


var massMark, heightMark, massJohn, heightJohn;

massMark = 75;
heightMark = 1.80;

massJohn = 80;
heightJohn = 1.93;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);


if (bmiMark > bmiJohn) {
    console.log('Mark is bigger than John');
}  else {
    console.log('John is bigger than Mark');
}


var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
}*/




//The Ternary Operator and Switch Statements


//The Ternary Operator
// var firstName = 'John';
// var age = 13;

// age >= 18 ? console.log (firstName + ' drinks beer') : console.log (firstName + ' drinks juce');

// var drink = age >= 18 ? 'beer' : 'juce';
// console.log(drink); 

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juce';
// }
// console.log(drink); 

// //Switch Statements

// var job = 'instructor';

// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log (firstName + ' teachs kids how to code');
//         break;
//     case 'driver':
//         console.log (firstName + ' drives an Uber in Lisbon');
//         break;
//     case 'designer':
//         console.log (firstName + ' designes beautiful web sites');
//         break;
//     default:
//         console.log (firstName + ' does something else');

// }


// var firstName = 'John';
// var age = 15;

// switch (true) {
//     case age < 13: 
//         console.log(firstName + ' is a boy'); 
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man');  
    
    
// }

// //Truthy and Falsy Values and Equality Operators

// //Falsy Values: undefined, null, 0, '', NaN
// //trithy values: not falsy values

// var height;
// height = 23;

// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has NOT been defined');
// }

// //Equality Operators

// if (height == '23') { //== превращает строку в номер
//     console.log('The == operatios does type coercion');
// }


// var firstName = 'John';
// var friendName = 'Mark';

// var jScore1 = 10;
// var jScore2 = 10;
// var jScore3 = 10;

// var mScore1 = 10;
// var mScore2 = 10;
// var mScore3 = 10;

// var jAvarageScore = (jScore1 + jScore2 + jScore3) / 3;
// var mAvarageScore = (mScore1 + mScore2 + mScore3) / 3;

// console.log(jAvarageScore, mAvarageScore);

// if (jAvarageScore > mAvarageScore) {
//     console.log(firstName + ' is the winner');
// } else if (jAvarageScore < mAvarageScore) {
//     console.log(friendName + ' is the winner');
// } else {
//     console.log('it is a draw');
// }

// var girl = 'Marie';
// var gScore1 = 10;
// var gScore2 = 10;
// var gScore3 = 10;
// var gAvarageScore = (gScore1 + gScore2 + gScore3) / 3;
// console.log(gAvarageScore);

// switch (true) {
//     case jAvarageScore > mAvarageScore && jAvarageScore > gAvarageScore: 
//         console.log(firstName + ' is a winner'); 
//         break;

//     case mAvarageScore > jAvarageScore && mAvarageScore > gAvarageScore: 
//         console.log(friendName + ' is a winner'); 
//         break;

//     case gAvarageScore > jAvarageScore && gAvarageScore > mAvarageScore: 
//         console.log(girl + ' is a winner'); 
//         break;
    
//     default:
//         console.log('There is a draw'); 
// }


//Functions

// function calculateAge(birthYear) {
//     return 2020 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' is retires in '  + retirement + ' years');
//     } else {
//         console.log(firstName + ' is already retired');
//     }
    
// }

// yearsUntilRetirement (1990, 'John');
// yearsUntilRetirement (1948, 'Mike');
// yearsUntilRetirement (1969, 'Jane');


// //Arrays

// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1948, 1960);

// console.log(names);
// console.log(names.length);

// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// //push добавляет элемент в конец

// var john = ['John', 'Smith', 1990, 'designer', false];
// john.push('blue');
// console.log(john);

// //unshift добавляет элемент вперед
// john.unshift('Mr.');
// console.log(john);

// //pop удаляет элемент с конца
// john.pop();
// john.pop();
// console.log(john);

// //shift удаляет первый элемент
// john.shift();
// console.log(john);

// //indexOf показывает номер позиции элемента
// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
// console.log(isDesigner);


// var bills = [124, 48, 268];

// function calculateTip(bills) {
//     if(bills < 50) {
//         return bills * 0.2;
//     } else if (bills > 50 && bills < 200){
//         return bills * 0.15;
//     } else {
//         return bills * 0.1;
//     }
// }

// var finalBills = [calculateTip(bills[0]) + bills[0], calculateTip(bills[1]) + bills[1], calculateTip(bills[2]) + bills[2]]; 

// console.log(bills, finalBills);

// //Objects and properties

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Mark', 'Jane', 'Bob', 'Emilie'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// console.log(john['lastName']);


// //how to change properties
// john.job = 'designer';
// john['isMarried'] = true;

// console.log(john);

// //new object sintax

// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1987;
// jane['lastName'] = 'Smith';

// console.log(jane);

// //objects and methods

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Mark', 'Jane', 'Bob', 'Emilie'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(){
//         this.age = 2020 - this.birthYear; //this = john
//     }
// };

// john.calcAge();
// console.log(john);


// //coding challenge 4 *******************************************************

// var john = {
//     firstName: 'John',
//     mass: 110,
//     height: 1.93,
//     calcBMIjohn: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// john.calcBMIjohn();
// console.log(john);

// var mark = {
//     firstName: 'Mark',
//     mass: 75,
//     height: 1.80,
//     calcBMImark: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// mark.calcBMImark();
// console.log(mark);

// if (john.bmi > mark.bmi) {
//     console.log(john.firstName + ' has ' + john.bmi + ' BMI');
// } else if (john.bmi < mark.bmi) {
//     console.log(mark.firstName + ' has ' + mark.bmi + ' BMI');
// } else {
//     console.log(mark.firstName + ' and' + john.firstName + ' have the same BMI');
// }
    
//*************loop and iteration***********************************
// FOR loop
// for (var i = 1; i <= 20; i++) {
//     console.log(i);
// }

// for (var i = 0; i <= 20; i+=2) { //увеличить на два
//     console.log(i);
// }

// //выводим весь массив в консоль

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }


// //while loop******

// var i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }

//continue and break statements  отразить только строку
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

//break останавливается, там где появляются ограничения - не строка, например
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}

//************* Coding Challenge 5 ******************


var john = {
        name: 'John',
        bills: [124, 48, 268, 180, 142],
        tips: [],
        finalBills: [],
        calcTips: function () {
            for (i = 0; i < this.bills.length; i++) {
                if(this.bills[i] < 50) {
                    this.tips[i] = this.bills[i] * 0.2;
                    
                } else if (this.bills >= 50 && this.bills[i] < 200){
                    this.tips[i] = this.bills[i] * 0.15;
                    
                } else {
                    this.tips[i] = this.bills[i] * 0.1;
                } 
                this.finalBills[i] = this.tips[i] + this.bills[i];
            }
        },

                
};



var mark = {
    name: 'Mark',
    bills: [77, 375, 110, 45],
    tips: [],
    finalBills: [],
    calcTips: function () {
        for (i = 0; i < this.bills.length; i++) {
            if(this.bills[i] < 100) {
                this.tips[i] = this.bills[i] * 0.2;
                
            } else if (this.bills > 100 && this.bills[i] < 300){
                this.tips[i] = this.bills[i] * 0.1;
                
            } else {
                this.tips[i] = this.bills[i] * 0.25;
            } 
            this.finalBills[i] = this.tips[i] + this.bills[i];
        }
    },

            
};

john.calcTips();
mark.calcTips();
console.log(mark, john);


function calcAvgTips(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return (sum/tips.length);
}

mark.avarageTips = calcAvgTips(mark.tips);
john.avarageTips = calcAvgTips(john.tips);
console.log(john, mark);

if (john.avarageTips > mark.avarageTips) {
    console.log(john.name + ' gives more tips')
} else if (john.avarageTips < mark.avarageTips) {
    console.log(mark.name + ' gives more tips')
} else {
    console.log('they give the same tips');
}



