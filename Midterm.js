//63130500111 Suppawit Wiriyapuwadol
let studentinfo = {name : "Suppawit wiriyapuwadol", id : 63130500111}

let courseinfo1 = {
id : ["INT100","INT101","INT102","INT104","GEN121","GEN101","LNG220"], 
credit : [3,3,1,3,3,1,3],result : [2.5,1.5,1,2,0,3,4]}
let courseinfo2 = {
id : ["INT103","INT105","INT114","INT107","GEN111","INT200","LNG332"], 
credit : [3,1,3,3,3,1,3],result : [1.5,1,2,3,2,1,4]}

function getlabel(){
    let label1 = []
    let label2 = []
    for(let i= 0;i<courseinfo1.result.length;i++){
        switch(courseinfo1.result[i]){
            case 4 : label1[i]   = "A"; break;
            case 3.5 : label1[i] = "B+"; break;
            case 3 : label1[i]   = "B"; break;
            case 2.5 : label1[i] = "C+"; break;
            case 2 : label1[i]   = "C"; break;
            case 1.5 : label1[i] = "D+"; break;
            case 1 : label1[i]   = "D"; break;
            case 0 : label1[i]   = "F"; break;
        }
    }
    for(let i= 0;i<courseinfo2.result.length;i++){
        switch(courseinfo2.result[i]){
            case 4 : label2[i]   = "A"; break;
            case 3.5 : label2[i] = "B+"; break;
            case 3 : label2[i]   = "B"; break;
            case 2.5 : label2[i] = "C+"; break;
            case 2 : label2[i]   = "C"; break;
            case 1.5 : label2[i] = "D+"; break;
            case 1 : label2[i]   = "D"; break;
            case 0 : label2[i]   = "F"; break;
        }
    }
    return {label1,label2};
}
courseinfo1.label = getlabel().label1
courseinfo2.label = getlabel().label2

function getgpa(){
    var sumscore1 = 0;
    var sumcredit1 = 0;
    var sumscore2 = 0;
    var sumcredit2 = 0;
    for(let i= 0;i<courseinfo1.result.length;i++){
        sumscore1 = sumscore1+(courseinfo1.result[i]*courseinfo2.credit[i])
        sumcredit1 = sumcredit1+courseinfo1.credit[i]
    }
    for(let i= 0;i<courseinfo2.result.length;i++){
        sumscore2 = sumscore2+(courseinfo2.result[i]*courseinfo2.credit[i])
        sumcredit2 = sumcredit2+courseinfo2.credit[i]
        
    }
    get1 = sumscore1/sumcredit1
    get2 = sumscore2/sumcredit2
    return {get1,get2}
}
let gpa1 = getgpa().get1
let gpa2 = getgpa().get2
console.log(gpa1+"\n"+gpa2)

/*let suppawit = {studentinfo,courseinfo}
console.log(suppawit.studentinfo.result)*/

