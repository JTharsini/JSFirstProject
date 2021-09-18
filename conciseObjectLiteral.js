const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Peter", 32, "male"));

// it can be written another way
const createPersonDestructured = (name, age, gender) => (
    { name, age, gender }
);

console.log(createPersonDestructured("Peter", 32, "male"));