//JSON.stringify converts anything to string
//JSON.parse converts string to previous format

const user = {
    id: 1,
    name: 'Anik',
    isMarried: false,
    job: 'Actor'
};
console.log(user);
const userStringfy = JSON.stringify(user);
console.log(userStringfy);

const actor = {
    name: 'Shakib',
    location: {
        street: 'kochukhet',
        city: 'ranbir',
        country: 'BD'
    },
    salary: 40000,
    products:['Ami','Tumi','She'],
    isGood: false,
}
console.log(actor);
//JSON.stringify converts anything to string
const actorString = JSON.stringify(actor);
console.log(actorString);

//JSON.parse converts string to previous format
const actorObj = JSON.parse(actorString);
console.log(actorObj);