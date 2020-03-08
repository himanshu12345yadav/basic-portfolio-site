window.addEventListener('load', () => {
    console.clear();
});

toggle = (a) => {
    document.getElementById('bar').classList.remove('fa-bars')
    document.getElementById('bar').classList.toggle('fa-times')
    var node = document.querySelectorAll('.navitems');
    if (node[0].style.display === 'flex') {
        for (i = 0; i < node.length; i++) {
            node[i].style.display = 'none';
        }
    }
    else {
        document.getElementById('bar').classList.remove('fa-times')
        document.getElementById('bar').classList.toggle('fa-bars')
        for (i = 0; i < node.length; i++) {
            node[i].style.display = 'flex';
        }
    }
}
window.addEventListener('resize', () => {
    var node = document.querySelectorAll('.navitems');
    for (i = 0; i < node.length; i++) {
        node[i].style.display = 'flex';
    }
});
currentLink = (obj) => {
    var elements = document.getElementsByClassName('navitems');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('activeLink');
    }
    obj.classList.add('activeLink');
}
window.addEventListener('load', () => {
    document.querySelectorAll('.overlay')[0].classList.add('remove-overlay');
})
const text_1 = "Hey there, Welcome! :)";
const text_2 = "I am a full stack developer";
const text_3 = "I also do artificial intelligence in python";
const text_4 = "and also ethical hacking with kali linux";
const text_5 = "I also have great interest in robotics";
const text_6 = "in simple words i am a computer enthusiast";
const text = [text_1, text_2, text_3, text_4, text_5, text_6];
const typingText = document.getElementById("typing-text");
var i = 0;
var b = 0;
var j;
var displaycomplete = false;
const typein = () => {
    if (!displaycomplete && (i < text[b].length)) {
        typingText.innerHTML += text[b][i];
        i++;
    }
    else if (i === text[b].length) {
        i = 0;
        displaycomplete = true;
        j = text[b].length;// This line is very crucial for the program...
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
    else if (j == 0) {
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
        setTimeout(typeout, 3000);
    }
    return undefined;
};
const id = setTimeout(driver, 400);