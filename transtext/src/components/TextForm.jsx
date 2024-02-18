import React, { useState } from "react";

function TextForm(props) {
  const uppercase = () => {
    // console.log("uppercase is clicked: " + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to upper case!", "success");
  };
  const lowercase = () => {
    // console.log("uppercase is clicked: " + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lower case!", "success");
  };
  const clear = () => {
    let newText = " ";
    setText(newText);
    props.showAlert(" Text is cleared!", "success");
  };
  const extraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces removed!", "success");
  };
  const copy = () => {
    let newText = document.getElementById("txtBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert(" Text is Copied!", "success");
  };
  const changed = (event) => {
    // console.log('on change')
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   setText("new text");
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#1e2d40" }}
    >
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          style={{
            backgroundColor:
              props.mode === "dark" ? "rgb(59, 85, 117)" : "white",
            color: props.mode === "dark" ? "white" : "#1e2d40",
          }}
          onChange={changed}
          id="txtBox"
          rows="8"
          placeholder="Enter Text"
        ></textarea>
        <div className="my-3">
          <button
            disabled={text.length === 0}
            className="btn btn-dark"
            onClick={uppercase}
          >
            Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-dark mx-2 my-2"
            onClick={lowercase}
          >
            Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-dark mx-2 my-2"
            onClick={extraSpace}
          >
            Remove Extra Space
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-dark mx-2 my-2"
            onClick={copy}
          >
            Copy
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-dark mx-2 my-2"
            onClick={clear}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h1>Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          Words and {text.length} Characters{" "}
        </p>{" "}
        {/* Words length & characters count */}
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length}{" "}
          Minutes Read{" "}
        </p>{" "}
        {/* minutes taken to read */}
        <h3>Text Preview</h3>
        <p>{text.length > 0 ? text : "Enter your text to preview!"}</p>{" "}
        {/* written text preview */}
      </div>
    </div>
  );
}

export default TextForm;
