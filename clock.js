const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector('h1');//정리시 주의 div

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText=
    `${hours
    }:${minutes<10 ? `0${minutes}`:minutes
    }:${seconds<10 ?`0${seconds}`:seconds}`
}

function init(){
    getTime();
    setInterval(getTime,500);
}

init();