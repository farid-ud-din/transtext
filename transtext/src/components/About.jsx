import React from "react";

function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "rgb(51, 78, 112)",
    backgroundColor: props.mode === "dark" ? "rgb(51, 78, 112)" : "white",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "rgb(51, 78, 112)",
    borderRadius: "5px",
  };

  return (
    <div className="container">
      <h3
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "rgb(51, 78, 112)" }}
      >
        About Us
      </h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{ border: "none" }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              It gives you a better way to analyze your text quickly and
              efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ border: "none" }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TransText is free character counter tool that provides instant
              character count and word count statistics for your given text.
              TransText reports the number of words and characters. Thus, it is
              suitable for writing text with words and character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ border: "none" }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Compatibility</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This app works in any browser such as Chrome, Firefox, Safari,
              Brave, Opera, Internet Explorer. It suits to count words in
              facebook, blog, books, excel document, word document, essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
