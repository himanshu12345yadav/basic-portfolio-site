import React, { useState, useEffect } from "react";
var j = 0;
var index = 0;
var b = 0;
const TypingEffect = () => {
  var [state, setState] = useState("");
  var [complete, setComplete] = useState(false);
  const text_1 = "Full stack Web Developer";
  const text_2 = "Android Developer";
  const text_3 = "Enthusiastic Tech Learner";
  const text_4 = "Self Taught Programmer";
  const text_5 = "Robotics Enthusiast";
  const text_6 = "Compositor, GFX Designer, Video Editor";
  const text = [text_1, text_2, text_3, text_4, text_5 , text_6];
  let timeouts = [];
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
    timeouts.push(setTimeout(typein, 10));
  };

  const typeout = () => {
    if (j > 0) {
      setState((state) => state.slice(0, --j));
      timeouts.push(setTimeout(typeout, 20));
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
    if (!complete) {
      timeouts.push(setTimeout(typein, 100));
    } else {
      timeouts.push(setTimeout(typeout, 2500));
    }
    return () => {
      timeouts.forEach(timeout => {
        clearTimeout(timeout)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [complete]);

  return (
    <section className="body-content">
      <div className="text-container">
        <span id="typing-text">{state}</span>
      </div>
    </section>
  );
};

export default TypingEffect;
