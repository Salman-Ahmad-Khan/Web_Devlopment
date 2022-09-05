// const course={
//     lecture:10,
//     section:4,
//     title:'javascript',

//     //nesting of object
//     notes:{
//         introduction:'welcome to JS course'
//     },

//     //function
//     enroll(){
//         console.log("you're successfully enrolled");
//     }
// }

// course.enroll();
// console.log(course.title)
// console.log(course)

// //adding new property
// course.price=999;
// console.log(course)


//factory function

function createCourse(author){
     return {
        lecture:10,
        section:4,
        title:'javascript',
        author:author,
    
        //nesting of object
        notes:{
            introduction:'welcome to JS course'
        },
    
        //function
        enroll(){
            console.log("you're successfully enrolled");
        }
        
}
}

const course=createCourse("Salman");
console.log(course.notes)
course.enroll()
console.log(course.author)


//constructor function
function Course(title,price,author){

    this.title=title,
    this.price=price,
    this.author=author,
    //adding a function
    this.enroll= function() {
        console.log("you're successfully enrolled");
    }
}

const course1=new Course('python nd javascript',699,'prime');
console.log(course1.title)
course1.enroll()
console.log(course1.price)

console.log(course1)
console.log(course1.constructor)

//delete any property
delete course1.author;
delete course1.enroll;
console.log(course1)

course1.checkEnrollment=function(){
    console.log('45 students are enrolled');
}

console.log(course1)
course1.checkEnrollment()

delete course1.checkEnrollment
console.log(course1)




//primitive datatype
let number=21;
let number2=number; //pass by value
console.log(number)
console.log(number2)

number=541
console.log(number)
console.log(number2)


//reference datatype

let obj={
    number:51
}
let obj2=obj; //pass by reference

obj.number=69
console.log(obj)
console.log(obj2)



const course4=  {
    lecture:10,
    section:4,
    title:'javascript',
    author:'Salman',

    //nesting of object
    notes:{
        introduction:'welcome to JS course'
    },

    //function
    enroll(){
        console.log("you're successfully enrolled");
    }
    
}
console.log(course4)


//using spread operator to copy the properties of an object
const course5={...course4}
console.log(course5)
course5.title='python';
console.log(course5)


//for in loop

let animal = {
    name: "cow",
    legs: 4,
    eyes: 2,
    tail: 1,
    color: "white"
 }

 for(let key in animal){
    console.log(key,animal[key])
 }


 