import React, { useState, useEffect } from 'react';
var j = 0;
var index = 0;
var b = 0;
const TypingEffect = () => {
    var [state, setState] = useState(() => '');
    var [complete, setComplete] = useState(() => false);
    const text_1 = 'Full stack Developer';
    const text_2 = 'Enthusiastic Tech Learner';
    const text_3 = 'Self Taught Programmer';
    const text_4 = 'Robotics Enthusiast';
    const text_5 = 'Youtuber';
    const text = [text_1, text_2, text_3, text_4, text_5];
    const typein = () => {
        if (!complete && index < text[b].length) {
            setState((prevstate) => prevstate + text[b][index]);
            index++;
        } else if (index === text[b].length) {
            index = 0;
            setComplete(true);
            j = text[b].length;
            return;
        }
        setTimeout(typein, 10);
    };

    const typeout = () => {
        if (j > 0) {
            setState((state) => state.slice(0, --j));
            setTimeout(typeout, 20);
        } else if (j === 0) {
            setComplete(() => false);
            if (b === text.length - 1) {
                b = 0;
            } else {
                b++;
            }
            return;
        }
    };
    useEffect(() => {
        if (state.length === 0) {
            setTimeout(typein, 100);
        } else if (complete) {
            setTimeout(typeout, 2500);
        }
    }, [complete]);

    return (
        <section className="body-content">
            <div className="text-container">
                <span id="typing-text">I am a {state}</span>
            </div>
        </section>
    );
};

export default TypingEffect;
