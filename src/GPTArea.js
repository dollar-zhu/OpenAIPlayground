import React from "react";
import { useState } from "react";
import axios from "axios";

const GPTArea = () => {
  const [prompt, setPrompt] = useState("");
  const [responseText, setResponseText] = useState("Response");
  const HTTP = "http://localhost:8020/chat";
  const handleGenerateText = () => {
    axios
      .post(`${HTTP}`, { prompt: prompt })
      .then((res) => {
        setResponseText(res.data);
        console.log("setText!" + JSON.stringify(res));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Text Generation</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleGenerateText}>Generate</button>
      <p>{responseText}</p>
    </div>
  );
};

export default GPTArea;
