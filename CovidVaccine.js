class covidVaccines {
    constructor(firstname,lastname ){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    vaccines(){
        let vaccines = ["Senovac","Noavac","Astrasenega","Pfzier","Moderna","Jonhson & jonhson","Senopharm"]
        return vaccines[Math.floor(Math.random()*vaccines.length)]
    }
}
let Jonathan = new covidVaccines("Jonathan","Joestar");
let joseph   = new covidVaccines("Joseph","Joestar");
let jotaro   = new covidVaccines("Jotaro","KuJo");
let josuke   = new covidVaccines("Josuke","Higashigata");
let Giorno   = new covidVaccines("Giorno","Giovana");
let jolyne   = new covidVaccines("Jolyne","Kujo");

for(i=0;i<3;i++){
    let dose;
    switch(i){
        case 0 :  dose = "First";break;
        case 1 :  dose = "Second";break;
        case 2 :  dose = "Third";break;
    }
    console.log("\nFor the "+dose+" dose ");
    console.log(Jonathan.firstname+" "+Jonathan.lastname+" Recived "+Jonathan.vaccines()+" vaccine")
    console.log(joseph.firstname+" "+joseph.lastname+" Recived "+joseph.vaccines()+" vaccine")
    console.log(jotaro.firstname+" "+jotaro.lastname+" Recived "+jotaro.vaccines()+" vaccine")
    console.log(josuke.firstname+" "+josuke.lastname+" Recived "+josuke.vaccines()+" vaccine")
    console.log(Giorno.firstname+" "+Giorno.lastname+" Recived "+Giorno.vaccines()+" vaccine")
    console.log(jolyne.firstname+" "+jolyne.lastname+" Recived "+jolyne.vaccines()+" vaccine\n")
}

