let myP = document.querySelector('.myP');
// 00 Button
let btns00 = document.querySelector('.btn-nams-00');
btns00.onclick = function () {
    myP.append(btns00.innerHTML)
}
// 0 Button
let btns0 = document.querySelector('.btn-nams-0');
btns0.onclick = function () {
    myP.append(btns0.innerHTML)
}
// . Button
let btnsdot = document.querySelector('.btn-nams-dot');
btnsdot.onclick = function () {
    myP.append(btnsdot.innerHTML)
}
// 1 Button
let btn1 = document.querySelector('.btn-nams-1');
btn1.onclick = function () {
    myP.append(btn1.innerHTML)
}
// 2 Button
let btn2 = document.querySelector('.btn-nams-2');
btn2.onclick = function () {
    myP.append(btn2.innerHTML)
}
// 3 Button
let btn3 = document.querySelector('.btn-nams-3');
btn3.onclick = function () {
    myP.append(btn3.innerHTML)
}
// 4 Button
let btn4 = document.querySelector('.btn-nams-4');
btn4.onclick = function () {
    myP.append(btn4.innerHTML)
}
// 5 Button
let btn5 = document.querySelector('.btn-nams-5');
btn5.onclick = function () {
    myP.append(btn5.innerHTML)
}
// 6 Button
let btn6 = document.querySelector('.btn-nams-6');
btn6.onclick = function () {
    myP.append(btn6.innerHTML)
}
// 7 Button
let btn7 = document.querySelector('.btn-nams-7');
btn7.onclick = function () {
    myP.append(btn7.innerHTML)
}
// 8 Button
let btn8 = document.querySelector('.btn-nams-8');
btn8.onclick = function () {
    myP.append(btn8.innerHTML)
}
// 9 Button
let btn9 = document.querySelector('.btn-nams-9');
btn9.onclick = function () {
    myP.append(btn9.innerHTML)
}
// C Button
let btnC = document.querySelector('.btn-1');
btnC.onclick = function () {
    myP.innerHTML=""
}

////////////////////////////////////////////////////////

// + Button
var arrySum1 = [];
var nam1;
let btnblas = document.querySelector('.btn-16');
btnblas.onclick = function () {
    let btnblasval = myP.innerHTML
    let namslastval1 = +btnblasval // value in myP
    nam1 = namslastval1
    myP.innerHTML = ""
    arrySum1.push(nam1)
    // console.log(arrySum1)
    // console.log(arrySum1)
}

let btnusawe = document.querySelector('.btn-20');
btnusawe.onclick = function () {
    let btnblasval = myP.innerHTML
    let namslastval1 = +btnblasval // value in myP
    nam1 = namslastval1
    arrySum1.push(nam1)
    myP.innerHTML = arrySum1[0] + arrySum1[1]
    arrySum1 = []
    // myP.innerHTML = ""
    // console.log(arrySum1[0]+arrySum1[1])
}
///////////////////////////////////////////////////////////////////////
// - button
let arrysalp = [];
let saler;
let btnsalp = document.querySelector('.btn-12')
btnsalp.onclick = function () {
    let btnblasval = myP.innerHTML
    let namslastval1 = Number(btnblasval)
    saler = namslastval1
    myP.innerHTML = ""
    arrysalp.push(saler)
    // console.log(arrysalp)
}
// = btn
let btnlinthreesalp = document.querySelector('.btn-ysawe-salp');
btnlinthreesalp.onclick = function () {
    let btnblasval = myP.innerHTML
    let namslastval1 = Number(btnblasval)
    saler = namslastval1
    arrysalp.push(saler)
    myP.innerHTML = arrysalp[0] - arrysalp[1]
    arrysalp = []
}
// let nn="-4"
// console.log(Number(nn))
//////=============== its Error ===================
// var arrynag1 = [];
// var namnag1;
// let btnnag = document.querySelector('.btn-12');
// btnnag.onclick = function () {
//     // myP.innerHTML = ""
//     let btnnagsval = myP.innerHTML
//     let namslastval1 = +btnnagsval // value in myP
//     namnag1 = namslastval1
//     myP.innerHTML = ""
//     arrynag1.push(namnag1)
//     // console.log(arrynag1)
// }
// let yosawe = document.querySelector('.btn-20')
// yosawe.onclick = function () {
//     if (arrynag1[0]=== NaN) {
//         console.log("")
//     }
//     if (btnnag.onclick()) {
//         console.log("*")
//         // console.log("*")
//     } else{
//         myP.innerHTML = arrynag1[0] - arrynag1[1]
//         arrynag1 = []
//     }
//     if (btnblas.onclick()) {
//         console.log("*")
//     } else {
//         myP.innerHTML = arrynag1[0] + arrynag1[1]
//         arrySum1 = []
//     }
// }
/////////////////////////////////////////////////////////////////////
// * btn
let arrydarb = [];
let darb;
let btndarb = document.querySelector('.btn-8')
btndarb.onclick = function () {
    let btnblasval = myP.innerHTML
    let namslastval1 = Number(btnblasval)
    darb = namslastval1
    myP.innerHTML = ""
    arrydarb.push(darb)
    // console.log(arrysalp)
}
// = btn *
// = btn
let btnlintwodarb = document.querySelector('.btn-ysawe-darb');
btnlintwodarb.onclick = function () {
    let btnblasval = myP.innerHTML
    let namslastval1 = Number(btnblasval)
    darb = namslastval1
    arrydarb.push(darb)
    myP.innerHTML = arrydarb[0] * arrydarb[1]
    arrydarb = []
}
////////////////////////////////////////////////////////////////////
// / btn 
let arrykasma = [];
let kasma;
let btnkasma = document.querySelector('.btn-4')
btnkasma.onclick = function () {
    let btnblasval = myP.innerHTML
    let namslastval1 = Number(btnblasval)
    kasma = namslastval1
    myP.innerHTML = ""
    arrykasma.push(kasma)
    console.log(arrykasma)
}
// / btn =
let btnlineoneasma = document.querySelector('.btn-3');
btnlineoneasma.onclick = function () {
    let btnblasval = myP.innerHTML
    let namslastval1 = Number(btnblasval)
    kasma = namslastval1
    arrykasma.push(kasma)
    myP.innerHTML = arrykasma[0] / arrykasma[1]
    arrykasma = []
}
////////////////////////////////////////////////////////////////////
let arrybaky = [];
let baky;
let btnbaky = document.querySelector('.btn-2')
btnbaky.onclick = function () {
    let btnblasval = myP.innerHTML
    let namslastval1 = Number(btnblasval)
    baky = namslastval1
    myP.innerHTML = ""
    arrybaky.push(baky)
    console.log(arrybaky)
}

let btnbake = document.querySelector('.btn-bake');
btnbake.onclick = function () {
    let btnblasval = myP.innerHTML
    let namslastval1 = Number(btnblasval)
    baky = namslastval1
    arrybaky.push(baky)
    myP.innerHTML = arrybaky[0] % arrybaky[1]
    arrybaky = []
}

////////////////////////////////////////////////////////////////////
// app mode
let light = document.querySelector(".btn");
let dark = document.querySelector('.btn-dark');

dark.onclick = function () {
    document.body.style.cssText="dl{color:black} background-color: rgba(58, 57, 57, 0.897);.fathre{background-color: black;width: 500px;margin: 10% auto;height: 450px;border-radius: 6px;-webkit-border-radius: 6px;-moz-border-radius: 6px;-ms-border-radius: 6px;-o-border-radius: 6px;}.headr{/*width: calc(1%-98%);*/width: 491px;height: 55px;background-color: #e91e63;/*margin: auto;*/position: relative;margin-left: 1%;top: 7px;margin-bottom: 2%;border-radius: 10px;-webkit-border-radius: 10px;-moz-border-radius: 10px;-ms-border-radius: 10px;-o-border-radius: 10px;}.headr>p{overflow: auto;direction: rtl;/* padding: 15px; */font-size: xx-large;color: white;font-family: sans-serif;padding-right: 14px;padding-top: 12px;}.headr>p::-webkit-file-upload-button {background-color: #e91e63;}.body-pdge{text-align: center;cursor: none;}button{width: 120px;height: 66px;margin-top: 9px;background-color: black;color: white;transition-duration: .2s;font-size: x-large;cursor: pointer;}button:hover {background-color: rgb(139, 135, 135);}.btn {background-color: aliceblue;color: black;clip-path: circle();font-size: 20px;font-weight: 700;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;}.btn:hover{background-color: rgba(239, 121, 121, 0.717);}"
}
light.onclick = function () {
    document.body.style.cssText = "background-color: rgb(255 253 253);button {width: 120px;height: 66px;margin-top: 9px;background-color: #ebdfdf;color: #222e34;transition-duration: .2s;font-size: x-large;cursor: pointer;}"
    setTimeout(hallo,3000)
    function hallo() {
        myP.innerHTML= "You are now in light mode"
    }
    setTimeout(function () {
        myP.innerHTML=""
    },5000)
};

////////////////////////////////////////////////////////////////////
