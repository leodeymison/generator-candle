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
