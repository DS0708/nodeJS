// __proto__를 이용한 상속
const animal = {
    leg: 4,
    tail: 1,
    say() {
        console.log('I have 4 legs 1 tail');
    }
}

const dog = {
    sound: 'wang'
}

const cat = {
    sound: 'yaong'
}

dog.__proto__ = animal;
cat.__proto__ = animal;

console.log(dog.leg); // 4
console.log(dog.sound)
console.log(cat.sound)