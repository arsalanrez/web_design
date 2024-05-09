const secondHand = document.getElementById("seconds");
const minutesHand = document.getElementById("minutes");
const hourshand = document.getElementById("hours");

const getTime = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6;
    console.log(`${hours}:${minutes}:${seconds}`);

    secondHand.style.transform = "rotate(" + seconds * timeInterval + "deg)";
    minutesHand.style.transform =
        "rotate(" + (minutes * timeInterval + seconds / 10) + "deg)";
    hourshand.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)";
};

setInterval(getTime, 100);
