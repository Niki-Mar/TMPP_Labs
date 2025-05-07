const characterPrototype = {
    name: "N/A",
    race: "N/A",
    age: "N/A",
    gender: "N/A",
    class: "N/A",
    clone() {
        return Object.create(this);
    }
}

const firstCharacter = characterPrototype.clone();
firstCharacter.name = "John";
firstCharacter.race = "Human";
firstCharacter.age = "20";
firstCharacter.gender = "Male";
firstCharacter.class = "Warrior"
const test = characterPrototype.clone();
test.clone();

const secondCharacter = characterPrototype.clone();
secondCharacter.name = "Lily";
secondCharacter.race = "Elf";
secondCharacter.age = "420";
secondCharacter.gender = "Female";
secondCharacter.class = "Hunter";

console.log("Original: ", characterPrototype);
console.log("FirstCharacter: ", firstCharacter);
console.log("SecondCharacter: ", secondCharacter);
console.log(test);