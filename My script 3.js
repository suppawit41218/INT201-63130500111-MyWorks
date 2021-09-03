let Weapons = { pistols : ["Barette","Desert Eagle"]}
Weapons.Rifles = ["M16 Assualt Rifle","M4 Assualt Rifle","Kar98 Sniper rifle","AK47"];
Weapons.Heavy = ["Grenade Lancher","Rocket Lancher","RPG"];
Weapons.melee = ["Machete","Short knife","Hatchet"]

let accessories = { gadget : ["M1 Grenade","M2 Greanade","Smoke Bomb","C4 Bomb","Flashbang","Mines"]}
accessories.Medical = ["First Med kit","Ardernaline injector","Bandage","Painkiller"]
accessories.Camouflauge = ["Deep Jungle","Dry Desert","Grass","Deep Blue","Moutain"]

let arsenal = {Weapons,accessories};

console.log("\n Weapons")
for(let show in arsenal.Weapons){
    console.log(show+" : "+arsenal.Weapons[show]);
}
console.log("\n accessories");
for(let show in arsenal.accessories){
    console.log(show+" : "+arsenal.accessories[show]);
    }