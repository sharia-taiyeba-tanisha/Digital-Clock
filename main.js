const h1 = document.querySelector('h1');

const digitalClock = () => {
    const latestTime = new Date();
    h1.textContent = latestTime.toLocaleTimeString();
};


digitalClock();


setInterval(digitalClock, 1000);