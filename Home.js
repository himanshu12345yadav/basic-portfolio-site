window.addEventListener('load', () => {
    console.clear();
});
window.addEventListener('load', () => {
    document.querySelectorAll('.overlay')[0].classList.add('remove-overlay');
});
document.getElementsByClassName('burger')[0].addEventListener('click', () => {
    obj1.classList.toggle('burger-open');
});
const obj1 = document.getElementsByClassName('burger-content')[0];
const links = document.getElementsByClassName('links')[0];
const linkItems = document.querySelectorAll('.links ul a');
const typingText = document.getElementById("typing-text");
const elements = document.getElementsByClassName('navitems');
var count = 0, b = 0, j = 0;
var i = 0;
var displaycomplete = false;
const text_1 = "Hey there, Welcome! :)";
const text_2 = "I am a full stack developer";
const text_3 = "I also do artificial intelligence in python";
const text_4 = "and also ethical hacking with kali linux";
const text_5 = "I also have great interest in robotics";
const text_6 = "in simple words i am a computer enthusiast";
const text = [text_1, text_2, text_3, text_4, text_5, text_6];


toggle = (a) => {
    count = 0;
    links.classList.toggle('links-down');
    const animateLinks = setInterval(() => {
        if (count < 6) {
            linkItems[count].classList.toggle('items-move');
            count++;
        }
        else {
            clearInterval(animateLinks);
        }
    }, 50);
}
currentLink = (obj) => {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('activeLink');
    }
    obj.classList.add('activeLink');
}

const typein = () => {
    if (!displaycomplete && (i < text[b].length)) {
        typingText.innerHTML += text[b][i];
        i++;
    }
    else if (i === text[b].length) {
        i = 0;
        displaycomplete = true;
        j = text[b].length;// This line is very crucial...
        setTimeout(driver)// This line is very crucuial...
        return undefined;
    }
    const timein = setTimeout(typein, 10);
};

const typeout = () => {
    if (j > 0) {
        typingText.innerHTML = typingText.innerHTML.slice(0, --j);
        const timeout = setTimeout(typeout, 20);
    }
    else if (j === 0) {
        displaycomplete = false;
        setTimeout(driver);// This line is very Crucial...
        if (b === text.length - 1) {
            b = 0;
        }
        else {
            b++;
        }
        return undefined;
    }
}
function driver() {
    if (typingText.innerHTML.length === 0) {
        setTimeout(typein, 10);

    }
    else if (displaycomplete) {
        setTimeout(typeout, 2500);
    }
    return undefined;
};
const id = setTimeout(driver, 400);