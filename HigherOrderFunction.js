//Higher order function

function circleLine(num){ //คำนวณเส้นรอบวง เมื่อ num คือรัศมี
    return num*6.28
}
function circleArea(num){ //คำนวณพื้นที่ เมื่อ num คือเส้นรัศมี
    return num*num*3.14
}
function circle(num,cfunction){ //ใช้งานสอง function ด้านบน
  return cfunction(num)
}
let line = circle(5,circleLine)
let area = circle(5,circleArea)
console.log("Circle : line : "+line+" Area : "+area)