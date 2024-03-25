
function start(){
    desabledBtn();
    som();
    timer();
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function desabledBtn(){
    document.getElementById("av_btn_dis").style.display = "block";
    document.getElementById("av_btn").style.display = "none";
}
function ableddBtn(secunds){
    if(secunds > 0){
        document.getElementById("av_btn_dis").style.display = "block";
        document.getElementById("av_btn").style.display = "none";
        let count = 1;
        let intBar = setInterval(function (){
            document.getElementById("av_btn_dis").innerHTML = `AGUARDE (${secunds - count}s)`;
            localStorage.setItem("time_buttom", `${secunds - count}`)
            count++;
        }, 1000) 
    
        setTimeout(() => {
            clearInterval(intBar);
            document.getElementById("av_btn_dis").style.display = "none";
            document.getElementById("av_btn").style.display = "block";
            localStorage.removeItem("time_buttom")
        }, secunds * 1000)
    }
}
if (parseInt(localStorage.getItem("time_buttom")) > 0) {
    ableddBtn(parseInt(localStorage.getItem("time_buttom")))
}
function som(){
    var audio = document.getElementById("meuAudio");
    audio.currentTime = 0;  // Reinicia o áudio para o início
    audio.play();  // Inicia a reprodução
}

function timer(){
    document.getElementById("time-value").innerHTML = "--"
    document.getElementById("indicator-value").innerHTML = "--"
    let bar = document.getElementById("pb1");
    let rocket = document.getElementById("rocket")
    let carga = 0;
    const time = 5;
    document.getElementById("av_btn_dis").innerHTML = "BUSCANDO..."
    let intBar = setInterval(function (){
        carga++;
        bar.style.width = carga + "%";
        let rotate = carga * 20 > 90 ? 90 : carga * 20;
        rocket.style.transform = `rotate(${rotate}deg)`;
    }, (time * 1000) / 100) 

    setTimeout(() => {
        bar.style.width = "0%";
        rocket.style.transform = `rotate(0deg)`;
        ableddBtn(15)
        sort_func();
        clearInterval(intBar)
    }, (time * 1000) + 100)
}

function sort_func(){
    const list = [
        {names: "VELA AZUL", times: "01", colors: "#008dff", qual: "Qualidade ruim"},
        {names: "VELA AZUL", times: "02", colors: "#008dff", qual: "Qualidade ruim"},
        {names: "VELA AZUL", times: "03", colors: "#008dff", qual: "Qualidade ruim"},
        {names: "VELA ROXA", times: "10", colors: "#939", qual: "Qualidade boa"},
        {names: "VELA ROXA", times: "11", colors: "#939", qual: "Qualidade boa"},
        {names: "VELA ROXA", times: "12", colors: "#939", qual: "Qualidade boa"},
        {names: "VELA ROXA", times: "13", colors: "#939", qual: "Qualidade boa"},
        {names: "VELA ROXA", times: "14", colors: "#939", qual: "Qualidade boa"},
        {names: "VELA ROXA", times: "15", colors: "#939", qual: "Qualidade boa"},
        {names: "VELA ROXA", times: "16", colors: "#939", qual: "Qualidade boa"},
        {names: "VELA ROXA", times: "17", colors: "#939", qual: "Qualidade boa"},
        {names: "VELA ROXA", times: "18", colors: "#939", qual: "Qualidade boa"},
        {names: "VELA ROXA", times: "19", colors: "#939", qual: "Qualidade boa"},
        {names: "VELA ROXA", times: "20", colors: "#939", qual: "Qualidade boa"},
        {names: "VELA ROSA", times: "40", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "41", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "42", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "43", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "44", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "45", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "46", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "47", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "48", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "49", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "50", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "51", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "52", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "53", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "54", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "55", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "56", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "57", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "58", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "59", colors: "#fb93b3", qual: "Qualidade ótima"},
        {names: "VELA ROSA", times: "60", colors: "#fb93b3", qual: "Qualidade ótima"},
    ];
    if (list.length > 0) {
        const randing = getRandomInt(0, list.length)
        document.getElementById("time-value").innerHTML = list[randing].times
        let indicatorValue = document.getElementById("indicator-value");
        indicatorValue.innerHTML = list[randing].names;
        indicatorValue.innerHTML += `<svg style="margin-top: -3px" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="mx-1 bi bi-flag-fill" viewBox="0 0 16 16">
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
        </svg>`;
        indicatorValue.innerHTML += ` - ${list[randing].qual}`
        indicatorValue.style.color = list[randing].colors;

        const date_current = document.getElementById("quant").innerHTML;

        const new_date = ((Date.now() / 15000).toFixed(0)).substring(3);
        console.log(parseInt(date_current), parseInt(new_date))
        if(parseInt(date_current) == parseInt(new_date)){
            document.getElementById("quant").innerHTML = parseInt(new_date) + 1
            localStorage.setItem("data_current", `${parseInt(new_date) + 1}`)
        } else {
            document.getElementById("quant").innerHTML = `${parseInt(new_date)}`
            localStorage.setItem("data_current", `${parseInt(new_date)}`)
        }
    }
}



// ANIMATION BACKGROUND
var Chars = ["*", "X", "+", "-", "1", "0", "1", "0", "六"];
var Cells = [];
var tileSize = 16;
var dropspeed = 8;
var tiles = 119;
var x = 0;
function setup() {

noStroke();
colorMode(HSB, 360, 100, 50, .1);
createCanvas(window.innerWidth, window.innerHeight);
for (var i = 0; i < tiles; i++) {
    x += tileSize;
    var y = round(random(height / dropspeed) * tileSize) - window.innerHeight;
    var r = tileSize;
    var h = random(100, 150);
    var t = random(.8, 8);
    var u = random(.3, .8);
    Cells[i] = new Matrix(x, y, r, h, t, u);
}
}



function draw() {

background(100, 100, 0, .009);

for (var i = 0; i < tiles; i++) {
    Cells[i].spread();
    Cells[i].update();
}
}

function Matrix(isX, isY, myD, myHue, newX, newY) {
this.x = isX;
this.y = isY;
this.tS = newX;
this.tU = newY;
this.diameter = myD;
this.h = myHue;
this.spread = function () {
    var tx = 0;
    var ty = round(random(0, 2));
    this.x += (tx * tileSize);
    if ((this.x > width + (tileSize * 8)) || (this.x < -tileSize * 8)) { this.x = random(width / tileSize) * tileSize; }
    this.y += (ty * dropspeed);
    if ((this.y > height + (tileSize * 8)) || (this.y < -tileSize * 8)) { this.y = random(-height / tileSize) * tileSize; }

    if ((this.y < ((window.innerHeight)))) this.y += this.tU;

}

this.update = function () {
    var thecol = round(random(0, 10));
    var thebri = 0;

    if (thecol == 10) { thecol = 0; thebri = 100; }
    else { myHue = 120; thecol = 100; thebri = 50; }
    fill(myHue, thecol, thebri, .7);
    textSize(16);
    textFont('Verdana');
    var thechar = round(random(0, 8));
    text((Chars[(thechar)]), this.x, this.y);
}
}

function mousePressed() {
tileSize = random(0.3, 2);
tiles = random(1, 239);

for (var i = 0; i < tiles; i++) {
    var x = random(width / tileSize) * tileSize;
    var y = random((height / tileSize) * tileSize) - height;
    var r = tileSize;
    var h = random(10, 300);
    var t = random(.5, 2);
    var u = random(.3, 3.8);
    Cells[i] = new Matrix(x, y, r, h, t, u);
}

}