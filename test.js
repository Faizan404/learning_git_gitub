console.log("Test Hello World");
console.log("Phase 1 Testing! ");

setTimeout(() => {
    console.log("Phase 2 Testing! ");
}, 1000);

console.log("Phase 3 Testing! ");

const calcAge = function(birthYear){
    return 2024 - birthYear;
}
console.log(calcAge(1995));
