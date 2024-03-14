function start(){
    if(localStorage.getItem("av-list")){
        desabledBtn();
        som();
        timer();
    } else {
        alert("Preencha os dados de Configuração para tempos de vela")
    }
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
function ableddBtn(){
    const secunds = localStorage.getItem("av_time_next") ?? 15;
    let count = 1;
    let intBar = setInterval(function (){
        document.getElementById("av_btn_dis").innerHTML = `AGUARDE (${secunds - count}s)`;
        count++;
    }, 1000) 

    setTimeout(() => {
        clearInterval(intBar);
        document.getElementById("av_btn_dis").style.display = "none";
        document.getElementById("av_btn").style.display = "block";
    }, secunds * 1000)
}
function som(){
    var audio = document.getElementById("meuAudio");
    audio.currentTime = 0;  // Reinicia o áudio para o início
    audio.play();  // Inicia a reprodução
}
function sort(){
    const list = localStorage.getItem("av-list") ?? [];
    if (list.length > 0) {
        const sort = JSON.parse(list);
        const randing = getRandomInt(0, sort.length)
        console.log(sort, randing);
        document.getElementById("time-value").innerHTML = sort[randing].times
        document.getElementById("indicator-value").innerHTML = sort[randing].names
    }
}
function timer(){
    document.getElementById("time-value").innerHTML = "--"
    document.getElementById("indicator-value").innerHTML = "--"
    let bar = document.getElementById("pb1");
    let rocket = document.getElementById("rocket")
    let carga = 0;
    const time = localStorage.getItem("av_time") ?? 5;
    document.getElementById("av_btn_dis").innerHTML = "BUSCANDO..."
    let intBar = setInterval(function (){
        carga++;
        bar.style.width = carga + "%";
        let rotate = carga * 20 > 90 ? 90 : carga * 20;
        rocket.style.transform = `rotate(${rotate}deg)`;
        if(carga == 100){
            carga = 0;
            bar.style.width = "0%";
            rocket.style.transform = `rotate(0deg)`;
            ableddBtn()
        }
    }, (time * 1000) / 100) 

    setTimeout(() => {
        clearInterval(intBar)
        sort();
    }, time * 1000)
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
    console.log(width / tileSize);
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