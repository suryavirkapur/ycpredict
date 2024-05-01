"use client";
import Markdown from "markdown-to-jsx";
import { SetStateAction, useState } from "react";

export default function Predictor() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const handleInputChange = (event: { target: { value: SetStateAction<string> } }) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const response = await fetch("/api/gen", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: input,
    });
    const data = await response.json();
    setData(data);
  };

  return (
    <>
      <h3>Will you get into YC?</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} placeholder="idea in one line" />
        <br />
        <button type="submit">Predict</button>
      </form>
      <h1>Prediction</h1>
      <Markdown>{data}</Markdown>
    </>
  );
}
