class WeaponBuilder {
    constructor() {
        this.weapon = {};
    }

    setCatogory(category) {
        this.weapon.category = category;
        return this;
    }

    setDamage(damage) {
        this.weapon.damage = damage;
        return this;
    }

    build() {
        return this.weapon;
    }
}

const sword = new WeaponBuilder()
    .setCatogory("combat weapon")
    .setDamage("+10 %")
    .build();

const grenade = new WeaponBuilder()
    .setCatogory("explosives")
    .setDamage("+100 %")
    .build();


console.log(sword);
console.log(grenade);