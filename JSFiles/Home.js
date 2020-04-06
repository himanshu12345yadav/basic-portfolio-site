window.addEventListener('load', () => {
    console.clear();
    document.getElementsByTagName('script')[2].remove();
    document.getElementsByTagName('link')[2].remove();
});

const burger = document.getElementsByClassName('burger-content')[0];
const links = document.getElementsByClassName('links')[0];
const linkItems = document.querySelectorAll('.links ul a');
const typingText = document.getElementById('typing-text');
const elements = document.getElementsByClassName('navitems');
const bodyContent = document.getElementsByClassName('body-content');
var linkIndex = 0,
    b = 0,
    j = 0;
var index = 0;
var displaycomplete = false;
const text_1 = 'Hey there, Welcome! :)';
const text_2 = 'I am a full stack developer';
const text_3 = 'I also do artificial intelligence in python';
const text_4 = 'and also ethical hacking with kali linux';
const text_5 = 'I also have great interest in robotics';
const text_6 = 'in simple words i am a computer enthusiast';
const text = [text_1, text_2, text_3, text_4, text_5, text_6];

toggle = (a) => {
    linkIndex = 0;
    links.classList.toggle('links-down');
    const animateLinks = setInterval(() => {
        if (linkIndex < 6) {
            linkItems[linkIndex].classList.toggle('items-move');
            linkIndex++;
        } else {
            clearInterval(animateLinks);
        }
    }, 50);
    if (links.classList[1] === 'links-down') {
        burger.classList.toggle('burger-open');
        document.body.style.position = 'fixed';
        document.body.style.left = '0px';
        document.body.style.right = '0px';
        document.body.style.top = `-${window.scrollY}px`;
    } else {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        burger.classList.toggle('burger-open');
    }
};
currentLink = (obj) => {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('activeLink');
    }
    obj.classList.add('activeLink');
    if (window.screen.width < 550) {
        toggle(obj);
    }
};

const typein = () => {
    if (!displaycomplete && index < text[b].length) {
        typingText.innerHTML += text[b][index];
        index++;
    } else if (index === text[b].length) {
        index = 0;
        displaycomplete = true;
        j = text[b].length; // This line is very crucial...
        setTimeout(driver); // This line is very crucuial...
        return undefined;
    }
    const timein = setTimeout(typein, 10);
};

const typeout = () => {
    if (j > 0) {
        typingText.innerHTML = typingText.innerHTML.slice(0, --j);
        const timeout = setTimeout(typeout, 20);
    } else if (j === 0) {
        displaycomplete = false;
        setTimeout(driver); // This line is very Crucial...
        if (b === text.length - 1) {
            b = 0;
        } else {
            b++;
        }
        return undefined;
    }
};
function driver() {
    if (typingText.innerHTML.length === 0) {
        setTimeout(typein, 10);
    } else if (displaycomplete) {
        setTimeout(typeout, 2500);
    }
    return undefined;
}
const id = setTimeout(driver, 400);
