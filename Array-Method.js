//shift/unshift
let weapons = ["dagger","Mace","Sword","Rapier","Axe"] //array of weapon
weapons.shift() //remove dagger from weapon, because it's in first position
weapons.shift() //remove Mace from weapon, because now it's in first position
weapons.unshift("dagger") //add dagger back into weapon at first decision
weapons.unshift("Mace") //add Mace back into weapon at first decision
console.log(weapons)