document.querySelector('form').addEventListener('submit', checkAge);


const license = 18;
const jrop = 16;
const rental = 25;

function checkAge(e) {
    e.preventDefault();

let myAge = document.querySelector('input').value;

let message = "";
console.log('RUNIGN ...' + myAge);
    if (myAge < license && myAge >= jrop) {
         message += 'you can have a jr0p ;license';
    }

    if (myAge > +license) {
         message+='you can have a regular license';
    }

    if (myAge >= rental) {
     message += 'you can rent a car';

    }
    if (myAge < jrop) {
        message+= "You're too young to drive";
    }
}