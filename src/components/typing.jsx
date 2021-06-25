import React, { useState, useEffect, useCallback, useRef } from "react";
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
  const text = useRef([text_1, text_2, text_3, text_4, text_5 , text_6]);
  let timeouts = useRef([]);
  const typein = useCallback(() => {
    if (!complete && index < text.current[b].length) {
      setState((prevstate) => prevstate + text.current[b][index]);
      index++;
    } else if (index === text.current[b].length) {
      index = 0;
      setComplete(true);
      j = text.current[b].length;
      return;
    }
    timeouts.current.push(setTimeout(typein, 10));
  }, [complete, text, timeouts]);

  const typeout = useCallback(() => {
    if (j > 0) {
      setState((state) => state.slice(0, --j));
      timeouts.current.push(setTimeout(typeout, 20));
    } else if (j === 0) {
      setComplete(() => false);
      if (b === text.current.length - 1) {
        b = 0;
      } else {
        b++;
      }
      return;
    }
  }, [text]);
  useEffect(() => {
    let timeout = timeouts.current
    if (!complete) {
      timeouts.current.push(setTimeout(typein, 100));
    } else {
      timeouts.current.push(setTimeout(typeout, 2500));
    }
    return () => {
      timeout.forEach(timeout => {
        clearTimeout(timeout)
      })
    }
  }, [complete, timeouts, typein, typeout]);

  return (
    <section className="body-content">
      <div className="text-container">
        <span id="typing-text">{state}</span>
      </div>
    </section>
  );
};

export default TypingEffect;
