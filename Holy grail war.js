class Servant{
    constructor(name,noblephantasm,servantnum){
        this.name = name
        this.noblephantasm = noblephantasm
        this.servantnum = servantnum
    }
    classofservant(){
      switch(this.servantnum){
          case 1 : return "Saber" ; break;
          case 2 : return "Archer" ; break;
          case 3 : return "Rider" ; break;
          case 4 : return "Lancer" ; break;
          case 5 : return "Berserker" ; break;
          case 6 : return "Caster" ; break;
          case 7 : return "Assasin" ; break;
          default : return "Unknow" ; break;
      }
    }
    healht(hp){
         return hp = 1000;
    }

}
let arturia = new Servant("Arturia Pendragon","Excalibur",1)
let archer = new Servant("Unknow","Unlimited blade work",2)
let medusa = new Servant("Medusa","The Crused eye",3)
let kuhulin = new Servant("Kuhulin","Gae bolgh",4)
let hercules = new Servant("Hercules","The 12 tasks",5)
let media = new Servant("Media","Rule Breaker",6)
let sasaki = new Servant("Sasaki kojiro","Reverse Swallow Blade",7)
let gil = new Servant("Gilgamesh","Gate of babylon",8)


