const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");

let colorCode;
const changeColorCode = ()=> {
    let hex= "0123456789ABCDEF";
    colorCode = "#";

    for(let i=0; i<6; i++){
        colorCode += hex[Math.floor(Math.random() * 16)];
    }
    // console.log(colorCode);
    return colorCode;
}

let intervalId;
startBtn.addEventListener("click", () => {
    intervalId = setInterval(()=>{
        document.body.style.backgroundColor = changeColorCode();
    },2000);
});

stopBtn.addEventListener("click", ()=> {
    clearInterval(intervalId);
});
