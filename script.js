console.log("Hello world");

// weird scope - Don't use
// var x = 5;
// Regular old variable
let y = 6;
y=10; // youcan change the value

const z = 7; // this is a constant. can't be changed
// z= 10 // this throws and error.

console.log(y,z);
console.log(y+z);
console.log(y-z);
console.log(y*z);
console.log(y/z);
console.log(y%z); // This does division but returns the remainder
console.log(y**z); // exponents

let fname=" Shazia";
let lname="Ahmadi";
console.log(fname + " " + lname);

console.log('${ fname} ${ lname }');
console.log('${ fname} ${ 5*9 }');
console.log( lname + 6 );


let user = "Shazia";
let pass = "foo";

if (user == " shazi") {
    console.log ('tou are  '+ user);
}

user = "Shazi";
if (user == "shazi"){

} else {
    console.error("DENIED"); {
    }

user = "shazi";
if (user == " shazi" && pass == "foo") {
    console.log ('you are  ' + user + ' and your pass is ' + pass);
} else {
console.error("DENIEED")
}

  const license = 18;
  const jrop = 16;
  const rental = 25;   

   function checkAge( myAge) {
  console.log('RUNIGN ...'+myAge);
  if (myAge < license && myAge >= jrop){
    
  }
 
  console.log('you can have a jr0p ;license');

  }

  if (myAge >+license) {
     console.log('you can have a regular license');
  }
  
 if (myAge >= rental){
    console,log('you can rent a car');

}
if (myAge < jrop) { 
    console.log("You're too young to drive");
     }
}

checkAge(6);
checkAge(17);
checkAge(19);
checkAge(37);
 