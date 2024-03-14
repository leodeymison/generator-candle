function start(){
    timer();
}

function timer(){
    let bar = document.getElementById("pb1");
    let rocket = document.getElementById("rocket")
    let carga = 0;
    const time = 5;
    let intBar = setInterval(function (){
        carga++;
        bar.style.width = (carga * 5) + "%";
        let rotate = carga * 20 > 90 ? 90 : carga * 20;
        rocket.style.transform = `rotate(${rotate}deg)`;
        if(carga == 20){
            carga = 0;
            bar.style.width = "0%";
            rocket.style.transform = `rotate(0deg)`;
        }
    }, time * 50) 

    setTimeout(() => {clearInterval(intBar)}, time * 50 *20)
}
