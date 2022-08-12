//import { Observable, from } from 'rxjs';
const rxjs = require('rxjs')


// basic rxjs template
function basicExample() {

let nums$ = rxjs.from([-2,-1,0,1,2]);

let observer = {
    next: value => console.log(value),
    error: err => console.log(`ERROR: ${err}`),
    complete: () => console.log('done.')
};

nums$.subscribe(observer); // -2, -1, 0, 1, 2

}

// basic, with observer shortcut
function basicShortExample() {
    let nums$ = rxjs.from([-2,-1,0,1,2]);
    // the observabler is passed in implicly/annon
    nums$.subscribe(
        value => console.log(value),
        err => console.log(`error: ${err}`),
        () => console.log('done')
    ); 
}

// custom observable
function customExample() {

let customObserable =  new rxjs.Observable( subscriber => {

    if (newValue) {
        subscriber.next(newValue);
    }

    if (newError) {
        subscriber.error(newError);
    }

    if (done) {
        subscriber.complete();
    }

});

}

// operators 
function operatorExample() {

let nums$ = rxjs.from([-2,-1,0,1,2]);

let observer = {
    next: value => console.log(value),
    error: err => console.log(`ERROR: ${err}`),
    complete: () => console.log('done.')
}

nums$.pipe(
    rxjs.filter( num => num > 0), // gets pos nums -> 1 , 2
    rxjs.map(postiveNum => postiveNum * 3) // chains mutiply by 3 -> 3 , 6
)
.subscribe(observer); // 3 , 6

}

// even numbers example
function evenExample() {

let nums = [2,4,5,8,10]
let evenNums$ = rxjs.Observable.create( subr => {
    for (let num of nums) {
        if (num % 2 === 0) {
            subr.next(num)
        }
        else {
            subr.error('value is not even');
        }
    }
});

evenNums$.subscribe(
    (value) => console.log(value),
    (err) => console.log(`Error: ${err}`),
    () => console.log('done')
); // 2, 4, error
// when error occurs, error will be ran and complete doesnt run

}

evenExample();
