var ball = document.getElementsByClassName('balls');
var angle = 0;

var count = 0;
var val = 0;
setInterval(() => {
    if (count === 12) {
        count = 0;
    }
    ball[count].style.animation = `${giveAnimation(count)}`;

    if (count - 2 < 0) {
        val = giveValue(count - 2);
        ball[val].style.animation = `${giveAnimation(val)} reverse `;
    } else {
        ball[count - 2].style.animation = `${giveAnimation(
            count - 2
        )} reverse `;
    }
    ball[count].removeAttribute('style');
    count++;
}, 100);

function giveValue(p) {
    if (p === -1) {
        return 11;
    } else if (p === -2) {
        return 10;
    }
}
function giveAnimation(m) {
    return `scale_${m} 1s ease-in forwards`;
}
